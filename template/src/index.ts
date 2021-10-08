import './styles';
import type { AnyFunction } from '@clickpick/shared';
import { mount } from './partial/mount';

((fn: AnyFunction) => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})(mount);
