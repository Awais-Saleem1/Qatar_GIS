import React, { useState } from 'react';
import { WebView } from 'react-native-webview';

export const GISWebScreen = ({ navigation, route }) => {
    console.log('navigation', navigation);
    console.log('route', route);

    const [state, setState] = useState('');
    return (
        <WebView
            style={{ width: '100%', height: '100%', padding: 10 }}
            source={{ uri: 'https://services.gisqatar.org.qa/server/rest/services/Vector/Qatar_StreetMap_Hybrid_E/MapServer?f=jsapi' }}
        />
    );

}