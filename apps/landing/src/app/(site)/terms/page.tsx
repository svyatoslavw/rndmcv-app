export default function Terms() {
  return (
    <div className="prose container mx-auto px-4 md:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="text-primary bg-primary/10 mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
            Terms of Service
          </span>
          <h1 className="text-heading-2 mb-4">Terms & Conditions</h1>
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
            <h2 className="text-heading-4 heading-underline mb-4">Welcome to CV Builder</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions outline the rules and regulations for the use of CV
              Builder's website and application. By accessing this website and using our
              application, we assume you accept these terms and conditions in full. Do not continue
              to use CV Builder if you do not accept all of the terms and conditions stated on this
              page.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">License</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Unless otherwise stated, CV Builder and/or its licensors own the intellectual property
              rights for all material on CV Builder. All intellectual property rights are reserved.
              You may view and/or print pages from cvbuilder.example.com for your own personal use
              subject to restrictions set in these terms and conditions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This project is licensed under the MIT License, which means you are free to:
            </p>
            <ul className="text-muted-foreground mt-2 list-disc space-y-2 pl-6">
              <li>Use the software for any purpose</li>
              <li>Change the software to suit your needs</li>
              <li>Share the software with your friends and family</li>
              <li>Share the changes you make</li>
            </ul>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Restrictions</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              You are specifically restricted from all of the following:
            </p>
            <ul className="text-muted-foreground list-disc space-y-2 pl-6">
              <li>Publishing any website material in any other media without proper attribution</li>
              <li>Selling, sublicensing and/or otherwise commercializing any website material</li>
              <li>Using this website in any way that is or may be damaging to this website</li>
              <li>Using this website in any way that impacts user access to this website</li>
              <li>
                Using this website contrary to applicable laws and regulations, or in a way that
                causes, or may cause, harm to the website, or to any person or business entity
              </li>
            </ul>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Your CV Content</h2>
            <p className="text-muted-foreground leading-relaxed">
              In these terms and conditions, "Your Content" shall mean any text, images, or other
              material you choose to include in your CV. By making Your Content available, you grant
              CV Builder a non-exclusive, worldwide, irrevocable, royalty-free license to use,
              reproduce, adapt, publish, translate and distribute it in any and all media. Your
              Content must be your own and must not be infringing on any third party's rights. CV
              Builder reserves the right to remove any of Your Content at any time without notice.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">No Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is provided "as is," with all faults, and CV Builder makes no express or
              implied representations or warranties, of any kind related to this website or the
              materials contained on this website. Additionally, nothing contained on this website
              shall be construed as providing advice to you.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall CV Builder, nor any of its officers, directors, and employees, be
              liable to you for anything arising out of or in any way connected with your use of
              this website, whether such liability is under contract, tort or otherwise, and CV
              Builder, including its officers, directors, and employees shall not be liable for any
              indirect, consequential, or special liability arising out of or in any way related to
              your use of this website.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You hereby indemnify to the fullest extent CV Builder from and against any and all
              liabilities, costs, demands, causes of action, damages, and expenses (including
              reasonable attorney's fees) arising out of or in any way related to your breach of any
              of the provisions of these terms.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these terms is found to be unenforceable or invalid under any
              applicable law, such unenforceability or invalidity shall not render these terms
              unenforceable or invalid as a whole, and such provisions shall be deleted without
              affecting the remaining provisions herein.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Variation of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              CV Builder is permitted to revise these terms at any time as it sees fit, and by using
              this website you are expected to review such terms on a regular basis to ensure you
              understand all terms and conditions governing use of this website.
            </p>
          </section>

          <section className="bg-card rounded-xl border p-6 shadow-sm">
            <h2 className="text-heading-4 heading-underline mb-4">Governing Law & Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms will be governed by and construed in accordance with the laws of the
              jurisdiction applicable to the operator of CV Builder, and you submit to the
              non-exclusive jurisdiction of the courts located in said jurisdiction for the
              resolution of any disputes.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
