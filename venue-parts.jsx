/* ===========================================================
   Heribert & Inga, Sixty · Shared parts
   Icons, helpers, BlurText, Navbar, Hero, Footer
   (CSS-driven animations, no framer-motion dependency)
   =========================================================== */
const { useState, useEffect, useRef } = React;

/* ---------- config ---------- */
const EVENT = {
  hosts: "The Pichler Family",
  date: "Saturday · 8 August 2026",
  dateShort: "8 Aug 2026",
  place: "Gripsnäs, Mariefred",
  rsvpEmail: "philip@filipnphilip.com",
  rsvpBy: "1 July 2026",
  // Paste your Google Apps Script web-app URL (ends in /exec) here to collect
  // registrations in your Google Sheet. Leave "" to fall back to email-only.
  // Setup steps are in RSVP-Google-Sheet-Setup.md
  sheetUrl: "https://script.google.com/macros/s/AKfycbxotU2W7dh22hQww2WNoB-5dn_XIhss00HN8HIU7NVX0F3yrkXhwnU-EK-JyKmIS1Jf/exec",
  directionsUrl: "https://maps.app.goo.gl/VBVXm7cFz86ivpW46",
  mapEmbed: "https://maps.google.com/maps?q=Gripsn%C3%A4s%20Mariefred%20Sweden&z=12&output=embed"
};

