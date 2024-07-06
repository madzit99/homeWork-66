import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonSpinner from "../Preloader/ButtonSpinner";

interface Props {
  category: string;
  name: string;
  ccal: number;
  isLoading: boolean;
  id: string;
  onDelete: () => void;
}

const Meal:React.FC<Props> = ({category, name, ccal, isLoading, id, onDelete}) => {
    return (
      <div className="card border border-primary w-75 mx-auto p-3 mt-3">
        <p className="m-0">{category}</p>
        <h2>{name}</h2>
        <p className="m-0">Калории: {ccal}</p>
        <div className="btn-wrapper mt-3">
          <Link to={`/meal-form/${id}`} className="btn btn-success me-3">
            Редактировать
          </Link>
          <Button variant="danger" disabled={isLoading} onClick={onDelete}>
            {isLoading && <ButtonSpinner />}
            Удалить
          </Button>
        </div>
      </div>
    );
}

export default Meal;