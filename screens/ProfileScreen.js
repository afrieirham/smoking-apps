import React from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';

const ProfileScreen = () => {
    return(
        <View style={(styles.styles)}>
            <Text>
                Smoking Cessation Apps;
            </Text>
            <Button
             title="Go to details screen"
            onPress={() => navigation.navigate("Details") }
            />
        </View>
    )
},

export default ProfileSceen;

const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
