import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

const tasks = [
  { id: '1', title: 'Morning Run' },
  { id: '2', title: 'Math Homework' },
  { id: '3', title: 'Finish React Native App' },
  { id: '4', title: 'Grocery Shopping' },
  { id: '5', title: 'Read a Book' },
  { id: '6', title: 'Cook Dinner' },
  { id: '7', title: 'Clean the House' },
  { id: '8', title: 'Study for Exams' },
  { id: '9', title: 'Yoga Session' },
  { id: '10', title: 'Plan the Week' },
  { id: '11', title: 'Write Blog Post' },
  { id: '12', title: 'Update Resume' },
  { id: '13', title: 'Watch a Movie' },
  { id: '14', title: 'Visit Family' },
  { id: '15', title: 'Gardening' },
];

const TaskList = () => {
  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => (
        <View style={styles.taskContainer}>
          <Text style={styles.taskText}>{item.title}</Text>
          <Button title="Complete" onPress={() => {
          }} />
        </View>
      )}
      keyExtractor={(item) => item.id}
      style={styles.taskList}
    />
  );
};

const styles = StyleSheet.create({
  taskList: {
    marginTop: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskList;