import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView } from 'react-native';
import { normalize } from '../../utils/dimensions';
import DeviceInfo from 'react-native-device-info';
import backArrow from '../../assets/icons/back/back.png';

isIphoneX = DeviceInfo.hasNotch();

const Header = ({
    title,
    imageUrl,
}) => (
    <View style={styles.headerContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Image source={backArrow} style={styles.leftIcon}/>
    </View>
);

export default Header;

const styles = StyleSheet.create({
    headerContainer:{
        height: normalize(65),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: isIphoneX ? 25 : 0,
        borderBottomWidth: 1,
        borderBottomColor: '#999'
    },
    titleStyle:{
        fontSize: normalize(20),
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    userImageStyle:{
        position: 'absolute',
        right: normalize(10),
        height: normalize(40),
        width: normalize(40),
        borderRadius: normalize(40)/2,
        backgroundColor: 'black'
    },
    leftIcon: {
        position: 'absolute',
        left: normalize(10),
    }
})
