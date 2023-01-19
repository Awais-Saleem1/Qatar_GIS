import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = ({ navigation, route }) => {
    console.log('navigation', navigation);
    console.log('route', route);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Qatar Web GIS')}>
                <Text style={{ color: 'grey', padding: 10 }}>Go to WEB GIS Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => navigation.navigate('Qatar GIS')}
            >
                <Text style={{ color: 'grey', padding: 10 }}>Go to GIS Screen (not Working)</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );

}