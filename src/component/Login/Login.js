import React,{ Component } from 'react';
import {  
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';
import {LoginButton,AccessToken,LoginManager} from 'react-native-fbsdk';
import { YellowBox } from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDPJcvx_2_O9BNoFs8Wz_EveUmiIhZ8Wzo",
  authDomain: "project-e9bf5.firebaseapp.com",
  databaseURL: "https://project-e9bf5.firebaseio.com",
  projectId: "project-e9bf5",
  storageBucket: "project-e9bf5.appspot.com",
  messagingSenderId: "992917563573"
};
firebase.initializeApp(firebaseConfig);


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

let uid = 10
let email = 10
let name = 10

 class Login extends Component {
    
    static navigationOptions = {
        header: null
    }
    
    constructor(props) {
    super(props);
    this.state = {
      logged: false
  };
  
   }
 
   onLogin = async () => {
    if (!this.state.logged) {
        const result = await LoginManager.logInWithReadPermissions(['public_profile','email']);
        const tokenData = await AccessToken.getCurrentAccessToken();
        const token = tokenData.accessToken.toString();
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        const user = await firebase.auth().signInWithCredential(credential);
        uid = user.uid
        email = user.email
        name = user.displayName
        firebase.database().ref(`/users/${user.uid}`).update({
            email: user.email,
            name: user.displayName,
            id: user.uid
        });this.goHome()

      }  else {
        this.setState({logged: false});
        LoginManager.logOut();
    }
  }

goHome() {
this.props.navigation.navigate('MenuScreen');
}

   render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
        <Image 
            style={styles.logo}
            source={require('../../image/web.png')} 
            />
            <Text style={styles.title}>Smart Wash  </Text>
            <Text style={styles.title1}> ระบบจัดการเครื่องซักผ้าอัจฉริยะ </Text>
       </View>
        
        <TouchableOpacity
         onPress={this.onLogin}
            style={{
            padding: 10,
            backgroundColor: '#005ce6',
            borderRadius: 5,
            alignItems: 'center'
            }}
        >
          <Text style={{ color: '#fff',  fontWeight: '700'}}>
          {this.state.logged ?'ออกจากระบบ':'เข้าสู่ระบบ'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
export {uid,email,name}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logoContainer: {
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'center',
        },
        logo: {
            width: 100,
            height: 100
        },
        title : {
            color: '#FFF',
            marginTop: 10,
            width: 300,
            textAlign: 'center',
            opacity: 0.9,
            fontSize: 23,
        },
        title1 : {
            color: '#FFF',
            marginTop: 10,
            width: 300,
            textAlign: 'center',
            opacity: 0.9,
            fontSize: 18,
        },
        buttonlogin : {
          padding: 10,
          backgroundColor: '#3385ff',
          borderRadius: 5,
          alignItems: 'center'
        }
});
