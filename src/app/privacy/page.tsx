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
            <p className="mb-4">To operate the software, we collect and process the following specific data types:</p>
            <ul className="space-y-4 pl-4 border-l-2 border-slate-800 ml-2">
              <li>
                <strong className="text-slate-200 block mb-1">Account Identifiers</strong>
                Email address, Full Name, and Date of Birth (for secure authentication and password recovery loops).
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">Approximate Regional Location</strong>
                We collect your state of residence (if in India) or country (if logging in from abroad) during registration. This metadata is collected purely to load accurate regional taxation calculation models and apply localized currency formatting frameworks. We do not track real-time GPS coordinates or active user movements.
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">User Photos</strong>
                If you choose to personalize your account dashboard, our software allows you to select and upload a profile picture. This photo asset is stored securely within an isolated cloud storage bucket on Supabase and is utilized entirely for localized user-interface rendering. Providing a profile photo is completely optional.
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">Encrypted Payloads</strong>
                Financial ledger entries, asset valuations, debt matrices, and Joint Khata configuration pathways are stored and synchronized purely as encrypted ciphertext.
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">Telemetry Data & Device Identifiers</strong>
                Anonymous, non-identifiable transaction IDs, basic device tokens, and error logging properties are captured via infrastructure components to coordinate secure sessions, process premium subscription tier updates, and manage app health.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Strict Non-Disclosure & Third Parties</h2>
            <p>
              We do not operate an advertising-supported business model. Your personal and financial data is never sold, rented, or brokered to third-party ad networks, banks, or marketing agencies. Data is only shared with essential infrastructure partners (e.g., Supabase for cloud hosting, Resend for authentication routing, and Razorpay for billing gateways) strictly for the purpose of operating the application, and in full compliance with international information security standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Data Retention and Right to Erasure</h2>
            <p className="mb-4">
              You possess absolute control over your digital footprint. Users may request account and data destruction through two available methods:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>By utilizing the <strong>"Deactivate Account"</strong> configuration mechanism embedded directly inside the application's Account Settings pane.</li>
              <li>By transmitting a direct deletion mandate from your registered email address to our data controller desk at <a href="mailto:support@vanshwealth.com" className="text-amber-500 hover:underline">support@vanshwealth.com</a>.</li>
            </ul>
            <p>
              Upon triggering a deletion sequence, your profile data, approximate location metrics, uploaded user photos, and encrypted cloud tables enter an immediate, 30-day secure deactivation hold. During this 30-day window, you may completely reverse the request and restore full database access by logging back in with your original authentication credentials. If no restoration action is executed within 30 days, your account profile, personal identifiers, and encrypted wealth tables are permanently, automatically, and irreversibly purged from our live production servers in compliance with the Information Technology Act, 2000. 
            </p>
            <p className="mt-2 text-xs italic text-slate-500">
              *Note: Historical billing meta-records linked to premium subscription checkouts are securely retained where legally required for corporate audit, tax compliance, and accounting frameworks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Contact the Developer</h2>
            <p>
              For legal inquiries, privacy concerns, or manual data erasure queries, you may contact the data controller at: <br />
              <a href="mailto:support@vanshwealth.com" className="text-amber-500 hover:text-amber-400 font-mono mt-2 inline-block transition-colors">support@vanshwealth.com</a>
            </p>
          </section>
          
        </div>
        
      </div>
    </div>
  );
}