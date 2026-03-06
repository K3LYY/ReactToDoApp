import '../App.css';
import { useState } from 'react';
import type { TTask } from '../types/task';

interface IListItemProps {
  task: TTask;
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
  editTask: (id: number, editText: string) => void;
}

const ListItem = ({
  task,
  toggleComplete,
  deleteTask,
  editTask,
}: IListItemProps) => {
  const [editText, setEditText] = useState<string>(task.text);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const save = () => {
    editTask(task.id, editText);
    setIsEditing(false);
  };
  return (
    <li
      className={`mt-5 items-center object-center bg-cardBackground rounded-md text-lg text-[#463f3a] font-bold p-5 flex`}
    >
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={save}>💾</button>
        </>
      ) : (
        <>
          <span
            className={`${task.completed ? 'bg-green-300' : 'bg-red-300'} rounded-md mr-5`}
          >
            {task.text}
          </span>
          <div className="buttons">
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? '❌' : '✅'}
            </button>
            <button onClick={() => setIsEditing(true)}>✏️</button>
            <button onClick={() => deleteTask(task.id)}>🗑️</button>
          </div>
        </>
      )}
    </li>
  );
};

export default ListItem;
