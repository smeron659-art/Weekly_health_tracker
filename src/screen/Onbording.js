import { View } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
 export default function Onboarding(){
    return(
<Onboarding
pages={[
{
backgroundColor: '#fff',
image: <Image source={require('./images/circle.png')} />,
title: 'Onboarding',
subtitle: 'Done with React Native Onboarding Swiper',
},
{
backgroundColor: '#fff',
image: <Image source={require('./images/circle.png')} />,
title: 'Onboarding',
subtitle: 'Done with React Native Onboarding Swiper',
},
{
backgroundColor: '#fff',
image: <Image source={require('./images/circle.png')} />,
title: 'Onboarding',
subtitle: 'Done with React Native Onboarding Swiper',
},

]}

/>
);

 }