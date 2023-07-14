import React from "react";
import { Pressable, Text, View } from "react-native";
import Map from "../components/Map";
import DashboardPatientCard from "../components/DashboardPatientCard";

export default function OverviewPage({ navigation }) {
  return (
    <View>
      <View className="bg-sky-600 h-1/5 flex-auto items-center justify-center">
        <Text className="text-2xl text-white font-bold">
          Overview
        </Text>
      </View>
      <Map></Map>
      <Text className="text-center text-xl">Displaying live location for:</Text>
      <DashboardPatientCard></DashboardPatientCard>
    </View>
  );
}
