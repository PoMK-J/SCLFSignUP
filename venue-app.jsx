/* ===========================================================
   The Pichler Family, Joined Celebration · Sections + App
   Program, Schedule, Dress, Good to Know, Register
   =========================================================== */
const {
  EVENT, Arrow, Check, Clock, Pin, Car, Train, Bed, Mail, Cal, Sparkle, ChevDown,
  BlurText, Reveal, Eyebrow, Navbar, Hero, Footer,
} = window;
const { useState } = React;

/* ---------- Section header ---------- */
function SectionHead({ kicker, title, sub, center }) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow className={center ? "justify-center" : ""}>{kicker}</Eyebrow>
      <h2 className="mt-5 font-heading italic text-ink text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.92] tracking-[-0.02em]">{title}</h2>
      {sub && <p className="mt-5 text-ink-soft font-body font-normal text-lg sm:text-xl leading-relaxed">{sub}</p>}
    </div>);
}

/* ---------- The Family ---------- */
function Program() {
  return (
    <section id="family" className="section-pad section-fade relative bg-tint">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHead center
          kicker="The Family"
          title="The Pichlers"
          sub="Three of us, three milestones this year, and the reason for the whole celebration. We can't wait to share the evening with the people who have been part of our story." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7 mt-12 lg:mt-16 max-w-3xl mx-auto">
          <Reveal>
            <figure className="photo-frame">
              <img src="family-1.jpg" alt="The Pichler family dressed up for an evening out" loading="lazy" />
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="photo-frame">
              <img src="family-2.jpg" alt="The Pichler family together on a sunny day" loading="lazy" />
            </figure>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-ink-soft font-body font-normal text-lg max-w-xl mx-auto leading-relaxed italic">
            Turning 10, 50 &amp; 60, we are marking it all in one place, with one big evening by the water. Thank you for being part of it.
          </p>
        </Reveal>
      </div>
    </section>);
}

