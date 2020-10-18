import React from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';

const CommunityScreen = () => {
    return(
        <View style={(styles.styles)}>
            <Text>
                Community Sharing Session;
            </Text>
            <Button
             title="Go to details screen"
            onPress={() => navigation.navigate("Details") }
            />
        </View>
    )
},

export default CommunityScreen;

const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
