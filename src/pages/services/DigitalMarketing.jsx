import ServiceLayout from "./ServiceLayout";
import DigitalMarketingImage from "../../assets/DigitalMarketing.png";

const DigitalMarketing = () => {
  return (
    <ServiceLayout
      title="Digital Marketing"
      heroImage={DigitalMarketingImage}
      description="At EmpericTech, we specialize in a holistic approach to online marketing, combining expert social media management with data-driven digital marketing strategies. Our goal is to help businesses establish a strong online presence, engage with their audience, and drive measurable growth through targeted campaigns."
    >
      <h3 className="text-2xl font-semibold mb-6">Our Services Include</h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Social Media Management:</strong> Create and manage content to boost online presence.
        </li>
        <li>
          ✔ <strong>Social Media Advertising:</strong> Run data-driven ad campaigns for maximum reach and engagement.
        </li>
        <li>
          ✔ <strong>SEO & Content Marketing:</strong> Optimize websites and create valuable content to enhance search rankings.
        </li>
        <li>
          ✔ <strong>Pay-Per-Click (PPC) Advertising:</strong> Implement high-converting ad campaigns for lead generation.
        </li>
        <li>
          ✔ <strong>Email Marketing & Automation:</strong> Build customer relationships through personalized email campaigns.
        </li>
        <li>
          ✔ <strong>Landing Page Optimization:</strong> Improve conversions with strategic design and UX enhancements.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-6">Why Choose Us?</h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Integrated Approach:</strong> We combine social media and digital marketing for a cohesive online presence.
        </li>
        <li>
          ✔ <strong>Data-Driven Strategies:</strong> Every decision is backed by analytics and insights to maximize results.
        </li>
        <li>
          ✔ <strong>Targeted Advertising:</strong> Reach the right audience with precision and increase conversions.
        </li>
        <li>
          ✔ <strong>Creative & Engaging Content:</strong> From visuals to ads, we create compelling content that connects.
        </li>
        <li>
          ✔ <strong>Timely Execution:</strong> Campaigns are delivered on time and optimized for performance.
        </li>
      </ul>
    </ServiceLayout>
  );
};

export default DigitalMarketing;
