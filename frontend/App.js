import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import LoginCard from './screens/components/LoginCard';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-amber-600">Open up App.js to start working on your af!</Text>
      <StatusBar style="auto" />
      <LoginCard/>
    </View>
  );
}

