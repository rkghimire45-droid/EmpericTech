import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  resume: null,
  coverLetter: "",
};

const ApplicationModal = ({ job, onClose }) => {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(id);
      document.body.style.overflow = "";
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 230);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone number is required.";
    if (!form.resume) e.resume = "Please upload your resume.";
    return e;
  };

  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  /* ── theme-derived locals ── */
  const modalBg   = isDark ? colors.darkColor  : colors.whiteColor;
  const headerBg  = isDark ? colors.darkColor  : colors.whiteColor;
  const headingC  = isDark ? colors.whiteColor : colors.darkColor;
  const labelC    = isDark ? colors.grayColor2 : colors.grayColor;
  const inputBg   = isDark ? colors.grayColor3 : colors.creamLightColor;
  const inputText = isDark ? colors.whiteColor : colors.darkColor;
  const divider   = isDark ? `${colors.primaryColor}22` : colors.borderColor;

  const fieldStyle = (field) => ({
    backgroundColor: errors[field] ? (isDark ? "#3b1818" : "#fff5f5") : inputBg,
    borderColor:     errors[field] ? "#ef4444" : (isDark ? `${colors.primaryColor}33` : colors.borderColor),
    color: inputText,
  });

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: "rgba(5,7,9,0.75)",
        backdropFilter: "blur(5px)",
        transition: "opacity 0.23s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border shadow-2xl"
        style={{
          backgroundColor: modalBg,
          borderColor: isDark ? `${colors.primaryColor}33` : colors.borderColor,
          transition: "transform 0.23s ease, opacity 0.23s ease",
          transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(14px)",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* ── Header ── */}
        <div
          className="sticky top-0 z-10 flex items-start justify-between px-8 pt-7 pb-5 transition-colors duration-300"
          style={{
            backgroundColor: headerBg,
            borderBottom: `1px solid ${divider}`,
          }}
        >
          <div>
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-1"
              style={{ color: colors.primaryColor }}
            >
              Apply Now
            </p>
            <h2
              className="text-xl font-bold leading-snug transition-colors duration-300"
              style={{ color: headingC }}
            >
              {job?.title}
            </h2>
          </div>
          <button
            onClick={handleClose}
            className="ml-4 shrink-0 p-2 rounded-lg transition-colors duration-200"
            style={{ color: labelC }}
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Body ── */}
        <div className="px-8 py-7">
          {submitted ? (
            /* ── Success state ── */
            <div className="text-center py-10">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5"
                style={{ backgroundColor: `${colors.primaryColor}18` }}
              >
                <svg className="w-7 h-7" fill="none" stroke={colors.primaryColor} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3
                className="text-xl font-bold mb-2 transition-colors duration-300"
                style={{ color: headingC }}
              >
                Application Submitted
              </h3>
              <p
                className="text-sm leading-relaxed max-w-xs mx-auto mb-8"
                style={{ color: labelC }}
              >
                Thank you for applying. Our talent team will review your
                application and be in touch within 5–7 business days.
              </p>
              <button
                onClick={handleClose}
                className="px-7 py-3 text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90"
                style={{
                  backgroundColor: colors.primaryColor,
                  color: colors.whiteColor,
                }}
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} noValidate className="space-y-5">

              {/* Full Name */}
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: labelC }}
                >
                  Full Name <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-200"
                  style={fieldStyle("fullName")}
                />
                {errors.fullName && (
                  <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: labelC }}
                >
                  Email Address <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-200"
                  style={fieldStyle("email")}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: labelC }}
                >
                  Phone Number <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+1 555 000 0000"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-200"
                  style={fieldStyle("phone")}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Resume Upload */}
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: labelC }}
                >
                  Resume / CV <span style={{ color: "#ef4444" }}>*</span>
                </label>
                <label
                  className="flex flex-col items-center justify-center w-full h-28 rounded-lg border-2 border-dashed cursor-pointer transition-colors duration-200"
                  style={{
                    borderColor: errors.resume
                      ? "#ef4444"
                      : isDark
                      ? `${colors.primaryColor}33`
                      : colors.borderColor,
                    backgroundColor: isDark
                      ? `${colors.primaryColor}08`
                      : colors.creamLightColor,
                  }}
                >
                  <svg
                    className="w-6 h-6 mb-2"
                    style={{ color: labelC }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="text-sm" style={{ color: labelC }}>
                    {form.resume ? (
                      <span style={{ color: colors.primaryColor, fontWeight: 500 }}>
                        {form.resume.name}
                      </span>
                    ) : (
                      <>
                        <span style={{ color: colors.primaryColor, fontWeight: 500 }}>
                          Upload file
                        </span>{" "}
                        or drag and drop
                      </>
                    )}
                  </span>
                  <span className="text-xs mt-1" style={{ color: labelC }}>
                    PDF, DOCX — max 10MB
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => handleChange("resume", e.target.files[0] || null)}
                  />
                </label>
                {errors.resume && (
                  <p className="mt-1.5 text-xs" style={{ color: "#ef4444" }}>
                    {errors.resume}
                  </p>
                )}
              </div>

              {/* Cover Letter */}
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: labelC }}
                >
                  Cover Letter{" "}
                  <span className="font-normal" style={{ color: labelC }}>
                    (Optional)
                  </span>
                </label>
                <textarea
                  value={form.coverLetter}
                  onChange={(e) => handleChange("coverLetter", e.target.value)}
                  rows={4}
                  placeholder="Tell us why you are the ideal candidate for this role..."
                  className="w-full px-4 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-200 resize-none"
                  style={{
                    backgroundColor: inputBg,
                    borderColor: isDark ? `${colors.primaryColor}33` : colors.borderColor,
                    color: inputText,
                  }}
                />
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: colors.primaryColor,
                    color: colors.whiteColor,
                  }}
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-lg border transition-all duration-200"
                  style={{
                    borderColor: isDark ? `${colors.primaryColor}33` : colors.borderColor,
                    color: labelC,
                    backgroundColor: "transparent",
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;