import ServiceLayout from "./ServiceLayout";
import CyberSecurityImage from "../../assets/CyberSecurity.png";

const CyberSecurity = () => {
  return (
    <ServiceLayout
      title="Cyber Security"
      heroImage={CyberSecurityImage}
      description="At EmpericTech, we are committed to safeguarding your digital assets against cyber threats. Our team of cybersecurity experts provides comprehensive solutions to protect your business from data breaches, malware, and other online threats. With our cutting-edge technology and proactive approach, we ensure that your sensitive information remains secure and your business operations run smoothly."
    >
      <h3 className="text-2xl font-semibold mb-6">Our Services Include</h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Security Assessment & Audit:</strong> Identify vulnerabilities and enhance security measures.
        </li>
        <li>
          ✔ <strong>Threat Detection & Prevention:</strong> Monitor systems for suspicious activities and prevent cyberattacks.
        </li>
        <li>
          ✔ <strong>Endpoint & Network Security:</strong> Protect devices and networks from unauthorized access and malware.
        </li>
        <li>
          ✔ <strong>Incident Response & Recovery:</strong> Rapidly address cyber incidents and restore operations.
        </li>
        <li>
          ✔ <strong>Data Encryption & Compliance:</strong> Ensure sensitive information remains secure and meets regulatory requirements.
        </li>
        <li>
          ✔ <strong>Security Awareness Training:</strong> Educate employees on best practices for cybersecurity.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Why Choose Us?</h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Expertise:</strong> Our cybersecurity professionals have extensive experience protecting businesses from cyber threats.
        </li>
        <li>
          ✔ <strong>Proactive Approach:</strong> We focus on prevention and early detection of threats.
        </li>
        <li>
          ✔ <strong>Cutting-Edge Technology:</strong> We use the latest security technologies to provide the highest level of protection.
        </li>
        <li>
          ✔ <strong>Customized Solutions:</strong> Services tailored to your business needs for maximum security.
        </li>
        <li>
          ✔ <strong>24/7 Support:</strong> Our dedicated team is available around the clock to assist with any cybersecurity issues.
        </li>
      </ul>
    </ServiceLayout>
  );
};

export default CyberSecurity;
