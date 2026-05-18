import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-300 selection:bg-amber-500 selection:text-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Back Button */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center text-sm font-mono text-amber-500 hover:text-amber-400 transition-colors">
            <span className="mr-2">←</span> RETURN TO MAIN OPERATIONS
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 border-b border-slate-800 pb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Effective Date: May 2026</p>
        </div>

        {/* Legal Content */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. The Zero-Knowledge Architecture</h2>
            <p>
              VanshWealth was engineered with a Privacy-First, Zero-Knowledge architecture. We understand the critical nature of personal wealth data. Therefore, highly sensitive inputs—including exact net worth, debt distributions, and legacy vault nominees—are encrypted directly on your local device using military-grade AES-256 encryption before any data transmission occurs. Our cloud servers store this data exclusively as scrambled ciphertext. We do not hold the decryption keys to read your specific financial values.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Data Collection & Processing</h2>
            <p className="mb-4">To operate the software, we collect:</p>
            <ul className="space-y-4 pl-4 border-l-2 border-slate-800 ml-2">
              <li>
                <strong className="text-slate-200 block mb-1">Account Identifiers</strong>
                Email address, Full Name, and Date of Birth (for authentication and password recovery).
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">Encrypted Payloads</strong>
                Financial ledger items and Joint Khata networking links (stored as ciphertext).
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">Telemetry Data</strong>
                Anonymous, non-identifiable crash logs and app performance metrics to ensure software stability.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Strict Non-Disclosure & Third Parties</h2>
            <p>
              We do not operate an advertising-supported business model. Your personal and financial data is never sold, rented, or brokered to third-party ad networks, banks, or marketing agencies. Data is only shared with essential infrastructure partners (e.g., Supabase for cloud hosting, Razorpay for payment processing) strictly for the purpose of operating the application, and in compliance with global data protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Data Retention and Right to Erasure</h2>
            <p>
              You possess absolute control over your digital footprint. Users may initiate an "Account Deactivation" sequence directly from the App Settings. Upon triggering this sequence, your account is locked. If not reactivated within 30 days, all associated user data, encrypted payloads, and routing linkages are permanently and irreversibly purged from our active server infrastructure in compliance with the Information Technology Act, 2000.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Contact the Developer</h2>
            <p>
              For legal inquiries, privacy concerns, or data deletion requests, you may contact the data controller at: <br />
              <a href="mailto:support@vanshwealth.com" className="text-amber-500 hover:text-amber-400 font-mono mt-2 inline-block transition-colors">support@vanshwealth.com</a>
            </p>
          </section>
          
        </div>
        
      </div>
    </div>
  );
}