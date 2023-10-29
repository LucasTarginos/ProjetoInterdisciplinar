import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  watchPositionAsync,
  LocationAccuracy,
  LocationObject,
} from 'expo-location';
import MapView, { Circle, Marker } from "react-native-maps";
import { categories, markers } from "./categories";
import { style } from "./style";

export default function Mapa() {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [location, setLocation] = useState<LocationObject | null>(null);

  const filteredData = markers.filter(marker => selectedCategory ? marker.filtro === selectedCategory : true);

  const mapRef = useRef<MapView>(null);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        setLocation(response);
        mapRef.current?.animateCamera({
          pitch: 70,
          center: response.coords,
        });
      }
    );
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.headerContainer}>
        <Text style={style.title}>Bem Vindo</Text>
        <Text style={style.subTitle}>
          Use o nosso mapa interativo para localizar algo na unipe
        </Text>
      </View>

      <MapView
        style={style.map}
        ref={mapRef}
        initialRegion={{
          latitude: -7.1592,
          longitude: -34.8544,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        customMapStyle={[
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off', // Torna os ícones dos marcadores invisíveis
              },
            ],
          },
        ]}
      >
        <Marker
          pinColor="#FF9E00"
          coordinate={{
            latitude: location?.coords.latitude || 0,
            longitude: location?.coords.longitude || 0,
          }}
        />
        <Circle
          center={{
            latitude: location?.coords.latitude || 0,
            longitude: location?.coords.longitude || 0,
          }}
          radius={50}
        />
        {filteredData.map(marker => (
          <Marker
            key={marker.id}
            coordinate={marker.coordinate}
            title={marker.title}
          />
        ))}
      </MapView>

      <View style={style.categoryConteiner}>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
          contentContainerStyle={{
            alignItems: "center",
          }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item.key === selectedCategory ? null : item.key)}
              style={[
                style.categoryItem,
                item.key === selectedCategory ? style.selectedCategory : null,
              ]}
              key={item.key}
            >
              <Image style={style.categoryImage} source={item.image} />
              <Text style={style.categoryText}> {item.label} </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
