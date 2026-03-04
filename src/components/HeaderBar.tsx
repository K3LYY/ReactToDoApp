import { useState } from 'react';

interface IHeaderBarProps {
  addTask: (id: number, input: string) => void;
}

const HeaderBar = ({ addTask }: IHeaderBarProps) => {
  const [input, setInput] = useState<string>('');
  const [count, setCount] = useState<number>(0);

  const handleAddClick = () => {
    addTask(count, input);
    setInput('');
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <div className="absolute inset-x-0 top-0 m-10 p-5 bg-[#e0afa0] rounded-md">
        <h1 className="text-center text-[#463f3a] text-xl font-extrabold">
          TODO Lista
        </h1>
      </div>
      <br />
      <div className="input-group absolute top-0 left-0 m-10 p-5 text-xl font-extrabold">
        <input
          type="text"
          className="mr-5 text-[#463f3a]"
          placeholder="Dodaj nowe zadanie..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={handleAddClick} className="text-[#463f3a]">
          Dodaj
        </button>
      </div>
    </>
  );
};

export default HeaderBar;
