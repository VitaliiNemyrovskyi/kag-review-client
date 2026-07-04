import { formatParcelLabel } from "shipping-lib";
export function printLabel(parcel: any): string {
  return formatParcelLabel(parcel);
}
