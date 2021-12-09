import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import {Card} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused} from '@react-navigation/native';
import {service} from '../utils/api';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const Services1 = () => {
  const {password, email} = useSelector(state => ({
    password: state?.auth?.user?.password,
    email: state?.auth?.user?.email,
  }));
  const {data, error, status} = useQuery(['service', email, password], service);
  //const navigation = useNavigation();
  if (status == 'loading') {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Text>{error.message}</Text>
      </View>
    );
  }
  console.log(data);
  return (
    <>
      <FocusAwareStatusBar backgroundColor="#ff8c00" barStyle="Light-Content" />
      <ScrollView>
        <View flex={1} backgroundColor="#fff">
          <View style={{flex: 1, backgroundColor: '#ff8c00'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.HeaderContainerLeft}>
                <Text style={styles.HeaderTab}>Services</Text>
              </View>
            </View>
          </View>
          {/* Middle body Part */}
          <View style={styles.services}>
            <Card style={styles.card}>
              <LinearGradient
                colors={['#fff', '#008372']}
                style={{borderRadius: 10}}>
                <Text style={{fontSize: 20, color: 'orange', margin: 5}}>
                  Ac Services
                </Text>
                <Image
                  style={styles.imagestyle}
                  source={require('../../assets/Images/acrepair.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    margin: 10,
                    alignSelf: 'center',
                  }}>
                  Up to 40% Off
                </Text>
              </LinearGradient>
            </Card>
            <Card style={styles.card}>
              <LinearGradient
                colors={['#fff', '#d90065']}
                style={{borderRadius: 10}}>
                <Text style={{fontSize: 20, color: 'orange', margin: 5}}>
                  Home Paint
                </Text>
                <Image
                  style={styles.imagestyle}
                  source={require('../../assets/Images/drawing.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    margin: 10,
                    alignSelf: 'center',
                  }}>
                  Up to 40% Off
                </Text>
              </LinearGradient>
            </Card>
            <Card style={styles.card}>
              <LinearGradient
                colors={['#fff', '#ff7900']}
                style={{borderRadius: 10}}>
                <Text style={{fontSize: 20, color: 'orange', margin: 5}}>
                  Home Clean
                </Text>
                <Image
                  style={styles.imagestyle}
                  source={require('../../assets/Images/cleaning.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    margin: 10,
                    alignSelf: 'center',
                  }}>
                  Up to 40% Off
                </Text>
              </LinearGradient>
            </Card>
            <Card style={styles.card}>
              <LinearGradient
                colors={['#fff', '#007bd9']}
                style={{borderRadius: 10}}>
                <Text style={{fontSize: 20, color: 'orange', margin: 5}}>
                  Courier Services
                </Text>
                <Image
                  style={styles.imagestyle}
                  source={require('../../assets/Images/acrepair.png')}
                />
                <Text
                  style={{
                    fontSize: 20,
                    color: '#fff',
                    margin: 10,
                    alignSelf: 'center',
                  }}>
                  Up to 40% Off
                </Text>
              </LinearGradient>
            </Card>
          </View>

          {/* --------------------End middle body--------------------------- */}
        </View>
      </ScrollView>
    </>
  );
};

export default Services1;
const styles = StyleSheet.create({
  HeaderContainerRight: {flex: 1, right: -20, paddingTop: 30},
  HeaderContainerLeft: {flex: 2, paddingLeft: 20, paddingTop: 20},
  HeaderTab: {fontSize: 24, 
    color: '#fff', 
    fontWeight: 'bold',
    paddingVertical:10,
  },

  imagestyle: {height: 200, width: 150, alignSelf: 'center'},
  card:{
    height: 270,
    width: 160,
    margin: 8,

  },

  services:{
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',

    
  }
});
