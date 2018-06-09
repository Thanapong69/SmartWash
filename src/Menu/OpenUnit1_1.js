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

export default class OpenUnit1_1 extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    money11: 11,
    count: 5,
    user: "a"
}

componentDidMount() {
  const rootRef1 = firebase.database().ref().child('users');
  const status1 = rootRef1.child(uid).child('money');
  status1.on('value', snap => {
    this.setState({money11: snap.val()});
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
    date: new Date(Date.now() + (60 * 1000)) // in 60 secs
  })
  
}

onOpen = () =>
{
const number = 1
firebasecc.child('Branch1').child('Washingmachine1_1').child('On_Off').set(number);
this.props.navigation.navigate('WashScreen');
const getcount = firebase.database().ref().child('count1_1');
firebase.database().ref('users/').once('value').then(function (snapshot) {
  var showlist = snapshot.val();
  console.log( 'user:', showlist );
  alert("user " + showlist.money);

})

getcount.on('value', snap => {
  this.setState({count: snap.val()});
});

}
  render() {
    return (
      <View style={{flex: 1,alignItems: 'center',backgroundColor: '#81DAF5'}}>
      <View style={{marginTop: 50,alignItems:'center'}}>

        <Image style={styles.logo}source={require('../image/web.png')} />
         <Text style={{  fontSize: 20,color: "black",fontFamily: Fonts.ltim,}}>
            Smart Wash ระบบจัดการเครื่องซักผ้าอัจฉริยะ
        </Text>

   <Text style={{  fontSize: 20,color: "black",fontFamily: Fonts.ltim }}>
        ขอขอบคุณที่ใช้บริการ
  </Text>
  <Text style={ { marginTop: 10, color: '#000000',fontSize: 21, fontFamily: Fonts.ltim} }>ยอดเงินคงเหลือ = {this.state.money11} บาท</Text>
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