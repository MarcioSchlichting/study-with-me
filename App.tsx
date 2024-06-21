import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './src/components/BottomTabs';
import HomeScreen from './src/pages/HomeScreen';
import ActivitiesScreen from './src/pages/ActivitiesScreen';

const bottomTabProps = [
  { name: 'Home', component: HomeScreen },
  { name: 'Activities', component: ActivitiesScreen }
]

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs tabs={bottomTabProps}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
