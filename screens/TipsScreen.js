import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
  } from 'react-native';

const TipsScreen = ({navigation}) => {
    return(
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>DetailsScreen</Text>
        <Button
             title="Go to Tips Screen....again"
             onPress={() => navigation.push("Tips") }
        />
        <Button
             title="Go back"
             onPress={() => navigation.goBack() }
        />
        <Button
             title="Go tofirst screen"
             onPress={() => navigation.popToTop() }
        />
        </View>
    );
};

const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TipsScreen;