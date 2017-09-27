import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import * as globalStyles from '../styles/global';

const AppText = ({ children, style, ...rest }) => {
    return (
        <Text style={[global.COMMON_STYLES.text, style]} {...rest}>{children}</Text>
    );
};

AppText.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
};

export default AppText;