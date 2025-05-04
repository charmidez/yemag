type TitresectionProps = {
  titre: string;
  className? : string
};

const Titresection = ({ titre, className }: TitresectionProps) => {
  return (
    <h2 className={`text-mine-bordeau lg:text-3xl md:text-2xl text-xl font-semibold uppercase lg:pb-4 pb-2 ${className} `}>
      {titre}
    </h2>
  );
};

export default Titresection;
