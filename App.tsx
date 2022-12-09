import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { VotesScreen } from './src/screens/VotesScreen';
import { WinnerScreen } from './src/screens/WinnerScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <VotesScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
