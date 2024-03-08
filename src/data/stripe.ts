import { env } from '@/env'
import Stripe from 'stripe'

export const stripe = new Stripe(String(env.STRIP_SECRET_KEY), {
  apiVersion: '2023-10-16',
  appInfo: {
    name: 'Dev Store',
  },
})
