import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { jobsData } from "../../data/jobData";
import ApplicationModal from "../../Components/career/ApplicationModal";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  const [modalOpen, setModalOpen] = useState(false);

  const job = jobsData.find((j) => j.id === Number(id));

  /* ── theme-derived locals ── */
  const pageBg    = isDark ? colors.blackColor   : "#f6f3fc";
  const bandBg    = isDark ? colors.darkColor    : colors.secondaryColor;
  const cardBg    = isDark ? colors.darkColor    : colors.whiteColor;
  const headingC  = isDark ? colors.whiteColor   : colors.darkColor;
  const bodyC     = isDark ? colors.grayColor2   : colors.grayColor;
  const borderCol = isDark ? `${colors.primaryColor}22` : colors.borderColor;
  const isContract = job?.type === "Contract";

  if (!job) {
    return (
      <main
        className="min-h-screen flex items-center justify-center transition-colors duration-300"
        style={{ backgroundColor: pageBg }}
      >
        <div className="text-center">
          <h1
            className="text-4xl font-bold mb-4 transition-colors duration-300"
            style={{ color: headingC }}
          >
            Position Not Found
          </h1>
          <p className="mb-8" style={{ color: bodyC }}>
            This role may no longer be available.
          </p>
          <button
            onClick={() => navigate("/careers")}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              backgroundColor: colors.primaryColor,
              color: colors.whiteColor,
            }}
          >
            Back to Careers
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: pageBg }}
    >
      {/* ── Top band ── */}
      <div
        className="transition-colors duration-300"
        style={{
          backgroundColor: bandBg,
          paddingTop: "72px",
          paddingBottom: "72px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Back */}
          <button
            onClick={() => navigate("/careers")}
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-200"
            style={{ color: `${colors.whiteColor}66` }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Positions
          </button>

          {/* Dept label */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="block h-px w-6 transition-colors duration-300"
              style={{ backgroundColor: colors.primaryColor }}
            />
            <span
              className="text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
              style={{ color: colors.primaryColor }}
            >
              {job.department}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-7 max-w-3xl transition-colors duration-300"
            style={{ color: colors.whiteColor }}
          >
            {job.title}
          </h1>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-3">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: isContract
                  ? `${colors.primaryColor}28`
                  : `${colors.primaryColor}22`,
                color: isContract ? "#fbbf24" : colors.primaryColor,
              }}
            >
              {job.type}
            </span>

            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${colors.whiteColor}0f`,
                color: `${colors.whiteColor}bb`,
              }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {job.location}
            </span>

            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${colors.whiteColor}0f`,
                color: `${colors.whiteColor}bb`,
              }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              {job.department}
            </span>
          </div>
        </div>
      </div>

      {/* ── Content area ── */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 transition-colors duration-300"
        style={{ paddingTop: "60px", paddingBottom: "80px" }}
      >
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Main */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2
                className="text-xl font-bold mb-4 transition-colors duration-300"
                style={{ color: headingC }}
              >
                Role Overview
              </h2>
              <p
                className="text-base leading-relaxed transition-colors duration-300"
                style={{ color: bodyC }}
              >
                {job.description}
              </p>
            </section>

            <div className="transition-colors duration-300" style={{ borderTop: `1px solid ${borderCol}` }} />

            {/* Responsibilities */}
            <section>
              <h2
                className="text-xl font-bold mb-6 transition-colors duration-300"
                style={{ color: headingC }}
              >
                Key Responsibilities
              </h2>
              <ul className="space-y-3.5">
                {job.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full transition-colors duration-300"
                      style={{ backgroundColor: colors.primaryColor }}
                    />
                    <span
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{ color: bodyC }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="transition-colors duration-300" style={{ borderTop: `1px solid ${borderCol}` }} />

            {/* Requirements */}
            <section>
              <h2
                className="text-xl font-bold mb-6 transition-colors duration-300"
                style={{ color: headingC }}
              >
                Requirements
              </h2>
              <ul className="space-y-3.5">
                {job.requirements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span
                      className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor: isDark
                          ? `${colors.whiteColor}44`
                          : `${colors.darkColor}33`,
                      }}
                    />
                    <span
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{ color: bodyC }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-5">

              {/* Apply card */}
              <div
                className="rounded-2xl border p-7 transition-colors duration-300"
                style={{ backgroundColor: cardBg, borderColor: borderCol }}
              >
                <h3
                  className="text-lg font-bold mb-2 transition-colors duration-300"
                  style={{ color: headingC }}
                >
                  Ready to apply?
                </h3>
                <p
                  className="text-sm leading-relaxed mb-6 transition-colors duration-300"
                  style={{ color: bodyC }}
                >
                  Submit your application and our talent team will review it
                  within 5–7 business days.
                </p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
                  style={{
                    backgroundColor: colors.primaryColor,
                    color: colors.whiteColor,
                  }}
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Summary card */}
              <div
                className="rounded-2xl border p-7 transition-colors duration-300"
                style={{ backgroundColor: cardBg, borderColor: borderCol }}
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-5 transition-colors duration-300"
                  style={{ color: bodyC }}
                >
                  Job Summary
                </h3>
                <dl className="space-y-4">
                  {[
                    { label: "Department", value: job.department },
                    { label: "Location",   value: job.location   },
                    { label: "Type",       value: job.type       },
                  ].map((item) => (
                    <div key={item.label}>
                      <dt
                        className="text-xs font-medium uppercase tracking-widest mb-0.5 transition-colors duration-300"
                        style={{ color: bodyC }}
                      >
                        {item.label}
                      </dt>
                      <dd
                        className="text-sm font-semibold transition-colors duration-300"
                        style={{ color: headingC }}
                      >
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Share card */}
              <div
                className="rounded-2xl border p-7 transition-colors duration-300"
                style={{ backgroundColor: cardBg, borderColor: borderCol }}
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-4 transition-colors duration-300"
                  style={{ color: bodyC }}
                >
                  Share This Role
                </h3>
                <div className="flex gap-2">
                  {["LinkedIn", "Twitter", "Email"].map((platform) => (
                    <button
                      key={platform}
                      className="flex-1 inline-flex items-center justify-center px-2.5 py-2 text-xs font-medium rounded-lg border transition-colors duration-200"
                      style={{
                        borderColor: borderCol,
                        color: bodyC,
                        backgroundColor: "transparent",
                      }}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {modalOpen && (
        <ApplicationModal job={job} onClose={() => setModalOpen(false)} />
      )}
    </main>
  );
};

export default JobDetails;