import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader
} from "@rndm/ui/components"
import {
  ArrowRight,
  BarChart,
  CheckCircle,
  FileText,
  Flame,
  Sparkles,
  User,
  Zap
} from "lucide-react"
import Link from "next/link"

import { PUBLIC_URLS } from "@/shared/config"
import { CUSTOMIZATION_STATE, GENERAL_TEMPLATES } from "@/shared/constants"
import { PageDescription, PageHeader, PageTitle, PageWrapper } from "@/shared/ui"
import { PersonBlock } from "@/widgets/ResumeDocument/PersonBlock"
import { GithubIcon, GoogleIcon, LinkedInIcon } from "@rndm/ui/icons"

export default function AboutPage() {
  return (
    <PageWrapper className="max-w-4xl gap-8 text-pretty">
      <PageHeader>
        <PageTitle>
          <span className="from-primary bg-gradient-to-r to-purple-600 bg-clip-text text-transparent">
            How It Works
          </span>
        </PageTitle>
        <PageDescription>
          Master the art of resume creation with our intelligent builder powered by AI technology.
        </PageDescription>
      </PageHeader>

      <div className="flex flex-col gap-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter">
            Create a Winning Resume in 4 Steps
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex aspect-square h-10 w-10 items-center justify-center rounded-full">
                  1
                </div>
                <div>
                  <h3 className="text-base font-semibold">Template Selection</h3>
                  <p className="text-muted-foreground text-sm">
                    Choose from 8+ professionally designed templates optimized for different
                    industries and experience levels.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex aspect-square h-10 w-10 items-center justify-center rounded-full">
                  2
                </div>
                <div>
                  <h3 className="text-base font-semibold">Smart Import</h3>
                  <p className="text-muted-foreground text-sm">
                    Import existing resumes or LinkedIn profiles for instant AI analysis and
                    conversion.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex aspect-square h-10 w-10 items-center justify-center rounded-full">
                  3
                </div>
                <div>
                  <h3 className="text-base font-semibold">AI-Guided Editing</h3>
                  <p className="text-muted-foreground text-sm">
                    Receive real-time suggestions for improvements in content, structure, and
                    keyword optimization.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 text-primary flex aspect-square h-10 w-10 items-center justify-center rounded-full">
                  4
                </div>
                <div>
                  <h3 className="text-base font-semibold">Export & Track</h3>
                  <p className="text-muted-foreground text-sm">
                    Download in multiple formats (PDF, DOCX) or share securely with tracking for
                    recruiter engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link href={PUBLIC_URLS.BUILDER}>
            <Button className="from-primary group mt-6 bg-gradient-to-r to-purple-600 text-lg font-semibold hover:opacity-90">
              Start Building Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </section>

        <Card className="border-primary/20 from-background to-primary/5 bg-gradient-to-br">
          <CardHeader className="flex flex-row items-center gap-4 space-y-0">
            <Sparkles className="text-primary h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">RNDM Intelligence Engine</h2>
              <p className="text-muted-foreground">Next-gen AI assistance for resume perfection</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-primary/5 space-y-2 rounded-lg p-4">
                <h3 className="text-primary font-semibold">Smart Features</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li>Real-time ATS optimization scoring</li>
                  <li>Context-aware content generation</li>
                  <li>Industry-specific keyword suggestions</li>
                  <li>Automated achievement quantifier</li>
                </ul>
              </div>
              <div className="bg-primary/5 space-y-2 rounded-lg p-4">
                <h3 className="text-primary font-semibold">Benefits</h3>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  <li>Increase interview chances by 3×</li>
                  <li>Save 4+ hours on resume crafting</li>
                  <li>Professional design without effort</li>
                  <li>Multi-industry templates</li>
                </ul>
              </div>
            </div>

            <div className="border-primary/20 bg-primary/5 rounded-lg border p-4">
              <div className="flex items-start gap-3">
                <Zap className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                <div>
                  <p className="font-semibold">Pro Tip: AI-Powered Optimization</p>
                  <p className="text-muted-foreground text-sm">
                    Our AI analyzes your content in real-time, providing instant feedback through
                    <Badge
                      variant="outline"
                      className="border-primary/30 bg-primary/10 mx-1 scale-90"
                    >
                      <Sparkles className="mr-1 h-3 w-3" />
                      AI Score
                    </Badge>
                    indicators. Aim for 85%+ score for best results!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="space-y-6">
          <div className="border-primary/20 bg-primary/5 relative overflow-hidden rounded-xl border p-8">
            <div className="absolute right-4 top-4">
              <Badge variant="secondary" className="bg-primary/10">
                Live Preview
              </Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">AI-Powered Enhancements</h3>
                <p className="text-muted-foreground">
                  See how our AI transforms basic content into professional achievements
                </p>
                <Button variant="outline">
                  Try AI Rewriter
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="bg-muted/50 flex flex-col justify-center rounded-lg p-4">
                <div className="text-muted-foreground space-y-2 text-sm">
                  <p className="line-through">"Managed project deadlines"</p>
                  <p className="text-primary mt-2">
                    → "Orchestrated 15+ cross-functional projects delivering 95% on-time completion"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter">Professional Content Guidance</h2>
          <Card className="border-primary/20">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="bg-primary/10 text-primary rounded-lg p-2">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Personal Profile</h3>
                <p className="text-muted-foreground">Making a strong first impression</p>
              </div>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <PersonBlock
                    customization={CUSTOMIZATION_STATE}
                    person={GENERAL_TEMPLATES.person}
                  />
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium">Do:</p>
                    <ul className="list-disc pl-5">
                      <li>Use professional contact information</li>
                      <li>Include relevant social profiles</li>
                      <li>Add a concise professional summary</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-destructive/5 border-destructive/20 rounded-lg border p-4">
                  <div className="space-y-2">
                    <h4 className="text-destructive font-medium">Bad Example</h4>
                    <p className="text-muted-foreground text-sm">
                      ✗ Unprofessional email: coolguy123@email.com
                      <br />
                      ✗ Missing LinkedIn profile
                      <br />✗ Overly long summary (5+ sentences)
                    </p>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-medium">AI Optimization</h4>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Our system checks for: proper email format, social profile completeness, and
                    summary length optimization.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <div className="border-primary/20 bg-primary/5 rounded-xl border p-8 text-center">
            <h3 className="mb-2 text-2xl font-bold">Seamless Integrations</h3>
            <p className="text-muted-foreground mx-auto max-w-2xl text-balance">
              Import directly from your favorite platforms
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-90">
              <LinkedInIcon className="size-10" />
              <GithubIcon className="size-10" />
              <GoogleIcon className="size-10" />
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter">Career Success Toolkit</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <FileText className="text-primary h-8 w-8" />
                <div>
                  <h3 className="text-lg font-bold">Learning Resources</h3>
                  <p className="text-muted-foreground text-sm">Master the art of resume writing</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "ATS Optimization Guide",
                  "Industry-Specific Templates",
                  "Salary Negotiation Handbook"
                ].map((resource, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-2">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{resource}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                <BarChart className="text-primary h-8 w-8" />
                <div>
                  <h3 className="text-lg font-bold">Analytics Dashboard</h3>
                  <p className="text-muted-foreground text-sm">Track your resume performance</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Recruiter Engagement Metrics",
                  "Application Success Rates",
                  "Skill Gap Analysis"
                ].map((metric, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="bg-primary/10 rounded-full p-2">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <span className="font-medium">{metric}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center">
          <div className="border-primary/20 bg-primary/5 rounded-xl border p-8">
            <h3 className="mb-4 text-2xl font-bold">Ready to Transform Your Career?</h3>
            <p className="text-muted-foreground mx-auto mb-6 max-w-xl">
              Join thousands of professionals who landed dream jobs with our platform
            </p>
            <Link href={PUBLIC_URLS.BUILDER}>
              <Button className="from-primary group h-12 bg-gradient-to-r to-purple-600 text-lg font-semibold hover:opacity-90">
                Start Free
                <Flame className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <Accordion type="multiple" className="w-full">
            {[
              {
                question: "How secure is my data?",
                answer: "We use enterprise-grade encryption and never share your information."
              },
              {
                question: "Can I customize templates?",
                answer: "All templates are fully editable with our visual style editor."
              },
              {
                question: "What file formats are supported?",
                answer: "Export to PDF, DOCX, or share via secure link."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="hover:bg-muted/5 rounded-lg px-4 py-3">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
    </PageWrapper>
  )
}
