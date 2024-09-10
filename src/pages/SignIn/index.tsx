import {View, StyleSheet, Text, TextInput, TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable';

import {useForm, Controller} from 'react-hook-form';
import User from "../../types/User";

const SignIn = () => {
    const {control, handleSubmit, formState: {errors}} = useForm<User>();

    return (<View style={styles.container}>
        <Animatable.View animation={"fadeInLeft"} delay={500} style={styles.containerHeader}>
            <Text style={styles.message}>Bem-vindo(a)</Text>
        </Animatable.View>

        <Animatable.View animation={"fadeInUp"} style={styles.containerForm}>
            <Text style={styles.title}>Email</Text>
            <Controller control={control} render={({field: { 
                    onChange, 
                    onBlur,
                    value}}) => (
                <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder='Digite seu e-mail...'
                    style={styles.input}
                />)} name={'email'}
            />
            
            <Text style={styles.title}>Password</Text>
            <Controller control={control} render={({field: { 
                    onChange,
                    onBlur, 
                    value}}) => (
                <TextInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder='Sua senha...'
                    style={styles.input}
                />)} name={'password'}
            />

            <TouchableOpacity style={styles.accessButton}>
                <Text style={styles.accessText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.registerText}>Não possuí uma conta? Cadastre-se</Text>
            </TouchableOpacity>
        </Animatable.View>
    </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
        color: '#a1a1a1',
    },
    accessButton: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    accessText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    registerButton: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1',
    },
})

export default SignIn;