"use client";

import ImageUtil from "../components/ImageUtil";

interface Iprop {
  image: string;
  volumeNumber: number;
  publishDate: string | null;
}

const VolumnCard: React.FC<Iprop> = ({ image, volumeNumber, publishDate }) => {
  return (
    <div className="flex justify-between items-center gap-3 px-4 py-3 border-b border-border last:border-b-0">
      <div className="flex items-center gap-3">
        <ImageUtil image={image} w={40} h={56} imageClass="rounded-lg" />
        <span className="text-ink text-[14px] font-medium">
          Vol. {volumeNumber}
        </span>
      </div>
      {publishDate && (
        <span className="text-ink-faint text-[12px]">
          {publishDate.slice(0, 10)}
        </span>
      )}
    </div>
  );
};

export default VolumnCard;
