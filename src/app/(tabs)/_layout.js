import { Tabs } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { TaskProveder } from "../../context/taskcontext";
import { SystemBars } from "react-native-edge-to-edge";

import { usecolor, ColorProvider } 
from "../../context/colorcontext";
export default function Layout() {
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
              <FontAwesome5 name="home" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="recored"
          options={{
            title: "Recored",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name="record-vinyl" size={size} color={color} />
            ),
          }}
        /> 
        <Tabs.Screen
          name="setting"
          options={{
            title: "setting",
            headerShown: false,
            tabBarIcon: ({ size, color }) => (
              <FontAwesome5 name=" player-settings" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
      </>
  )}
  return (  
    
    
   <ColorProvider>
    <TaskProveder>
       <Tablayout/>
    </TaskProveder>
     </ColorProvider>
  );
}
