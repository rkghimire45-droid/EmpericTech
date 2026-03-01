import React, { useRef, useState, useMemo } from "react";
import { useTheme } from "../../context/ThemeContext";
import CareerHero from "../../Components/career/CareerHero";
import BenefitsSection from "../../Components/career/BenefitsSection";
import JobFilter from "../../Components/career/JobFilter";
import JobCard from "../../Components/career/JobCard";
import { jobsData } from "../../data/jobData";

const initialFilters = {
  search: "",
  department: "All Departments",
  location: "All Locations",
};

const Career = () => {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  const positionsRef = useRef(null);
  const [filters, setFilters] = useState(initialFilters);

  const scrollToPositions = () => {
    positionsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const q = filters.search.toLowerCase();
      const matchSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q);
      const matchDept =
        filters.department === "All Departments" ||
        job.department === filters.department;
      const matchLoc =
        filters.location === "All Locations" ||
        job.location === filters.location;
      return matchSearch && matchDept && matchLoc;
    });
  }, [filters]);

  const pageBg   = isDark ? colors.blackColor  : colors.whiteColor;
  const headingC = isDark ? colors.whiteColor  : colors.darkColor;
  const mutedC   = isDark ? colors.grayColor2  : colors.grayColor;
  const divider  = isDark ? `${colors.primaryColor}1a` : colors.borderColor;

  return (
    <main
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: pageBg }}
    >
      {/* ── Hero ── */}
      <CareerHero onScrollToPositions={scrollToPositions} />

      {/* ── Benefits ── */}
      <BenefitsSection />

      {/* ── Section divider ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="transition-colors duration-300" style={{ borderTop: `1px solid ${divider}` }} />
      </div>

      {/* ── Open Positions ── */}
      <section
        ref={positionsRef}
        className="transition-colors duration-300"
        style={{
          backgroundColor: pageBg,
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="block h-px w-6 transition-colors duration-300"
                  style={{ backgroundColor: colors.primaryColor }}
                />
                <span
                  className="text-xs font-semibold tracking-[0.22em] uppercase transition-colors duration-300"
                  style={{ color: colors.primaryColor }}
                >
                  Open Positions
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold leading-tight tracking-tight transition-colors duration-300"
                style={{ color: headingC }}
              >
                Find Your Next Challenge
              </h2>
            </div>

            <p
              className="text-sm font-medium transition-colors duration-300"
              style={{ color: mutedC }}
            >
              {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""} available
            </p>
          </div>

          {/* Filters */}
          <JobFilter filters={filters} onChange={setFilters} />

          {/* Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5 transition-colors duration-300"
                style={{
                  backgroundColor: isDark
                    ? `${colors.primaryColor}14`
                    : colors.creamLightColor,
                }}
              >
                <svg
                  className="w-6 h-6"
                  style={{ color: mutedC }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-lg font-semibold mb-2 transition-colors duration-300"
                style={{ color: headingC }}
              >
                No positions found
              </h3>
              <p
                className="text-sm mb-6 transition-colors duration-300"
                style={{ color: mutedC }}
              >
                Try adjusting your filters or search query.
              </p>
              <button
                onClick={() => setFilters(initialFilters)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg border transition-colors duration-200"
                style={{
                  color: colors.primaryColor,
                  borderColor: colors.primaryColor,
                  backgroundColor: "transparent",
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section
        className="transition-colors duration-300"
        style={{
          backgroundColor: isDark ? colors.darkColor : colors.secondaryColor,
          paddingTop: "72px",
          paddingBottom: "72px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-300"
            style={{ color: colors.whiteColor }}
          >
            Don't see the right role?
          </h2>
          <p
            className="text-base max-w-lg mx-auto mb-8 leading-relaxed transition-colors duration-300"
            style={{ color: `${colors.whiteColor}88` }}
          >
            We are always looking for exceptional talent. Send us your profile
            and we will reach out when the perfect opportunity arises.
          </p>
          <a
            href="mailto:careers@company.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{
              backgroundColor: colors.primaryColor,
              color: colors.whiteColor,
            }}
          >
            Send Open Application
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Career;