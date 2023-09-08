import axios from 'axios';

// export default EventDetailScreen;




import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';

import MapView, { Marker, PROVIDER_OSM } from 'react-native-maps';






const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { title, description, location } = route.params;
  const [coordinates, setCoordinates] = React.useState(null);

  React.useEffect(() => {
    const encodedLocation = encodeURIComponent(location);
  
    axios
      .get(`https://nominatim.openstreetmap.org/search?format=json&q=${encodedLocation}`)
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const result = response.data[0];
          const { lat, lon } = result;
          setCoordinates({ latitude: parseFloat(lat), longitude: parseFloat(lon) });
        } else {
          <Text>Location Not Found</Text>
        }
      })
      .catch((error) => {
        console.error('Error fetching coordinates', error);
      });
  }, [location]);



  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, title]);

  // Construct the Google Maps URL for the MyLink component
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}&radius=${5}&near=${encodeURIComponent(location)}`;

  const handleLinkPress = () => {
    Linking.openURL(googleMapsUrl);
  };


  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>Location: {location}</Text>
      <MyLink location={location} text="Open with Google Map" onPress={handleLinkPress} />
      {coordinates && (
        <MapView
          style={styles.map}
          provider={PROVIDER_OSM} // Set the map provider to OSM
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
        >
          <Marker
            coordinate={coordinates}
            title={location}
            description={location}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  map: {
    width:'100%',
    height: '100%',
  },
});

const MyLink = ({ location, text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default EventDetailScreen;
