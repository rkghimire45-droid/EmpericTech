import { forwardRef, memo, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Contact = forwardRef((props, ref) => {
  const { theme, colors } = useTheme();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    jobTitle: "",
    company: "",
    country: "",
    message: "",
    privacyConsent: false,
    marketingConsent: false,
  });

  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const countries = ["Nepal", "India", "USA", "UK"];

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: theme === "dark" ? colors.darkColor : colors.creamLightColor,
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: "radial-gradient(circle, #6366f1 0%, transparent 70%)",
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
            animationDuration: "10s",
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${theme === "dark" ? colors.whiteColor : colors.blackColor} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === "dark" ? colors.whiteColor : colors.blackColor} 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-down">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border mb-6 transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: theme === "dark" 
                ? "rgba(255, 255, 255, 0.08)" 
                : "rgba(0, 0, 0, 0.06)",
              borderColor: theme === "dark"
                ? "rgba(255, 255, 255, 0.15)"
                : "rgba(0, 0, 0, 0.15)",
            }}
          >
            <span className="text-sm font-semibold tracking-wider" style={{ color: "#6366f1" }}>
              GET IN TOUCH
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors duration-500"
            style={{
              color: theme === "dark" ? colors.whiteColor : colors.blackColor,
            }}
          >
            How can we help you?
          </h2>

          {/* Description */}
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto transition-colors duration-500"
            style={{
              color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
            }}
          >
            Partner with EmpericTech to transform your business through innovative IT solutions. 
            Our team of experts is ready to understand your challenges and deliver tailored 
            strategies that drive efficiency, security, and growth.
          </p>
        </div>

        {/* Form Container */}
        <div
          className="backdrop-blur-md rounded-3xl p-8 md:p-12 transition-all duration-500 animate-fade-in-up"
          style={{
            backgroundColor: theme === "dark"
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(255, 255, 255, 0.8)",
            border: `1px solid ${
              theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }`,
            boxShadow: theme === "dark"
              ? "0 20px 60px rgba(0, 0, 0, 0.4)"
              : "0 20px 60px rgba(0, 0, 0, 0.15)",
            animationDelay: "200ms",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name & Last Name Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold mb-2 transition-colors duration-300"
                  style={{
                    color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                  }}
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, firstName: true })}
                  onBlur={() => setFocused({ ...focused, firstName: false })}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none"
                  style={{
                    backgroundColor: theme === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(255, 255, 255, 0.9)",
                    border: `2px solid ${
                      focused.firstName
                        ? "#6366f1"
                        : theme === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)"
                    }`,
                    color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                  }}
                  placeholder="John"
                />
              </div>

              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold mb-2 transition-colors duration-300"
                  style={{
                    color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                  }}
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, lastName: true })}
                  onBlur={() => setFocused({ ...focused, lastName: false })}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none"
                  style={{
                    backgroundColor: theme === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(255, 255, 255, 0.9)",
                    border: `2px solid ${
                      focused.lastName
                        ? "#6366f1"
                        : theme === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)"
                    }`,
                    color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                  }}
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Work Email */}
            <div>
              <label
                htmlFor="workEmail"
                className="block text-sm font-semibold mb-2 transition-colors duration-300"
                style={{
                  color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                }}
              >
                Work Email *
              </label>
              <input
                type="email"
                id="workEmail"
                name="workEmail"
                required
                value={formData.workEmail}
                onChange={handleChange}
                onFocus={() => setFocused({ ...focused, workEmail: true })}
                onBlur={() => setFocused({ ...focused, workEmail: false })}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none"
                style={{
                  backgroundColor: theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.9)",
                  border: `2px solid ${
                    focused.workEmail
                      ? "#6366f1"
                      : theme === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)"
                  }`,
                  color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                }}
                placeholder="john.doe@company.com"
              />
            </div>

            {/* Job Title & Company Row */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Job Title */}
              <div>
                <label
                  htmlFor="jobTitle"
                  className="block text-sm font-semibold mb-2 transition-colors duration-300"
                  style={{
                    color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                  }}
                >
                  Job Title *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, jobTitle: true })}
                  onBlur={() => setFocused({ ...focused, jobTitle: false })}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none"
                  style={{
                    backgroundColor: theme === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(255, 255, 255, 0.9)",
                    border: `2px solid ${
                      focused.jobTitle
                        ? "#6366f1"
                        : theme === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)"
                    }`,
                    color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                  }}
                  placeholder="CTO"
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold mb-2 transition-colors duration-300"
                  style={{
                    color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                  }}
                >
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, company: true })}
                  onBlur={() => setFocused({ ...focused, company: false })}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none"
                  style={{
                    backgroundColor: theme === "dark"
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(255, 255, 255, 0.9)",
                    border: `2px solid ${
                      focused.company
                        ? "#6366f1"
                        : theme === "dark"
                        ? "rgba(255, 255, 255, 0.1)"
                        : "rgba(0, 0, 0, 0.1)"
                    }`,
                    color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                  }}
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-semibold mb-2 transition-colors duration-300"
                style={{
                  color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                }}
              >
                Country *
              </label>
              <select
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                onFocus={() => setFocused({ ...focused, country: true })}
                onBlur={() => setFocused({ ...focused, country: false })}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none cursor-pointer"
                style={{
                  backgroundColor: theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.9)",
                  border: `2px solid ${
                    focused.country
                      ? "#6366f1"
                      : theme === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)"
                  }`,
                  color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                }}
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option 
                    key={country} 
                    value={country}
                    style={{
                      backgroundColor: theme === "dark" ? "#1f2937" : "#ffffff",
                      color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                    }}
                  >
                    {country}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 transition-colors duration-300"
                style={{
                  color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                }}
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused({ ...focused, message: true })}
                onBlur={() => setFocused({ ...focused, message: false })}
                className="w-full px-4 py-3 rounded-xl transition-all duration-300 outline-none resize-none"
                style={{
                  backgroundColor: theme === "dark"
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.9)",
                  border: `2px solid ${
                    focused.message
                      ? "#6366f1"
                      : theme === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)"
                  }`,
                  color: theme === "dark" ? colors.whiteColor : colors.blackColor,
                }}
                placeholder="Tell us about your project or how we can help..."
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              {/* Privacy Consent */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="privacyConsent"
                  required
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded cursor-pointer transition-all duration-300"
                  style={{
                    accentColor: "#6366f1",
                  }}
                />
                <span
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{
                    color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
                  }}
                >
                  I agree to EmpericTech's privacy policy and consent to the collection and 
                  processing of my personal data. *
                </span>
              </label>

              {/* Marketing Consent */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 rounded cursor-pointer transition-all duration-300"
                  style={{
                    accentColor: "#6366f1",
                  }}
                />
                <span
                  className="text-sm leading-relaxed transition-colors duration-300"
                  style={{
                    color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
                  }}
                >
                  I'd like to receive updates about EmpericTech's products, services, and 
                  industry insights.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              }}
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: "400ms" }}>
          <p
            className="text-sm transition-colors duration-300"
            style={{
              color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
            }}
          >
            We typically respond within 24 hours. For urgent inquiries, please call us at{" "}
            <span 
              className="font-semibold"
              style={{ color: "#6366f1" }}
            >
              +1 (555) 123-4567
            </span>
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-down,
          .animate-fade-in-up {
            animation: none;
          }
        }

        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 8px;
        }

        textarea::-webkit-scrollbar-track {
          background: ${theme === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"};
          border-radius: 4px;
        }

        textarea::-webkit-scrollbar-thumb {
          background: ${theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"};
          border-radius: 4px;
        }

        textarea::-webkit-scrollbar-thumb:hover {
          background: #6366f1;
        }
      `}</style>
    </section>
  );
});

Contact.displayName = "Contact";

export default memo(Contact);