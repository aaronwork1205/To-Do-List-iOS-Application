// import { useNavigation, useRoute } from "@react-navigation/native";
// import { useLayoutEffect } from "react";
// import { View, Text, StyleSheet,TouchableOpacity, Linking  } from "react-native";
// import { HeaderBackButton } from "@react-navigation/elements";

// import { NavigationContainer } from "@react-navigation/native";

// import {MapStack, Stack} from "../navigation/stack"

// import React from 'react';
// import { WebView } from 'react-native-webview';





// const EventDetailScreen = () => {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { eventId, title, description, location } = route.params;
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: title,
//       headerLeft: () => (
//         <HeaderBackButton
//           tintColor="white"
//           onPress={() => navigation.goBack()}
//         />
//       ),
//     });
//   }, []);
//   return (
//     <View>
//       {/* <Text>This is the Event Detail Screen for {eventId}</Text> */}
//       <Text>{title}</Text>
//       <Text>{description}</Text>
//       <Text>{location}</Text>
//       {/* console.log(location); */}
      
      
   
      
//       {/* <MyLink location={location} text="Open with Google Map" />
//       <WebView
//         style={styles.map}
//         source={{
//           uri: `https://www.openstreetmap.org/`,
//         }}
//       /> */}
//       <TouchableOpacity onPress={handleLinkPress}>
//         <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
//           Open with Google Map
//         </Text>
//       </TouchableOpacity>

//       <WebView
//         style={styles.map}
//         source={{
//           uri: `https://www.openstreetmap.org/?mlat=YOUR_LATITUDE&mlon=YOUR_LONGITUDE#map=16/YOUR_LATITUDE/YOUR_LONGITUDE`,
//         }}
//       />
    
      
      
      
//     </View>
  

    
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     padding: 20,
//   },
// });

// const MyLink = ({ location, text }) => {

//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}&radius=${5}&near=${encodeURIComponent(location)}`;
//   const handleLinkPress = () => {
//     Linking.openURL(googleMapsUrl); // This will open the Google Maps URL in the device's default web browser.
//   };

//   return (
//     <TouchableOpacity onPress={handleLinkPress}>
//       <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>{text}</Text>
//     </TouchableOpacity>
//   );
// };


// const MapView = () => {
//   return (
//     <View style={styles.container}>
//       <WebView
//         source={{ uri: 'https://www.openstreetmap.org/?mlat=YOUR_LATITUDE&mlon=YOUR_LONGITUDE#map=16/YOUR_LATITUDE/YOUR_LONGITUDE' }}
//       />
//     </View>
//   );
// };



// export default EventDetailScreen;




import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';

const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { title, description, location } = route.params;

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
      <Text>{location}</Text>

      
      <MyLink location={location} text="Open with Google Map" onPress={handleLinkPress} />

      <WebView
        style={styles.map}
        source={{
          uri: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            location
          )}&radius=${5}&near=${encodeURIComponent(location)}`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  map: {
    flex: 1,
    marginTop: 10,
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
