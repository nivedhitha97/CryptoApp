/**
 * Crypto App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Home from './src/components/containers/Home';
import {Provider} from 'react-redux';
import {store} from './src/reducers/Store';

function App(): React.JSX.Element {

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
