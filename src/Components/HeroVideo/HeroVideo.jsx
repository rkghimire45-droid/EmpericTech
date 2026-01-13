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
      <section class="bg-black text-white py-24">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">


          <div>
            <h1 class="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Innovate. <br />
              Integrate. <br />
              <span class="text-red-500">Accelerate.</span>
            </h1>

            <p class="mt-6 text-lg text-black-300">
              Driving smarter operations, stronger security, and scalable growth
              through tailored digital solutions.
            </p>

            <p class="mt-6 text-black-400 leading-relaxed">
              <span class="text-white font-semibold">
                EmpericTech: Your Strategic Partner in Digital Transformation.
              </span>
              <br /><br />
              At EmpericTech, we go beyond traditional IT services—we become an
              extension of your team. From robust cybersecurity and data-driven
              insights to modern web development and digital marketing, we help
              businesses navigate complexity with clarity and confidence.
            </p>
          </div>

        
          <div class="relative rounded-xl overflow-hidden">
            <div className="w-full flex justify-center mt-10">
              <video
                src={videoFile}
                controls
                className="w-full max-w-6xl rounded-lg shadow-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            

           
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;



