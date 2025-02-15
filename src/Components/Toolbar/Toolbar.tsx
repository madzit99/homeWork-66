import { NavLink } from "react-router-dom";

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid w-75">
        <NavLink to="/" className="navbar-brand">
          Трекер калорий 
        </NavLink>
        <NavLink to="meal-form" className="nav-item nav-link text-white">
          Добавить прием пиши
        </NavLink>
      </div>
    </nav>
  );
};

export default Toolbar;
