import './src/config/gesture-handler';
import AppProvider from './src/AppProvider';
import AppStackNavigator from './src/navigators/AppStackNavigator';

export default function App() {
  return (
    <AppProvider>
      <AppStackNavigator />
    </AppProvider>
  );
}
