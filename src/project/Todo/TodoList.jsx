import React from "react";
import { MdDeleteForever, MdCheck } from "react-icons/md"; 

const TodoList = ({data,checked, deletefunc,checkfunc}) => {
  return (
    
      <li className="todo-item">
        <span className={checked ? "checkList":"noCheckList"}>{data}</span>
        {/* current je array ma value hase ae avse   */}
        <button className="check" onClick={()=>checkfunc(data)}>
          <MdCheck />
        </button>
        <button className="delete" onClick={() => deletefunc(data)}>
          <MdDeleteForever />
        </button>
      </li>
  );
};

export default TodoList;
