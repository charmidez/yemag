
type TitrepageProps = {
    className?: string;
    titre: string;
    description: string;
    descriptionDeutsch : string;
}

function Titrepage({className, titre, description, descriptionDeutsch} : TitrepageProps) {
    return(
        <>
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <h1 className="text-4xl font-bold text-center">{titre}</h1>
            <p className="text-lg font-light text-center mt-2">{descriptionDeutsch}</p>
            <p className="text-2xl font-semibold text-center mt-2">{description}</p>
        </div>
        </>
    )
}

export default Titrepage;