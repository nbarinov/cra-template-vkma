import './styles';
import type { AnyFunction } from '@clickpick/shared';
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
  initView().catch(captureError);
  mount();
});
