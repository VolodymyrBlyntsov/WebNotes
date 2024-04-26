import React from 'react'
import { CiSearch } from 'react-icons/ci'
import NoteItem from '../components/NoteItem'
import { Link } from 'react-router-dom' 
import { BsPlusLg } from 'react-icons/bs'

const Notes = ({notes}) => {
  return (
    <section>
        <header className='notes__header'>
            <h2>Нотатки</h2>
            {/* <input type="text" autoFocus placeholder='Введіть...'/> */}
            <button className='btn'> <CiSearch /> </button>
        </header>
        <div className="notes__container">
            {
                notes.map(note => <NoteItem key={note.id} note={note} />)
            }
        </div>
        <Link className='btn add__btn'> <BsPlusLg /> </Link>
    </section>
  )
}

export default Notes