import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Meals from "./Containers/Meals/Meals";
import MealForm from "./Containers/MealForm/MealForm";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Meals />} />
        <Route path="/meal-form" element={<MealForm />} />
        <Route path="/meal-form/:id" element={<MealForm />} />
      </Routes>
    </Layout>
  );
};

export default App;
