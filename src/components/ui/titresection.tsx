
type TitresectionProps = {
    titre : string
}

const Titresection = ({titre} : TitresectionProps) => {
    return(
        <h2 className="text-mine-bordeau lg:text-3xl md:text-md text-sm font-semibold uppercase pb-8" >{titre}</h2>
    )
}

export default Titresection