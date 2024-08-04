import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {RootTabParamList} from "../../types/RootStackParamList";


const Tab = createBottomTabNavigator<RootTabParamList>();

type BottomTabsProps = {
  tabs: {
    name: keyof RootTabParamList;
    component: () => JSX.Element;
  }[];
};

const BottomTabs = ({ tabs }: BottomTabsProps) => {
  return (
    <Tab.Navigator>
      {tabs.map((tab, index) => (
        <Tab.Screen key={index} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabs;