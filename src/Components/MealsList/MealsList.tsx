import { Meals } from "../../types";

interface Props {
  meals: Meals | null;
}

const MealsList: React.FC<Props> = ({ meals }) => {
  return (
    <>
      {meals ? (
        Object.keys(meals).map((key) => <p key={key}>{meals[key].name}</p>)
      ) : (
        <h1>blabla</h1>
      )}
    </>
  );
};

export default MealsList;
