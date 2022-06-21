import { ChangeEvent, useState } from 'react';

type Props = {
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({onAdd}: Props) => {

    const [addTitle, setAddTitle] = useState('');
    const [addBody, setAddBody] = useState('');

    const handleAddTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitle(e.target.value);
      }
    
    const handleAddBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddBody(e.target.value);
    }

    const handleAddClick = () => {
        if(addTitle && addBody) {
            onAdd(addTitle, addBody);
        } else {
            alert('Digite um Título e Texto!');
        }
    }

    return(
        <fieldset className="border-2 mb-3">
            <legend>Adicionar novo post</legend>
            <input value={addTitle} onChange={handleAddTitleChange} className="border block" type="text" placeholder="Digite um Título"/>
            <textarea value={addBody} onChange={handleAddBodyChange} className="border block p-3" name=""></textarea>
            <button className="border block" onClick={handleAddClick}>Adicionar</button>
        </fieldset>
)}