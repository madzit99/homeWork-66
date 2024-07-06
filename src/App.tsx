import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Meals from "./Containers/Meals/Meals";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Meals/>} />
      </Routes>
    </Layout>
  );
};

export default App;
