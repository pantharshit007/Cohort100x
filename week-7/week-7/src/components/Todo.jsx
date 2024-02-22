import React, { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filterSelector, todoAtom, filteredTodos } from '../store/atoms/count';

function Todo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const setTodos = useSetRecoilState(todoAtom);
    const setFilter = useSetRecoilState(filteredTodos);

    function submitHandler() {
        setTodos((prevTodo) => [...prevTodo, { title, description }]);
        setTitle('');
        setDescription('');
    }

    const todos = useRecoilValue(todoAtom);
    const filteredTodo = useRecoilValue(filterSelector);

  return (
    <div>
        <input type="text" name="" placeholder='title' 
            onChange={ (e)=>{ setTitle(e.target.value); }}/> 
        <br />
        <input type="text" name="" placeholder='description' 
            onChange={ (e)=>{ setDescription(e.target.value); }}/>
        <br />

        <button onClick={submitHandler }>Add Todo</button>
        <br />
        <input type="text" placeholder='filterTodo' 
            onChange={ (e)=>{ setFilter(e.target.value); }}/>

        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo.title} - {todo.description}
                </li>
            ))
            }
        </ul>

        <ol>
            {filteredTodo.map((todo, index) => (
                <li key={index}>
                    {todo.title} - {todo.description}
                </li>
            ))
            }
        </ol>
    </div>
  )
}

export default Todo