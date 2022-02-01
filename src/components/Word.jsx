import React, { useState } from 'react';
import '../assets/styles/Home.css';
import cancel from '../assets/images/cancel.png';
import save from '../assets/images/checked.png';

const Word = ({ ...words }) => {
    const [isEditMode, setEditMode] = useState(false); 
    const [value, setValue] = useState([]);
    const [list, setList] = useState([]);

    function handleEdit() {
        return setEditMode(true); 
    }

    function handleCancel() {
        return setEditMode(false);
    }

    function handleSave() {
        value.map((item) => {
            setList(...item)
            console.log(list)
        })
    }



    function getValue(event) {
        setValue(event.target.value);
    }
    return (
        <tr className='table__row'>
            <td>{isEditMode ? <input onChange={getValue} defaultValue={words.english}/> : words.english}</td>
            <td>{isEditMode ? <input defaultValue={words.transcription} /> : words.transcription}</td>
            <td>{isEditMode ? <input defaultValue={words.russian} /> : words.russian}</td>
            {isEditMode ? <td><button className='table__row__btn table__row__btn_save' onClick={handleSave}><img src={save}/></button></td>: null}
            <td>{isEditMode ? <button className='table__row__btn table__row__btn_cancel' onClick={handleCancel}><img src={cancel}/></button> : <button className='table__row__btn table__row__btn_edit' onClick={handleEdit}>&#128221;</button>}</td>
            {isEditMode ? null : <td><button className='table__row__btn table__row__btn_delete'>&#128465;</button></td>}
        </tr>
    );
}

export default Word; 