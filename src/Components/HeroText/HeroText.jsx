import { useTheme } from "../../context/ThemeContext";

const HeroText = () => {
  const { theme, colors } = useTheme();

  return (
    <section
      className="py-24 transition-colors duration-300"
      style={{
        backgroundColor:
          theme === "dark" ? colors.darkColor : colors.creamLightColor,
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1
          className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight"
          style={{
            color:
              theme === "dark" ? colors.whiteColor : colors.blackColor,
          }}
        >
          Innovate. Integrate. Accelerate.
        </h1>

        <p
          className="mt-8 max-w-4xl mx-auto text-lg md:text-xl leading-relaxed"
          style={{
            color: theme === "dark" ? colors.grayColor2 : colors.grayColor,
          }}
        >
          Enhance your business efficiency, optimize operations, and drive
          growth with our cutting-edge IT solutions, tailored to meet your
          unique needs.
        </p>
      </div>
    </section>
  );
};

export default HeroText;
