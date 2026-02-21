// src/components/layout/ServiceLayout.jsx
import { useTheme } from '../../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ArrowDownToLine } from 'lucide-react';

const ServiceLayout = ({
  title,
  heroImage,
  description,
  breadcrumbItems = [],
  children,
}) => {
  const { theme, colors } = useTheme();
  const isDark = theme === 'dark';
  const location = useLocation();

  return (
    <div className={`min-h-screen ${isDark ? 'bg-blackColor' : 'bg-creamLightColor'}`}>
      {/* Hero with background image */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blackColor/90 via-blackColor/60 to-transparent" />
        </div>

        <div className="relative container mx-auto px-6 pb-16 md:pb-24 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-sm mb-6">
            {breadcrumbItems.map((crumb, idx) => (
              <span key={crumb.label} className="flex items-center">
                {idx > 0 && <ChevronRight size={14} className="mx-1.5 opacity-60" />}
                {crumb.current ? (
                  <span className="font-medium text-white">{crumb.label}</span>
                ) : (
                  <Link
                    to={crumb.to}
                    className="text-gray-300 hover:text-primaryColor transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl">
            {title}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-200 max-w-3xl">
            {description}
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownToLine size={32} className="text-white/70" />
        </div>
      </section>

      {/* Main content + Sidebar */}
      <div className="container mx-auto px-6 py-16 lg:py-24 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-16">
          {/* Content – ~70% */}
          <main className="lg:col-span-8 xl:col-span-9 prose lg:prose-lg max-w-none">
            {/* Apply prose + custom dark mode overrides */}
            <div className={`prose ${isDark ? 'prose-invert prose-headings:text-white prose-a:text-primaryColor' : ''}`}>
              {children}
            </div>
          </main>

          {/* Sidebar – ~30% */}
          <aside className="lg:col-span-4 xl:col-span-3 space-y-10 lg:sticky lg:top-24 lg:h-fit">
            {/* All Services */}
            <div className={`p-7 rounded-2xl border ${isDark ? 'bg-darkColor border-white/10' : 'bg-white border-borderColor'} shadow-xl`}>
              <h3 className={`text-xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-darkColor'}`}>
                All Services
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'Web Development',        path: '/services/web-development' },
                  { name: 'Cloud Services',         path: '/services/cloud-services' },
                  { name: 'IT Support',             path: '/services/it-support' },
                  { name: 'Digital Marketing',      path: '/services/digital-marketing' },
                  { name: 'UI / UX Design',         path: '/services/ui-ux-design' },
                  { name: 'Cybersecurity',          path: '/services/cyber-security' },
                  { name: 'Data Solutions',         path: '/services/data-solutions' },
                  { name: 'Graphics & Design',      path: '/services/graphics-design' },
                  { name: 'IT & Business Outsourcing', path: '/services/outsourcing' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`block px-4 py-2.5 rounded-lg transition-colors text-sm font-medium ${
                        location.pathname === item.path
                          ? 'bg-primaryColor text-white'
                          : isDark
                            ? 'text-gray-300 hover:bg-white/10'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact CTA Box */}
            <div className={`p-7 rounded-2xl ${isDark ? 'bg-gradient-to-br from-secondaryColor to-blackColor' : 'bg-gradient-to-br from-creamLightColor to-white'} border ${isDark ? 'border-white/10' : 'border-borderColor'} shadow-xl`}>
              <h3 className={`text-xl font-semibold mb-5 ${isDark ? 'text-white' : 'text-darkColor'}`}>
                Let's Start a Project
              </h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Tell us about your needs — we'll get back within 24 hours.
              </p>
              <Link
                to="/contact"
                className="block w-full py-3.5 bg-primaryColor text-white text-center font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Get in Touch →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;