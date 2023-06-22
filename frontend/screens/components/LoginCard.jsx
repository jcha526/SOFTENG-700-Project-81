import React from "react";
import { Text, TextInput, View, Pressable, Button } from "react-native";

export default function LoginCard({navigation}) {
  return (
    <View className="w-3/4">
      <Text className="text-lg">Email</Text>
      <View className="border-solid border-2 border-slate-200 rounded-md">
        <TextInput className="text-base"></TextInput>
      </View>
      <Text className="pt-5 text-lg">Password</Text>
      <View className="border-solid border-2 border-slate-200 rounded-md">
        <TextInput></TextInput>
      </View>
      <View className="pt-20 rounded-lg">
        <Pressable className="bg-sky-600 rounded-md items-center py-2" onPress={() => navigation.navigate('Dashboard')}>
          <Text className="text-white text-lg">Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
