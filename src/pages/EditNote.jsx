import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const EditNote = () => {
    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className='btn'> <IoIosArrowBack /> </Link>
                <button className="btn lg primary">Зберегти</button>
                <button className='btn danger'> <RiDeleteBin6Line /> </button>
            </header>
            <form className="create-note__form">
                <input type="text" placeholder='Назва' autoFocus />
                <textarea rows="28" placeholder='Деталі нотатки...'></textarea>
            </form>
        </section>
      )
}

export default EditNote