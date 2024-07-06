import { useEffect, useState } from "react";
import { Meals } from "../../types";
import axiosApi from "../../axiosApi";
import MealsList from "../../Components/MealsList/MealsList";

const Meals = () => {
  const [meals, setMeals] = useState<Meals | null>(null);

  const fetchMeals = async () => {
    try {
      const response = await axiosApi.get("meals.json");
      setMeals(response.data);
    } catch (e) {
      console.log("Error", e);
    }
  };

  useEffect(() => {
    void fetchMeals(); 
  },[]);

  return (
    <>
        <MealsList meals={meals} />
    </>
  );
};

export default Meals;
