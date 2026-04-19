import { View,Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView } from "react-native-safe-area-context";
 export default function OnbordingScreen(){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#f6f2f2'}} >
<Onboarding
pages={[
{ 
backgroundColor: '#d67c7c',
image: <Image 
  style={{width:200, height:200}} source={require('../../assets/k.jpg')} />,
title: 'Onboarding',
subtitle: 'WELLCOM TO THIS APP',
}, 
{
backgroundColor: '#7d1a1a',
image: <Image
 //autoPlay loop 
 style={{width:200, height:200}}
 source={require('../../assets/k.jpg')} />,
title: 'Onboarding',
subtitle: 'FRIST LOG IN',  
},
{
backgroundColor: '#3b6c0d',
image: <Image 
 style={{width:200, height:200}}
 source={require('../../assets/k.jpg')} />,
title: 'Onboarding',
subtitle: 'START YOUR ACTTIVITY',
},

]}
/>
</SafeAreaView>
);
 } 