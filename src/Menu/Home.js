import React from 'react';
import {  
  View, 
  Text,
  ImageBackground,
  StyleSheet,
  Image
} from 'react-native';
import { Fonts } from '../utils/Fonts';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'วิธีการใช้งาน'
  };

  render() {
    return (
      <ImageBackground source={require('../image/bg_home.jpg')} 
      style={styles.container}>
      <View style={styles.inner}>
      <Text style={ styles.title }>
       Smart Wash ระบบจัดการเครื่องซักผ้าอัจฉริยะ
      </Text>
      <Text style={ styles.Subtitle }>
       วิธีการเติมเครดิต
      </Text>
      <Text style={ styles.Destination }>
      1. ผู้ใช้ทำการโอนเงินผ่านบัญชีธนาคารที่เเจ้งรายละเอียดไว้ในเมนูเติมเครดิต
      </Text> 
      <Text style={ styles.Destination }>
      2. หลังจากโอนเงินให้ผู้ใช้งานทำการเลือกหลักฐานสลิปที่โอนและทำการส่งสลิปมายังระบบ
      </Text>
      <Text style={ styles.Destination }>
      3. เมื่อผู้ใช้ทำการส่งสลิปเสร็จแล้วระบบจะทำการเติมเครดิตให้ผู้ใช้งานตามจำนวนที่โอนมายังระบบ
      </Text>    
      <Text style={ styles.Subtitle }>
      วิธีการจองและใช้งานเครื่องซักผ้า
      </Text> 
      <Text style={ styles.Destination }>
      1. ให้ผู้ใช้งานทำารเลือกหมายเลขเครื่องซักผ้าที่ต้องการจอง
      </Text>      
      <Text style={ styles.Destination }>
      2. เมื่อผู้ใช้งานทำารจองเสร็จแล้วผู้ใช้งานมีเวลาภายใน 10 นาทีในการนำผ้าใส่เครื่องซักผ้าและกดปุ่มเปิดเครื่องถ้าเกินเวลา 10 นาทีระบบจะทำการลบคิวในการจองของผู้ใช้อัตโนมัติ
      </Text>   
      <Text style={ styles.Destination }>
      3. เมื่อผู้ใช้กดปุ่มเปิดเครื่องระบบจะทำการหักค่าใช้บริการ
      </Text>   
      <View style={styles.logoContainer}>
        <Image 
            style={styles.logo}
            source={require('../image/web.png')} 
            />
            <Text style={styles.title}>Smart Wash  </Text>
            <Text style={styles.title1}> ระบบจัดการเครื่องซักผ้าอัจฉริยะ </Text>
       </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: '80%',
    height: '80%',
    backgroundColor: 'rgba(255, 255, 255, .7)'
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 4,
    marginTop: 5,
    marginLeft: 10,
    color: "black",
    fontFamily: Fonts.ltim
  },
  title1 : {
  fontSize: 12,
  color: 'black',
  fontFamily: Fonts.ltim
  },
  logoContainer: {
  alignItems: 'center',
  flexGrow: 1,
  justifyContent: 'center',
  },
  logo: {
  width: 70,
  height: 70,
  },
  Subtitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
    marginTop: 5,
    marginLeft: 10,
    color: 'black',
    fontFamily: Fonts.ltim
  },
  Destination:{
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 4,
    marginTop: 5,
    marginLeft: 10 ,
    fontFamily: Fonts.ltim
  },
  pic:{
    width: 100,
    height: 150,
    alignItems: 'center'
  }
  });