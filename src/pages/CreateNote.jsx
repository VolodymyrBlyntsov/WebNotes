import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const CreateNote = () => {
  return (
    <section>
        <header className="create-note__header">
            <Link to="/" className='btn'> <IoIosArrowBack /> </Link>
            <button className="btn lg primary">Зберегти</button>
        </header>
        <form className="create-note__form">
            <input type="text" placeholder='Назва' autoFocus />
            <textarea rows="28" placeholder='Деталі нотатки...'></textarea>
        </form>
    </section>
  )
}

export default CreateNote