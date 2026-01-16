import ServiceLayout from "./ServiceLayout";
import WebDevImage from "../../assets/WebDev.png";

const WebDevelopment = () => {
  return (
    <ServiceLayout
      title="Web Development"
      heroImage={WebDevImage}
      description="At EmpericTech, we specialize in building cutting-edge, responsive websites that are visually stunning, secure, and performance-driven. Our expert developers transform ideas into scalable digital solutions that help businesses grow online."
    >
      <h3 className="text-2xl font-semibold mb-6">Our Services Include</h3>

      <ul className="space-y-4 text-gray-300">
        <li>✔ <strong>Custom Website Development:</strong> Tailored solutions built to match your business goals.</li>
        <li>✔ <strong>E-commerce Solutions:</strong> Secure, conversion-focused online stores.</li>
        <li>✔ <strong>CMS Development:</strong> Easy-to-manage content systems.</li>
        <li>✔ <strong>Mobile Optimization:</strong> Seamless performance on all devices.</li>
        <li>✔ <strong>Web Applications:</strong> Scalable and high-performance apps.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Why Choose EmpericTech?</h3>

      <ul className="space-y-4 text-gray-300">
        <li>✔ Experienced development team</li>
        <li>✔ Business-focused solutions</li>
        <li>✔ Secure & scalable architecture</li>
        <li>✔ Ongoing support & optimization</li>
      </ul>
    </ServiceLayout>
  );
};

export default WebDevelopment;
