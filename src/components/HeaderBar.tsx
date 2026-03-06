import { useState } from 'react';
import type { TTasks } from '../types/task';
import ChangeThemeButton from './ChangeThemeButton';

interface IHeaderBarProps {
  addTask: (id: number, input: string) => void;
  tasks: TTasks;
  clearAll: () => void;
}

const HeaderBar = ({ addTask, tasks, clearAll }: IHeaderBarProps) => {
  const [input, setInput] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  const handleAddClick = () => {
    addTask(count, input);
    setInput('');
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div
      className={`bg-cardBackground flex flex-row justify-strech  rounded-md m-10 p-5`}
    >
      <br />
      <div className="input-group w-16 flex-auto text-xl font-extrabold">
        <input
          type="text"
          className="mr-5 text-[#463f3a]"
          placeholder="Dodaj nowe zadanie..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button
          type="button"
          onClick={handleAddClick}
          onKeyDown={handleAddClick}
          className="text-[#463f3a]"
        >
          Dodaj
        </button>
        <ChangeThemeButton />
      </div>
      <div className="w-64 flex-auto">
        <h1 className="text-center text-[#463f3a] text-xl font-extrabold">
          TODO Lista
        </h1>
      </div>
      <div className="w-16 flex-auto">
        {tasks.length > 0 && (
          <button
            className="clear float-end text-red-500 font-extrabold text-xl"
            onClick={clearAll}
          >
            Wyczyść wszystko
          </button>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
