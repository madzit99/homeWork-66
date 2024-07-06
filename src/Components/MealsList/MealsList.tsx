import { Meals } from "../../types";
import Meal from "./Meal";

interface Props {
  meals: Meals | null;
  isLoading: boolean;
}

const MealsList: React.FC<Props> = ({ meals, isLoading }) => {
  return (
    <>
      {meals ? (
        Object.keys(meals).map((key) => (
          <Meal
            key={key}
            id={key}
            name={meals[key].name}
            category={meals[key].category}
            ccal={meals[key].ccal}
            isLoading={isLoading}

          />
        ))
      ) : (
        <h1>blabla</h1>
      )}
    </>
  );
};

export default MealsList;
