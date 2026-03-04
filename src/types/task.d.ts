import type { ReactNode } from 'react';

export type TTask = {
  id: number;
  text: string;
  completed: boolean;
};

export type TTasks = TTask[];
