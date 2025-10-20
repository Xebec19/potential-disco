import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Navigation from "./components/layout/navigation";

export default function Root() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}
