import { TextInput, StyleSheet} from 'react-native';

type StyledInputProps = {
    placeholder: string;
}

const StyledInput = ({ placeholder } : StyledInputProps) => {
    return (<TextInput style={styles.input} placeholder={placeholder}/>)
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: 'rgba(128, 128, 128, 0.5)'
    }
})
export default StyledInput;