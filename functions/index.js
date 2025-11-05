
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_xxx');

// admin.initializeApp(); // enable when using service account

exports.createCheckoutSession = functions.https.onCall(async (data, context) => {
  // data: {priceId, schoolId, studentCount}
  // TODO: validate caller is admin, create Stripe Checkout session and return session id
  return { error: 'Not implemented - replace with your Stripe integration.' };
});

exports.handleStripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers['stripe-signature'] || '';
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_ENDPOINT_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  // handle events
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('Checkout completed for session:', session.id);
    // TODO: attach license to Firestore
  }
  res.json({received:true});
});
