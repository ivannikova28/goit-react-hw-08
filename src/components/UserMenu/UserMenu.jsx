import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";
import { useNavigate } from "react-router-dom";

export default function UserMenu() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handlerLogOut = () => {
    dispatch(logOut())
    navigate('/')
  }

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={handlerLogOut}>
        Logout
      </button>
    </div>
  );
}
