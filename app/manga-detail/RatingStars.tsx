"use client";

import { FaStar } from "react-icons/fa";
import { MangaRatingType } from "../types/Manga";

interface IProp {
  rating: MangaRatingType | null;
  onRate: (value: number) => void;
  onClear: () => void;
}

const RatingStars: React.FC<IProp> = ({ rating, onRate, onClear }) => {
  const myRating = rating?.myRating ?? 0;

  return (
    <div className="flex items-center gap-2 mt-1">
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            type="button"
            aria-label={`Rate ${value} star${value > 1 ? "s" : ""}`}
            onClick={() => (value === myRating ? onClear() : onRate(value))}
            className="p-0.5"
          >
            <FaStar
              size={18}
              className={value <= myRating ? "text-accent" : "text-border"}
            />
          </button>
        ))}
      </div>
      {rating && rating.ratingCount > 0 && (
        <span className="text-ink-faint text-[12px]">
          {rating.averageRating?.toFixed(1)} ({rating.ratingCount})
        </span>
      )}
    </div>
  );
};

export default RatingStars;
