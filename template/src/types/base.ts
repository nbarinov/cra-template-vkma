import type { ReactNode } from 'react';

export interface BaseViewProps {
  id: string;
  activePanel: string;
  popout?: ReactNode;
  modal?: ReactNode;
  onSwipeBack?: VoidFunction;
  history?: string[];
}

export interface BasePanelProps {
  id: string;
}
