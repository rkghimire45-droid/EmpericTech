import ServiceLayout from "./ServiceLayout";
import CloudImage from "../../assets/Cloud.png";

const CloudServices = () => {
  return (
    <ServiceLayout
      title="Cloud Services"
      heroImage={CloudImage}
      description="At EmpericTech, we are committed to helping you harness the full potential of cloud technology. Our comprehensive cloud support and services are designed to optimize your business operations, enhance scalability, and improve efficiency."
    >
      <h3 className="text-2xl font-semibold mb-6">Our Services Include</h3>

      <ul className="space-y-4 text-gray-300">
        <li>✔ <strong>Cloud Migration & Management:</strong> Seamless transition and optimized infrastructure.</li>
        <li>✔ <strong>Cloud Security & Backup:</strong> Robust protection and disaster recovery.</li>
        <li>✔ <strong>Cloud Application Development:</strong> Scalable cloud-native applications.</li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Why Choose Us?</h3>

      <ul className="space-y-4 text-gray-300">
        <li>✔ Certified cloud professionals</li>
        <li>✔ Tailor-made cloud solutions</li>
        <li>✔ High reliability & uptime</li>
        <li>✔ Cost-efficient cloud management</li>
        <li>✔ 24/7 continuous support</li>
      </ul>
    </ServiceLayout>
  );
};

export default CloudServices;
