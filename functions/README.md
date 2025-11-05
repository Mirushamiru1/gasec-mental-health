
# Cloud Functions (Stripe + Licensing)

1. Set environment variables for STRIPE_SECRET_KEY and STRIPE_ENDPOINT_SECRET in your deployment environment.
2. Implement createCheckoutSession to produce Stripe Checkout sessions for purchases.
3. Deploy via Firebase CLI: `firebase deploy --only functions`
