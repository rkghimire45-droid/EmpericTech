import HeroVideoFile from "../../assets/videos/hero.mp4";

// HeroVideo.jsx
import { useTheme } from '../../context/ThemeContext';

export default function HeroVideo() {
  const { theme, colors } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-opacity-20"
         style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : colors.borderColor }}>
      <div className="aspect-video">
        <video
          className="w-full h-full object-cover rounded-2xl"
          autoPlay
          muted
          loop
          playsInline
          // poster={HeroPoster}
        >
          <source src={HeroVideoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Subtle overlay gradient for better text readability if overlaid, but since side-by-side, minimal */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}







