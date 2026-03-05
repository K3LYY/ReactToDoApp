import type { ReactNode } from 'react';

interface ITasksListProps {
  children: ReactNode;
}

const TasksList = ({ children }: ITasksListProps) => {
  return <ul className="task-list flex flex-col m-10 p-5">{children}</ul>;
};

export default TasksList;
