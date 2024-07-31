import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';

interface Match {
    id: string;
    name: string;
    image: string;
}

const matches: Match[] = [
    { id: '1', name: 'John Doe', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Jane Smith', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Sam Green', image: 'https://via.placeholder.com/150' }
];

const SwipeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Swiper
                cards={matches}
                renderCard={(card: Match) => (
                    <View style={styles.card}>
                        <Image source={{ uri: card.image }} style={styles.image} />
                        <Text style={styles.text}>{card.name}</Text>
                    </View>
                )}
                onSwiped={(cardIndex) => {
                    console.log('Swiped card index:', cardIndex);
                }}
                onSwipedAll={() => {
                    console.log('All cards swiped');
                }}
                cardIndex={0}
                backgroundColor={'#f8f8f8'}
                stackSize={matches.length}
                cardHorizontalMargin={10}  // Set to 0 if you want the cards to take full width of the swiper
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    card: {
        width: Dimensions.get('window').width * 0.85, // Use 85% of screen width
        height: Dimensions.get('window').height * 0.6, // Use 60% of screen height
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#E8E8E8',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10
    },
    image: {
        width: '100%',
        height: '70%',
        borderRadius: 10,
    },
    text: {
        fontSize: 22,
        color: '#333',
        textAlign: 'center',
        marginTop: 20,
    },
});

export default SwipeScreen;
