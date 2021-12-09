import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {Card} from 'react-native-paper';
import {useIsFocused} from '@react-navigation/native';
import {directory} from '../utils/api';
import {useQuery} from 'react-query';
import {useSelector} from 'react-redux';
function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const DirectoryScreen = ({navigation}) => {
  return (
    <>
      <StatusBar backgroundColor="#ff8c00" barStyle="Light-Content" />
      <ScrollView>
        <View style={{flex: 1, backgroundColor: '#ff8c00'}}>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.HeaderContainerLeft}>
              <Text style={styles.HeaderTab}>Directory Detail</Text>
            </View>
          </View>
        </View>
        {/* Middle body Part */}
        <View flex={8}>
          <Card
            borderRadius={100}
            style={{
              padding: 10,

              backgroundColor: 'white',
            }}>
            <Text style={styles.Category}>Resident Directory</Text>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
          </Card>
          <Card
            borderRadius={100}
            style={{
              padding: 10,

              backgroundColor: 'white',
            }}>
            <Text style={styles.Category}>Society Directory</Text>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
          </Card>
          <Card
            borderRadius={100}
            style={{
              padding: 10,

              backgroundColor: 'white',
            }}>
            <Text style={styles.Category}>Service Directory</Text>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
          </Card>
          <Card
            borderRadius={100}
            style={{
              padding: 10,

              backgroundColor: 'white',
            }}>
            <Text style={styles.Category}>Security Directory</Text>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={2} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
          </Card>


          <Card
            borderRadius={100}
            style={{
              padding: 10,

              backgroundColor: 'white',
            }}>
            <Text style={styles.Category}>Emergency Directory</Text>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={5} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
            <View
              flexDirection="row"
              style={{borderBottomColor: '#eae4e4', borderBottomWidth: 1}}>
              <View flex={2} flexDirection="row" padding={10}>
                <View>
                  <MaterialCommunityIcons
                    name="account-circle"
                    color="grey"
                    size={40}
                  />
                </View>
                <View>
                  <Text style={{fontWeight: 'bold', color: '#e8bc52'}}>
                    Amit Jaiswal
                  </Text>
                  <Text style={{color: '#688870'}}>
                    10:10 AM | 22-sept-2021
                  </Text>
                </View>
              </View>
              <View flex={1}>
                <View>
                  <MaterialCommunityIcons
                    name="cellphone-iphone"
                    color="grey"
                    size={40}
                  />
                </View>
              </View>
            </View>
          </Card>


          
        </View>

        {/* --------------------End middle body--------------------------- */}
      </ScrollView>
    </>
  );
};

export default DirectoryScreen;
const styles = StyleSheet.create({
  HeaderContainerRight: {flex: 1, marginRight:20, paddingTop: 30},
  HeaderContainerLeft: {flex: 2, paddingLeft: 20, paddingTop: 20},
  HeaderTab: {fontSize: 24, color: '#fff', fontWeight: 'bold'},
  DirectoryContainer: {flex: 5, flexDirection: 'row', padding: 10},
  Category: {fontSize: 16, color: '#c2175b'},
});
