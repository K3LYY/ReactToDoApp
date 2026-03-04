import type { ReactNode } from 'react';

interface ITasksListProps {
  children: ReactNode;
}

const TasksList = ({ children }: ITasksListProps) => {
  return <ul className="task-list absolute m-20 p-5 inset-0">{children}</ul>;
};

export default TasksList;
