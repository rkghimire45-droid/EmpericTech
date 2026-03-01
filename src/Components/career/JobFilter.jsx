import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { departments, locations } from "../../data/jobData";

const JobFilter = ({ filters, onChange }) => {
  const { theme, colors } = useTheme();
  const isDark = theme === "dark";

  const inputBg = isDark ? colors.grayColor3 : colors.whiteColor;
  const inputText = isDark ? colors.whiteColor : colors.darkColor;
  const borderCol = isDark ? `${colors.primaryColor}33` : colors.borderColor;
  const placeholderColor = isDark ? colors.grayColor2 : colors.grayColor;

  const sharedInputStyle = {
    backgroundColor: inputBg,
    borderColor: borderCol,
    color: inputText,
  };

  const handleChange = (field, value) => {
    onChange({ ...filters, [field]: value });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-10">
      {/* Search input */}
      <div className="relative flex-1 max-w-xs">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
          style={{ color: placeholderColor }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search roles..."
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-300"
          style={sharedInputStyle}
        />
      </div>

      {/* Department select */}
      <div className="relative">
        <select
          value={filters.department}
          onChange={(e) => handleChange("department", e.target.value)}
          className="appearance-none pr-9 pl-4 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-300 cursor-pointer min-w-[190px]"
          style={sharedInputStyle}
        >
          {departments.map((d) => (
            <option
              key={d}
              value={d}
              style={{
                backgroundColor: isDark ? colors.grayColor3 : colors.whiteColor,
                color: isDark ? colors.whiteColor : colors.darkColor,
              }}
            >
              {d}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
          style={{ color: placeholderColor }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Location select */}
      <div className="relative">
        <select
          value={filters.location}
          onChange={(e) => handleChange("location", e.target.value)}
          className="appearance-none pr-9 pl-4 py-2.5 text-sm rounded-lg border outline-none transition-colors duration-300 cursor-pointer min-w-[215px]"
          style={sharedInputStyle}
        >
          {locations.map((l) => (
            <option
              key={l}
              value={l}
              style={{
                backgroundColor: isDark ? colors.grayColor3 : colors.whiteColor,
                color: isDark ? colors.whiteColor : colors.darkColor,
              }}
            >
              {l}
            </option>
          ))}
        </select>
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
          style={{ color: placeholderColor }}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default JobFilter;