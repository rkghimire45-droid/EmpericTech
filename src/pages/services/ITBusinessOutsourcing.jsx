import ServiceLayout from "./ServiceLayout";
import ITBusinessOutsourcingImage from "../../assets/ITBusinessOutsourcing.png";

const ITBusinessOutsourcing = () => {
  return (
    <ServiceLayout
      title="IT & Business Outsourcing"
      heroImage={ITBusinessOutsourcingImage}
      description="At EmpericTech, we offer flexible and cost-effective outsourcing services tailored to meet the evolving demands of modern businesses. From IT and customer support to digital marketing and software development, we act as your extended team to accelerate growth while reducing operational costs."
    >
      <h3 className="text-2xl font-semibold mb-2">Our Services Include</h3>
      <p className="text-gray-400 mb-6">
        We provide dedicated outsourcing services that help you scale quickly and efficiently.
      </p>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>IT Outsourcing:</strong> Access skilled IT professionals for
          infrastructure support, software development, and maintenance.
        </li>
        <li>
          ✔ <strong>Customer Support Outsourcing:</strong> Enhance customer
          satisfaction with 24/7 multichannel support solutions.
        </li>
        <li>
          ✔ <strong>Back Office Support:</strong> Delegate administrative tasks
          such as data entry, billing, and HR to streamline operations.
        </li>
        <li>
          ✔ <strong>Digital Marketing Outsourcing:</strong> Boost your online
          presence with outsourced SEO, social media, and content marketing experts.
        </li>
        <li>
          ✔ <strong>Software Development Outsourcing:</strong> Leverage our
          development team to build high-quality, scalable software products.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-2">Why Choose Us?</h3>
      <p className="text-gray-400 mb-6">
        We combine expertise, flexibility, and reliability to deliver outsourcing
        services that align with your goals.
      </p>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Skilled Professionals:</strong> Our team consists of trained
          experts across various domains ready to support your business needs.
        </li>
        <li>
          ✔ <strong>Cost Efficiency:</strong> Reduce overheads and operational
          costs without compromising quality or delivery timelines.
        </li>
        <li>
          ✔ <strong>Scalability:</strong> Quickly scale your team up or down based
          on demand, ensuring flexibility and agility.
        </li>
        <li>
          ✔ <strong>Secure Processes:</strong> We follow strict data security
          protocols to keep your business information safe and compliant.
        </li>
      </ul>
    </ServiceLayout>
  );
};

export default ITBusinessOutsourcing;
