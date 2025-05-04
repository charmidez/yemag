import Image from "next/image";

type GallerieProps = {
  srcImg: string[];
};

export function Gallerie({ srcImg }: GallerieProps) {
  return (
    <>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-8">
          {srcImg.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`image-${index}`}
              className="h-auto object-cover relative aspect-square lg:w-full rounded-mine-rounded shadow-xl"
              width={3000}
              height={3000}
            />
          ))}
      </div>
    </>
  );
}
