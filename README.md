# kag-review-client

Checkout flow for the storefront. Shipping is delegated to the shared library.

The client calls `computeShippingCost(parcel)` from `shipping-lib` for every
order at checkout. This is a hard dependency — if the shipping API changes,
checkout breaks.
