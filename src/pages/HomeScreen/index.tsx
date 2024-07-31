import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../components/BottomTabs';
import SelectSport from "../../components/SelectSport";

type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleSelectSport = (sport: string) => {
        navigation.navigate('Lobby', { sport });
    };

    return (
        <View style={styles.container}>
            <SelectSport handleSelectSport={handleSelectSport} />
            <TouchableOpacity style={styles.lobbyButton} onPress={() => navigation.navigate('WaitingRoom')}>
                <Text style={styles.lobbyButtonText}>Create Lobby</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    lobbyButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    lobbyButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default HomeScreen;