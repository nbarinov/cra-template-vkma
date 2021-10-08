import { render, unmountComponentAtNode } from 'react-dom';
import { Init, App } from '../roots';

export const getRoot = () => {
  return document.getElementById('root') as unknown as HTMLDivElement;
};

export const mount = () => {
  return new Promise<void>((resolve) => {
    render(
      <Init>
        <App />
      </Init>,
      getRoot(),
      resolve
    );
  });
};

export const unmount = () => {
  return new Promise<void>((resolve, reject) => {
    unmountComponentAtNode(getRoot()) ? resolve() : reject();
  });
};
