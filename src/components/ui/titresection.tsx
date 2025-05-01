type TitresectionProps = {
  titre: string;
  className? : string
};

const Titresection = ({ titre, className }: TitresectionProps) => {
  return (
    <h2 className={`text-mine-bordeau lg:text-3xl md:text-md text-sm font-semibold uppercase pb-8 ${className} `}>
      {titre}
    </h2>
  );
};

export default Titresection;
