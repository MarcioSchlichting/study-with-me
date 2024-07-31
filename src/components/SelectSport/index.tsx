import {
    FlatList, 
    StyleSheet, 
    Text, 
    TouchableOpacity} from "react-native";
import React from "react";
import BastketballIcon from '../../../assets/icons/basketball.svg';
import Soccer from '../../../assets/icons/soccerball.svg';
import Runner from '../../../assets/icons/runner.svg';
import AmericanFootball from '../../../assets/icons/american-football.svg';
import {SvgProps} from "react-native-svg";

interface FullSport extends Sport {
    Icon: React.FC<SvgProps>;
}

const sports: FullSport[] = [
    { id: '1', name: 'Soccer', Icon: Soccer },
    { id: '2', name: 'Basketball', Icon: BastketballIcon },
    { id: '3', name: 'Run', Icon: Runner },
    { id: '4', name: 'American Football', Icon: AmericanFootball }
];

type SelectSportProps = {
    handleSelectSport: (sport : Sport) => void;
}

const SelectSport = ({handleSelectSport} : SelectSportProps) => {
    return (<>
        <Text style={styles.title}>Select a Sport</Text>
        <FlatList style={{'flex': 1}} numColumns={3}
                  data={sports}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                      <TouchableOpacity style={styles.card} onPress={() => handleSelectSport(item)}>
                          <item.Icon width={35} height={35} />
                          <Text style={styles.name}>{item.name}</Text>
                      </TouchableOpacity>
                  )}
        />
        </>)
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            color: '#333',
    },
    card: {
        width: 150,
        height: 100,
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
        marginBottom: 10,
        marginHorizontal: 3
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
    },
});

export default SelectSport;