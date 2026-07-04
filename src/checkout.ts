import { computeShippingCost } from "shipping-lib";

export function totalWithShipping(items: number, parcel: any): number {
  return items + computeShippingCost(parcel);
}
