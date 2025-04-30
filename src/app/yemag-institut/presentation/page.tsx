import Titrepage from "@/components/ui/titrepage";

const desc =
  "YEMAG est une école de langue qui vise à être une référence international dans l'enseignement de la langue allemande avec un environnement d'apprentissage exceptionnel.";
const descDeutch =
  "Bei YEMAG glauben wir fest an die Bedeutung von Engagement, aktiver Teilnahme und Zusammenarbeit.";

function Presentation() {
  return (
    <>
      <Titrepage
        titre="Presentation"
        description={desc}
        descriptionDeutsch={descDeutch}
        className="bg-[url('/images/presentationtitre.jpg')] bg-cover bg-fixed"
      />
    </>
  );
}

export default Presentation;
