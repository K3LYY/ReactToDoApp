import './App.css';
import { useState } from 'react';
import HeaderBar from './components/HeaderBar';
import TasksList from './components/TasksList';
import ListItem from './components/ListItem';
import type { TTask } from './types/task';

//TODO lista;
// 1. Stworzyć input do dodawania nowych zadań -useState()
// 2. Stowrzyć listę do wyświetlania zadań - useState()
// 3. Dodać możliwość usuwania zadań {id: number, text:string, completed: boolean}
// 4. Dodać możliwość edytowania zadań
// 5. Dodać możliwość oznaczania zadań jako wykonane
// 6. Opcja czyszczenia całej listy
// 7. Ładnie i schludnie ostylowana aplikacja

const ToDoList = () => {
  const [tasks, setTasks] = useState<TTask[]>([]);

  const addTask = (count: number, input: string) => {
    if (!input.trim()) return;

    setTasks((curr) => [
      ...curr,
      {
        id: count,
        text: input,
        completed: false,
      },
    ]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const editTask = (id: number, newText: string) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  };

  const clearAll = () => {
    if (window.confirm('Na pewno chcesz usunąć wszystkie zadania?')) {
      setTasks([]);
    }
  };

  return (
    <>
      <HeaderBar addTask={addTask} />
      <TasksList>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </TasksList>

      {tasks.length > 0 && (
        <button
          className="clear absolute top-0 right-0 bg-[#e0afa0] m-10 p-5 text-red-500 rounded-md font-extrabold text-xl"
          onClick={clearAll}
        >
          Wyczyść wszystko
        </button>
      )}
    </>
  );
};

export default ToDoList;
