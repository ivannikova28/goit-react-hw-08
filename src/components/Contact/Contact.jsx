import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts/operations";

import css from "./Contact.module.css";


export default function ContactItem({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.fullContact}>
      <div className={css.contactInfo}>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>

      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
