import React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import { normalize } from '../../utils/dimensions';

const InputText = ({
    testID = 'input-text',
    placeholder = '',
    title,
    textValue,
    onChangeText,
    maxLength = 50,
    contanerStyle = null,
}) => (
    <View style={[styles.contaner, contanerStyle]}>
        <Text style={styles.titleStyel}>
            {title}
        </Text>
        <TextInput
        style={styles.inputTextStyle}
          testID={testID}
          value={textValue}
          underlineColorAndroid="transparent"
          onChangeText={onChangeText}
          maxLength={maxLength}
          placeholder={placeholder}
        />
    </View>
);

export default InputText;

const styles = StyleSheet.create({
    contaner: {
        flexDirection: 'row',
    },
    titleStyel: {
        flex:1,
        fontSize: normalize(18),
        fontWeight: 'bold',
        color: '#333'
    },
    inputTextStyle: {
        flex:1,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        color: '#999',
        fontSize: normalize(18),
        paddingBottom: normalize(7)
    }
})
