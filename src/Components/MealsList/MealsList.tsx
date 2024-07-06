import { Meals } from "../../types";
import Meal from "./Meal";

interface Props {
  meals: Meals | null;
  isLoading: boolean;
  onDelete: (id: string) => void;
}

const MealsList: React.FC<Props> = ({ meals, isLoading, onDelete }) => {
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
            onDelete={() => onDelete(key)}
          />
        ))
      ) : (
        <h1 className="text-center">Нет приемов пищи</h1>
      )}
    </>
  );
};

export default MealsList;
