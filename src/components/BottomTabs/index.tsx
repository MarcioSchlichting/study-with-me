import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

type BottomTabsProps = {
  tabs: {
    name: string;
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