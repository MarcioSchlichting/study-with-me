import {
    View, 
    Text, 
    StyleSheet } from 'react-native';

import { CheckBox } from '@rneui/themed';

type TaskItemProps = {
    onChecked: () => any;
    completed: boolean;
    title: string;
}

const TaskItem = ({ onChecked, completed, title } : TaskItemProps) => {
    return(
    <View style={styles.task}>
        <CheckBox
            checked={completed}
            onPress={onChecked}
            containerStyle={styles.checkBox}
            size={20}
        />
        <Text style={completed ? styles.taskCompleted : styles.taskText}>
            {title}
        </Text>
    </View> )
}

const styles = StyleSheet.create({
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5,
    },
    taskText: {
        marginLeft: 10,
    },
    taskCompleted: {
        marginLeft: 10,
        textDecorationLine: 'line-through',
    },
    checkBox: {
        backgroundColor: 'rgba(0,0,0,0)'
    }
})

export default TaskItem;