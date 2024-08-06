import css from './SearchBox.module.css'
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { setStatusFilter } from "../../redux/filters/slice";
import { useId } from "react";

export default function SearchBox() {
  const id = useId();
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(setStatusFilter(name));
  };
  return (
    <div className={css.box}>
      <p className={css.label}>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        id={id}
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );

}
