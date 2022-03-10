import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//changes
export default function App() {
  return (
    <View style={styles.rootblock}>
      <Text>ohmx!</Text>
      <StatusBar style="auto" />
      <Button title="Empty" onPress={buttonPressed} style = {styles.buttonStyle}/>
    </View>
  );

  function buttonPressed(){
    console.log("button pressed")
  }
}
const styles = StyleSheet.create({
  rootblock: {
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
