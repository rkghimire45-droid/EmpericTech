import ServiceLayout from "./ServiceLayout";
import DataSolutionsImage from "../../assets/DataSolutions.png";

const DataSolutions = () => {
  return (
    <ServiceLayout
      title="Data Solutions"
      heroImage={DataSolutionsImage}
      description="We transform raw data into valuable insights that drive informed decision-making and business success. Our data solutions help organizations optimize operations, improve efficiency, and gain a competitive edge."
    >
      <h3 className="text-2xl font-semibold mb-6">Our Services Include</h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Data Analysis & Insights:</strong> Ensure seamless and secure
          data migration with minimal downtime.
        </li>
        <li>
          ✔ <strong>Data Integration Services:</strong> Unify data sources into a
          cohesive, real-time accessible platform.
        </li>
        <li>
          ✔ <strong>Data Warehousing & Management:</strong> Optimize storage,
          retrieval, and security of critical business data.
        </li>
        <li>
          ✔ <strong>Business Intelligence & Visualization:</strong> Create
          interactive dashboards and reports for clear, strategic insights.
        </li>
        <li>
          ✔ <strong>Data Governance & Compliance:</strong> Implement robust
          security protocols and regulatory compliance measures.
        </li>
      </ul>

      <h3 className="text-2xl font-semibold mt-12 mb-6">
        Why Choose EmpericTech?
      </h3>

      <ul className="space-y-4 text-gray-300">
        <li>
          ✔ <strong>Expert Team:</strong> Years of experience in data analytics and
          database management.
        </li>
        <li>
          ✔ <strong>Innovative Solutions:</strong> Leveraging the latest
          technologies and methodologies.
        </li>
        <li>
          ✔ <strong>Client-Centric Approach:</strong> Solutions tailored to your
          business goals.
        </li>
        <li>
          ✔ <strong>Transparent Communication:</strong> Regular updates and clear
          collaboration.
        </li>
        <li>
          ✔ <strong>Proven Results:</strong> A strong track record of delivering
          measurable business impact.
        </li>
      </ul>
    </ServiceLayout>
  );
};

export default DataSolutions;
