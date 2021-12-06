import { BridgePlus } from '@happysanta/bridge-plus';
import bridge from '@vkontakte/vk-bridge';

function fallbackInit() {
  return new Promise((resolve) => {
    BridgePlus.init().then(resolve);
    window.setTimeout(resolve, 1e3);
  });
}

export function initView() {
  if (bridge.isWebView()) {
    const setViewSettings = (dark = false): Promise<{ result: true }> => {
      if (!bridge.supports('VKWebAppSetViewSettings')) return Promise.resolve({ result: true });

      return bridge.send('VKWebAppSetViewSettings', {
        status_bar_style: dark ? 'light' : 'dark',
        action_bar_color: dark ? '#0a0a0a' : '#FFFFFF',
      });
    };

    BridgePlus.subscribe('VKWebAppUpdateConfig', (e) => {
      const scheme = e.scheme ?? 'client_light';
      const isDark = scheme === 'client_dark' || scheme === 'space_gray';

      const oldScheme = document.body.getAttribute('scheme');
      if (oldScheme !== scheme) {
        setViewSettings(isDark).catch((e) => console.log('setViewSettings error', e));
        document.body.setAttribute('scheme', scheme);
      }
    });
  }

  return fallbackInit();
}
