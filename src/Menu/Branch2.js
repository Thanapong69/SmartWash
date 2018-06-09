import React from 'react';
import {  
  View, 
  Text,
  StyleSheet,
  TouchableOpacity,
  Image 
} from 'react-native';
import firebase from '../../firebase';
import { Fonts } from '../utils/Fonts';

export default class Branch2 extends React.Component {

  static navigationOptions = {
    title: 'สาขาที่2'
  };

  constructor() {
    super();
    this.state = {
      speed1: 10,
      speed11: 11,
      speed221: 221,
      speed222: 222,
      count: 1,
      count1:1
    };
  }
    
  componentDidMount() {
    const rootRef1 = firebase.database().ref().child('Status');
    const rootRef = firebase.database().ref().child('WashingmachineBranch2');
    const status1 = rootRef.child('-LCQ3y3beFcOGW_MPvNU').child('type');
    const status11 = rootRef.child('-LCVTlH2RZhirBNIzECM').child('type');
    const status221 = rootRef1.child('21');
    const status222 = rootRef1.child('22');
    const getcount = firebase.database().ref().child('count1_3');
  

  getcount.on('value', snap => {
    this.setState({count: snap.val()});
  });

  const getcount1 = firebase.database().ref().child('count1_4');
  

  getcount1.on('value', snap => {
    this.setState({count1: snap.val()});
  });

    status1.on('value', snap => {
      this.setState({
      speed1: snap.val()
    });
    });
    
    status11.on('value', snap => {
      this.setState({
      speed11: snap.val()
    });
    });

    status221.on('value', snap => {
      this.setState({
      speed221: snap.val()
    });
    });

    status222.on('value', snap => {
      this.setState({
      speed222: snap.val()
    });
    });
  }

 callFun1 = () =>
  {
    this.props.navigation.navigate('Unit2_1Screen');
  }

  callFun2 = () =>
  {
    this.props.navigation.navigate('Unit2_2Screen');
  }

  render() {
    return (
      <View style={styles.container}>
  
      <View style={[styles.boxContainer1, styles.boxOne2]}>
      <Text style={ styles.title }>
        1. LG Fuzzi Logi 6.0 ({this.state.speed221})
        </Text>
        <Text style={ styles.status }>
       สถานะของเครื่อง : {this.state.speed1}
      </Text>
      <Text style={ styles.status }>
      คิวทั้งหมด : {this.state.count}
      </Text>
      <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun1 }>
        <Image source={require('../image/web.png')} style = {styles.logopic} />
      </TouchableOpacity>
      </View>
  
      <View style={[styles.boxContainer1, styles.boxOne1]}>
      <Text style={ styles.title }>
        2. LG Fuzzi Logi 6.0 ({this.state.speed222})
        </Text>
        <Text style={ styles.status }>
        สถานะของเครื่อง : {this.state.speed11}
      </Text>
      <Text style={ styles.status }>
      คิวทั้งหมด : {this.state.count1}
      </Text>
      <TouchableOpacity activeOpacity = { .5 } onPress={ this.callFun2 }>
        <Image source={require('../image/web.png')} style = {styles.logopic} />
      </TouchableOpacity>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 1:1
    flexDirection: 'column',
  },
  boxContainer1: {
    flex: 1, // 1:3
    alignItems: 'center',
    justifyContent: 'center'
  },
  boxOne2: {
    flex: 2.5, // 3:6
    backgroundColor: '#6cd8a6',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 25,
    color: "black",
    fontFamily: Fonts.ltim
  },
  status: {
    fontSize: 20,
    fontWeight: "400",
    color: "black",
    fontFamily: Fonts.ltim
  },
  logopic:{
    width : 150,
    height : 150,
    justifyContent: 'center'
  },
  boxOne1: {
    flex: 2.5, // 3:6
    backgroundColor: '#33ccff',
    justifyContent: 'space-around',
  },
});
