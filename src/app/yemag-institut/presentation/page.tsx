import Breadcrumb from "@/components/breadcumbs";
import Titrepage from "@/components/ui/titrepage";
import { data_presentation } from "@/app/yemag-institut/presentation/contents";
import Quote from "@/components/ui/quotes";
import Titresection from "@/components/ui/titresection";

const desc =
  "YEMAG est une école de langue qui vise à être une référence international dans l'enseignement de la langue allemande avec un environnement d'apprentissage exceptionnel.";
const descDeutch =
  "Bei YEMAG glauben wir fest an die Bedeutung von Engagement, aktiver Teilnahme und Zusammenarbeit.";

function Presentation() {
  let index = 0;
  const isEven = index % 2 === 0;
  return (
    <>
      <title>YEMAG - Présentation</title>
      <Titrepage
        titre="Presentation"
        description={desc}
        descriptionDeutsch={descDeutch}
        className="bg-[url('/images/presentationtitre.jpg')] bg-cover bg-fixed"
      />

      {/*Breadcrumb*/}
      <div className="px-16 py-2">
        <Breadcrumb />
      </div>

      {/*Content*/}
      <section>
        {data_presentation.map((item, index) => (
          <div
            key={index}
            className={` ${index % 2 === 0 ? "bg-gray-100" : ""} ${
              item.id == "quote" ? "bg-mine-white" : ""
            }  px-16 py-8`}
          >
            {item.quote && <Quote>{item.quote}</Quote>}
            {item.titre && (
              <div className="">
                <Titresection titre={item.titre} />
                <div className="">
                  <p>{item.paragraphe_1}</p>
                  <p>{item.paragraphe_2}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
}

export default Presentation;
