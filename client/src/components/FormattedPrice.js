export default function FormattedPrice(price) {
  return price.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
}
