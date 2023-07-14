import React from "react";
import { Text, TextInput, View, Pressable, Button, ImageBackground, Image } from "react-native";
import floorplan from "../../assets/floorplan.png";
import greendot from "../../assets/greendot.png";
import { sqrt, round, multiply } from 'mathjs';

function calc_pos(a, b, c) {
    cos_a = (b * b + c * c - a * a) / (2 * b * c);
    x = b * cos_a;
    y = multiply(b, sqrt(1 - cos_a * cos_a)) ;

    if (y.re != undefined) {
        y = y.re;
    }

    if (x.re != undefined) {
        x = x.re;
    }

    return [round(x, 2), round(y, 2)];
}

export default function Map() {
    const boxWidth = 384;
    const distanceBetweenAnchors = 1;
    const pixelsPerMeter = boxWidth / distanceBetweenAnchors;

    const distY = 1.01;
    const distZ = 0.66;

    const [x, y] = calc_pos(distZ,distY,distanceBetweenAnchors);
  return (
    <View className="w-vh flex justify-center items-center mt-4">
        <View className="h-96 w-96 bg-slate-400 rounded-lg border-2">
            <ImageBackground source={floorplan} style={{width: '100%', height: '100%'}} imageStyle={{ borderRadius: 6}}>
                <Image source={greendot} style={{width: 15, height: 15, marginLeft: boxWidth*x, marginTop: boxWidth*y}}></Image>
            </ImageBackground>
            
        </View>
    </View>
    
  );
}
