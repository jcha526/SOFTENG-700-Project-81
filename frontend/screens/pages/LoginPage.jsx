import React from 'react'
import { Text, View } from 'react-native';
import LoginCard from '../components/LoginCard';

export default function LoginPage({navigation}) {
  return (
    <View>
      <View className="bg-sky-600 h-2/5 flex-auto items-center justify-center">
        <Text className="text-7xl text-white font-bold">Trackr</Text>
      </View>
      <View className="pt-14 flex-auto items-center justify-center">
        <LoginCard navigation={navigation}/>
      </View>
    </View>
  )
}
