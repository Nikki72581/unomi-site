export default function Page() { return <UnomiPro/>; }

function UnomiPro() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Top Bar */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Wordmark />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
            <a href="#work" className="hover:text-neutral-900">Work</a>
            <a href="#services" className="hover:text-neutral-900">Services</a>
            <a href="#approach" className="hover:text-neutral-900">Approach</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-xl bg-neutral-900 text-white px-4 py-2 text-sm font-semibold hover:bg-neutral-800">Start a project</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Solo product consultancy</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">Clarity. Velocity. Results.</h1>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl">I help B2B teams ship the right thing faster: product strategy, lean UX, and practical automation. Friendly to work with. Brutally honest with the work.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700">Book a consult</a>
              <a href="#work" className="rounded-xl border border-neutral-300 px-6 py-3 font-semibold hover:bg-neutral-50">See case studies</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg">
              <KPI label="Avg. cycle time" value="-32%" />
              <KPI label="NPS lift" value="+14" />
              <KPI label="Hours saved" value="6–10/wk" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* Credibility strip */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-xs text-neutral-500 font-medium">Trusted by teams building fintech, SaaS, and ERP integrations</div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 opacity-70">
            <LogoBox text="ERP"/>
            <LogoBox text="Fintech"/>
            <LogoBox text="SaaS"/>
            <LogoBox text="Payments"/>
            <LogoBox text="AI"/>
            <LogoBox text="B2B"/>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">What I do</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">Modular engagements focused on outcomes, not deliverable theater.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Service title="Product Strategy" points={["Outcome mapping", "Prioritization & scope", "Stakeholder alignment"]} />
            <Service title="UX & Prototyping" points={["Critical flows", "Wireframes & tests", "Design heuristics"]} />
            <Service title="AI & Automation" points={["Workflow audits", "AR/AP & support", "Ops time savings"]} />
          </div>
        </div>
      </section>

      {/* Work / Case studies */}
      <section id="work" className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Selected work</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Case title="Payments portal redesign" result="+18% conversion" tag="Fintech"/>
            <Case title="ERP add-on onboarding" result="-40% time-to-live" tag="SaaS"/>
            <Case title="AR automation audit" result="230 hrs/quarter saved" tag="Ops"/>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">How we’ll work</h2>
          <div className="mt-8 grid md:grid-cols-4 gap-6">
            <Step n={1} title="Diagnose" body="Rapid discovery, goals, constraints, risks."/>
            <Step n={2} title="Decide" body="Lean roadmap and success metrics."/>
            <Step n={3} title="Design" body="Critical-path flows and prototypes."/>
            <Step n={4} title="Deliver" body="Playbooks, cadences, and handoff."/>
          </div>
          <Quote />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight">Tell me about your project</h3>
            <p className="mt-2 text-neutral-600">Short form. Clear next steps within 24 hours.</p>
            <form className="mt-6 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input className="w-full rounded-xl border border-neutral-300 px-4 py-3" placeholder="Name" />
                <input className="w-full rounded-xl border border-neutral-300 px-4 py-3" placeholder="Email" />
              </div>
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3" placeholder="Company" />
              <textarea className="min-h-[120px] w-full rounded-xl border border-neutral-300 px-4 py-3" placeholder="What are you trying to accomplish?" />
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center gap-2 text-sm text-neutral-600">
                  <input type="checkbox" className="rounded" />
                  I’d like a free 20-min intro call
                </label>
                <button type="button" className="rounded-xl bg-neutral-900 px-6 py-3 text-white font-semibold hover:bg-neutral-800">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <Wordmark small/>
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} Unomi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

/* ————— Components ————— */
function Wordmark({ small }){
  return (
    <div className="flex items-center gap-2">
      <BotGlyph />
      <span className={(small?"text-lg":"text-2xl")+" font-extrabold tracking-tight"}>unomi</span>
    </div>
  );
}

function KPI({label, value}){
  return (
    <div className="rounded-xl border border-neutral-200 p-4">
      <div className="text-xs text-neutral-500">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

function LogoBox({ text }){
  return (
    <div className="rounded-xl border border-dashed border-neutral-300 bg-white p-4 text-center text-sm font-semibold text-neutral-500">
      {text}
    </div>
  );
}

function Service({ title, points }){
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="text-xs rounded-full bg-neutral-100 px-2 py-1">2–4 wks</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-600 list-disc list-inside">
        {points.map((p, i) => (<li key={i}>{p}</li>))}
      </ul>
    </div>
  );
}

function Case({ title, result, tag }){
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="text-xs uppercase tracking-widest text-neutral-500">{tag}</div>
      <h4 className="mt-2 font-semibold">{title}</h4>
      <div className="mt-3 rounded-lg bg-neutral-50 p-3 text-sm">Outcome: <span className="font-semibold">{result}</span></div>
    </div>
  );
}

function Step({ n, title, body }){
  return (
    <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
      <div className="flex items-center gap-3">
        <div className="h-7 w-7 rounded-full bg-indigo-600 text-white text-xs flex items-center justify-center font-bold">{n}</div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-neutral-600">{body}</p>
    </div>
  );
}

function Quote(){
  return (
    <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="flex items-start gap-4">
        <BotGlyph small/>
        <blockquote className="text-neutral-700 text-sm md:text-base">“Nicole takes complex messes and returns simple, actionable plans. No fluff, just movement.” <span className="text-neutral-500">— Product VP, SaaS</span></blockquote>
      </div>
    </div>
  );
}

/* Minimal, friendly bot glyph (not cutesy, just approachable) */
function BotGlyph({ small }){
  return (
    <svg viewBox="0 0 120 120" className={small?"h-6 w-6":"h-8 w-8"}>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <rect x="10" y="16" width="100" height="72" rx="20" fill="url(#g)"/>
      <rect x="34" y="36" width="12" height="20" rx="6" fill="#fff"/>
      <rect x="74" y="36" width="12" height="20" rx="6" fill="#fff"/>
      <path d="M40 66 Q60 76 80 66" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round"/>
      <rect x="54" y="6" width="12" height="20" rx="6" fill="#06b6d4"/>
      <circle cx="60" cy="4" r="6" fill="#06b6d4"/>
      <rect x="26" y="90" width="68" height="12" rx="6" fill="#d1d5db"/>
    </svg>
  );
}

function HeroVisual(){
  return (
    <div className="relative">
      <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 p-8">
        <div className="grid grid-cols-2 gap-6">
          <Metric title="Activation" value="+11%"/>
          <Metric title="Time-to-value" value="-24%"/>
          <Metric title="Support tickets" value="-31%"/>
          <Metric title="Churn" value="-9%"/>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <BotGlyph />
          <div className="text-sm text-neutral-600">Friendly automation that respects your stack. No black boxes.</div>
        </div>
      </div>
    </div>
  );
}

function Metric({ title, value }){
  return (
    <div className="rounded-2xl bg-white border border-neutral-200 p-5">
      <div className="text-xs text-neutral-500">{title}</div>
      <div className="mt-1 text-2xl font-bold">{value}</div>
    </div>
  );
}
