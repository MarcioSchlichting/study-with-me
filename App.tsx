import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs, {RootTabParamList} from './src/components/BottomTabs';
import HomeScreen from './src/pages/HomeScreen';
import ActivitiesScreen from './src/pages/ActivitiesScreen';
import SettingsScreen from "./src/pages/SettingsScreen";

const bottomTabProps : {
  name: keyof RootTabParamList;
  component: () => JSX.Element;
}[] = [
  { name: 'Home', component: HomeScreen },
  { name: 'Activities', component: ActivitiesScreen },
  { name: 'Settings', component: SettingsScreen }  
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
