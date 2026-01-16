import ServiceLayout from "./ServiceLayout";
import GraphicsDesignImage from "../../assets/GraphicsDesign.png";

const GraphicsAndDesign = () => {
  return (
    <ServiceLayout
      title="Graphics & Design"
      heroImage={GraphicsDesignImage}
      description="At EmpericTech, we believe that powerful visuals can transform the way you communicate your brand’s story. Whether through dynamic video editing, compelling motion graphics, or strategic graphic design, we craft engaging visuals that capture attention and leave a lasting impact. Our creative team blends artistic expertise with technical precision to deliver high-quality content tailored to your unique needs."
    >
      <h3 className="text-2xl font-semibold mb-2">Our Services Include</h3>
      <p className="text-gray-400 mb-6">
        We craft visually compelling content that enhances brand identity and
        engages audiences across platforms.
      </p>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Video Production & Motion Graphics:</strong> Create dynamic
          videos, motion graphics, and animations.
        </li>
        <li>
          ✔ <strong>Graphic Design & Brand Identity:</strong> Develop strong brand
          visuals, including logos, promotional materials, and social media
          graphics.
        </li>
        <li>
          ✔ <strong>Marketing & Promotional Materials:</strong> Design brochures,
          flyers, banners, and advertisements.
        </li>
        <li>
          ✔ <strong>Website & UI Graphics:</strong> Enhance digital experiences
          with custom-designed icons, infographics, and interface elements.
        </li>
        <li>
          ✔ <strong>Product Packaging & Print Design:</strong> Deliver impactful
          packaging and print materials to strengthen brand recognition.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-2">Why Choose Us?</h3>
      <p className="text-gray-400 mb-6">
        We are committed to delivering exceptional value to our clients through
        expertise, customization, and continuous support.
      </p>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Creative Excellence:</strong> Our designers and editors bring
          artistic vision and technical skill to every project.
        </li>
        <li>
          ✔ <strong>Strategic Approach:</strong> Every design choice is made with
          your brand’s goals in mind.
        </li>
        <li>
          ✔ <strong>Collaborative Process:</strong> We involve you at every stage
          to ensure the final product aligns with your vision.
        </li>
      </ul>
    </ServiceLayout>
  );
};

export default GraphicsAndDesign;
