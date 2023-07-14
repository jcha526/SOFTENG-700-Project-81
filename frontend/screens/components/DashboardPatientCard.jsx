import React from "react";
import { Text, TextInput, View, Pressable, Button } from "react-native";

export default function DashboardPatientCard({ navigation }) {
  return (
    <View className="flex flex-row pl-4 items-center">
      <Pressable className="" onPress={() => navigation.navigate('Profile')}>
        <View className="p-8 rounded-full bg-green-400 m-2" />
      </Pressable>
      <View className="">
        <Text className="text-2xl">John Smith</Text>
      </View>
    </View>
  );
}
