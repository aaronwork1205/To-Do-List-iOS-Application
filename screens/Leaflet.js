import React from 'react';
import { WebView } from 'react-native-webview';

const LeafletMap = () => {
  return (
    <WebView
      source={{ uri: 'file:///android_asset/leaflet_map.html' }}
      style={{ flex: 1 }}
    />
  );
};

export default LeafletMap;