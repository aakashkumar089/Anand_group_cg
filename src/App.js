import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import RootStackScreen from './routes/RootStackScreen';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {configStore} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import HomeScreen from './screens/HomeScreen';
import MyDrawer from './routes/Drawer';
import {LogBox } from 'react-native';
import OpenCalender from './screens/OpenCalender';



LogBox.ignoreLogs(['Reanimated 2']);
const {store, persistor} = configStore();
//const Drawer = createDrawerNavigator();

const queryClient = new QueryClient();


const App = () => (
  
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootStackScreen />


          {/* <OpenCalender/> */}
          {/* <MyDrawer/> */}
          

          
        </NavigationContainer>
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);

export default App;
