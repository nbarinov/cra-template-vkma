import { Location } from '@happysanta/router';
import type { ReactNode } from 'react';
import type { BaseViewProps } from '../types/base';

export function getViewProps(viewId: string, location: Location, back: VoidFunction, modal: ReactNode = null, popout: ReactNode = null): BaseViewProps {
  return {
    id: viewId,
    activePanel: location.getViewActivePanel(viewId),
    history: location.route.hasOverlay() ? [] : location.getViewHistory(viewId),
    onSwipeBack: back,
    modal,
    popout,
  };
}
