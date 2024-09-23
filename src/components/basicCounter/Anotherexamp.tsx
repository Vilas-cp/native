import {
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity,
  } from "react-native";
  import React, { useState } from "react";
  
  const Anotherexamp = () => {
    const [task, setTask] = useState("");
    const [rendertask, setRender] = useState<{ id: string; task: string }[]>([]);
  
    const addtodo = () => {
      if (task.trim()) {
        // Add new task object with unique id and task content
        setRender((prevTasks) => [...prevTasks, { id: Date.now().toString(), task }]);
        setTask(""); // Clear input field after adding
      }
    };
  
    const removeTodo = (id: string) => {
      // Remove task by filtering out the one with the given id
      setRender(rendertask.filter((todo) => todo.id !== id));
    };
  
    const renderTodo = ({ item }: { item: { id: string; task: string } }) => {
      return (
        <TouchableOpacity onPress={() => removeTodo(item.id)}>
          {/* Text must be wrapped in a <Text> component */}
          <Text>{item.task}</Text>
        </TouchableOpacity>
      );
    };
  
    return (
      <View>
        <Text>Another Example</Text>
        <TextInput
          placeholder="Enter task"
          value={task}
          onChangeText={setTask}
          onSubmitEditing={addtodo}
          returnKeyType="done"
        />
        <Button title="Add task" onPress={addtodo} />
        <FlatList
          data={rendertask}
          keyExtractor={(item) => item.id} // Ensure unique key based on id
          renderItem={renderTodo}
        />
      </View>
    );
  };
  
  export default Anotherexamp;
  