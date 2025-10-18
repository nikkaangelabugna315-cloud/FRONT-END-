import { NavLink } from "react-router-dom";
import styles from "./components.module.css";
import Logo from "/logo11.jpg";

function Aside() {
  return (
    <div>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo11.jpg" />
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/another-page">Another Page</NavLink>
          </li>
          <li>
            <NavLink to="students">Students</NavLink>
          </li>
          <li><li>
            <NavLink to="course">Course</NavLink>
          </li>
           
          </li>
          <li>
            <NavLink to="task">Task</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Aside;
