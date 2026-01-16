import ServiceLayout from "./ServiceLayout";
import UIUXImage from "../../assets/UIUX.png";

const UIUXDesign = () => {
  return (
    <ServiceLayout
      title="UI/UX Design"
      heroImage={UIUXImage}
      description="At EmpericTech, we are passionate about creating user-centric designs that not only look stunning but also provide an exceptional user experience. Our team of skilled designers and developers work collaboratively to craft intuitive, engaging, and efficient digital products that meet the unique needs of your business and your users."
    >
      <h3 className="text-2xl font-semibold mb-6">Our Services Include</h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>User Research & Analysis:</strong> Understand your audience’s needs, behaviors, and pain points to create user-centric designs.
        </li>
        <li>
          ✔ <strong>UI/UX Design:</strong> Develop seamless, accessible, and responsive interfaces that enhance digital interactions.
        </li>
        <li>
          ✔ <strong>Prototyping & Testing:</strong> Validate designs with interactive prototypes to refine usability and performance.
        </li>
        <li>
          ✔ <strong>Development & Implementation:</strong> Collaborate with developers to bring designs to life with modern technologies.
        </li>
        <li>
          ✔ <strong>Ongoing Support & Maintenance:</strong> Ensure continued optimization and updates for long-term usability.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Why Choose Us?</h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Expertise:</strong> With years of experience in UI/UX design, we handle projects of any complexity.
        </li>
        <li>
          ✔ <strong>User-Centric Approach:</strong> Our designs focus on end-users, ensuring their needs and preferences are met.
        </li>
        <li>
          ✔ <strong>Collaborative Process:</strong> We work closely with you throughout the project to ensure your vision is realized.
        </li>
        <li>
          ✔ <strong>Innovative Solutions:</strong> We stay up-to-date with the latest trends and technologies to deliver cutting-edge designs.
        </li>
        <li>
          ✔ <strong>Customer Satisfaction:</strong> Your satisfaction is our priority—we deliver high-quality work that exceeds expectations.
        </li>
      </ul>
    </ServiceLayout>
  );
};

export default UIUXDesign;
