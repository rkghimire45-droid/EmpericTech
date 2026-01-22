import videoFile from "../../assets/video.mp4";

const HomePage = () => {
  return (
    <div>
      {/* Full-Screen Hero Video Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          src={videoFile}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay for Better Text Contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* Hero Text Overlay */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center text-white">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Innovate. <br />
              Integrate. <br />
              <span className="text-red-500">Accelerate.</span>
            </h1>

            <p className="text-xl md:text-2xl font-light mb-8">
              Driving smarter operations, stronger security, and scalable growth
              through tailored digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator (Optional) */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Your Strategic Partner in{" "}
              <span className="text-red-500">Digital Transformation</span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              At EmpericTech, we go beyond traditional IT services—we become an
              extension of your team. From robust cybersecurity and data-driven
              insights to modern web development and digital marketing, we help
              businesses navigate complexity with clarity and confidence.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-white">Robust Cybersecurity</h3>
                  <p className="text-gray-400 text-sm">
                    Protect your business with cutting-edge security solutions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-white">Data-Driven Insights</h3>
                  <p className="text-gray-400 text-sm">
                    Make informed decisions with powerful analytics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-red-500 flex-shrink-0 mt-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-white">Modern Development</h3>
                  <p className="text-gray-400 text-sm">
                    Build scalable web and mobile applications
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Video Section */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video">
              <video
                src={videoFile}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
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
