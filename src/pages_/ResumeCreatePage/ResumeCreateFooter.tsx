import { InfoMessage } from "@/shared/ui"

const ResumeCreateFooter = () => {
  return (
    <div className="mx-auto w-full text-center">
      <InfoMessage text="Enter your personal information, professional summary, work experience, education, and skills in the form fields on the left." />
      <InfoMessage text="As you type, the resume preview on the right updates in real-time, allowing you to see how your resume will look." />
      <InfoMessage text="The layout adjusts to ensure your information is presented in a clean, professional format." />
    </div>
  )
}

export { ResumeCreateFooter }
