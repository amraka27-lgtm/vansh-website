import Link from "next/link";

export default function RefundPolicy() {
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
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">Cancellation & Refund Policy</h1>
          <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Effective Date: May 2026</p>
        </div>

        {/* Legal Content */}
        <div className="space-y-8 text-sm leading-relaxed text-slate-400">
          
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Nature of the Service (Digital SaaS)</h2>
            <p>
              VanshWealth is a digital Software-as-a-Service (SaaS) application. Upon the successful processing of a subscription fee (Monthly, Annual, or Lineage VIP), the user is instantly granted full, unrestricted access to premium tier features, advanced algorithmic calculators, and encrypted cloud synchronization. Due to the immediate delivery and intangible nature of this digital software, all transactions are final.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Strict No-Refund Protocol</h2>
            <p className="mb-4">
              All payments processed through VanshWealth (via Razorpay, Google Play, or any authorized third-party gateway) are strictly non-refundable.
            </p>
            <ul className="space-y-3 pl-4 border-l-2 border-slate-800 ml-2">
              <li>
                We do not offer prorated refunds for partially unused billing periods.
              </li>
              <li>
                We do not offer refunds for "accidental" purchases or failure to utilize the app's features after a subscription is activated.
              </li>
              <li>
                <strong className="text-red-400 block mb-1">Chargeback Policy</strong>
                Any chargeback or payment dispute filed through your bank or credit card issuer without prior communication will result in the immediate and permanent termination of your VanshWealth account.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Subscription Auto-Renewal & Mandates</h2>
            <p>
              If you opted into an auto-renewing subscription tier, your chosen payment method (Credit Card, UPI AutoPay, or Google Play Billing) will be automatically charged at the end of each billing cycle. It is your sole responsibility to manage, pause, or cancel your renewal mandate before the next billing date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Cancellation Execution</h2>
            <p className="mb-4">
              You may cancel your subscription at any time without penalty. Deleting the VanshWealth app from your device does <strong>not</strong> cancel your subscription. You must explicitly cancel the billing mandate through your respective platform:
            </p>
            <ul className="space-y-4 pl-4 border-l-2 border-slate-800 ml-2">
              <li>
                <strong className="text-slate-200 block mb-1">If billed via Google Play:</strong>
                You must execute the cancellation strictly through the Google Play Store &gt; Payments & Subscriptions menu.
              </li>
              <li>
                <strong className="text-slate-200 block mb-1">If billed via Razorpay:</strong>
                You may manage and cancel your mandate directly within the VanshWealth app’s Account Settings or via the link provided in your Razorpay invoice email.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Post-Cancellation Access</h2>
            <p>
              Upon cancellation, no future charges will be applied. Your account will not be immediately downgraded. You will retain full access to your premium features until the exact expiration date of your current paid billing cycle. Following expiration, your account will safely downgrade to the Free Tier, and certain premium functionalities will lock.
            </p>
          </section>
          
        </div>
        
      </div>
    </div>
  );
}