/* eslint-disable react/react-in-jsx-scope */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar} from 'react-native';
import { BottomTabsNavigation } from './src/routes/BottomTabsNavigation';
import { FatherStackNavigation } from './src/routes/FatherStackNavigation';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar
          animated={true}
          backgroundColor="#f49230"
        />
        <FatherStackNavigation />
      </PaperProvider>
    </NavigationContainer>
  );
}


