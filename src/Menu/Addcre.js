import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Button
} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob'
import ImagePicker from 'react-native-image-crop-picker'
import firebase from '../../firebase';
import {uid} from '../component/Login/Login'
import {email} from '../component/Login/Login'
import { Fonts } from '../utils/Fonts';

var camerafirebase = firebase.database().ref("/");

export default class Addcre extends React.Component {
    static navigationOptions = {
        title: 'เติมเครดิต'
      };

      constructor(props) {
        super(props)
        this.state = {
          loading: false,
          dp: null,
          noImg: 'https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_960_720.png'
         }
       }
       
       openPicker(){
         this.setState({ loading: true })
         const Blob = RNFetchBlob.polyfill.Blob
         const fs = RNFetchBlob.fs
         window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
         window.Blob = Blob
         //const { uid } = this.state.user
         const uid1 = this.props.navigation.state.params
         ImagePicker.openPicker({
           width: 300,
           height: 300,
           cropping: true,
           mediaType: 'photo'
         }).then(image => {
     
           const imagePath = image.path
     
           let uploadBlob = null
     
           let imgId = Math.floor(Math.random() * (99999 - 10000)) + 10000;

           const imageRef = firebase.storage().ref("uid").child(imgId + ".jpg")
           let mime = 'image/jpg'
           fs.readFile(imagePath, 'base64')
             .then((data) => {
               console.log(data);
               return Blob.build(data, { type: `${mime};BASE64` })
           })
           .then((blob) => {
               uploadBlob = blob
               return imageRef.put(blob, { contentType: mime })
             })
             .then(() => {
               uploadBlob.close()
               return imageRef.getDownloadURL()
             })
             .then((url) => {
     
               let userData = {}
               //userData[dpNo] = url
               //firebase.database().ref('users').child(uid).update({ ...userData})
     
               let obj = {}
               obj["loading"] = false
               obj["dp"] = url
               this.setState(obj)
               camerafirebase.child("image").push({email: email,status: "Waiting for Approve",uid: uid,url: url });
             })
             .catch((error) => {
               console.log(error)
             })
         })
         .catch((error) => {
           console.log(error)
         })
    }

  render() {
    const dpr = this.state.dp ? 
    (<TouchableOpacity 
     onPress={ () => this.openPicker() }>
       <Image
       style={{width: 200, height: 200, margin: 15}}
       source={{uri: this.state.dp}}/>
     </TouchableOpacity>
     ) : (<TouchableOpacity 
      onPress={ () => this.openPicker() }>
        <Image
        style={{width: 100, height: 100, margin: 15}}
        source={{uri: this.state.noImg}}/>
      </TouchableOpacity>)

const dps = this.state.loading ? <ActivityIndicator animating={this.state.loading} /> : (<View style={styles.logoContainer}>
<View style={{flexDirection: "column"}}>
  { dpr }
  
      </View>
      </View>)

return (
      
  <View style={styles.container}>
  <View  >    
 <Text style={ styles.title }>
         ข้อมูลบัญชีธนาคาร
        </Text>
        <View  style={{flexDirection: 'row' ,alignItems: 'center'}}>
           <Image
           style={styles.logo}
        source={require('../image/kasikon.png')}
     /> 
      <Text style={ styles.Destination1 }>
         ธ.กสิกรไทย เลขที่ 010-1-53-483-9
        </Text>
        </View>
        
        <View  style={{flexDirection: 'row' ,alignItems: 'center'}}>
        <Image
          style={styles.logo}
        source={require('../image/thaipa.jpg')} 
      />   
        <Text style={ styles.Destination }>
         ธ.ไทยพาณิชย์ เลขที่ 015-9-73-316-1
        </Text>
    </View>  
    <Text style={ {textAlign: 'center',marginTop:20, color: "black",fontSize: 19,fontFamily: Fonts.ltim} }>
        ชื่อบัญชี : ระบบจัดการเครื่องซักผ้าอัจฉริยะ
     </Text>

        <View  style={{alignItems: 'center',marginTop: 10}}>
        { dpr }
        </View>  
  </View>
  </View>
)
}
}


const styles = StyleSheet.create({
container: {
 flex: 1, // 1:1
 flexDirection: 'row',
 justifyContent: 'center',
 backgroundColor: '#99ccff'
},
logoContainer: {
 alignItems: 'center',
 flexGrow: 1.5,
 justifyContent: 'center',
 marginTop: 10
},
logo: {
 width: 100,
 height: 100,
 marginTop: 10,
 marginLeft: 10,
 alignItems: 'center',
},
Destination:{
 fontSize: 17,
 fontWeight: "400",
 color: "#7070db",
 marginLeft: 10,
 fontFamily: Fonts.ltim
},
Destination1:{
fontSize: 17,
fontWeight: "400",
color: "#009933",
marginLeft: 10,
fontFamily: Fonts.ltim
},
title: {
fontSize: 25,
fontWeight: "500",
marginBottom: 4,
marginTop: 5,
marginLeft: 10,
color: "black",
fontFamily: Fonts.ltim
},
title1 : {
color: 'black',
},
});