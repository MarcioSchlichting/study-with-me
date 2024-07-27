import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../components/BottomTabs';
import BastketballIcon from '../../../assets/icons/basketball.svg';

const sports = [
    { id: '2', name: 'Basketball', icon: BastketballIcon },
    // Add more sports here
];

type HomeScreenNavigationProp = BottomTabNavigationProp<RootTabParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleSelectSport = (sport: string) => {
        navigation.navigate('Lobby', { sport });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select a Sport</Text>
            <FlatList
                data={sports}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card} onPress={() => handleSelectSport(item.name)}>
                        <item.icon width={100} height={100} />
                        <Text style={styles.name}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        width: 300,
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
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