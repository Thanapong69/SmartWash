import React from 'react';
import {  
  View, 
  Text, 
  StyleSheet,
  Image
} from 'react-native';
import { Button } from 'native-base';
import firebase from '../../firebase';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';
import {uid} from '../component/Login/Login'
import {name} from '../component/Login/Login'
import { Fonts } from '../utils/Fonts';

var firebasecc = firebase.database().ref(); 

export default class OpenUnit2_2 extends React.Component {
  static navigationOptions = {
    header: null
  };
  state = {
    money2: 11
}

componentDidMount() {
  const rootRef1 = firebase.database().ref().child('users');
  const status1 = rootRef1.child(uid).child('money');
  status1.on('value', snap => {
    this.setState({money2: snap.val()});
  });

  PushNotification.configure({
    onRegister: function(token) {
        console.log( 'TOKEN:', token );
    },
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },
  })

  PushNotification.localNotification({
    title: "SmartWash", // (optional, for iOS this is only used in apple watch, the title will be the app name on other iOS devices)
    message: "กรุนานำผ้าไปใส่ที่เครื่องภายในเวลา 10 นาทีแล้วกดปุ่มเปิดเครื่องจากนั้นทำการกดปุ่มเริ่มซัก",
  })
}
    onOpen = () =>
{
  const number = 1
  firebasecc.child('Branch2').child('Washingmachine2_2').child('On_Off').set(number);
  this.props.navigation.navigate('WashScreen');
}
  render() {
    return (
      <View style={{flex: 1,alignItems: 'center',backgroundColor: '#fff'}}>
      <View style={{marginTop: 50,alignItems:'center'}}>

        <Image style={styles.logo}source={require('../image/web.png')} />
         <Text style={{  fontSize: 20,color: "black",fontFamily: Fonts.ltim,}}>
            Smart Wash ระบบจัดการเครื่องซักผ้าอัจฉริยะ
        </Text>

   <Text style={{  fontSize: 20,color: "black",fontFamily: Fonts.ltim }}>
        ขอขอบคุณที่ใช้บริการ
  </Text>
  <Text style={ { marginTop: 10, color: '#000000',fontSize: 21, fontFamily: Fonts.ltim} }>ยอดเงินคงเหลือ = {this.state.money2} บาท</Text>
  <View style={{
        marginTop: 50,
        alignItems:'center'
        }}>
      <Button
          onPress={this.onOpen}
          style={{
            padding: 10,
            backgroundColor: '#01A9DB',
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 40,
            }}>
            <Text style={styles.title2}>เปิดเครื่องซักผ้า</Text>
      </Button>
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200
  },
  title2: {
    fontSize: 15,
    fontWeight: "300",
    color: "black",
  },
});
