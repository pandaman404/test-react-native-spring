import { Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoBackBtn from '../../components/GoBackBtn';

export default function Poll() {
  return (
    <SafeAreaView>
      <GoBackBtn />
      <Text>poll</Text>
    </SafeAreaView>
  );
}
