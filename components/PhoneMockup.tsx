import type { PhoneData } from "@/content/site";

export default function PhoneMockup({ data }: { data: PhoneData }) {
  const pending = data.items.filter((item) => item.status === "warn").map((item) => item.title);
  const summary = pending.length
    ? `${data.title} : ${data.subtitle} — ${pending.join(", ")}.`
    : `${data.title} : ${data.subtitle}.`;

  return (
    <div className="phone-stage" role="img" aria-label={summary}>
      <div className="phone" aria-hidden="true">
        <div className="phone-screen">
          <div className="phone-notch">
            <div className="pill" />
          </div>
          <div className="phone-top">
            <div className="ptitle">{data.title}</div>
            <div className="psub">{data.subtitle}</div>
          </div>
          <div className="phone-list">
            {data.items.map((item) => (
              <div key={item.title} className={item.status === "warn" ? "p-item attn" : "p-item"}>
                <span className={`dot ${item.status}`} />
                <div>
                  <div className="t">{item.title}</div>
                  <div className="s">{item.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="phone-tab">
            {data.tabs.map((tab) => (
              <div key={tab} className={tab === data.activeTab ? "active" : undefined}>
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
