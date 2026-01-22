const SocialIcon = ({ href, Icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-purple-600 transition"
    >
      <Icon />
    </a>
  );
};

export default SocialIcon;
