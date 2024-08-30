import { FormContainer } from "./FormContainer"
import { StageProvider } from "@/entities/user"
import { CredentialsProvider } from "@/entities/user/hooks/useCredentials"

export default function Auth() {
  return (
    <CredentialsProvider>
      <StageProvider>
        <FormContainer />
      </StageProvider>
    </CredentialsProvider>
  )
}
