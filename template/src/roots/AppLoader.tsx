import { FC, useState } from 'react';
import { PanelSpinner } from '@vkontakte/vkui';

export const AppLoader: FC = (props) => {
  const [ready] = useState(true);

  if (ready) return <>{props.children}</>;

  return <PanelSpinner style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }} />;
};
