import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Movies from "@/components/Movies";
import { MoviesProvider } from "@/context/MoviesContext";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleDarkMode = () =>
    setDarkMode((prevDarkMode: boolean) => !prevDarkMode);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <MoviesProvider>
      <div className="h-screen flex flex-col">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Movies />
      </div>
    </MoviesProvider>
  );
}

export default App;
