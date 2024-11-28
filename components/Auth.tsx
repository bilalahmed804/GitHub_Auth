''
import { signIn } from "@/lib/auth"
 
export default function Auth() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
} 