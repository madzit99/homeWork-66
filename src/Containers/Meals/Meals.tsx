import { useEffect, useState } from "react";
import { Meals } from "../../types";
import axiosApi from "../../axiosApi";
import MealsList from "../../Components/MealsList/MealsList";

const Meals = () => {
  const [meals, setMeals] = useState<Meals | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [calories, setCalories] = useState<number>(0);

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

  const totalCalories = () => {
    if (meals) {
      const calories = Object.values(meals).reduce(
        (acc, meal) => acc + meal.ccal,
        0
      );
      setCalories(calories);
    }
  };

  useEffect(() => {
    totalCalories();
  }, [meals, totalCalories]);

  const onDelete = async (id: string) => {
    await axiosApi.delete("meals/" + id + ".json");
    await fetchMeals();
  };

  return (
    <>
      <h2 className="text-center">Общие калории: {calories}</h2>
      <MealsList meals={meals} isLoading={loading} onDelete={onDelete} />
    </>
  );
};

export default Meals;