/* ---------- Schedule ---------- */
function Schedule() {
  const items = [
    { time: "16:00", t: "Arrival & Welcome Drink", b: "Guest Arrival - Guests will be welcomed with champagne and canapés. Enjoy live music by the water while mingling and socializing with fellow guests.", loc: "Location: Main house · terrace & dock" },
    { time: "17:30", t: "Opening of the Event", b: "The Toastmaster will officially open the event, followed by a selection of performances to entertain our guests." },
    { time: "18:30", t: "Event Dinner", b: "Guests will be invited to move over to the White House. A buffet dinner will be served for all attendees.", loc: "Location: Big lawn · outside the white house" },
    { time: "19:30", t: "Performance, Toasts & Speeches", b: "Raise your glasses and share your stories, memories, and experiences of the Pichler family. The evening will feature a series of toasts and speeches, interspersed with performances throughout the program." },
    { time: "20:30", t: "Cake", b: "Three milestones deserve cake. Save room." },
    { time: "21:30", t: "DJ, Dancing & Music", b: "Get ready to dance the night away! We recommend wearing comfortable shoes for the festivities." },
    { time: "01:00", t: "Goodnight", b: "Thank you for sharing this wonderful evening with us." },
  ];
  return (
    <section id="schedule" className="section-pad section-fade relative bg-tint">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <SectionHead center kicker="Schedule of the Day" title="Event Program"
          sub="A gentle rhythm from late afternoon into the night, moving from the main house across to the white house for dinner and dancing." />
        <div className="mt-12 lg:mt-16 relative timeline">
          {items.map((it, i) =>
            <Reveal key={i} delay={i * 0.05}>
              <div className="tl-row">
                <div className="tl-time">{it.time}</div>
                <div className="tl-dot-wrap"><span className="tl-dot"></span></div>
                <div className="soft-card tl-card">
                  <h3 className="font-heading text-ink text-2xl sm:text-3xl leading-tight">{it.t}</h3>
                  <p className="mt-2 text-ink-soft font-body font-normal text-base leading-relaxed">{it.b}</p>
                  {it.loc &&
                    <div className="tl-loc">
                      <Pin className="h-4 w-4" /> {it.loc}
                    </div>}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>);
}

/* ---------- Dress code ---------- */
function Dress() {
  return (
    <section id="dress" className="section-pad section-fade relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow>Dress Code</Eyebrow>
            <h2 className="mt-5 font-heading italic text-ink text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.92] tracking-[-0.02em]">
              Smart casual
            </h2>
            <p className="mt-5 text-ink-soft font-body font-normal text-lg sm:text-xl leading-relaxed">
              Relaxed, but put together. Think a blazer over a nice shirt, an elegant dress, or smart knitwear, comfortable enough to dance in, polished enough for the photographs you'll be in.
            </p>
            <p className="mt-4 text-ink-soft font-body font-normal text-lg leading-relaxed">
              The evening drifts outdoors and the Mariefred air cools after dark, so a light layer is a good idea.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <img src="dress-code.jpg" alt="Guests in smart-casual attire, light gold and navy tones"
                className="block w-full h-[440px] object-cover rounded-[22px]" />
              <div className="palette-strip">
                <span className="eyebrow text-ink-soft">A gentle palette</span>
                <div className="flex gap-2 mt-2">
                  <span className="sw" style={{ background: "#FBF7EE" }}></span>
                  <span className="sw" style={{ background: "#E6D4A6" }}></span>
                  <span className="sw" style={{ background: "#C2A35C" }}></span>
                  <span className="sw" style={{ background: "#8C6F3A" }}></span>
                  <span className="sw" style={{ background: "#3A352C" }}></span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>);
}

/* ---------- Good to Know (links out to dedicated pages) ---------- */
function GoodToKnow() {
  const cards = [
    {
      href: "Location.html",
      icon: <Pin className="h-6 w-6" />,
      kicker: "Getting there",
      t: "Location & Directions",
      b: "Where Gripsnäs is, and exactly how to drive there from Stockholm, written for anyone who's never made the trip before.",
      meta: "Map · step-by-step route · by train",
    },
    {
      href: "Parking.html",
      icon: <Car className="h-6 w-6" />,
      kicker: "When you arrive",
      t: "Parking",
      b: "Where to leave the car once you reach the venue, how much space there is, and the easiest drop-off if you're being driven.",
      meta: "On-site parking · drop-off · accessibility",
    },
    {
      href: "Hotel.html",
      icon: <Bed className="h-6 w-6" />,
      kicker: "Where to stay",
      t: "Hotel & B&B",
      b: "Stay the night at Värdshuset Mariefred. Compare the cosy Bed & Breakfast with the hotel's double and single rooms.",
      meta: "B&B vs hotel · double & single rooms",
    },
  ];
  return (
    <section id="info" className="section-pad section-fade relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHead center kicker="Good to Know"
          title="Everything you need"
          sub="The practical bits, each on its own page so nothing feels crammed. Tap any card for the full details." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 lg:mt-16">
          {cards.map((c, i) =>
            <Reveal key={c.t} delay={i * 0.08}>
              <a href={c.href} className="soft-card info-card p-7 h-full block">
                <div className="flex items-start justify-between">
                  <span className="icon-badge-lg">{c.icon}</span>
                  <span className="arr text-gold"><Arrow className="h-5 w-5" /></span>
                </div>
                <div className="mt-6 eyebrow text-gold">{c.kicker}</div>
                <h3 className="mt-2 font-heading italic text-ink text-3xl leading-none">{c.t}</h3>
                <p className="mt-3 text-ink-soft font-body font-normal text-[17px] leading-relaxed">{c.b}</p>
                <div className="flex-1 min-h-5"></div>
                <div className="mt-6 pt-5 hairline eyebrow text-ink-soft">{c.meta}</div>
              </a>
            </Reveal>
          )}
        </div>
      </div>
    </section>);
}

/* ---------- Number stepper ---------- */
function NumberStepper({ value, onChange, min = 0, max = 20 }) {
  const v = parseInt(value, 10) || 0;
  const dec = () => onChange(String(Math.max(min, v - 1)));
  const inc = () => onChange(String(Math.min(max, v + 1)));
  return (
    <div className="step-field">
      <button type="button" className="step-btn" onClick={dec} disabled={v <= min} aria-label="decrease">–</button>
      <span className="step-val">{v}</span>
      <button type="button" className="step-btn" onClick={inc} disabled={v >= max} aria-label="increase">+</button>
    </div>);
}

/* ---------- Register your participation ---------- */
function RSVP() {
  const [form, setForm] = useState({ name: "", email: "", members: "", adults: "2", kids: "0", diet: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const setVal = (k) => (val) => setForm((f) => ({ ...f, [k]: val }));

  const mailtoHref = () => {
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Family members coming: ${form.members || "-"}`,
      `Adults: ${form.adults}`,
      `Kids: ${form.kids}`,
      `Dietary requirements: ${form.diet || "-"}`,
      "",
      form.message || "",
    ];
    const subject = encodeURIComponent(`Registration: ${form.name || "Guest"} · Pichler Family Celebration`);
    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:${EVENT.rsvpEmail}?subject=${subject}&body=${body}`;
  };

  const submit = async (e) => {
    e.preventDefault();
    const payload = {
      name: form.name,
      email: form.email,
      members: form.members,
      adults: form.adults,
      kids: form.kids,
      diet: form.diet,
      message: form.message,
    };

    // No Sheet configured yet → fall back to email.
    if (!EVENT.sheetUrl) {
      window.location.href = mailtoHref();
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await fetch(EVENT.sheetUrl, {
        method: "POST",
        mode: "no-cors", // Apps Script doesn't send CORS headers; fire-and-forget
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload),
      });
      setStatus("sent");
    } catch (err) {
      setStatus("error");
    }
  };

  const sent = status === "sent";

  return (
    <section id="rsvp" className="section-pad section-fade relative bg-tint">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow className="justify-center">Register your participation</Eyebrow>
          <h2 className="mt-5 font-heading italic text-ink text-[clamp(3rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em]">
            Will your family<br />join ours?
          </h2>
          <p className="mt-6 text-ink-soft font-body font-light text-lg sm:text-xl leading-relaxed">
            Kindly register by <strong className="text-ink font-medium">{EVENT.rsvpBy}</strong> so we can plan for everyone.
            Fill in the form below, or simply email us, whichever is easier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-14 lg:mt-16">
          {/* form */}
          <div className="lg:col-span-3 soft-card-strong p-7 sm:p-9 lg:p-11">
            {!sent ?
              <form onSubmit={submit} className="grid grid-cols-2 gap-5">
                <Field label="Your name" span="col-span-2">
                  <input required value={form.name} onChange={set("name")} placeholder="Family / contact name" className="inp" />
                </Field>
                <Field label="Email" span="col-span-2">
                  <input required type="email" value={form.email} onChange={set("email")} placeholder="you@email.com" className="inp" />
                </Field>
                <Field label="Members of family coming" span="col-span-2">
                  <input value={form.members} onChange={set("members")} placeholder="e.g. Anna, Erik, Grandma Britt…" className="inp" />
                </Field>
                <Field label="How many adults" span="col-span-2 sm:col-span-1">
                  <NumberStepper value={form.adults} onChange={setVal("adults")} min={0} max={30} />
                </Field>
                <Field label="How many kids" span="col-span-2 sm:col-span-1">
                  <NumberStepper value={form.kids} onChange={setVal("kids")} min={0} max={30} />
                </Field>
                <Field label="Dietary requirements" span="col-span-2">
                  <input value={form.diet} onChange={set("diet")} placeholder="Allergies, vegetarian, kids' meals, etc. (optional)" className="inp" />
                </Field>
                <Field label="A note for the hosts" span="col-span-2">
                  <textarea value={form.message} onChange={set("message")} rows="3" placeholder="Anything you'd like us to know (optional)" className="inp resize-none"></textarea>
                </Field>
                <div className="col-span-2 mt-1">
                  <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center px-6 py-4 text-base disabled:opacity-60">
                    {status === "sending"
                      ? <><span className="spinner"></span> Sending…</>
                      : <><Check className="h-5 w-5" /> Register our family</>}
                  </button>
                  {status === "error" &&
                    <p className="mt-3 text-center font-body text-xs text-[#b04a2f]">
                      Something went wrong sending that. Please <a href={mailtoHref()} className="underline underline-offset-2">email us instead</a>.
                    </p>}
                  <p className="mt-3 text-center text-ink-soft font-body font-normal text-sm">
                    {EVENT.sheetUrl
                      ? "Your registration is recorded instantly, no email app needed."
                      : `This opens your email app with the details ready to send to ${EVENT.rsvpEmail}.`}
                  </p>
                </div>
              </form>
              :
              <div className="text-center py-12 flex flex-col items-center">
                <div className="icon-badge"><Check className="h-5 w-5" /></div>
                <h3 className="mt-5 font-heading italic text-ink text-4xl">Thank you</h3>
                <p className="mt-3 text-ink-soft font-body font-light max-w-sm leading-relaxed">
                  {EVENT.sheetUrl
                    ? "Your family is registered, we've got your details and we can't wait to see you. You'll hear from us with the final details closer to the day."
                    : "Your email should have opened with everything filled in, just press send. If it didn't, write to us directly at " + EVENT.rsvpEmail + "."}
                </p>
                <button onClick={() => setStatus("idle")} className="btn-ghost mt-7 px-5 py-2.5 text-sm">Register another family</button>
              </div>
            }
          </div>

          {/* email aside */}
          <aside className="lg:col-span-2 flex flex-col gap-5">
            <div className="soft-card p-7">
              <span className="icon-badge-sm"><Mail className="h-4 w-4" /></span>
              <h3 className="mt-4 font-heading text-ink text-2xl leading-tight">If you have any questions</h3>
              <p className="mt-2 text-ink-soft font-body font-normal text-base leading-relaxed">
                No forms, no fuss. Drop us a line and let us know who's coming and how many adults and kids.
              </p>
              <a href={`mailto:${EVENT.rsvpEmail}?subject=${encodeURIComponent("Registration: Pichler Family Celebration")}`}
                className="mt-5 inline-flex items-center gap-2 font-body font-semibold text-gold hover:underline underline-offset-4 text-[17px] break-all">
                {EVENT.rsvpEmail} <Arrow className="h-4 w-4 shrink-0" />
              </a>
            </div>
            <div className="soft-card p-7">
              <span className="icon-badge-sm"><Cal className="h-4 w-4" /></span>
              <h3 className="mt-4 font-heading text-ink text-2xl leading-tight">The essentials</h3>
              <dl className="mt-4 space-y-3">
                {[["When", EVENT.date], ["Where", EVENT.place], ["Dress", "Smart casual"], ["Register by", EVENT.rsvpBy]].map(([k, v]) =>
                  <div key={k} className="flex items-baseline justify-between gap-4 hairline-b pb-3">
                    <dt className="font-body font-semibold text-ink-soft text-base">{k}</dt>
                    <dd className="font-body text-ink text-right text-[17px]">{v}</dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>);
}

function Field({ label, children, span = "col-span-2" }) {
  return (
    <label className={`block ${span}`}>
      <div className="font-body font-semibold text-ink text-base mb-2">{label}</div>
      {children}
    </label>);
}

/* ---------- App ---------- */
function App() {
  const jump = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 10, behavior: "smooth" });
  };
  return (
    <>
      <Navbar onJump={jump} />
      <Hero onJump={jump} />
      <main className="relative z-10">
        <GoodToKnow />
        <Schedule />
        <Dress />
        <Program />
        <RSVP />
      </main>
      <Footer onJump={jump} />
    </>);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
