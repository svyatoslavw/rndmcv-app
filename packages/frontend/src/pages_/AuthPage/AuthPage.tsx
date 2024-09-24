import { FormContainer } from "./FormContainer"
import { StageProvider } from "@/entities/user"
import { CredentialsProvider } from "@/features/Auth/useCredentials"

const AuthPage = () => {
  return (
    <CredentialsProvider>
      <StageProvider>
        <FormContainer />
      </StageProvider>
    </CredentialsProvider>
  )
}

export { AuthPage }
