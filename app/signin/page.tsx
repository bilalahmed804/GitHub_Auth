import SignIn from "@/components/SignIn";
import SignOut from "@/components/SignOut";
import { auth } from "@/lib/auth";


export default async function SignInPage(){

   const user = await auth();

   return <div>{!user?.user ? <SignIn/> : <SignOut/>}</div>
}


