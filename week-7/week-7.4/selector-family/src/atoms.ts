import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      await new Promise (r => setTimeout(r, 3000));
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${String(id)}`);
      return res.data.todo;
    },
  })
});

// parameter returns async function({get}) 
// get: function(id) {
//   return async function ({get}) {
//     const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${String(id)}`);
//     return res.data.todo;
//   }
// }