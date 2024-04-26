import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import useCreateDate from '../components/useCreateDate'

const CreateNote = ({setNotes}) => {

    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const date = useCreateDate()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title && details) {
            const note = {id: uuid(), title, details, date}

            // функціонал додавання нотатки в лист загальних нотаток
            setNotes(prevNotes => [note, ...prevNotes])

            // перенаправляємо користувача на домашню сторінку
            navigate('/')

            console.log(note)
        }
    }

    return (
        <section>
            <header className="create-note__header">
                <Link to="/" className='btn'> <IoIosArrowBack /> </Link>
                <button className="btn lg primary" onClick={handleSubmit}>Зберегти</button>
            </header>
            <form className="create-note__form" onSubmit={handleSubmit}>
                <input type="text" placeholder='Назва' value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                <textarea rows="28" placeholder='Деталі нотатки...' value={details} onChange={e => setDetails(e.target.value)}></textarea>
            </form>
        </section>
    )
}

export default CreateNote