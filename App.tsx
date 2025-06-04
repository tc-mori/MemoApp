import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello style={{ fontSize:25 }} bang={true}>Peter</Hello>
      <Text>余計なお世Wi-Fi</Text>
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
