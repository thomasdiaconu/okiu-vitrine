"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import Link from "next/link";
import { site } from "@/content/site";
import Reveal from "./Reveal";

type Status = "idle" | "sending" | "success" | "error";
type Commune = { nom: string; code: string; codesPostaux?: string[] };

const COMMUNES_API = "https://geo.api.gouv.fr/communes";

export default function Cta() {
  const { cta } = site;
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [honeypot, setHoneypot] = useState("");
  const statusRef = useRef<HTMLParagraphElement>(null);

  const [villeQuery, setVilleQuery] = useState("");
  const [villeSelected, setVilleSelected] = useState(false);
  const [villeSuggestions, setVilleSuggestions] = useState<Commune[]>([]);
  const [villeOpen, setVilleOpen] = useState(false);
  const [villeActiveIndex, setVilleActiveIndex] = useState(-1);
  const villeInputRef = useRef<HTMLInputElement>(null);
  const villeDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const villeAbortRef = useRef<AbortController | null>(null);
  const villeListId = `${formId}-ville-listbox`;

  useEffect(() => {
    if (status === "success" || status === "error") {
      statusRef.current?.focus();
    }
  }, [status]);

  useEffect(() => {
    return () => {
      if (villeDebounceRef.current) clearTimeout(villeDebounceRef.current);
      villeAbortRef.current?.abort();
    };
  }, []);

  function updateVilleValidity(input: HTMLInputElement, selected: boolean) {
    input.setCustomValidity(selected || input.value === "" ? "" : cta.fieldErrors.villeInvalide);
  }

  function handleVilleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setVilleQuery(value);
    setVilleSelected(false);
    setVilleActiveIndex(-1);
    updateVilleValidity(event.currentTarget, false);

    if (villeDebounceRef.current) clearTimeout(villeDebounceRef.current);
    villeAbortRef.current?.abort();

    const query = value.trim();
    if (query.length < 2) {
      setVilleSuggestions([]);
      setVilleOpen(false);
      return;
    }

    villeDebounceRef.current = setTimeout(async () => {
      const controller = new AbortController();
      villeAbortRef.current = controller;
      try {
        const url = `${COMMUNES_API}?nom=${encodeURIComponent(query)}&fields=nom,code,codesPostaux&boost=population&limit=8`;
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("Recherche ville indisponible");
        const data: Commune[] = await response.json();
        setVilleSuggestions(data);
        setVilleOpen(data.length > 0);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          setVilleSuggestions([]);
          setVilleOpen(false);
        }
      }
    }, 250);
  }

  function selectVille(nom: string) {
    setVilleQuery(nom);
    setVilleSelected(true);
    setVilleSuggestions([]);
    setVilleOpen(false);
    setVilleActiveIndex(-1);
    villeInputRef.current?.setCustomValidity("");
    villeInputRef.current?.focus();
  }

  function handleVilleBlur(event: FormEvent<HTMLInputElement>) {
    const input = event.currentTarget;
    window.setTimeout(() => setVilleOpen(false), 120);
    updateVilleValidity(input, villeSelected);
  }

  function handleVilleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!villeOpen || villeSuggestions.length === 0) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setVilleActiveIndex((index) => Math.min(index + 1, villeSuggestions.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setVilleActiveIndex((index) => Math.max(index - 1, 0));
    } else if (event.key === "Enter") {
      if (villeActiveIndex >= 0) {
        event.preventDefault();
        selectVille(villeSuggestions[villeActiveIndex].nom);
      }
    } else if (event.key === "Escape") {
      setVilleOpen(false);
    }
  }

  function handleVilleInvalid(event: FormEvent<HTMLInputElement>) {
    const target = event.currentTarget;
    if (target.validity.valueMissing) {
      target.setCustomValidity(cta.fieldErrors.requisVide);
    } else if (!villeSelected) {
      target.setCustomValidity(cta.fieldErrors.villeInvalide);
    }
  }

  function handleInvalid(event: FormEvent<HTMLInputElement | HTMLSelectElement>) {
    const target = event.currentTarget;
    if (target.validity.valueMissing) {
      target.setCustomValidity(cta.fieldErrors.requisVide);
    } else if (target.validity.typeMismatch) {
      target.setCustomValidity(cta.fieldErrors.emailInvalide);
    }
  }

  function clearValidity(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    event.currentTarget.setCustomValidity("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (honeypot) {
      setStatus("success");
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Envoi refusé");
      setStatus("success");
      form.reset();
      setVilleQuery("");
      setVilleSelected(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <Reveal>
      <section id="devenir-pilote" className="page-section">
        <div className="cta-final wrap">
          <div className="eyebrow">{cta.eyebrow}</div>
          <h2>{cta.title}</h2>
          <p className="cta-intro">{cta.intro}</p>

          {status === "success" ? (
            <p ref={statusRef} className="form-status form-status-success" role="status" aria-live="polite" tabIndex={-1}>
              {cta.states.success}
            </p>
          ) : (
            <form className="cta-form" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_FORM_ACCESS_KEY ?? ""} />
              <input type="hidden" name="subject" value="Nouvelle demande — magasin pilote OKIU" />

              <div className="field">
                <label htmlFor={`${formId}-nom`}>{cta.fields.nom.label}</label>
                <input
                  id={`${formId}-nom`}
                  name="nom"
                  type="text"
                  placeholder={cta.fields.nom.placeholder}
                  required={cta.fields.nom.required}
                  onInvalid={handleInvalid}
                  onChange={clearValidity}
                />
              </div>

              <div className="field">
                <label htmlFor={`${formId}-magasin`}>{cta.fields.magasin.label}</label>
                <input
                  id={`${formId}-magasin`}
                  name="magasin"
                  type="text"
                  placeholder={cta.fields.magasin.placeholder}
                  required={cta.fields.magasin.required}
                  onInvalid={handleInvalid}
                  onChange={clearValidity}
                />
              </div>

              <div className="field field-combobox">
                <label htmlFor={`${formId}-ville`}>{cta.fields.ville.label}</label>
                <input
                  ref={villeInputRef}
                  id={`${formId}-ville`}
                  name="ville"
                  type="text"
                  role="combobox"
                  aria-expanded={villeOpen}
                  aria-controls={villeListId}
                  aria-autocomplete="list"
                  aria-activedescendant={
                    villeActiveIndex >= 0 ? `${formId}-ville-option-${villeActiveIndex}` : undefined
                  }
                  autoComplete="off"
                  placeholder={cta.fields.ville.placeholder}
                  required={cta.fields.ville.required}
                  value={villeQuery}
                  onChange={handleVilleChange}
                  onKeyDown={handleVilleKeyDown}
                  onFocus={() => villeSuggestions.length > 0 && setVilleOpen(true)}
                  onBlur={handleVilleBlur}
                  onInvalid={handleVilleInvalid}
                />
                {villeOpen && (
                  <ul className="combobox-list" id={villeListId} role="listbox">
                    {villeSuggestions.map((commune, index) => (
                      <li
                        key={commune.code}
                        id={`${formId}-ville-option-${index}`}
                        role="option"
                        aria-selected={index === villeActiveIndex}
                        className={index === villeActiveIndex ? "is-active" : undefined}
                        onMouseDown={(event) => event.preventDefault()}
                        onClick={() => selectVille(commune.nom)}
                      >
                        {commune.nom}
                        {commune.codesPostaux?.[0] ? ` (${commune.codesPostaux[0]})` : ""}
                      </li>
                    ))}
                  </ul>
                )}
                <p className="field-hint">{cta.fields.ville.hint}</p>
              </div>

              <div className="field">
                <label htmlFor={`${formId}-email`}>{cta.fields.email.label}</label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  placeholder={cta.fields.email.placeholder}
                  required={cta.fields.email.required}
                  onInvalid={handleInvalid}
                  onChange={clearValidity}
                />
              </div>

              <div className="field">
                <label htmlFor={`${formId}-logiciel`}>{cta.fields.logiciel.label}</label>
                <select
                  id={`${formId}-logiciel`}
                  name="logiciel"
                  defaultValue=""
                  required={cta.fields.logiciel.required}
                  onInvalid={handleInvalid}
                  onChange={clearValidity}
                >
                  <option value="" disabled hidden>
                    {cta.fields.logiciel.placeholder}
                  </option>
                  {cta.fields.logiciel.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor={`${formId}-message`}>{cta.fields.message.label}</label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  placeholder={cta.fields.message.placeholder}
                  required={cta.fields.message.required}
                />
              </div>

              <div className="hp-field" aria-hidden="true">
                <label htmlFor={`${formId}-website`}>Laissez ce champ vide</label>
                <input
                  id={`${formId}-website`}
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                {status === "sending" ? cta.states.sending : cta.submitLabel}
              </button>

              {status === "error" && (
                <p ref={statusRef} className="form-status form-status-error" role="status" aria-live="polite" tabIndex={-1}>
                  {cta.states.error}
                </p>
              )}

              <p className="rgpd-note">
                {cta.rgpdNote} <Link href={cta.rgpdLink.href}>{cta.rgpdLink.label}</Link>
              </p>
            </form>
          )}
        </div>
      </section>
    </Reveal>
  );
}
