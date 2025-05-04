import Breadcrumb from "@/components/breadcumbs";
import Titrepage from "@/components/ui/titrepage";
import {
  titrePage,
  desc,
  descDeutch,
  data_presentation,
} from "@/app/yemag-institut/presentation/contents";
import Quote from "@/components/ui/quotes";
import Titresection from "@/components/ui/titresection";
import { Gallerie } from "@/components/ui/gallerie";
import { Cardsimple } from "@/components/ui/cardsimple";

function Presentation() {
  return (
    <>
      <title>YEMAG - Présentation</title>
      <Titrepage
        titre={titrePage}
        description={desc}
        descriptionDeutsch={descDeutch}
        className="bg-[url('/images/presentationtitre.jpg')] bg-cover bg-fixed"
      />

      {/*Breadcrumb*/}
      <div className="px-16 py-2 lg:px-64">
        <Breadcrumb />
      </div>

      {/*Content*/}
      <section>
        {data_presentation.map((item, index) => (
          <div
            key={index}
            className={` 
            ${index % 2 === 0 ? "bg-gray-100" : ""} 
            ${item.id == "quote" ? "bg-mine-white" : ""}
            ${item.id == "avenir" ? "flex flex-col gap-8" : ""}
            
            px-16 py-8 lg:px-64`}
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
            {item.imgSrc && <Gallerie srcImg={item.imgSrc} />}
            {item.card && (
                <Cardsimple
                  titreCard={item.card.titre}
                  descPargrCard={item.card.paragraphe}
                  imgSrc={item.card.imgSrc}
                  button={item.card.button}
                />
              )}
            
          </div>
        ))}
      </section>
    </>
  );
}

export default Presentation;
