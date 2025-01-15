import Logo from "@/components/Logo";
import Moon from "@/icons/Moon";
import Sun from "@/icons/Sun";

const Header: React.FC<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}> = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="w-full sticky top-0 flex justify-between items-center py-4 px-6 bg-white dark:bg-slate-900 shadow-sm z-30">
      <a className="flex items-center gap-3" href="/">
        <Logo />
        <h1 className="font-semibold text-slate-800 dark:text-slate-50 text-xl">
          Movies Collection
        </h1>
      </a>
      <button
        className="w-5 h-5 text-violet-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
        onClick={toggleDarkMode}
      >
        <div
          className={`transition-transform duration-300 ${
            darkMode ? "rotate-180 scale-110" : "rotate-0 scale-100"
          }`}
        >
          {darkMode ? <Sun /> : <Moon />}
        </div>
      </button>
    </div>
  );
};

export default Header;
