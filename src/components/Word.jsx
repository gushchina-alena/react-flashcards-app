import React, { useState } from 'react';
import '../assets/styles/Home.css';
import cancel from '../assets/images/cancel.png';
import save from '../assets/images/checked.png';

const Word = ({ english, russian, transcription }) => {
    const [isEditMode, setEditMode] = useState(false);
    const [value, setValue] = useState([]);
    const [list, setList] = useState([]);

    const [word, setWord] = useState({ english, russian, transcription });


    function handleEdit() {
        return setEditMode(true);
    }

    function handleCancel() {
        setWord({
            english,
            russian,
            transcription
        })
        return setEditMode(false);
    }

    function handleSave() {
        setEditMode(false);
    }

    function onChangeEnglish(event) {
        setWord({
            english: event.target.value,
            russian: word.russian,
            transcription: word.transcription
        });
    }

    function onChangeRussian(event) {
        setWord({ 
            russian: event.target.value,
            english: word.english,
            transcription: word.transcription
        });
    }

    function onChangeTranscription(event) {
        setWord({ 
            transcription: event.target.value,
            english: word.english,
            russian: word.russian
        });
    }

    if (!isEditMode) {
        return (
            <tr className='table__row'>
                <td>{word.english}</td>
                <td>{word.transcription}</td>
                <td>{word.russian}</td>
                <td><button className='table__row__btn table__row__btn_edit' onClick={handleEdit}>&#128221;</button></td>
                <td><button className='table__row__btn table__row__btn_delete'>&#128465;</button></td>
            </tr>
        );
    } else {
        return (
            <tr className='table__row'>
                <td>
                    <input value={word.english} onChange={onChangeEnglish} />
                </td>
                <td>
                    <input value={word.transcription} onChange={onChangeTranscription} />
                </td>
                <td>
                    <input value={word.russian} onChange={onChangeRussian} />
                </td>
                <td>
                    <button className='table__row__btn table__row__btn_save' onClick={handleSave}><img src={save} /></button>
                </td>
                <td>
                    <button className='table__row__btn table__row__btn_cancel' onClick={handleCancel}><img src={cancel} /></button>
                </td>
            </tr>
        );
    }
}

export default Word; 