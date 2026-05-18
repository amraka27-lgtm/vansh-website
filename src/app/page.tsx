"use client";

import { motion } from "framer-motion";

// ── THE 17 TOOLS DATABASE (Gold Theme) ─────────────────────────────────
const extendedTools = [
  { id: 1, title: "EPF/PPF Auto-Tracker", tag: "PROVIDENT_SYNC", desc: "Factor existing Employee and Public Provident Funds into retirement goals to reveal true timeline velocity." },
  { id: 2, title: "SGB vs. Physical Gold", tag: "GOLD_YIELD", desc: "Visualize the hidden making charges of physical jewelry versus the guaranteed yield of Sovereign Gold Bonds." },
  { id: 3, title: "SSY Integration", tag: "DAUGHTER_FUND", desc: "Dedicated tax-free compounding calculators for female child education and marriage routing." },
  { id: 4, title: "Zero-Cost EMI Unmasker", tag: "FEE_DETECTOR", desc: "Expose hidden processing fees, GST, and lost discounts to reveal the true IRR of retail offers." },
  { id: 5, title: "CC Minimum Due Trap", tag: "DEBT_WARNING", desc: "Terrifyingly accurate visualizer showing the exact cost and time trap of paying only the minimum due." },
  { id: 6, title: "Insurance Policy Analyzer", tag: "POLICY_AUDIT", desc: "Compare expensive ULIP premiums against cheap Term Life plus Index Funds to optimize monthly capital." },
  { id: 7, title: "Junk Food to Wealth", tag: "MICRO_INVEST", desc: "Translate monthly Swiggy/Zomato budgets into 10-year compounding wealth trajectories." },
  { id: 8, title: "Debt Snowball Visualizer", tag: "SNOWBALL_UI", desc: "Visually satisfying melting ice blocks that animate your exact month and year of absolute debt freedom." },
  { id: 9, title: "Shaadi Inflation Calculator", tag: "WEDDING_MATH", desc: "Factor 10-12% hyper-inflation, gold trends, and venue costs to output realistic marriage targets." },
  { id: 10, title: "Loan Hub Refinance", tag: "RATE_ARBITRAGE", desc: "Constantly monitor your loan rates against the national market and calculate exact savings from switching." },
  { id: 11, title: "Child Education Matrix", tag: "EDU_INFLATION", desc: "Project exact education costs from Nursery to Post-Graduation across India and abroad up to the year 2060." },
  { id: 12, title: "Home Build Calculator", tag: "REAL_ESTATE_PROJ", desc: "Forecast construction and real estate acquisition costs across all tiered Indian cities until 2060." },
  { id: 13, title: "AI Cortex Support", tag: "NEURAL_ANALYSIS", desc: "Intelligent neural analysis and personalized surplus routing suggestions based on your unique financial DNA." },
  { id: 14, title: "Net Worth Matrix", tag: "ASSET_TRACKING", desc: "Real-time, comprehensive tracking of your family's true net worth across all liquid and illiquid assets." }
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0F172A] cyber-grid selection:bg-amber-500 selection:text-black overflow-hidden">
      
      {/* ── Volumetric Ambient Lighting Layer (Gold/Amber) ───────────── */}
      <div className="fixed top-[-10%] left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/10 to-transparent blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="fixed top-[20%] right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-amber-600/5 to-transparent blur-[140px] rounded-full pointer-events-none z-0" />

      {/* ── Floating Premium Navigation Bar ────────────────────────────── */}
      <nav className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/80 rounded-2xl px-6 py-4 flex items-center justify-between shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.3)] border border-amber-400/50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Vansh<span className="text-amber-500">Wealth</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-slate-300">
            <a href="#features" className="hover:text-amber-400 transition-colors">The Arsenal</a>
            <a href="#security" className="hover:text-amber-400 transition-colors">Vault Security</a>
            <a href="#pricing" className="hover:text-amber-400 transition-colors">Premium Tiers</a>
          </div>

          <button className="relative group px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase overflow-hidden transition-all border border-amber-500/30 bg-amber-500/10 hover:border-amber-400">
            <span className="relative z-10 text-amber-400 group-hover:text-black transition-colors">Launch Portal</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
          </button>
        </motion.div>
      </nav>

      {/* ── Cinematic Hero Section ──────────────────────────────────────── */}
      <header className="relative max-w-7xl mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8 text-center z-10">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-950/20 text-xs text-amber-400 font-mono tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(245,158,11,0.05)]">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            Next-Generation Family Legacy Architecture
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] max-w-5xl mx-auto mb-8 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent"
        >
          Secure Your Lineage. <br />
          <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-amber-700 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(245,158,11,0.2)]">
            Command Your Wealth.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}
          className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto font-normal leading-relaxed tracking-wide mb-12"
        >
          An elite private ecosystem engineered for comprehensive family asset orchestration, real-time multi-generational surplus optimization, and uncompromised security.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-center"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-extrabold rounded-xl shadow-[0_4px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_4px_40px_rgba(245,158,11,0.5)] transform hover:-translate-y-0.5 transition-all text-sm tracking-wide uppercase">
            Download App Configuration
          </button>
        </motion.div>
      </header>

      {/* ── High-End Features Matrix (17 Tools) ───────────────────────── */}
      <section id="features" className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-amber-500 mb-3">The Ecosystem</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">17 Core Architectural Sub-Systems</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* 1. Red Folder / Nominee Vault */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="lg:col-span-2 group relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 p-8 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-amber-500/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-amber-500/10 transition-all" />
            <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_rgba(239,68,68,0.8)]" /> FLAGSHIP // SECURITY_VAULT
            </div>
            <h3 className="text-3xl font-black mb-3 tracking-tight text-white group-hover:text-amber-400 transition-colors">The Financial Nominee Vault</h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              A secure, read-only dashboard to share with your spouse or parents. If tragedy occurs, your family knows exactly where every bank account, mutual fund, and life insurance policy is held.
            </p>
          </motion.div>

          {/* 2. Joint Khata */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="group relative backdrop-blur-xl bg-slate-900/50 border border-slate-700/50 p-8 rounded-3xl overflow-hidden hover:border-amber-500/50 transition-all duration-300">
            <div className="text-xs font-mono text-amber-500 uppercase tracking-widest mb-4">FLAGSHIP // MULTI_PLAYER</div>
            <h3 className="text-3xl font-black mb-3 tracking-tight text-white group-hover:text-amber-400 transition-colors">Joint Khata</h3>
            <p className="text-slate-400 leading-relaxed">
              Link profiles securely with your spouse. See your combined net worth, combined debts, and work towards shared family goals.
            </p>
          </motion.div>

          {/* 3. Community Wealth Journey */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }} className="lg:col-span-3 group relative backdrop-blur-xl bg-gradient-to-b from-amber-950/20 to-slate-900/80 border border-amber-500/30 p-10 rounded-3xl overflow-hidden hover:border-amber-400/60 transition-all duration-300">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 blur-[100px] pointer-events-none" />
             <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.8)]" /> FLAGSHIP // NETWORK_SYNC
             </div>
            <h4 className="text-4xl font-black mb-4 tracking-tight text-white group-hover:text-amber-300 transition-colors">Community Wealth Journeys</h4>
            <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
              Replace boring PDF statements with tappable, milestone-driven stories. Benchmark your financial trajectory against anonymized cohorts, celebrate crossing Net Worth milestones, and navigate the journey to absolute financial independence.
            </p>
          </motion.div>
        </div>

        {/* The Remaining Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {extendedTools.map((tool, index) => (
            <motion.div 
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="backdrop-blur-md bg-slate-900/30 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/80 hover:border-amber-500/50 transition-all group"
            >
              <div className="text-[10px] font-mono text-amber-500/70 uppercase tracking-widest mb-2 group-hover:text-amber-400 transition-colors">SYSTEM // {tool.tag}</div>
              <h3 className="text-lg font-bold text-white mb-2">{tool.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Vault Security Subsystem ────────────────────────────────────── */}
      <section id="security" className="relative border-y border-slate-800 bg-slate-900/40 py-24 z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-slate-400 mb-6">Cryptographic Manifesto</h2>
          <p className="text-4xl sm:text-5xl font-black tracking-tight mb-12 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            Your Wealth. Your Eyes Only.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-3xl font-black text-amber-500 mb-2">AES-256</div>
              <div className="text-sm font-bold text-white mb-2 uppercase tracking-wider">Military Encryption</div>
              <p className="text-xs text-slate-400 leading-relaxed">All vault documents and ledgers are encrypted at rest using the global gold standard for cryptographic security.</p>
            </div>
            <div className="p-6 border-x border-slate-800 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-amber-500/30" />
              <div className="text-3xl font-black text-amber-500 mb-2">Supabase</div>
              <div className="text-sm font-bold text-white mb-2 uppercase tracking-wider">Zero-Knowledge Cloud</div>
              <p className="text-xs text-slate-400 leading-relaxed">Built on enterprise-grade infrastructure. We never see your raw financial inputs, account numbers, or asset allocations.</p>
            </div>
            <div className="p-6">
              <div className="text-3xl font-black text-amber-500 mb-2">Bio-Lock</div>
              <div className="text-sm font-bold text-white mb-2 uppercase tracking-wider">Device-Level Auth</div>
              <p className="text-xs text-slate-400 leading-relaxed">Integrated seamlessly with your hardware's native biometric sensors (Face ID / Fingerprint) for instant, secure access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Premium Pricing Matrix (App Synced with Scarcity Banner) ────── */}
      <section id="pricing" className="max-w-[90rem] mx-auto px-4 py-24 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-amber-500 mb-3">Acquisition</h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">Select Your Clearance Level</p>
          
          {/* 🔥 SCARCITY BANNER EXPLAINING THE CROSSED-OUT PRICES */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl border border-amber-500/30 bg-amber-500/10 text-sm shadow-[0_0_20px_rgba(245,158,11,0.15)] max-w-3xl mx-auto text-left sm:text-center">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-500/20">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
            </span>
            <p className="text-amber-200/80 leading-relaxed">
              <strong className="text-white">Founding Member Protocol:</strong> The discounted prices shown below are strictly locked for our <strong className="text-amber-400">first 10,000 subscribers</strong>. Once the limit is reached, standard actual pricing (₹149 / ₹999 / ₹4,999) will be reinstated.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mt-12">
          
          {/* Tier 1: Free */}
          <div className="flex flex-col backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-3xl p-8 hover:border-slate-500 transition-all">
            <div className="text-slate-400 text-sm font-bold tracking-widest uppercase mb-4">Base Protocol</div>
            <div className="text-4xl font-black text-white mb-6">₹0<span className="text-lg text-slate-500 font-medium tracking-normal">/mo</span></div>
            <ul className="flex-1 space-y-4 text-sm text-slate-300 mb-8 font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" /> 8 Core Sandboxes</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" /> Goal Planner Tracker</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-slate-500" /> Basic Timeline Metrics</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-slate-600 text-white font-bold text-sm tracking-wide hover:bg-slate-700 transition-colors">Initiate Free</button>
          </div>

          {/* Tier 2: Premium Monthly (Tactical Strike) */}
          <div className="flex flex-col backdrop-blur-md bg-slate-900/50 border border-slate-700/50 rounded-3xl p-8 hover:border-slate-500 transition-all">
            <div className="text-amber-500 text-sm font-bold tracking-widest uppercase mb-2">Tactical Strike</div>
            <div className="text-xs text-slate-400 font-mono mb-4">MONTHLY CLEARANCE</div>
            <div className="flex items-end gap-2 mb-6">
              <div className="text-4xl font-black text-white">₹99</div>
              <div className="text-sm text-red-400 line-through font-bold mb-1">₹149</div>
            </div>
            <ul className="flex-1 space-y-4 text-sm text-slate-300 mb-8 font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Debt Snowball & Loan Analyzer</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Home Build & Edu Planners</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Wealth Journeys Hub</li>
            </ul>
            <button className="w-full py-3 rounded-xl border border-slate-600 text-white font-bold text-sm tracking-wide hover:bg-slate-700 transition-colors">Subscribe Monthly</button>
          </div>

          {/* Tier 3: Elite Annual (Family Fortress) */}
          <div className="flex flex-col relative backdrop-blur-md bg-slate-900 border border-amber-500/50 rounded-3xl p-8 shadow-[0_0_30px_rgba(245,158,11,0.1)] transform hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-8 w-16 h-1 bg-amber-500 rounded-b-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">Most Recommended</div>
            
            <div className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-2">Family Fortress</div>
            <div className="text-xs text-slate-400 font-mono mb-4">ANNUAL CLEARANCE</div>
            <div className="flex items-end gap-2 mb-6">
              <div className="text-4xl font-black text-white">₹749</div>
              <div className="text-sm text-red-400 line-through font-bold mb-1">₹999</div>
            </div>
            <ul className="flex-1 space-y-4 text-sm text-slate-300 mb-8 font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> The Joint Khata (Spouse Sync)</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> The Red Folder Vault</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> EPF/PPF Persistent Ledger</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-amber-500/10 border border-amber-500/50 text-amber-400 font-bold text-sm tracking-wide hover:bg-amber-500/20 transition-colors">Subscribe Annually</button>
          </div>

          {/* Tier 4: The Lineage (Generational Guard) */}
          <div className="flex flex-col relative backdrop-blur-xl bg-gradient-to-b from-slate-800 to-slate-900 border border-yellow-500/60 rounded-3xl p-8 shadow-[0_0_50px_rgba(250,204,21,0.2)] transform md:-translate-y-4 transition-transform duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
            <div className="text-yellow-400 text-sm font-bold tracking-widest uppercase mb-2">Generational Guard</div>
            <div className="text-xs text-yellow-500/70 font-mono tracking-widest mb-4">LIFETIME ACCESS</div>
            <div className="flex items-end gap-2 mb-6">
              <div className="text-4xl lg:text-5xl font-black text-white">₹2,999</div>
              <div className="text-sm text-red-400 line-through font-bold mb-2">₹4,999</div>
            </div>
            
            <ul className="flex-1 space-y-4 text-sm text-slate-300 mb-8 font-medium">
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.8)]" /> Everything in Family Fortress</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.8)]" /> Zero Recurring Subscriptions</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.8)]" /> Secure PDF Vault Exports</li>
              <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-yellow-400 shadow-[0_0_5px_rgba(250,204,21,0.8)]" /> Elite Community Badge</li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-600 text-black font-extrabold text-sm tracking-widest uppercase shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_4px_30px_rgba(245,158,11,0.5)] transition-all mt-auto">Secure Lifetime</button>
          </div>

        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-800 bg-slate-900/40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>&copy; {new Date().getFullYear()} VANSHWEALTH TECHNOLOGIES. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-amber-400 transition-colors">PRIVACY POLICY</a>
            <a href="/terms" className="hover:text-amber-400 transition-colors">TERMS OF SERVICE</a>
            <a href="/refund" className="hover:text-amber-400 transition-colors">REFUND POLICY</a>
          </div>
        </div>
      </footer>

    </div>
  );
}