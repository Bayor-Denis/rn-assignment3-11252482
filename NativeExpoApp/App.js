import React, { useEffect, useRef, useState } from 'react';
import { Button, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';


const categories = [
  { id: '1', name: 'Exercise', image: require('./assets/exercise.png'), description: '2 tasks' },
  { id: '2', name: 'Study', image: require('./assets/study.png'), descriptio: '2 tasks' },
  { id: '3', name: 'Code', image: require('./assets/code.png'), description: '3 tasks' },
  { id: '4', name: 'Cook', image: require('./assets/cook.png'), description: '2 tasks' },
  { id: '5', name: 'Read', image: require('./assets/read.png'), description: '2 tasks' },
  { id: '6', name: 'Meditate', image: require('./assets/meditate.png'), description: '1 task' },
  { id: '7', name: 'Work', image: require('./assets/work.png'), description:'2 tasks' },
  { id: '8', name: 'Relax', image: require('./assets/relax.png'), description: '1 task' },
];

const tasks = [
  { id: '1', title: 'Morning Run', completed: false },
  { id: '2', title: 'DCIT202 assignment', completed: false },
  { id: '3', title: 'Finish React Native App', completed: false },
  { id: '4', title: 'Grocery Shopping', completed: false },
  { id: '5', title: 'Read a Book', completed: false },
  { id: '6', title: 'Cook Dinner', completed: false },
  { id: '7', title: 'Clean the House', completed: false },
  { id: '8', title: 'Study for Exams', completed: false },
  { id: '9', title: 'Computer gaming', completed: false },
  { id: '10', title: 'Plan the Week', completed: false },
  { id: '11', title: 'Write Blog Post', completed: false },
  { id: '12', title: 'Update Resume', completed: false },
  { id: '13', title: 'Watch a Movie', completed: false },
  { id: '14', title: 'Visit Family', completed: false },
  { id: '15', title: 'Speed typing practice', completed: false },
];


const Category = ({ name, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <View style={[styles.categoryContainer, isHovered && styles.hoveredCategory]}>
        <Image source={image} style={styles.categoryImage} />
        <Text style={styles.categoryText}>{name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const TaskItem = ({ title, completed }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsHovered(true)}
      onPressOut={() => setIsHovered(false)}
    >
      <View style={[styles.taskItem, isHovered && styles.hoveredTask]}>
        <Text style={[styles.taskTitle, completed && styles.completedTask]}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};


const SearchInput = () => {
  return (
    <View style={styles.searchContainer}>
      <Image source={require('./assets/search.png')} style={styles.searchIcon} />
      <TextInput style={styles.input} placeholder="Search tasks..."  />
      <Image source={require('./assets/Filter.png')} style={styles.FilterIcon} />
    </View>
    
  );
};


const App = () => {
  const categoryListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (categoryListRef.current) {
        setCurrentIndex(prevIndex => {
          const nextIndex = (prevIndex + 1) % categories.length;
          categoryListRef.current.scrollToIndex({ animated: true, index: nextIndex });
          return nextIndex;
        });
      }
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Hello, you are welcome      <Image source={require('./assets/Profile Image.png')} style={styles.ProfileImageIcon} /></Text>
        <Text style={styles.subheader}>15 tasks today</Text>
        <SearchInput />

        <Text style={styles.sectionHeader}>Categories</Text>
        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => <Category name={item.name} image={item.image} />}
          keyExtractor={item => item.id}
          style={styles.categoriesContainer}
          ref={categoryListRef}
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.sectionHeader}>Ongoing Tasks</Text>
        <FlatList
          data={tasks}
          renderItem={({ item }) => <TaskItem title={item.title} completed={item.completed} />}
          keyExtractor={item => item.id}
          style={styles.taskList}
        />

        <Button title="Add Task" onPress={() => {}} />
      </ScrollView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 16,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 40,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoriesContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius:1,
    padding: 20,
  },
  categoryContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginRight: 8,
    alignItems: 'center',
  },
  hoveredCategory: {
    backgroundColor: '#d0d0d0',
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'blue',
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  categoryText: {
    fontSize: 16,
    textAlign:'bottom',
    padding:30,
  },
  taskList: {
    marginBottom: 16,
  },
  taskItem: {
    backgroundColor: '#FFFFFF',
    padding: 50,
    borderRadius: 10,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:'white',
    marginBottom: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  hoveredTask: {
    backgroundColor: 'white',
    borderWidth:2,
    borderStyle:'solid',
    borderColor:'blue',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },
  Button: {
    marginBottom:20,
  },
});

export default App







