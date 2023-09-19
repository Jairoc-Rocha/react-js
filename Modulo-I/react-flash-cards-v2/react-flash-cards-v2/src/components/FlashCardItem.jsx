import {
  AiOutlineEdit as EditIcon,
  AiOutlineDelete as DeleteIcon,
} from "react-icons/ai";

import "./FlashCardItem.css";

export default function FlashCardItem({
  children: flashCard,
  onDelete = null,
  onEdit = null,
}) {
  const { title, description } = flashCard;

  function handleDeleteIconClick() {
    if (onDelete) {
      onDelete(flashCard.id);
    }
  }

  return (
    <div className="item-container">
      <ul>
        <li>
          <strong>Título:</strong> <span>{title}</span>
        </li>
        <li>
          <strong>Descrição</strong> <span>{description}</span>
        </li>
      </ul>
      <div className="icons-container">
        <EditIcon className="edit-icon" size={24} />
        <DeleteIcon
          onClick={handleDeleteIconClick}
          className="delete-icon"
          size={24}
        />
      </div>
    </div>
  );
}
