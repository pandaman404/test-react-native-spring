import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import GoBackBtn from '../../components/GoBackBtn';

export default function Results() {
  return (
    <SafeAreaView>
      <GoBackBtn />
      <Text>results</Text>
    </SafeAreaView>
  );
}
