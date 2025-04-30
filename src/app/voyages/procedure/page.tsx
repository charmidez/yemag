

import Titrepage from "@/components/ui/titrepage"

const desc = "YEMAG est une école de langue qui vise à être une référence international dans l'enseignement de la langue allemande avec un environnement d'apprentissage exceptionnel."
const descDeutch = "Bei YEMAG glauben wir fest an die Bedeutung von Engagement, aktiver Teilnahme und Zusammenarbeit."


function Procedure() {
    return(
        <>
        <Titrepage titre="Procedure voyages" description={desc} descriptionDeutsch={descDeutch} className="bg-[url('/images/presentationtitre.jpg')]" />
        </>
    )
    
}

export default Procedure