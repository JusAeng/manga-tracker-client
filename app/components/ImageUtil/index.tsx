import Image, { StaticImageData } from "next/image";
import noimage from "@/app/assets/pictures/noimage.jpg";

interface IProp {
  image: string | StaticImageData;
  w: number;
  h: number;
  objectFit?: "cover" | "contain";
  imageClass?: string;
  callback?: () => void;
}

const ImageUtil: React.FC<IProp> = ({
  image,
  w,
  h,
  objectFit,
  imageClass,
  callback,
}) => {
  return (
    <div className={`relative`} style={{ height: `${h}px`, width: `${w}px` }}>
      <Image
        src={image || noimage}
        alt=""
        fill
        sizes="100%"
        style={{
          objectFit: objectFit ? objectFit : "cover",
        }}
        className={imageClass}
        onClick={callback}
      />
    </div>
  );
};

export default ImageUtil;
