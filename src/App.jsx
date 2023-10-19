import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ControlAreaBuilder from "./components/ControlAreaBuilder";
import MainNavbar from "./components/MainNavbar";
import ButtonExample from "./pages/ButtonExample";
import CheckboxExample from "./pages/CheckboxExample";
import RadioAreaExample from "./pages/RadioAreaExample";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route
          path="/controlBox"
          element={<ControlAreaBuilder controlComponentType={""} displayBorder={true} legend="Norman's Test"/>}
        />
        <Route
          path="/button"
          element={<ButtonExample />}
        />
        <Route
          path="/checkbox"
          element={<CheckboxExample />}
        />
        <Route
          path="/radio"
          element={<RadioAreaExample />}
        />
        <Route
          path="/rangeSlider"
          element={<ControlAreaBuilder controlComponentType={"rangeSlider"} />}
        />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
