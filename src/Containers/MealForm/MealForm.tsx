import { Button, Form } from "react-bootstrap";
import ButtonSpinner from "../../Components/Preloader/ButtonSpinner";
import { useState } from "react";
import { MealProps } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi";

const MealForm = () => {
  const [meal, setMeal] = useState<MealProps>({
    category: "",
    name: "",
    ccal: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, type, value } = event.target;

    const processedValue = type === "number" ? parseFloat(value) : value;

    setMeal((prevState) => ({
      ...prevState,
      [name]: processedValue,
    }));
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      await axiosApi.post("meals.json", meal);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container w-75">
        <Form.Group controlId="select" className="mt-3">
          <Form.Label>Категория:</Form.Label>
          <Form.Select
            name="category"
            required
            onChange={onChange}
            value={meal.category}
          >
            <option>Выберите категорию</option>
            <option value="breakfast">завтрак</option>
            <option value="snack">перекус</option>
            <option value="lunch">обед</option>
            <option value="dinner">ужин</option>
          </Form.Select>
        </Form.Group>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="meal">
            <Form.Label>Описание приема пищи:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Введите блюда"
              onChange={onChange}
              required
              value={meal.name}
              autoComplete="off"
            />
          </Form.Group>
          <Form.Group controlId="textArea">
            <Form.Label>Калории</Form.Label>
            <Form.Control
              type="number"
              required
              name="ccal"
              placeholder="Введите калории"
              onChange={onChange}
              value={meal.ccal}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="mt-3">
            {loading ? (
              <ButtonSpinner />
            ) : id ? (
              "Редактировать"
            ) : (
              "Добавить прием пищи"
            )}
          </Button>
        </Form>
      </div>
    </>
  );
};

export default MealForm;
