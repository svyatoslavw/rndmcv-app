"use client"

import { Stage, useStage } from "@/entities/user"
import { ConfirmationForm, LoginForm, RegisterForm } from "@/features"

const component: Record<Stage, React.ReactNode> = {
  login: <LoginForm />,
  register: <RegisterForm />,
  confirmation: <ConfirmationForm />
}

const FormContainer = () => {
  const { stage } = useStage()

  return component[stage]
}

export { FormContainer }
