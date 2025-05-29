import { Link } from "react-router";
import { PlusIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-violet-300 dark:bg-gray-800 shadow-md p-4 flex justify-between items-center transition-colors duration-300">
      <h1 className="text-xl font-bold text-blue-600 dark:text-white">
        My Notes App
      </h1>

      <div className="flex items-center gap-4">
        <Link
          to={"/create"}
          className="text-blue-500 hover:underline flex gap-2 items-center"
        >
          <PlusIcon className="size-5" />
          <span className="hidden sm:inline">New Note</span>
        </Link>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-violet-400 dark:hover:bg-gray-700 transition"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon className="size-5 text-gray-800" />
          ) : (
            <Sun className="size-5 text-yellow-300" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
