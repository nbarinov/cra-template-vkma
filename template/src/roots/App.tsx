import { withThrottlingRouter } from '@happysanta/router';
import { getViewProps } from '../partial/props';
import { views, panels, popPageCallback } from '../router';
import { AppLoader } from './AppLoader';
import * as Panels from '../panels';
import { Root, AppRoot, View } from '@vkontakte/vkui';

export const App = withThrottlingRouter(function App(props) {
  return (
    <AppLoader>
      <AppRoot>
        <Root activeView={props.location.getViewId()}>
          <View
            {...getViewProps(views.MAIN, props.location, popPageCallback)}
            onTransitionEnd={props.onTransitionEnd}>
            <Panels.Home id={panels.HOME} />
          </View>
        </Root>
      </AppRoot>
    </AppLoader>
  );
});
