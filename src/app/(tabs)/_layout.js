import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TaskProveder } from "../../context/taskcontext";
import { SystemBars } from "react-native-edge-to-edge";
import Onboarding from 'react-native-onboarding-swiper';
import OnbordingScreen from "../../screen/Onbording";
import { useState,useEffect } from "react";
import { usecolor, ColorProvider } 
from "../../context/colorcontext";
export default function Layout() {
   const [showonbording ,setShowonbording]=useState(true);
  const Tablayout=()=>{ 
    const{statusbar,color}=usecolor();
    return(
      <>
  
  <SystemBars style={statusbar}/>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            setOffset: 0,
            borderTopWidth: 0,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
             <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="recored"
          options={{
            title: "Recored", 
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <Ionicons name="recording" size={24} color="black" />
            ),
          }}
        /> 
        <Tabs.Screen
          name="setting"
          options={{
            title: "setting",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
             <Ionicons name="settings" size={24} color="black" />
            ),
          }}
        />
      </Tabs>
      </>
  )} 
  if(showonbording==true){
  return(
<OnbordingScreen/>
  );}
  else{
  return (  

   <ColorProvider>
    <TaskProveder>
       <Tablayout/>
    </TaskProveder>
     </ColorProvider>
  );
}
}
