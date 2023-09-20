import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FormComponent from "./pages/FormComponent";
import MainNavbar from "./components/MainNavbar";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route
          path="/checkbox"
          element={<FormComponent formComponent={"checkbox"} />}
        />
        <Route
          path="/radio"
          element={<FormComponent formComponent={"radio"} />}
        />
        <Route
          path="/range"
          element={<FormComponent formComponent={"range"} />}
        />
        <Route
          path="/reset"
          element={<FormComponent formComponent={"reset"} />}
        />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;