import { Star } from "lucide-react";

export default function RatingStars({ productRating, size }) {
  const stars = ["1", "2", "3", "4", "5"];
  return (
    <div className="flex gap-1">
      {stars.splice(0, Math.round(productRating) % 6).map((_, i) => (
        <Star
          size={size || 24}
          key={i}
          color="#ffd000"
          className="fill-[#ffd000]"
        />
      ))}
      {stars.map((_, i) => (
        <Star size={size || 24} key={i} color="#ffd000" />
      ))}
    </div>
  );
}
