import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinkBtn from '../../components/LinkBtn';
import Logo from '../../components/Logo';
import { Colors } from '../../constants/colors';

export default function index() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Logo />
      </View>
      <View style={styles.linksContainer}>
        <LinkBtn text='Encuesta' pathname='/poll' />
        <LinkBtn text='Resultados' pathname='/results' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 80,
    paddingVertical: 100,
    backgroundColor: Colors.white,
  },
  linksContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    width: '100%',
  },
});
