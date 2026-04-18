import { View } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from 'lottie-react-native';
 export default function Onboarding(){
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#fff'}} >
<Onboarding
pages={[
{
backgroundColor: '#fff',
image: <LottieView 
 autoPlay loop
  style={{width:200, height:200}} source={require('../../assets/welcome.jpg')} />,
title: 'Onboarding',
subtitle: 'WELLCOM TO THIS APP',
},
{
backgroundColor: '#7d1a1a',
image: <LottieView 
 autoPlay loop
 style={{width:200, height:200}}
 source={require('../../assets/welcome.jpg')} />,
title: 'Onboarding',
subtitle: 'FRIST LOG IN',
},
{
backgroundColor: '#3b6c0d',
image: <LottieView

 autoPlay loop 
 style={{width:200, height:200}}
 source={require('../../assets/welcome.jpg')} />,
title: 'Onboarding',
subtitle: 'START YOUR ACTTIVITY',
},

]}

/>
</SafeAreaView>
);

 }