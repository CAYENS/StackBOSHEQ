"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <section className="container-luxe py-20">
      <div className="mx-auto max-w-lg border border-white/15 p-8">
        <h1 className="font-heading text-5xl uppercase">Register</h1>
        <form
          className="mt-8 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const res = await fetch("/api/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
            if (!res.ok) {
              const data = await res.json();
              return setError(data.error || "Registration failed");
            }
            router.push("/account/login");
          }}
        >
          <input className="w-full border border-white/20 bg-transparent p-3" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="w-full border border-white/20 bg-transparent p-3" placeholder="Password (min 6)" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error ? <p className="text-red-300">{error}</p> : null}
          <button className="btn-luxe" type="submit">Create Account</button>
        </form>
        <p className="mt-6 text-sm text-milk/75">Already registered? <Link href="/account/login" className="underline">Sign in</Link></p>
      </div>
    </section>
  );
}
