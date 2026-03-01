import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  const cardBg = isDark ? colors.darkColor : colors.whiteColor;
  const borderCol = isDark ? `${colors.primaryColor}22` : colors.borderColor;
  const headingColor = isDark ? colors.whiteColor : colors.darkColor;
  const bodyColor = isDark ? colors.grayColor2 : colors.grayColor;
  const isContract = job.type === "Contract";

  return (
    <article
      className="group flex flex-col rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-default"
      style={{
        backgroundColor: cardBg,
        borderColor: borderCol,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <div className="flex flex-col flex-1 p-7">
        {/* Department + Type badge row */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <span
            className="text-xs font-semibold tracking-widest uppercase transition-colors duration-300"
            style={{ color: colors.primaryColor }}
          >
            {job.department}
          </span>
          <span
            className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-300"
            style={{
              backgroundColor: isContract
                ? `${colors.primaryColor}18`
                : `${colors.primaryColor}14`,
              color: isContract
                ? isDark ? "#fbbf24" : "#92400e"
                : colors.primaryColor,
            }}
          >
            {job.type}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-bold text-xl leading-snug mb-3 transition-colors duration-300"
          style={{ color: headingColor }}
        >
          {job.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-4">
          <svg
            className="w-3.5 h-3.5 shrink-0 transition-colors duration-300"
            style={{ color: bodyColor }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span
            className="text-sm transition-colors duration-300"
            style={{ color: bodyColor }}
          >
            {job.location}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1 mb-6 line-clamp-3 transition-colors duration-300"
          style={{ color: bodyColor }}
        >
          {job.description}
        </p>

        {/* Footer CTA */}
        <div
          className="flex items-center justify-between pt-5 transition-colors duration-300"
          style={{ borderTop: `1px solid ${borderCol}` }}
        >
          <button
            onClick={() => navigate(`/careers/${job.id}`)}
            className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
            style={{ color: colors.primaryColor }}
          >
            View Details
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default JobCard;