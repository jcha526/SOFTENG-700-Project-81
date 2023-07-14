import React from "react";
import { Pressable, Text, View } from "react-native";
import Map from "../components/Map";

export default function OverviewPage({ navigation }) {
  return (
    <View>
      <View className="bg-sky-600 h-1/5 flex-auto items-center justify-center">
        <Text className="text-2xl text-white font-bold">
          Overview
        </Text>
      </View>
      <Map></Map>
    </View>
  );
}
