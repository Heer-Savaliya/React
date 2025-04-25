const todokey ="reactTodo";

export const getLocalStorageTodoData = () =>{
    const rawTodo = localStorage.getItem(todokey);
    if (!rawTodo) return []; 
    return JSON.parse(rawTodo);
}

export const setLocalStorageTodoData = (task) =>{
   // add data to localstorage
  return localStorage.setItem(todokey, JSON.stringify(task));
}