import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


const CoustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerProfile}>
                <View style={styles.drawerProfilePic}>
                    <Image

                        source={{
                            uri: 'https://images.unsplash.com/photo-1637436091686-048a80a8a50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                        }}
                        style={{ width: 60, height: 60, borderRadius: 30, }} />

                </View>
                <View style={styles.drawerProfileText}>
                    <Text style={styles.drawerProfileName}>Rakesh Verma</Text>
                    <Text style={styles.drawerProfileNumber}>CR : 123456123</Text>
                </View>

            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CoustomDrawer;

const styles = StyleSheet.create({
    drawerProfile: {
        //    margin:20,
        //    marginLeft:40,
        backgroundColor: '#3cb371',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },

    drawerProfilePic: {

        marginTop: 10,
        // marginLeft:65,
        alignItems: 'center',
    },

    drawerProfileText: {
        alignItems: 'center',

    },


    drawerProfileName: {
        paddingTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },

    drawerProfileNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 10,
    }

})