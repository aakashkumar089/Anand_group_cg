import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/core';
import {Card} from 'react-native-paper';
import {SliderBox} from 'react-native-image-slider-box';
import {useIsFocused} from '@react-navigation/native';
import {userhome} from '../utils/api';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const sliderImage = [
  require('../../assets/Images/RegisterPage.png'),
  require('../../assets/Images/courier_2.png'),
  require('../../assets/Images/acrepair.png'),
  require('../../assets/Images/banner.jpg'),
  require('../../assets/Images/logo.png'),
  require('../../assets/Images/cleaning.png'),
];

const HomeScreen1 = () => {
  const {password, email} = useSelector(state => ({
    password: state?.auth?.user?.password,
    email: state?.auth?.user?.email,
  }));
  const {data, error, status} = useQuery(
    ['userhome', email, password],
    userhome,
  );
  const navigation = useNavigation();
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

  const service = data.data.data[0].serv;
  const banner = data.data.data[2];
  const activity = data.data.data[3];
  const event = data.data.data[1];

  console.log(data);

  return (
    <>
      <FocusAwareStatusBar backgroundColor="#ffcc80" barStyle="Light-Content" />
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#ffcc80'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.HeaderContainerLeft}>
              <Text style={styles.HeaderTab}>Home</Text>
              <Text style={{fontSize: 22, color: '#fff'}}>Welcome Amit</Text>
            </View>
            <View style={styles.HeaderContainerRight}>
              <MaterialCommunityIcons
                name="bell-ring"
                onPress={() => alert('This is a button!')}
                color="#fff"
                size={40}
              />
            </View>
          </View>
        </View>
        {/* Middle body Part */}
        <View style={{flex: 2}}>
          {/*Sevices */}
          <View style={{backgroundColor: '#fff'}}>
            <Text style={styles.Category}>Services</Text>
            <View
              style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
              }}>
              {service.map((serve, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => test()}>
                    <View style={styles.serviceContainer}>
                      <Image
                        style={styles.services}
                        source={require('../../assets/icons/Notice.png')}
                      />
                      <Text style={styles.ServiceName}>{serve.id}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          {/* --------------------end service-------------------------------- */}
          {/* ---------------------Start Slider----------------------------- */}
          <View>
            <Card
              borderRadius={100}
              style={{
                padding: 10,
                margin: 10,
                backgroundColor: 'white',
              }}>
              <SliderBox
                images={sliderImage}
                sliderBoxHeight={180}
                sliderBoxWidth={100}
                ImageComponentStyle={{
                  borderRadius: 15,
                  width: '97%',
                  marginTop: 5,
                }}
                circleLoop={true}
                autoplay
              />
            </Card>
          </View>
          {/* ---------------------End Slider----------------------------- */}
          {/* ---------------Events--------------------------- */}
          <View style={{backgroundColor: '#fff'}}>
            <Text style={styles.Category}>Events</Text>
          </View>
          <ScrollView horizontal={true}>
            <View
              style={{
                padding: 10,
                borderLeftColor: '#0d46a1',
                borderLeftWidth: 5,
                margin: 10,
                backgroundColor: 'white',
                width: 350,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View flex={1}>
                  <Image
                    style={{height: 60, width: 60, marginTop: 25}}
                    source={require('../../assets/Images/img3.jpg')}
                  />
                </View>
                <View style={{padding: 5, flex: 4}}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
                    ICC Cricket - 2021
                  </Text>
                  <Text style={{fontSize: 16, color: '#f4e0a3'}}>
                    www.icc-cricket.com
                  </Text>
                  <Text style={{fontSize: 14, color: 'green', flexShrink: 1}}>
                    Qualifying events taking place in 2021 feed into four ICC
                    World
                  </Text>
                  <Text style={{color: 'orange', alignSelf: 'flex-end'}}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                borderLeftColor: '#0d46a1',
                borderLeftWidth: 5,
                margin: 10,
                backgroundColor: 'white',
                width: 350,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View flex={1}>
                  <Image
                    style={{height: 60, width: 60, marginTop: 25}}
                    source={require('../../assets/icons/directory.png')}
                  />
                </View>
                <View style={{padding: 5, flex: 4}}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
                    ICC Cricket - 2021
                  </Text>
                  <Text style={{fontSize: 16, color: '#f4e0a3'}}>
                    www.icc-cricket.com
                  </Text>
                  <Text style={{fontSize: 14, color: 'green', flexShrink: 1}}>
                    Qualifying events taking place in 2021 feed into four ICC
                    World
                  </Text>
                  <Text style={{color: 'orange', alignSelf: 'flex-end'}}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                borderLeftColor: '#0d46a1',
                borderLeftWidth: 5,
                margin: 10,
                backgroundColor: 'white',
                width: 350,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View flex={1}>
                  <Image
                    style={{height: 60, width: 60, marginTop: 25}}
                    source={require('../../assets/icons/directory.png')}
                  />
                </View>
                <View style={{padding: 5, flex: 4}}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
                    ICC Cricket - 2021
                  </Text>
                  <Text style={{fontSize: 16, color: '#f4e0a3'}}>
                    www.icc-cricket.com
                  </Text>
                  <Text style={{fontSize: 14, color: 'green', flexShrink: 1}}>
                    Qualifying events taking place in 2021 feed into four ICC
                    World
                  </Text>
                  <Text style={{color: 'orange', alignSelf: 'flex-end'}}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                borderLeftColor: '#0d46a1',
                borderLeftWidth: 5,
                margin: 10,
                backgroundColor: 'white',
                width: 350,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View flex={1}>
                  <Image
                    style={{height: 60, width: 60, marginTop: 25}}
                    source={require('../../assets/icons/directory.png')}
                  />
                </View>
                <View style={{padding: 5, flex: 4}}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
                    ICC Cricket - 2021
                  </Text>
                  <Text style={{fontSize: 16, color: '#f4e0a3'}}>
                    www.icc-cricket.com
                  </Text>
                  <Text style={{fontSize: 14, color: 'green', flexShrink: 1}}>
                    Qualifying events taking place in 2021 feed into four ICC
                    World
                  </Text>
                  <Text style={{color: 'orange', alignSelf: 'flex-end'}}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                borderLeftColor: '#0d46a1',
                borderLeftWidth: 5,
                margin: 10,
                backgroundColor: 'white',
                width: 350,
              }}>
              <View style={{flexDirection: 'row'}}>
                <View flex={1}>
                  <Image
                    style={{height: 60, width: 60, marginTop: 25}}
                    source={require('../../assets/icons/directory.png')}
                  />
                </View>
                <View style={{padding: 5, flex: 4}}>
                  <Text
                    style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
                    ICC Cricket - 2021
                  </Text>
                  <Text style={{fontSize: 16, color: '#f4e0a3'}}>
                    www.icc-cricket.com
                  </Text>
                  <Text style={{fontSize: 14, color: 'green', flexShrink: 1}}>
                    Qualifying events taking place in 2021 feed into four ICC
                    World
                  </Text>
                  <Text style={{color: 'orange', alignSelf: 'flex-end'}}>
                    11-Sep-2021
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <View style={{backgroundColor: '#fff'}}>
            <Text style={styles.Category}>Activity/News</Text>
          </View>

          <View
            style={{
              padding: 10,
              borderLeftColor: '#b74d2f',
              borderLeftWidth: 5,
              margin: 10,
              backgroundColor: 'white',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{padding: 5, flex: 4}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
                  Ganesh Chaturthi
                </Text>
                <Text style={{fontSize: 16, color: '#f4e0a3'}}>Admin</Text>
                <Text style={{fontSize: 14, color: 'green', flexShrink: 1}}>
                  Ganesh Chaturthi (ISO: Gansesh CHaturthi). Also known as
                  inayak Chaturthi
                </Text>
                <Text style={{color: 'orange', alignSelf: 'flex-end'}}>
                  11-Sep-2021
                </Text>
              </View>
              <View flex={1} style={{marginTop: 30}}>
                <Image
                  style={{}}
                  source={require('../../assets/icons/directory.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 10,
              borderLeftColor: '#b74d2f',
              borderLeftWidth: 5,
              margin: 10,
              backgroundColor: 'white',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{padding: 5, flex: 4}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
                  Ganesh Chaturthi
                </Text>
                <Text style={{fontSize: 16, color: '#f4e0a3'}}>Admin</Text>
                <Text style={{fontSize: 14, color: 'green', flexShrink: 1}}>
                  Ganesh Chaturthi (ISO: Gansesh CHaturthi). Also known as
                  inayak Chaturthi
                </Text>
                <Text style={{color: 'orange', alignSelf: 'flex-end'}}>
                  11-Sep-2021
                </Text>
              </View>
              <View flex={1} style={{marginTop: 30}}>
                <Image
                  style={{}}
                  source={require('../../assets/icons/directory.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 10,
              borderLeftColor: '#b74d2f',
              borderLeftWidth: 5,
              margin: 10,
              backgroundColor: 'white',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{padding: 5, flex: 4}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
                  Ganesh Chaturthi
                </Text>
                <Text style={{fontSize: 16, color: '#f4e0a3'}}>Admin</Text>
                <Text style={{fontSize: 14, color: 'green', flexShrink: 1}}>
                  Ganesh Chaturthi (ISO: Gansesh CHaturthi). Also known as
                  inayak Chaturthi
                </Text>
                <Text style={{color: 'orange', alignSelf: 'flex-end'}}>
                  11-Sep-2021
                </Text>
              </View>
              <View flex={1} style={{marginTop: 30}}>
                <Image
                  style={{}}
                  source={require('../../assets/icons/directory.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 10,
              borderLeftColor: '#b74d2f',
              borderLeftWidth: 5,
              margin: 10,
              backgroundColor: 'white',
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{padding: 5, flex: 4}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'orange'}}>
                  Ganesh Chaturthi
                </Text>
                <Text style={{fontSize: 16, color: '#f4e0a3'}}>Admin</Text>
                <Text style={{fontSize: 14, color: 'green', flexShrink: 1}}>
                  Ganesh Chaturthi (ISO: Gansesh CHaturthi). Also known as
                  inayak Chaturthi
                </Text>
                <Text style={{color: 'orange', alignSelf: 'flex-end'}}>
                  11-Sep-2021
                </Text>
              </View>
              <View flex={1} style={{marginTop: 30}}>
                <Image
                  style={{}}
                  source={require('../../assets/icons/directory.png')}
                />
              </View>
            </View>
          </View>
        </View>

        {/* --------------------End middle body--------------------------- */}
      </ScrollView>
    </>
  );
};

export default HomeScreen1;
const styles = StyleSheet.create({
  Category: {color: 'grey', fontSize: 22, paddingTop: 15, paddingLeft: 15},
  HeaderContainerRight: {flex: 1, right: -20, paddingTop: 30},
  HeaderContainerLeft: {flex: 2, paddingLeft: 20, paddingTop: 20},
  HeaderTab: {fontSize: 24, color: '#fff', fontWeight: 'bold'},
  services: {width: 30, height: 30, alignSelf: 'center'},
  serviceContainer: {
    height: 70,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },
  ServiceName: {fontSize: 14, color: 'grey'},
  ImageSliders: {height: 180, width: '100%', alignSelf: 'center'},
  UserResponse: {
    padding: 10,
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
  },
});
