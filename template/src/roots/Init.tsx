import type { FC } from 'react';
import { BridgePlus } from '@happysanta/bridge-plus';
import { RouterContext } from '@happysanta/router';
import { router } from '../router';
import { ConfigProvider } from '@vkontakte/vkui';

export const Init: FC = (props) => {
  return (
    <RouterContext.Provider value={router}>
      <ConfigProvider scheme="inherit" isWebView>
        {props.children}
      </ConfigProvider>
    </RouterContext.Provider>
  );
};
