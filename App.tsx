import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Tiltle/index';
import Form from './src/components/Form/index';
import Main from './src/components/Main/index';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    width:"100%",
  },
});
