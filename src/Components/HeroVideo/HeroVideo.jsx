import videoFile from "../../assets/video.mp4";

const HomePage = () => {
  return (
    <div>
      

      {/* Video Section */}
      <div className="w-full flex justify-center mt-10">
        <video
          src={videoFile}
          controls
          className="w-full max-w-5xl rounded-lg shadow-lg"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HomePage;



