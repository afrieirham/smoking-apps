/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
// import * as React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RootStackScreen from './screens/RootStackScreen';
import { ActivityIndicator } from 'react-native-paper';
import { AuthContext} from './component/context';
// import TrackingScreen from './screens/TrackingScreen';
// import TipsScreen from './screens/TipsScreen';
// import { ScreenStack } from 'react-native-screens';

//Inside Component//
function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

function TrackingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Track Your Daily</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function TipsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tips Today</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function CommunityScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Community Share</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


//Stack Component
const TrackStack = createStackNavigator();

function TrackStackScreen() {
  return (
    <TrackStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#8B008B',
      },
      headerTintColor: '#fff',
    }}>
      <TrackStack.Screen name="Home" component={TrackingScreen} />
      <TrackStack.Screen name="Details" component={DetailsScreen} />
    </TrackStack.Navigator>
  );
}

const TipsStack = createStackNavigator();

function TipsStackScreen() {
  return (
    <TipsStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#8B008B',
      },
      headerTintColor: '#fff',
    }}>
      <TipsStack.Screen name="Settings" component={TipsScreen} />
      <TipsStack.Screen name="Details" component={DetailsScreen} />
    </TipsStack.Navigator>
  );
}

const CommunityStack = createStackNavigator();

function CommunityStackScreen() {
  return (
    <CommunityStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#8B008B',
      },
      headerTintColor: '#fff',
    }}>
      <CommunityStack.Screen name="Settings" component={CommunityScreen} />
      <CommunityStack.Screen name="Details" component={DetailsScreen} />
    </CommunityStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#8B008B',
      },
      headerTintColor: '#fff',
    }}>
      <ProfileStack.Screen name="Settings" component={ProfileScreen} />
      <ProfileStack.Screen name="Details" component={DetailsScreen} />
    </ProfileStack.Navigator>
  );
}

//Tab Component
const Tab = createBottomTabNavigator();

function TabScreen({navigation, route}){
  return(
  <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Tracking') {
        iconName = focused
          ? 'ios-analytics'
          : 'ios-analytics';
      } else if (route.name === 'Tips') {
          iconName = focused 
            ? 'md-bulb' 
            : 'md-bulb';
      } else if (route.name === 'Community') {
          iconName = focused 
            ? 'md-chatbubbles' 
            : 'md-chatbubbles';
      } else if (route.name === 'Profile') {
          iconName = focused 
            ? 'md-person' 
            : 'md-person';
  }

      // You can return any component that you like here!
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  })}
  tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }} >
        <Tab.Screen name="Tracking" component={TrackStackScreen} />
        <Tab.Screen name="Tips" component={TipsStackScreen} />
        <Tab.Screen name="Community" component={CommunityStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
  </Tab.Navigator>
  );
}

const Stack = createStackNavigator();


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('aaa');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    sigUp: () => {
      setUserToken('aaa');
      setIsLoading(false);
    },
  }));


  useEffect(() => {
    setTimeout(() =>{
      setIsLoading(false);
    }, 1000) ;
  }, []);

  if( isLoading) {
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { userToken != null ?(
        <TabScreen />
      )
    :<RootStackScreen /> 
    }
      
    </NavigationContainer>
    </AuthContext.Provider>
  );
}