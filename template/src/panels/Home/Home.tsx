import type { FC } from 'react';
import type { BasePanelProps } from '../../types/base';
import { Panel, PanelHeader } from '@vkontakte/vkui';

export const Home: FC<BasePanelProps> = (props) => {
  return (
    <Panel {...props} className="Home">
      <PanelHeader separator={false}>
        App
      </PanelHeader>
    </Panel>
  );
};
