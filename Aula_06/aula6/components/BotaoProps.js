import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const BotaoProps = ({ label, corfundo, msg}) => {

    const botaoStyle = {
        backgroundColor:corfundo,
        padding: 10,
        borderRadius: screen,
    };
    const handlePress = () => {
        console.log(msg);
    };

    return (
        <TouchableOpacity onPress={handlePress} style={botaoStyle}>
            onPress{handlePress}
            style={botaoStyle}>
            T
            
        </TouchableOpacity>
    );
};
export default BotaoProps;