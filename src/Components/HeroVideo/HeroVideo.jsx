import videoFile from "../../assets/videos/hero.mp4";

const HeroVideo = () => {
  return (
    <section className="w-full h-[95vh] overflow-hidden">
      <video
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default HeroVideo;
