import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import the icon component
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const Layer1Screen = ({navigation}) => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: 'false',
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'black', 
        tabBarStyle: {
          borderTopLeftRadius: 20,
          backgroundColor: 'lightblue',
          borderTopRightRadius: 20,
          height: 50,
          paddingBottom: 5,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Care',
          tabBarIcon: ({color}) => (
            <Entypo name="circular-graph" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Care',
          tabBarIcon: ({color}) => (
            <Entypo name="circular-graph" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting4s"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Care',
          tabBarIcon: ({color}) => (
            <Entypo name="circular-graph" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings2"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Care',
          tabBarIcon: ({color}) => (
            <Entypo name="circular-graph" color={color} size={20} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          showLabel: false,
          tabBarShowLabel: 'false',
          tabBarActiveTintColor: 'blue',
          tabBarStyle: styles.tabBar,
        }}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.tabBarIconContainer,
                  {
                    backgroundColor: focused ? 'lightblue' : 'white',
                    borderBottomEndRadius: 20,
                  },
                ]}>
                <Icon
                  name="home"
                  color={focused ? 'blue' : 'black'}
                  size={25}
                />
                <Text style={{color: focused ? 'blue' : 'black'}}>Home</Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Calender"
          component={Layer1Screen}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.tabBarIconContainer,
                  {
                    backgroundColor: focused ? 'lightblue' : 'white',
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                  },
                ]}>
                <MaterialCommunityIcons
                  name="calendar-blank-outline"
                  size={25}
                  color={focused ? 'blue' : 'black'}
                />
                <Text style={{color: focused ? 'blue' : 'black'}}>
                  Calender
                </Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="feed"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.tabBarIconContainer,
                  {
                    backgroundColor: focused ? 'lightblue' : 'white',
                    borderBottomEndRadius: 20,
                    borderBottomLeftRadius: 20,
                  },
                ]}>
                <Icon
                  name="home"
                  size={25}
                  color={focused ? 'blue' : 'black'}
                />
                <Text style={{color: focused ? 'blue' : 'black'}}>Home</Text>
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="explore"
          component={HomeScreen}
          options={{
            tabBarShowLabel: false,
            tabBarLabel: () => null,
            tabBarIcon: ({focused}) => (
              <View
                style={[
                  styles.tabBarIconContainer,
                  {
                    backgroundColor: focused ? 'lightblue' : 'white',
                    borderBottomLeftRadius: 20,
                  },
                ]}>
                <MaterialIcons
                  name="explore"
                  color={focused ? 'blue' : 'black'}
                  size={25}
                />
                <Text style={{color: focused ? 'blue' : 'black'}}>Home</Text>
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    height: 70,
    borderTopWidth: 0,
  },
  tabBarIconContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
