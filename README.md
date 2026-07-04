# kag-review-client

Checkout flow for the storefront. Shipping is delegated to the shared library.

The client depends on the `computeShippingCost` function exported by
`shipping-lib` and calls it for every order at checkout. This is a hard
contract — if `computeShippingCost` is renamed or removed upstream, checkout
in this repository breaks.

Labels are rendered via `formatParcelLabel` from the shared library.
