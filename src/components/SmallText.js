import React, { PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';
import AppText from './AppText';

const SmallText = ({ style, children, ...rest }) => {
    return (
        <AppText style={[styles.small, style]} {...rest}>{children}</AppText>
    );
};

SmallText.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
};

const styles = StyleSheet.create({
    small: {
        fontSize: 11
    }
});

export default SmallText;