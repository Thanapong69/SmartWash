import React from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button
} from 'react-native';
import {LoginButton,AccessToken,LoginManager} from 'react-native-fbsdk';
import Login from '../component/Login/Login'
import { Fonts } from '../utils/Fonts';

export default class LogoutScreen extends React.Component {
  static navigationOptions = {
    title: 'ออกจากระบบ'
  };

  goBack () {
    this.props.navigation.navigate({ routeName: 'LoginScreen' })
  }
  
  render() {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66ccff'
    }}>

     <Image 
    style={styles.logo}
    source={require('../image/web.png')} 
    />

    <Text style={styles.title}>Smart Wash  </Text>
    <Text style={styles.title1}> ระบบจัดการเครื่องซักผ้าอัจฉริยะ </Text>
        <Text style={{ fontWeight: '200', fontSize: 22, color: 'white' ,fontFamily: Fonts.ltim}}>
            ขอบคุณที่ใช้บริการ
    </Text>

        <LoginButton 
        publishPermissions={["publish_actions"]}
        onLogoutFinished = {() => {this.goBack()}}/>  

    </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
      fontSize: 17,
      fontWeight: "500",
      marginBottom: 4,
      marginTop: 5,
      marginLeft: 10
  },

  Subtitle: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 4,
      marginTop: 5,
      marginLeft: 10
  },
  logo: {
      width: 100,
      height: 100
  },
  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5
  }
});