/* ---------- icons ---------- */
const Arrow = ({ className = "h-4 w-4" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 17L17 7" /><path d="M7 7h10v10" />
  </svg>;
const Check = ({ className = "h-4 w-4" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>;
const Clock = ({ className = "h-5 w-5" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  </svg>;
const Pin = ({ className = "h-5 w-5" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" /><circle cx="12" cy="10" r="2.5" />
  </svg>;
const Car = ({ className = "h-5 w-5" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11" /><path d="M3 16v-3a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-1" /><path d="M6 17H5a1 1 0 0 1-1-1" /><circle cx="7.5" cy="16.5" r="1.5" /><circle cx="16.5" cy="16.5" r="1.5" />
  </svg>;
const Train = ({ className = "h-5 w-5" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="4" width="14" height="12" rx="2.5" /><path d="M5 11h14" /><path d="M8 20l-2 2M16 20l2 2" /><circle cx="8.5" cy="13.5" r=".6" fill="currentColor" /><circle cx="15.5" cy="13.5" r=".6" fill="currentColor" />
  </svg>;
const Bed = ({ className = "h-5 w-5" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 18V8M3 13h18a2 2 0 0 1 2 2v3M3 13V9a1 1 0 0 1 1-1h7a2 2 0 0 1 2 2v3" />
  </svg>;
const Mail = ({ className = "h-5 w-5" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7 8 6 8-6" />
  </svg>;
const Cal = ({ className = "h-5 w-5" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </svg>;
const Sparkle = ({ className = "h-5 w-5" }) =>
<svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2c.4 3.9 2.1 5.6 6 6-3.9.4-5.6 2.1-6 6-.4-3.9-2.1-5.6-6-6 3.9-.4 5.6-2.1 6-6Z" />
  </svg>;
const ChevDown = ({ className = "h-4 w-4" }) =>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>;

/* ---------- in-view hook (immediate check + IO) ---------- */
function useInView(amount = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {setInView(true);return;}
    if (typeof IntersectionObserver === "undefined") {setInView(true);return;}
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {if (e.isIntersecting) {setInView(true);io.disconnect();}});
    }, { threshold: amount });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView];
}

/* ---------- Enter (mount-triggered, no IO/animation dependency) ---------- */
function Enter({ children, delay = 0, className = "" }) {
  const [vis, setVis] = useState(false);
  useEffect(() => {const t = setTimeout(() => setVis(true), 20);return () => clearTimeout(t);}, []);
  return (
    <div className={`enter-fx ${vis ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>);
}

/* ---------- BlurText (per-word staggered) ---------- */
function BlurText({ text, className = "", delay = 0, center = true }) {
  const [ref, inView] = useInView(0.1);
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap", justifyContent: center ? "center" : "flex-start", rowGap: "0.05em" }}>
      {words.map((w, i) =>
      <span key={i} className={`reveal-word ${inView ? "in" : ""}`} style={{ transitionDelay: `${delay + i * 0.08}s` }}>
          {w}
        </span>
      )}
    </span>);
}

/* ---------- Reveal (fade-up on view) ---------- */
function Reveal({ children, delay = 0, className = "", amount = 0.15 }) {
  const [ref, inView] = useInView(amount);
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>);
}

/* ---------- Eyebrow ---------- */
function Eyebrow({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-7 bg-[var(--gold)]"></span>
      <span className="eyebrow text-gold">{children}</span>
    </div>);
}

/* ---------- Navbar ---------- */
function Navbar({ onJump }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
  { id: "info", label: "Good to Know" },
  { id: "schedule", label: "Event Program" },
  { id: "dress", label: "Dresscode" },
  { id: "family", label: "The Family" }];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-10 pt-3 sm:pt-4">
      <div className={`mx-auto max-w-6xl flex items-center justify-between gap-3 rounded-full pl-4 sm:pl-5 pr-2 py-2 transition-all duration-500 ${scrolled ? "nav-solid" : "nav-clear"}`}>
        <button onClick={() => onJump("hero")} className="flex items-baseline gap-2 shrink-0">
          <span className="monogram">Pichler</span>
          <span className="hidden sm:block font-heading italic text-gold text-xl leading-none">Family</span>
        </button>
        <div className="hidden lg:flex items-center gap-0.5">
          {links.map((l) =>
          <button key={l.id} onClick={() => onJump(l.id)}
          className="px-3 py-2 text-[13px] font-body font-medium text-ink-soft hover:text-ink transition-colors">
              {l.label}
            </button>
          )}
        </div>
        <button onClick={() => onJump("rsvp")} className="btn-primary text-[13px] px-4 py-2 shrink-0">
          Register <Arrow className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>);
}

/* ---------- Hero (static venue photo background) ---------- */
function Hero({ onJump }) {
  const spacerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHideLoader(true), 450);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let raf;
    const loop = () => {
      const sp = spacerRef.current;
      if (sp) {
        const rect = sp.getBoundingClientRect();
        const total = sp.offsetHeight - window.innerHeight;
        const scrolled = Math.max(0, Math.min(total, -rect.top));
        const p = total > 0 ? scrolled / total : 0;
        setProgress(p);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const spacerH = "100vh";
  const textOpacity = progress < 0.55 ? 1 : Math.max(0, 1 - (progress - 0.55) / 0.25);
  const textShift = -progress * 60;

  return (
    <section id="hero" className="relative">
      <div className="hero-progress" style={{ width: `${progress * 100}%` }}></div>
      <div ref={spacerRef} style={{ height: spacerH, position: "relative" }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <img src="hero-venue.jpg" alt="Aerial view of the manor by the lake at Gripsnäs, Mariefred"
          className="absolute inset-0 w-full h-full object-cover z-0" />

          <div className="absolute inset-0 z-[2] hero-wash"></div>

          {!hideLoader &&
          <div className="absolute inset-0 z-[40] flex flex-col items-center justify-center hero-loader"
          style={{ opacity: hideLoader ? 0 : 1, transition: "opacity 0.45s ease" }}>
              <div className="monogram-lg">Pichler</div>
              <div className="mt-6 w-40 h-px bg-[var(--gold)]/30 overflow-hidden">
                <div className="loader-bar"></div>
              </div>
              <div className="mt-5 eyebrow text-gold">Preparing the celebration</div>
            </div>
          }

          <div className="hero-content absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-5"
          style={{ opacity: textOpacity, transform: `translateY(${textShift}px)`, transition: "opacity 0.15s linear" }}>

            <Enter delay={0.35} className="flex justify-center">
              <div className="hero-badge">
                <Sparkle className="h-3.5 w-3.5 text-gold" />
                <span>Joined Celebration</span>
                <span className="dot"></span>
                <span className="tracking-[0.12em]">10 · 50 · 60</span>
              </div>
            </Enter>

            <div className="mt-4 sm:mt-6">
              <div className="hero-title font-heading italic text-ink leading-[0.82] tracking-[-0.02em] text-[clamp(2.5rem,min(10vw,13vh),7.5rem)]">
                <BlurText text="Pichler's" delay={0.4} />
                <div className="flex items-center justify-center gap-4 sm:gap-6 my-1 sm:my-2">
                  <span className="hairline-grow"></span>
                  <Sparkle className="h-5 w-5 sm:h-7 sm:w-7 text-gold shrink-0" />
                  <span className="hairline-grow"></span>
                </div>
                <BlurText text="Family" delay={0.6} />
              </div>
            </div>

            <Enter delay={0.85} className="mt-4 sm:mt-6 flex justify-center">
              <p className="hero-sub text-ink-soft font-body font-normal text-base sm:text-xl max-w-xl leading-relaxed">
                Three milestones, turning 10, 50 and 60, one unforgettable evening by the water in Mariefred. We would be honoured to have your family with ours.
              </p>
            </Enter>

            <Enter delay={1.0} className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
              <button onClick={() => onJump("rsvp")} className="btn-primary px-6 sm:px-9 py-4 sm:py-5 text-base sm:text-xl rounded-full shadow-lg" style={{ backgroundColor: "rgb(20, 19, 17)" }}>
                Register your family <Arrow className="h-5 w-5" />
              </button>
              <button onClick={() => onJump("schedule")} className="btn-ghost px-6 sm:px-7 py-4 sm:py-5 text-base sm:text-lg">
                Detailed program
              </button>
            </Enter>

            <Enter delay={1.15} className="mt-5 sm:mt-8 flex flex-wrap items-stretch justify-center gap-3">
              <div className="fact-card">
                <Cal className="h-5 w-5 text-gold" />
                <div className="text-left">
                  <div className="fact-label">When</div>
                  <div className="fact-value">{EVENT.date}</div>
                </div>
              </div>
              <div className="fact-card">
                <Pin className="h-5 w-5 text-gold" />
                <div className="text-left">
                  <div className="fact-label">Where</div>
                  <div className="fact-value">{EVENT.place}</div>
                </div>
              </div>
            </Enter>
          </div>

          <div className="hero-scroll absolute bottom-7 left-0 right-0 flex flex-col items-center gap-1.5 text-ink-soft z-10"
          style={{ opacity: progress < 0.05 ? 0.8 : 0, transition: "opacity 0.3s" }}>
            <span className="eyebrow">Scroll</span>
            <ChevDown className="h-4 w-4 animate-bounce" />
          </div>
        </div>
      </div>
    </section>);
}

/* ---------- Footer ---------- */
function Footer({ onJump }) {
  return (
    <footer className="relative px-6 lg:px-10 pt-20 pb-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span className="hairline-grow"></span>
          <Sparkle className="h-7 w-7 text-gold shrink-0" />
          <span className="hairline-grow"></span>
        </div>
        <h2 className="font-heading italic text-ink text-[clamp(2.2rem,6vw,4rem)] leading-[0.95] tracking-tight mt-6">
          We can't wait to<br />celebrate with you
        </h2>
        <p className="mt-6 text-ink-soft font-body font-light max-w-md mx-auto leading-relaxed">
          {EVENT.hosts} · turning 10, 50 &amp; 60 · {EVENT.place}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button onClick={() => onJump("rsvp")} className="btn-primary px-6 py-3 text-sm">
            Register your family <Arrow className="h-4 w-4" />
          </button>
          <a href={`mailto:${EVENT.rsvpEmail}`} className="btn-ghost px-6 py-3 text-sm">
            <Mail className="h-4 w-4" /> {EVENT.rsvpEmail}
          </a>
        </div>
        <div className="mt-14 pt-7 hairline flex flex-col sm:flex-row items-center justify-between gap-3 text-ink-soft/80">
          <span className="eyebrow">{EVENT.date}</span>
          <span className="font-body text-[13px] text-ink-soft">Website created by <span className="text-ink font-medium">Filip &amp; Philip Digital AB</span></span>
          <span className="eyebrow">Mariefred · Sweden</span>
        </div>
      </div>
    </footer>);
}

Object.assign(window, {
  EVENT, Arrow, Check, Clock, Pin, Car, Train, Bed, Mail, Cal, Sparkle, ChevDown,
  useInView, Enter, BlurText, Reveal, Eyebrow, Navbar, Hero, Footer
});