import {Tabs} from 'expo-router';
import {  FontAwesome5 } from "@expo/vector-icons"
export default function Layout (){
    return (
        <Tabs  screenOptions={{
            tabBarStyle:{
     setOffset:0,
     borderTopWidth:0,
            }
           
        }} >
            <Tabs.Screen name="index" options={{
                title:'Home',
                     headerShown:false,
                tabBarIcon:({ size,color}) =>(
                    < FontAwesome5
                   name='home'
                    size={size}
                    color={color} />     
                ) 

            }}/>
             <Tabs.Screen name="recored" options={{
                   title:'Recored',
                      headerShown:false,
                tabBarIcon:({size,color}) =>(
                    < FontAwesome5
                     name="record-vinyl"
                     size={size}
                    color={color}
                     />   )

            }}/>
        </Tabs>
    )
}