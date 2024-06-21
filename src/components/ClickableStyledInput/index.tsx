import {
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from "react";

type StyledInputProps = {
    placeholder: string;
    onPress: (e : string) => any;
}

const ClickableStyledInput = ({ placeholder, onPress } : StyledInputProps) => {
    const [title, setTitle] = useState('');

    const handlePress = () => {
        onPress(title);
        setTitle(''); 
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={title}
                onChangeText={setTitle} // Update state on text change
            />
            <TouchableOpacity style={styles.icon} onPress={handlePress}>
                <Ionicons name="add-circle-outline" size={20} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'rgba(128, 128, 128, 0.5)',
        display: 'flex',
        justifyContent: 'space-between'
    },
    input: {
        padding: 10,
        flex: 1 // Make input take up remaining space
    },
    icon: {
        padding: 10
    }
});

export default ClickableStyledInput;