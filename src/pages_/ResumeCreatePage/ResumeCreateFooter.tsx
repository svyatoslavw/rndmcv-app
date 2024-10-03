import { InfoText } from "@/shared/ui"

const ResumeCreateFooter = () => {
  return (
    <div className="mx-auto w-full text-center">
      <InfoText text="Enter your personal information, professional summary, work experience, education, and skills in the form fields on the left." />
      <InfoText text="As you type, the resume preview on the right updates in real-time, allowing you to see how your resume will look." />
      <InfoText text="The layout adjusts to ensure your information is presented in a clean, professional format." />
    </div>
  )
}

export { ResumeCreateFooter }
