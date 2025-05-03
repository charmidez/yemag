import Image from 'next/image'

type CardcolorProps = {
  titre: string;
  desc: string;
  images: string;
  couleur: string;
};

const Cardcolor = ({ titre, desc, images, couleur }: CardcolorProps) => {
  return (
    <>
      <div
        className={`card bg-gray ${couleur} border-8 rounded-mine-rounded items-center justify-center`}
      >
        <Image
          src={images}
          alt={titre}
          width={100}
          height={100}
          className="lg:w-30 md:w-30 w-15 rounded-mine-sub-rounded mt-4"
        />
        <div className="card-body p-4 items-center justify-center">
          <h2 className="text-lg font-bold uppercase">{titre}</h2>
          <p className="text-sm">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Cardcolor;
