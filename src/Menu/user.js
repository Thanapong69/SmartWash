import React from 'react';
import {  
    StyleSheet,
    View, 
    Text,
    Image 
} from 'react-native';
import {LoginButton,AccessToken,LoginManager,GraphRequest,GraphRequestManager} from 'react-native-fbsdk';
import firebase from '../../firebase';
import {uid} from '../component/Login/Login'
import { Fonts } from '../utils/Fonts';

export default class user extends React.Component {

    static navigationOptions = {
        title: 'ข้อมูลผู้ใช้'
      };
    
      constructor() {
        super();
        this.state = {
          money : 10,
          name : '',
          uri : '',
          email: '',
        };
      }
    
       //Create response callback.
       _responseInfoCallback = (error, result) => {
        if (error) {
          alert('Error fetching data: ' + error.toString());
        } else {
          this.setState({name: result.name, pic: result.picture.data.url, email: result.email});
        }
      }
     
      componentDidMount() {
        const rootRef1 = firebase.database().ref().child('users');
        const status1 = rootRef1.child(uid).child('money');
        status1.on('value', snap => {
          this.setState({money: snap.val()});
        });
      }
     
    
      componentWillMount() {
        // Create a graph request asking for user information with a callback to handle the response.
        const infoRequest = new GraphRequest(
          '/me?fields=name,picture,email',
          null,
          this._responseInfoCallback
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
    
      } 
      
      
  render() {
    return (
      <View style={styles.container}>

            <View style={styles.top}>
                <Image source={{uri:this.state.pic}} style={styles.image}/>
            </View>

            <View style={styles.center}> 
            <Text style={ {textAlign: 'center', marginTop:50,marginBottom:10,color: '#4d4c4b',fontSize: 20,fontFamily: Fonts.ltim} }>{this.state.name}</Text>
            </View>

            <View style={styles.centerEmail}> 
            <Text style={ {textAlign: 'center', marginTop:50,marginBottom:10,color: '#4d4c4b',fontSize: 20,fontFamily: Fonts.ltim} }>{this.state.email}</Text>
            </View>

            <View style={styles.centerMoney}> 
            <Text style={ {textAlign: 'center', marginTop:50,marginBottom:10,color: '#4d4c4b',fontSize: 20,fontFamily: Fonts.ltim} }>คงเหลือ = {this.state.money} บาท</Text>
            </View>
            
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top: {
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#b3e0ff'
    },
    center: {
        height: '16%',
        backgroundColor: '#4da6ff',
    },
    centerEmail: {
        height: '16%',
        backgroundColor: '#3399ff',
    },
    centerMoney: {
        height: '25%',
        backgroundColor: '#1a8cff',
    },
    bottom: {
        height: '45%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    // bottomItem: {
    //     width: '50%',
    //     height: '50%',
    //     padding: 5,
    // },
    // bottomItemInner: {
    //     flex: 1,
    //     backgroundColor: '#292929',
    //     alignItems: 'center',
    // },
    image: {
    height:150,
    width: 150,
    borderRadius: 64,
    marginTop: 15
  },
})