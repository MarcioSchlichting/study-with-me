import React, { useState, useCallback } from "react";
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    View,
    Text } from "react-native";

import ClickableStyledInput from "../../components/ClickableStyledInput";
import TaskItem from "../../components/TaskItem";

const ActivitiesScreen = () => {

    const [tasks, setTasks] = useState([
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: true },
    ]);

    const toggleTask = useCallback((id : any) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    }, []);

    const addTask = useCallback((title : any) => {
        
        if (title === '') return;
        setTasks(prevTasks => [...prevTasks, { id: prevTasks.length ? prevTasks[prevTasks.length - 1].id + 1 : 1, title: title, completed: false }]);
    }, []);

    return(
        <SafeAreaView style={styles.container}>
            <ClickableStyledInput placeholder="Type your new task here..." onPress={addTask} />
            <View style={styles.divider}/>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <TaskItem completed={item.completed} title={item.title} onChecked={() => toggleTask(item.id)} />
                )}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 12,
        marginHorizontal: 12,
        display: 'flex',
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(128, 128, 128, 0.5)',
        marginVertical: 20
    },
})

export default ActivitiesScreen;