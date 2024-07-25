import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface AppProviderProps {
  children: ReactNode;
}

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style='auto' />
        {children}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
