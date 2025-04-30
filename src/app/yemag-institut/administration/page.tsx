import Titrepage from "@/components/ui/titrepage";

const titre = "Administration & Corps enseignant";
const desc =
  "À YEMAG, nous croyons fermement en l'importance de l'engagement, de la participation active et de la collaboration.";
const descDeutch =
  "YEMAG, Sprachschule, strebt danach, weltweit eine Referenz im Sprachunterricht zu sein und bietet dabei eine außergewöhnliche Lernumgebung.";

{
  /*ADMINISTRATION & CORPS ENSEIGNANT*/
}
function Administration() {
  return (
    <>
      <Titrepage
        titre={titre}
        description={desc}
        descriptionDeutsch={descDeutch}
        className="bg-[url('/images/administration.jpg')] bg-cover bg-fixed"
      />
    </>
  );
}

export default Administration;
