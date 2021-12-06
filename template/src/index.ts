import './styles';
import type { AnyFunction } from '@clickpick/shared';
import { router } from './router';
import { initView } from './partial/view';
import { mount } from './partial/mount';
import { captureError } from './utils/error';

((fn: AnyFunction) => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})(() => {
  router.start();

  initView().catch(captureError);
  mount();
});
