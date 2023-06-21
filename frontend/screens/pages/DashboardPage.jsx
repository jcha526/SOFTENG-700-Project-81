import React from "react";
import { Pressable, Text, View } from "react-native";
import DashboardPatientCard from "../components/DashboardPatientCard";

export default function LoginPage({ navigation }) {
  return (
    <View>
      <View className="bg-sky-600 h-1/5 flex-auto items-center justify-center">
        <Text className="text-2xl text-white font-bold">
          Jane Doe's Patients
        </Text>
      </View>
      <View className="mt-8">
        <DashboardPatientCard></DashboardPatientCard>
        <DashboardPatientCard></DashboardPatientCard>
        <DashboardPatientCard></DashboardPatientCard>
        <DashboardPatientCard></DashboardPatientCard>
      </View>

      <View className="flex-auto items-center justify-center mt-20">
        <Pressable className="bg-sky-600 rounded-md items-center py-2 w-2/3">
          <Text className="text-white text-lg">Overview</Text>
        </Pressable>
        <Pressable className="mt-4 bg-sky-600 rounded-md items-center py-2 w-2/3">
          <Text className="text-white text-lg">Incidents</Text>
        </Pressable>
      </View>
    </View>
  );
}
