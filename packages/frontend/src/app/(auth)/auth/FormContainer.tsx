"use client"

import { ConfirmationForm } from "./ConfirmationForm"
import { LoginForm } from "./LoginForm"
import { RegisterForm } from "./RegisterForm"
import { Stage, useStage } from "@/entities/user"

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
