import { ReactNode } from "react";

type TitrepageProps = {
  className?: string;
  titre: string;
  description: string;
  descriptionDeutsch: string;
  children? : ReactNode
};

function Titrepage({
  className,
  titre,
  description,
  descriptionDeutsch,
  children
}: TitrepageProps) {
  return (
    <>
      <div className={`flex flex-col items-center justify-center px-16 py-36 lg:px-64 ${className}`}>
        <div className="bg-mine-opacitymine p-4 rounded-lg">
        <h1 className="text-4xl font-bold text-center">{titre}</h1>
        <p className="text-lg font-light text-center mt-2">
          {descriptionDeutsch}
        </p>
        {children}
        <p className="text-2xl font-semibold text-center mt-2">{description}</p>
        </div>
      </div>
    </>
  );
}

export default Titrepage;
