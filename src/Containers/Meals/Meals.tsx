import { useEffect, useState } from "react";
import { Meals } from "../../types";
import axiosApi from "../../axiosApi";
import MealsList from "../../Components/MealsList/MealsList";

const Meals = () => {
  const [meals, setMeals] = useState<Meals | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMeals = async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get("meals.json");
      setMeals(response.data);
    } catch (e) {
      console.log("Error", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchMeals();
  }, []);

  return (
    <>
      <MealsList meals={meals} isLoading={loading} />
    </>
  );
};

export default Meals;
