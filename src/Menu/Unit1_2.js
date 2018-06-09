import React from 'react';
import {  
  View, 
  Text,
  Image,
  Alert,
  StyleSheet,
} from 'react-native';
import firebase from '../../firebase';
import { Button } from 'native-base';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import { Fonts } from '../utils/Fonts';
import {uid} from '../component/Login/Login'
import {name} from '../component/Login/Login'

var firebasecc = firebase.database().ref(); 

export default class Unit1_2 extends React.Component {
  static navigationOptions = {
    title: 'เครื่องที่ 2'
  };

  state = {
    logged: false,
    money2: 11,
    count : 1
}

componentDidMount() {
  const rootRef1 = firebase.database().ref().child('users');
  const status1 = rootRef1.child(uid).child('money');
  const rootRef11 = firebase.database().ref().child('users');
  const status11 = rootRef11.child(uid).child('name');
  const getcount = firebase.database().ref().child('count1_2');


  getcount.on('value', snap => {
    this.setState({count: snap.val()});
  });
  status1.on('value', snap => {
    this.setState({money2: snap.val()});
  });
  status11.on('value', snap => {
    this.setState({name: snap.val()});
  });
}

ShowAlertDialog = () =>{

  Alert.alert(
    
    // This is Alert Dialog Title
    'จองเครื่องซักผ้า',
 
    // This is Alert Dialog Message. 
    'คุณต้องการจองเครื่องซักผ้าและชำระเงินค่าบริการ 20 บาท หรือไม่?',
    [
 
      // Second Cancel Button in Alert Dialog.
      {text: 'Cancel', onPress: () => console.log('Cancel'), style: 'cancel'},
 
      // Third OK Button in Alert Dialog
      {text: 'OK', onPress: () => this.onTick()},
      
    ]
 
  )
 
}

  onTick = () =>
  {
    const status_1 = "ไม่ว่าง"
    firebasecc.child('Status').child('12').set(status_1);
    firebasecc.child("Reservations1_2").child(uid).update({uid:uid,name:name});
    if(this.state.money2<20) {
      alert("กรุณาเติมเงินด้วยครับ" );
      }else if(this.state.money2>=20){
      this.state.money2 = this.state.money2-20 
      firebase.database().ref(`/users/${uid}`).update({
      money : this.state.money2
    })
    this.state.count = this.state.count+1
  firebase.database().ref(`count1_2`).set(this.state.count)
  firebase.database().ref(`users`).child(uid).update({
    count : this.state.count
  })
  alert("คุณจองเครื่องซักผ้าลำดับที่ " + this.state.count);
    this.goNext()
    }
  }

  goNext (){
    this.props.navigation.navigate('OpenUnit1_2Screen');
   }

  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#81DAF5'}}>
         <Text style={styles.title1}> 2. LG Fuzzi Logi 7.5    <Text style={ styles.status }>ราคา 20 บาท</Text> </Text>
         
        <Text style={ styles.status }>คุณ {this.state.name}     <Text style={ { color: '#0000ff',fontSize: 18, fontFamily: Fonts.ltim} }>คงเหลือ = {this.state.money2} บาท</Text></Text>
         
         
        <View>
        <Image source={require('../image/wash.png')} style = {styles.logopic5} />  
        
     </View>
     <View  style={{
              marginTop: 15,
              }}>
     <Button
            onPress={this.ShowAlertDialog}
            style={{
              padding: 10,
              backgroundColor: '#85e085',
              borderRadius: 5,
              alignItems: 'center',
              marginTop: 15,
              }}><Text style={styles.title2}>จองเครื่องซักผ้า</Text>
     </Button>
     </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title1: {
    fontSize: 25,
    fontWeight: "500",
    color: "black",
    marginTop: 10
  },
  status: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    fontFamily: Fonts.ltim
  },
  logopic5:{
    width : 250,
    height : 350,
    justifyContent: 'center',
    margin: 10
  },
  title2: {
    fontSize: 15,
    fontWeight: "300",
    color: "black",
  },
});
