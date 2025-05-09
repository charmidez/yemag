type AutoplayvideoProps = {
  srcMine: string;
};

const Autoplayvideo = ( {srcMine}: AutoplayvideoProps) => {
  return (
    <>
      <video  autoPlay muted loop playsInline src={srcMine} className="pointer-events-none">
        Votre navigateur ne peut lire cette vidéo
      </video>
    </>
  );
};

export default Autoplayvideo;
