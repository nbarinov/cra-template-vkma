import { Page, Router, setGlobalRouter } from '@happysanta/router';

export const modals = {} as const;

export const popouts = {} as const;

export const panels = {
  HOME: 'panel_home',
} as const;

export const views = {
  MAIN: 'view_main',
} as const;

export const pages = {
  MAIN: '/',
} as const;

const routes = {
  [pages.MAIN]: new Page(panels.HOME, views.MAIN),
};

export const router = new Router(routes);

setGlobalRouter(router);

export const pushPage: Router['pushPage'] = (...args) => router.pushPage(...args);
export const popPage: Router['popPage'] = (...args) => router.popPage(...args);
export const popPageCallback = () => popPage();
export const popPageTo: Router['popPageTo'] = (...args) => router.popPageTo(...args);
export const popPageIfModal: Router['popPageIfModal'] = (...args) => router.popPageIfModal(...args);
export const replacePage: Router['replacePage'] = (...args) => router.replacePage(...args);

export const pushModal: Router['pushModal'] = (...args) => router.pushModal(...args);
export const replaceModal: Router['replaceModal'] = (...args) => router.replaceModal(...args);

export const pushPopout: Router['pushPopup'] = (...args) => router.pushPopup(...args);
