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