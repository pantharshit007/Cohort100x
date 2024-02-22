import { atom, selector } from "recoil";

export const countAtoms = atom({
    key: "countAtoms",
    default: 0,
})

export const isEvenSelector = selector({
    key: "isEvenSelector",
    get: ({get})=> {
        const count = get(countAtoms);
        return count%2 === 0;
    }
})

export const filteredTodos = atom({
    key: "filteredTodos",
    default: '',
})

export const todoAtom = atom({
    key: "todoAtom",
    default: [],
})

export const filterSelector = selector({
    key: "filterSelector",
    get: ({get})=>{
        const todos = get(todoAtom);
        const filterTodo = get(filteredTodos);
        const result =  todos.filter((todo)=> (todo.title.includes(filterTodo) || 
                                                todo.description.includes(filterTodo)) )

        return result;
    }
})