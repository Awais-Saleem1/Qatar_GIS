import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
} from 'react-native';

// import ArcGISMap from '../ArcGIS/ArcGISMap.ios';
import ArcGISMap from '../ArcGIS/ArcGISMap.android';
import { SafeAreaView } from 'react-native-safe-area-context';

var LAYERS = [
    {
        type: 'ArcGISTiledMapServiceLayer',
        // url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer',
        /* Qatar */
        url: 'https://services.gisqatar.org.qa/server/rest/services/Vector/Qatar_StreetMap_Hybrid_E/MapServer'
    },
    {
        type: 'ArcGISFeatureLayer',
        // url: 'https://services.arcgis.com/nzS0F0zdNLvs7nc8/arcgis/rest/services/MTBENCHMARK2DATA2/FeatureServer/0',
        // Qatar
        url: 'https://services.gisqatar.org.qa/server/rest/services/Vector/Qatar_StreetMap_Hybrid_E/MapServer/layers'
    }
];

export const Map = props => {

    const { navigation } = props;
    const mapRef = useRef(0);
    const [extent, setExtent] = useState('Initial extent');

    const onExtentChange = (event) => {
        console.log('extent change', event);

        var label = "";

        // iOS
        if (event.label) {
            label = event.label;
        }
        // Android
        else {
            label = "x: "
                + parseInt(event.x, 10)
                + ", y: "
                + parseInt(event.y, 10)
                + ", scale: 1/"
                + parseInt(event.scale);
        }

        setExtent(label);
    };

    const onChangeLevel = (level) => {
        const value = reference.current;
        mapRef.current = level;
    };

    const onZoomCurrentPosition = () => {
        mapRef.map.zoomCurrentPosition();
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ArcGISMap
                ref="map"
                // only implemented on Android
                layers={LAYERS}
                // test on iOS
                layer={LAYERS[0].url}
                onExtentChange={() => onExtentChange}
                style={styles.map} 
            />
            <Text style={styles.extent}>
                {extent}
            </Text>
            <View style={styles.buttons}>
                
                <Button
                    title="Zoom +"
                    style={styles.button}
                    onPress={() => onChangeLevel(0.5)}
                />

                <Button
                    title="Zoom -"
                    style={styles.button}
                    onPress={() => onChangeLevel(2)}
                />

                <Button
                    title="Locate me"
                    onPress={() => onZoomCurrentPosition}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    map: {
        // flex: 1,
        height: 400,
        width: 320
    },
    extent: {
        textAlign: 'center',
        color: '#000',
        marginBottom: 5
    },
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 10
    },
    button: {
        marginRight: 10,
        fontSize: 20
    }
});