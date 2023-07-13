import React from "react";
import { Pressable, Text, View } from "react-native";
import DashboardPatientCard from "../components/DashboardPatientCard";

export default function OverviewPage({ navigation }) {
  return (
    <View>
      <View className="bg-sky-600 h-1/5 flex-auto items-center justify-center">
        <Text className="text-2xl text-white font-bold">
          Overview
        </Text>
      </View>
      <View className="mt-8">
        
      </View>
    </View>
  );
}
