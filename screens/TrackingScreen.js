import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrackingScreen = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Smoking Cessation Apps</Text>
        <Button
            title="Go to Tips Screen"
            onPress={() => navigation.navigate("Tips") }
    />
   </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TrackingScreen;