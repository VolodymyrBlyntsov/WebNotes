import React from 'react'
import { Link } from 'react-router-dom'

const NoteItem = ({note}) => {
  // Функція для генерації випадкового кольору
  const getRandomColor = () => {
    const colors = ['#7634d8', '#f98412', '#3498db', '#2ecc71', '#e74c3c', '#9b59b6', '#f1c40f'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Отримуємо випадковий колір
  const randomColor = getRandomColor();

  return (
    <Link to={`/edit-note/${note.id}`} className='note' style={{ background: randomColor }}> {/* Встановлюємо стиль фону */}
        <h4>{note.title.length > 60 ? (note.title.substr(0, 60)) + '...' : note.title}</h4>
        <p>{note.date}</p>
    </Link>
  )
}

export default NoteItem
