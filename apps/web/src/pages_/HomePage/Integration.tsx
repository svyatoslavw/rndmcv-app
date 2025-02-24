import { GithubIcon, GoogleIcon, LinkedInIcon } from "@rndm/ui/icons"

const Integration = () => {
  return (
    <section className="space-y-6">
      <div className="border-primary/20 bg-primary/5 rounded-xl border p-8 text-center">
        <h3 className="mb-1 text-2xl font-bold">Seamless Integrations</h3>
        <p className="text-muted-foreground mx-auto max-w-2xl text-balance text-sm">
          Import directly from your favorite platforms
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-8 opacity-90">
          <LinkedInIcon className="size-10" />
          <GithubIcon className="size-10" />
          <GoogleIcon className="size-10" />
        </div>
      </div>
    </section>
  )
}

export { Integration }
