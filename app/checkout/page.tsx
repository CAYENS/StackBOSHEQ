"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema } from "@/lib/validators";
import { z } from "zod";

const fields = ["fullName", "phone", "email", "telegram", "country", "city", "address", "postalCode", "comment"] as const;
type FormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { register, handleSubmit } = useForm<FormData>({ resolver: zodResolver(checkoutSchema), defaultValues: { deliveryMethod: "courier", paymentMethod: "usdt_trc20", items: [{ id: "demo", qty: 1, price: 100 }] } });

  return (
    <section className="container-luxe pb-24 pt-28">
      <h1 className="font-heading text-5xl">Checkout</h1>
      <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit(async (values) => {
        await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
        window.location.href = "/checkout/success";
      })}>
        {fields.map((name) => <input key={name} {...register(name)} placeholder={name} className="border border-white/20 bg-transparent p-3" />)}
        <select {...register("deliveryMethod")} className="border border-white/20 bg-transparent p-3"><option value="courier">Courier</option><option value="pickup">Pickup</option><option value="cdek">CDEK</option><option value="international">International shipping</option></select>
        <select {...register("paymentMethod")} className="border border-white/20 bg-transparent p-3"><option value="yookassa">YooKassa (placeholder)</option><option value="cloudpayments">CloudPayments (placeholder)</option><option value="tbank">TBank (placeholder)</option><option value="usdt_trc20">USDT TRC20</option><option value="btc">BTC</option><option value="eth">ETH</option><option value="stripe_card">Card (Stripe future)</option></select>
        <button className="btn-luxe md:col-span-2" type="submit">Place Order</button>
      </form>
    </section>
  );
}
