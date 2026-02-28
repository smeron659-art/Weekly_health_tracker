import { StatusBar } from 'expo-status-bar';
import react from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import{ View ,Text,StyleSheet , TextInput, ImageBackground,TouchableOpacity,KeyboardAvoidingView,Platform } from 'react-native';
const MyComponent = () => {
  const [text, setText] = React.useState('');
}
export default function Login() {

    return (
<KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === "ios" ? "padding" : "height"} 
>
<ImageBackground  source={ require('./assets/k.jpg')} style={styles.background} resizeMode='cover'>
           <View style={styles.dividen}/> 
           <Text style={styles.textw}> Welcome To Login Page</Text>
           <View style={styles.dividen}/>
        <Text style={styles.texth}>Login to continue track your health </Text>
        <View style={styles.dividen}/>
        <View >
   
        <View style={styles.retangl}> 
         
          <TextInput placeholder=' Enter email' style={styles.inputtext}/>        
          <View style={styles.dividen}/>
           <TextInput placeholder='Password' style={styles.inputtext}
            placeholderTextColor='hsl(0, 11%, 35%)'
            placeholderfontSize='3' 
            secureTextEntry
      right={<TextInput.Icon icon="eye" />}/>
           <View style={styles.dividen}/>
           <TouchableOpacity style={styles.tochable}><Text style={styles.tochbletext}> Login</Text></TouchableOpacity>
            <View style={styles.dividen}/>
           <TouchableOpacity><Text style={styles.tochl}> Forgot  Password?</Text></TouchableOpacity>
           <View style={styles.dividen}/>
           <View style={styles.dividen}/>
          
           <View style={styles.sedivi}/>
            <View style={styles.dividen}/><View style={styles.dividen}/>
           <Text>Don't have an account?<TouchableOpacity><Text style={styles.creat}> Creat an account</Text></TouchableOpacity> </Text> 
        </View> 
        </View>
        </ImageBackground> 
    
    </KeyboardAvoidingView>
    )
} 
const styles=StyleSheet.create(
{

textw:{
  color:'hsl(274, 19%, 93%)',
  fontSize:30,
  fontWeight:'bold',
   textAlign:'center',
} ,
texth:{
  color:'#111111',
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center',
} ,
inputtext:{
borderRadius:100,
 paddingVertical: 2, 
    paddingHorizontal: 100, 
    borderColor:'#baadad',
    borderWidth: 1,  
    width:'100%',
    height:50,
    justifyContent:'center',
alignItems:'center',
 fontSize: 15,
},
dividen:{
  width:'0%',
  height:'4%',
backgroundColor:'white',
flexDirection:'row',
} ,
tochable:{
width:'90%',
height:50,
borderRadius:40,
borderColor:'black',
borderWidth:1,
paddingHorizontal:80,
paddingVertical:1,
backgroundColor:'#1e1a97'
},
tochbletext:{
  fontWeight:'bold',
  fontSize:21,
  color:'#fff',
textAlign:'center',
verticalAlign:'middle',
paddingHorizontal:22,

},
tochl:{
  fontSize:15,
  fontWeight:'bold',
 textDecorationLine: 'underline',  
    textDecorationStyle: 'solid',
    color:'#1e1a97',
    paddingHorizontal:20,
    verticalAlign:'middle',
},
sedivi:{
  width:300,
  height:6,
  backgroundColor:'rgb(240, 235, 235)',
},
creat:{
  color:'#95971a',
  fontSize:15,
  textDecorationLine:'underline',
},
retangl:{
  backgroundColor:'rgb(239, 243, 238)',
 width:'99%',
 height:'80%',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:30,
   borderWidth: 15,
   alignContent:'center',
   borderColor:'#ffff'
},background:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
}

}
)                     