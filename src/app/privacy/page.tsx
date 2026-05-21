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
              VanshWealth is engineered upon a strict Privacy-First, Zero-Knowledge architecture. We understand the highly sensitive nature of multi-generational wealth data. Therefore, all critical inputs—including exact net worth, debt distributions, and legacy vault nominees—are encrypted directly on your local device utilizing military-grade AES-256 protocols before any transmission occurs. Our cloud infrastructure stores this data exclusively as scrambled ciphertext. We do not possess the decryption keys to read, analyze, or access your specific financial values.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Data Collection & Processing</h2>
            <p className="mb-4">To successfully operate the application and provide secure synchronization, we collect and process the following specific data matrices:</p>
            <ul className="space-y-4 pl-4 border-l-2 border-slate-800 ml-2">
              <li>
                <strong className="text-slate-200 block mb-1">Account Identifiers & Authentication</strong>
                Email address, Full Name, and Date of Birth to establish secure authentication loops and identity verification. Biometric authentication (Face ID/Fingerprint) is processed entirely locally on your device hardware; we never collect, transmit, or store biometric templates.
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">Approximate Regional Location</strong>
                We capture your state of residence (India) or overarching country metadata during registration. This is explicitly required to load accurate regional taxation calculation models and apply localized currency formatting frameworks. We absolutely do not track real-time GPS coordinates, background location, or active physical movements.
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">User Photos & Interface Assets</strong>
                Should you choose to personalize your command dashboard, our software permits the upload of a profile picture. This image asset is stored securely within an isolated cloud storage bucket and utilized entirely for localized user-interface rendering. Providing this photo is strictly optional and can be removed at any time.
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">Encrypted Payload Synchronization</strong>
                Financial ledger entries, asset valuations, debt matrices, and Joint Khata configuration pathways are synchronized to the cloud purely as encrypted ciphertext to enable multi-device access and spouse-syncing capabilities.
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">Telemetry Data & Infrastructure Health</strong>
                Anonymous, non-identifiable transaction IDs, basic device hardware tokens, and aggregated crash reports are captured to coordinate secure sessions, process premium subscription tier authentications, and ensure global app stability.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Strict Non-Disclosure & Third-Party Infrastructure</h2>
            <p>
              VanshWealth actively rejects the advertising-supported business model. Your personal identity, location data, and encrypted financial footprints are never sold, rented, brokered, or exchanged with third-party ad networks, financial institutions, or marketing agencies. Data transmission is strictly limited to essential infrastructure partners (e.g., Supabase for encrypted cloud hosting, Resend for email authentication routing, and encrypted billing gateways) solely for the purpose of maintaining operational integrity. All partners comply with global security standards including SOC2 and ISO 27001.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Data Retention and Right to Absolute Erasure</h2>
            <p className="mb-4">
              You possess ultimate sovereign control over your digital footprint. Users may mandate total account and data destruction through two available vectors:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Initiating the automated <strong>"Deactivate Account"</strong> configuration mechanism embedded directly inside the application's Account Settings pane.</li>
              <li>Transmitting a direct deletion mandate from your registered email address to our data controller desk at <a href="mailto:support@vanshwealth.com" className="text-amber-500 hover:underline">support@vanshwealth.com</a>.</li>
            </ul>
            <p>
              Upon triggering a deletion sequence, your profile identifiers, approximate location metrics, uploaded user photos, and all encrypted cloud tables enter an immediate 30-day secure deactivation hold. During this window, you may reverse the request and restore database access by re-authenticating with your original credentials. If no restoration action is executed within 30 days, your entire digital footprint is permanently, automatically, and irreversibly purged from our live production servers and backup clusters in compliance with the Information Technology Act, 2000 and global data protection frameworks.
            </p>
            <p className="mt-2 text-xs italic text-slate-500">
              *Note: Historical billing meta-records linked to premium subscription checkouts are securely retained only for the duration legally mandated for corporate audit, tax compliance, and anti-money laundering frameworks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Policy Modifications</h2>
            <p>
              As our architectural sub-systems evolve, we may update this Privacy Policy. Any material changes to how we handle your encrypted data, location metrics, or personal identifiers will be communicated via direct email or a prominent notification within the VanshWealth application dashboard prior to the changes taking effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Contact the Data Controller</h2>
            <p>
              For legal inquiries, privacy concerns, encryption audits, or manual data erasure queries, our data controller desk is available at: <br />
              <a href="mailto:support@vanshwealth.com" className="text-amber-500 hover:text-amber-400 font-mono mt-2 inline-block transition-colors">support@vanshwealth.com</a>
            </p>
          </section>
          
        </div>
        
      </div>
    </div>
  );
}