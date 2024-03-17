import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {
  const [checkedTasks, setCheckedTasks] = useState({});

  const handlePress = (id) => {
    setCheckedTasks(prevState => ({ ...prevState, [id]: !prevState[id] }));
  };

  const tasks = [
    {
      "id": 1,
      "Text": "Faire mes devoirs"
    },
    {
      "id": 2,
      "Text": "Réviser math"
    },
    {
      "id": 3,
      "Text": "Faire portfolio"
    }
  ];

  return (
    <View style={styles.container}>
      {tasks.map(task => (
        <TouchableOpacity key={task.id}             onPress={() => handlePress(task.id)}        >
          <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={checkedTasks[task.id] || false}
          />
          <Text style={styles.paragraph}>{task.Text}</Text>
        </View>
        </TouchableOpacity>
        
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 32,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16, // Add margin to space out tasks
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
});
