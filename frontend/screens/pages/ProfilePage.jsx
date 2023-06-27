import React from "react";
import { Text, View } from "react-native";

export default function ProfilePage({ navigation }) {
  return (
    <View>
      <View className="bg-sky-600 h-2/5 flex-auto items-center justify-center content-center">
        <View className="text-7xl text-white font-bold">
          <View className="p-24 rounded-full bg-sky-400 m-2" />
        </View>
      </View>
      <View>
        <Text className="font-bold text-[18px] py-2 mt-2 px-4">
          Full Name: <Text className="font-normal ">John Smith</Text>
        </Text>
        <Text className="font-bold text-[18px] py-2 px-4">
          Date of Birth: <Text className="font-normal ">15th Jan 1961</Text>
        </Text>
        <Text className="font-bold text-[18px] py-2 px-4">
          Age: <Text className="font-normal ">63</Text>
        </Text>
        <Text className="font-bold text-[18px] py-2 px-4">
          Medical History: <Text className="font-normal ">Stroke</Text>
        </Text>
      </View>
    </View>
  );
}
