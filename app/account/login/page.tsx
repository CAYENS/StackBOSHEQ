"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <section className="container-luxe py-20">
      <div className="mx-auto max-w-lg border border-white/15 p-8">
        <h1 className="font-heading text-5xl uppercase">Sign In</h1>
        <form
          className="mt-8 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const result = await signIn("credentials", { email, password, redirect: false });
            if (result?.error) return setError("Invalid credentials");
            router.push("/");
          }}
        >
          <input className="w-full border border-white/20 bg-transparent p-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full border border-white/20 bg-transparent p-3" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error ? <p className="text-red-300">{error}</p> : null}
          <button className="btn-luxe" type="submit">Sign In</button>
        </form>
        <p className="mt-6 text-sm text-milk/75">No account? <Link href="/account/register" className="underline">Create one</Link></p>
      </div>
    </section>
  );
}
