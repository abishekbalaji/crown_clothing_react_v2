import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import Authentication from "./pages/Authentication/Authentication";

import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
