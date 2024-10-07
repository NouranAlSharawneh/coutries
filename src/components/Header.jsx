import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Header({ mode, setMode }) {
  const navigate = useNavigate();
  const handleModeToggle = () => {
    // Toggle between 'light' and 'dark' modes
    setMode(mode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = mode === "light" ? "light-mode" : "dark-mode";
  }, [mode]);

  return (
    <header className={mode === "light" ? "light-mode" : "dark-mode-header"}>
      <p onClick={() => navigate("/")}>Where in the world?</p>
      <div className="mode-toggle" onClick={handleModeToggle}>
        <i
          className={
            mode === "dark" ? "fa-regular fa-moon" : "fa-solid fa-moon"
          }
        ></i>
        <span>{mode === "light" ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </header>
  );
}

export default Header;
