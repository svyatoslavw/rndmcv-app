export default function PrivacyPage() {
  return (
    <div className="prose container mx-auto px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="text-primary bg-primary/10 mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
            Privacy Policy
          </span>
          <h1 className="text-heading-2 mb-4">Your Privacy Matters</h1>
          <p className="text-muted-foreground text-lg">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy explains how our open-source CV Builder collects, uses, and
              protects your information when you use our service. We respect your privacy and are
              committed to protecting your personal data.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Our CV Builder may collect the following types of information:
            </p>
            <ul className="text-muted-foreground list-disc space-y-2 pl-6">
              <li>
                Information you provide when creating your CV (name, contact details, work history,
                education, skills)
              </li>
              <li>Usage data and analytics to improve our service</li>
              <li>Device and browser information</li>
            </ul>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The information we collect is used for:
            </p>
            <ul className="text-muted-foreground list-disc space-y-2 pl-6">
              <li>Providing and maintaining our CV creation service</li>
              <li>Improving and personalizing your experience</li>
              <li>Understanding how users interact with our application</li>
              <li>Developing new features and functionality</li>
            </ul>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Data Storage and Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              All CV data is stored locally in your browser by default. We implement appropriate
              security measures to protect against unauthorized access, alteration, disclosure, or
              destruction of your personal information. When you choose to save your CV to your
              account, we use industry-standard encryption and security practices to protect your
              data.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Sharing Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information
              to outside parties. This does not include trusted third parties who assist us in
              operating our website, conducting our business, or servicing you, so long as those
              parties agree to keep this information confidential.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              As a user of our CV Builder, you have the right to:
            </p>
            <ul className="text-muted-foreground list-disc space-y-2 pl-6">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
            </ul>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service and
              hold certain information. Cookies are files with a small amount of data which may
              include an anonymous unique identifier. You can instruct your browser to refuse all
              cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a
                href="mailto:privacy@cvbuilder.example.com"
                className="text-primary hover:underline"
              >
                example@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
