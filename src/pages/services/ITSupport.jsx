import ServiceLayout from "./ServiceLayout";
import ITSupportImage from "../../assets/ITSupport.png";

const ITSupport = () => {
  return (
    <ServiceLayout
      title="IT / Tech Support"
      heroImage={ITSupportImage}
      description="At EmpericTech, we understand that technology is the backbone of modern businesses. That’s why we provide comprehensive IT and technical support services to keep your systems running smoothly, securely, and efficiently."
    >
      {/* OUR SERVICES */}
      <h3 className="text-2xl font-semibold mb-6">Our Services Include</h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Technical Support & Troubleshooting:</strong>{" "}
          Quick resolution of hardware, software, and network issues.
        </li>
        <li>
          ✔ <strong>System Maintenance & Monitoring:</strong>{" "}
          Proactive monitoring to prevent downtime and failures.
        </li>
        <li>
          ✔ <strong>IT Consultation & Planning:</strong>{" "}
          Strategic IT planning aligned with your business goals.
        </li>
        <li>
          ✔ <strong>Network Management:</strong>{" "}
          Secure, stable, and optimized network infrastructure.
        </li>
        <li>
          ✔ <strong>Remote & On-site Support:</strong>{" "}
          Flexible support options when and where you need them.
        </li>
      </ul>

      {/* WHY CHOOSE US */}
      <h3 className="text-2xl font-semibold mt-12 mb-6">Why Choose Us?</h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Expert Team:</strong>{" "}
          Certified IT professionals with hands-on industry experience.
        </li>
        <li>
          ✔ <strong>Quick Response:</strong>{" "}
          Fast issue resolution to minimize business disruption.
        </li>
        <li>
          ✔ <strong>Tailored Solutions:</strong>{" "}
          Customized IT support based on your unique needs.
        </li>
        <li>
          ✔ <strong>Proactive Approach:</strong>{" "}
          Prevent problems before they impact your operations.
        </li>
        <li>
          ✔ <strong>Comprehensive Support:</strong>{" "}
          End-to-end assistance from setup to ongoing maintenance.
        </li>
      </ul>
    </ServiceLayout>
  );
};

export default ITSupport;
