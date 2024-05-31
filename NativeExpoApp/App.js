import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello, you are most welcome</Text>
      <TextInput style={styles.input} placeholder="Search tasks..." />
      
      <Text style={styles.header2}>Ongoing tasks list</Text>
      <TaskList/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  subheader:{
      fontsize:24,
      fontWeight:'bold',
      marginVertical:20,




    }
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default App;