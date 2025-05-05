import Image from "next/image";

type CardsimpleProps = {
  titreCard: string;
  imgSrc: string;
  descPargrCard: string[];
  button?: string;
};

export function Cardsimple({
  titreCard,
  imgSrc,
  descPargrCard,
  button,
}: CardsimpleProps) {
  return (
    <>
        <div className="card lg:card-side bg-mine-redlight rounded-mine-rounded w-full">
          <Image
            src={imgSrc}
            alt="Image"
            className="lg:w-100 object-cover lg:rounded-l-mine-rounded md:rounded-t-mine-rounded rounded-t-mine-rounded lg:rounded-r-mine-carre"
            width={2000}
            height={2000}
          />
          <div className="card-body flex flex-col justify-between">
            <div className="">
            <h1 className="text-xl font-bold">{titreCard}</h1>
            <div className="flex flex-col gap-2 pb-4">
              {descPargrCard.map((text, index) => (
                <p key={index} className={` ${index === descPargrCard.length - 1 ? "font-semibold" : ""} `}>
                  {text}
                </p>
              ))}
            </div>
            </div>

            <button className="btn rounded-mine-rounded bg-gray-700 text-mine-white">
              {button}
            </button>
          </div>
        </div>
      
    </>
  );
}
