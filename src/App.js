import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

import Authentication from "./pages/Authentication/Authentication";

import Home from "./pages/Home/Home";

const Shop = () => {
  return (
    <div>
      <h2>Shop Page</h2>
    </div>
  );
};

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
