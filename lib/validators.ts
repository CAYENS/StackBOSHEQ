import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email(),
  telegram: z.string().optional(),
  country: z.string().min(2),
  city: z.string().min(2),
  address: z.string().min(5),
  postalCode: z.string().min(3),
  comment: z.string().optional(),
  deliveryMethod: z.enum(["courier", "pickup", "cdek", "international"]),
  paymentMethod: z.enum(["yookassa", "cloudpayments", "tbank", "usdt_trc20", "btc", "eth", "stripe_card"]),
  items: z.array(z.object({ id: z.string(), qty: z.number().min(1), price: z.number().positive() })).min(1)
});
