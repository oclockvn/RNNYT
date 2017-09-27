import React, { PropTypes } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Title from './Title';

const Thumbnail = ({ url, titleText, accentColor, style }) => {
    const imageStyle = {
        backgroundColor: `${accentColor}77`
    };
    const TitleComponent = <Title style={styles.title}>{titleText}</Title>;

    function renderImage() {
        return (
            <Image style={styles.image} source={{ uri: url }}>
                {TitleComponent}
            </Image>
        );
    }

    function renderWithoutImage() {
        return (
            <View style={[styles.image, imageStyle]}>
                {TitleComponent}
            </View>
        );
    }

    return (
        <View style={[styles.container, { borderColor: accentColor }, style]}>
            {url.length > 0 ? renderImage() : renderWithoutImage()}
        </View>
    );
};

Thumbnail.propTypes = {
    url: PropTypes.string.isRequired,
    titleText: PropTypes.string,
    style: View.propTypes.style,
    accentColor: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 3,
        borderStyle: 'solid'
    },
    image: {
        height: 100,
        justifyContent: 'flex-end'
    },
    title: {
        padding: 5
    }
});

export default Thumbnail;
