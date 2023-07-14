import React from "react";
import { Text, TextInput, View, Pressable, Button, ImageBackground, Image } from "react-native";
import floorplan from "../../assets/floorplan.png";
import greendot from "../../assets/greendot.png";

export default function Map() {
  return (
    <View className="w-vh flex justify-center items-center mt-4">
        <View className="h-96 w-96 bg-slate-400 rounded-lg border-2">
            <ImageBackground source={floorplan} style={{width: '100%', height: '100%'}} imageStyle={{ borderRadius: 6}}>
                <Image source={greendot} style={{width: 15, height: 15}} ></Image>
            </ImageBackground>
            
        </View>
    </View>
    
  );
}
