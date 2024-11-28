'use client'
import { signIn } from "next-auth/react";



export default function SignIn() {
    return (
      <div className="max-w-7xl min-h-screen mx-auto text-center mt-20">
        <h1 className="text-4xl tracking-tight font-bold mb-6">Sign In</h1>
        <button
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-2 items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          onClick={() => signIn("github")}
        >
        
          Sign In With Github
        </button>{" "}
      </div>
    );
  }