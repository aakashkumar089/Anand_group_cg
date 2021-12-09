import React from 'react';
import { View, ScrollView, StyleSheet, Image, StatusBar, TouchableOpacity, Text, SafeAreaView, Button } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsFocused } from '@react-navigation/native';
import Unorderedlist from 'react-native-unordered-list';



function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();

    return isFocused ? <StatusBar {...props} /> : null;
}

export default function PersonalComplaint() {
    return (

        <SafeAreaView style={[styles.container, { backgroundColor: 'white' }]} >

            <FocusAwareStatusBar barStyle="light-content" backgroundColor="#ff8c00" />


            <ScrollView>

                <View style={styles.noticeBoard}>

                    <Text style={styles.NoticeBoardText}>Personal</Text>

                    <TouchableOpacity>
                        <View style={styles.notice}>

                            <View>

                                <Text style={styles.PerosnalTicket}>Ticket ID:SC-317845</Text>

                                <View style={styles.Presentstatus}>
                                    <Text style={styles.Presentstatus}> open</Text>
                                </View>


                            </View>

                            <Unorderedlist bulletUnicode={0x2022} color='green'>
                                <Text style={styles.DateText}>Saturday ,October 23, 11.36 AM</Text>
                            </Unorderedlist>

                            <Text style={styles.NoticeText}>Others</Text>

                            <Text style={styles.NoticeDetailsText}>Society maintenance part paymment of Rs 40000/- done</Text>
                            <Text style={styles.NoticeDetailsTextMore}> More...</Text>
                            
                            <View style={styles.ComplainAssigneeWing}>
                            <Text>A-wing-007</Text>
                            </View>
                            <Text style={styles.ComplainAssignee}> Assignee</Text>
                            <Text style={styles.ComplainAssignee}> Shrikant</Text>


                        </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                        <View style={styles.notice}>

                            <View>

                                <Text style={styles.PerosnalTicket}>Ticket ID:SC-317845</Text>

                                <View style={styles.Presentstatus}>
                                    <Text style={styles.Presentstatus}> open</Text>
                                </View>


                            </View>

                            <Unorderedlist bulletUnicode={0x2022} color='green'>
                                <Text style={styles.DateText}>Saturday ,October 23, 11.36 AM</Text>
                            </Unorderedlist>

                            <Text style={styles.NoticeText}>Dengu Survey</Text>

                            <Text style={styles.NoticeDetailsText}>Please be informed, MBMC representative will be visiting soon</Text>
                            <Text style={styles.NoticeDetailsTextMore}> More...</Text>
                            <Text style={styles.ComplainAssignee}> Assignee</Text>
                            <Text style={styles.ComplainAssignee}> Shrikant</Text>


                        </View>
                        </TouchableOpacity>



                </View>

            </ScrollView>

        </SafeAreaView>


    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff8dc',

        //backgroundColor: '#ffcc80',
    },

    noticeBoard: {
        margin: 2,

    },

    notice: {
        backgroundColor: '#fffaf0',
        padding: 10,
        borderColor: '#fff8dc',
        // margin: 10,
        borderWidth: 2,
        elevation: 15,
        marginVertical: 5,
        // shadowRadius: 10,
        shadowOpacity: 0.5,
        borderRadius: 5,

    },
    header: {

        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,



    },

   


    mob_no: {
        fontSize: 16,
        marginLeft: 7,
        padding: 3

    },

    address: {
        fontSize: 16,
        marginLeft: 7,
        padding: 3

    },
    text_header: {
        color: '#ff8c00',
        fontWeight: 'bold',
        fontSize: 16,

    },
    hairline: {
        backgroundColor: '#778899',
        height: 3,
        width: '100%',


    },

    hairline_SubIcon: {
        backgroundColor: '#dcdcdc',
        height: 1,
        width: '66%',
        alignSelf: 'flex-end',
        borderRadius: 30,
    },

    profileText: {
        marginTop: 5,
        marginLeft: 35,
    },

    iconDetails: {
        flexDirection: 'row',
        // margin: 5,
        marginLeft: 50,
    },


    subIconsText: {
        // marginLeft: 10,
        // marginTop: 8,
        fontSize: 14,
        padding: 2,
        color: '#ff8c00',
        // paddingBottom:5,

    },
    DateText: {
        fontSize: 10,
        marginTop: 2,
        color: 'green',
    },


    NoticeBoard: {
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 30,
        borderColor: 'orange',
        paddingBottom: 5,
        borderWidth: 2,

    },
    NoticeText: {
        fontWeight: 'bold',
        marginLeft: 8,
        fontSize: 13,
    },

    NoticeDetailsText: {
        marginLeft: 8,
        fontSize: 13,
        color: '#808080',
        marginTop: 8,
    },

    NoticeDetailsTextMore: {
        color: 'green',
        marginRight: 12,
        // marginTop: 10,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',

    },
    services: {
        width: 40,
        height: 40,
        marginTop: 8,
        marginLeft: 10,
    },

    noticeImage: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: 10,
    },
    NoticeBoardText: {
        margin: 10,

    },
    PerosnalTicket: {
        fontSize: 10,
        color: 'black',
        marginLeft: 8,
    },

    Presentstatus: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontSize: 10,
        color: 'red',



    },
    status: {
        fontSize: 5,
        // flexDirection: 'row',
        // flexWrap: 'wrap',

    },
    ComplainAssigneeWing:{
        marginLeft: 8,
        alignSelf:'flex-start',
        flexDirection:'row',
        // marginTop:10,
    },
    ComplainAssignee: {
        marginLeft: 8,
        justifyContent:'flex-end',
        flexDirection:'row',
        alignSelf:'flex-end',

    },

});

