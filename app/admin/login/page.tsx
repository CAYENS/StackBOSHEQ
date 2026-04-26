export default function AdminLoginPage() {
  return (
    <section className="mx-auto max-w-md px-6 py-32 font-ui text-white">
      <h1 className="text-3xl font-semibold">Admin Login</h1>
      <form className="mt-6 space-y-4">
        <input className="w-full border border-white/20 bg-transparent p-3" placeholder="Email" />
        <input className="w-full border border-white/20 bg-transparent p-3" placeholder="Password" type="password" />
        <button className="w-full border border-white p-3">Sign In</button>
      </form>
    </section>
  );
}
