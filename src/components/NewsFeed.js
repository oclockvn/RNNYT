import React, { PropTypes} from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NewsItem from './NewsItem';
import * as globalStyles from '../styles/global';

export default class NewsFeed extends React.Component {
    renderItem({item, index}) {
        return (
            <NewsItem
                style={styles.newsItem}
                index={index}
                {...item} />
        );
    }
    render() {
        return (
            <View style={globalStyles.COMMON_STYLES.pageContainer}>
                <FlatList
                    data={props.news}
                    renderItem={this._renderItem}
                    style={this.props.listStyles} />
            </View>
        );
    }
}

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: View.propTypes.style
};

NewsFeed.defaultProps = {
    news: [
        {
            title: 'React Native',
            imageUrl: 'https://facebook.github.io/react/img/logo_og.png',
            description: 'Build Native Mobile Apps using JavaScript and React',
            date: new Date(),
            author: 'Facebook',
            location: 'Menlo Park, California',
            url: 'https://facebook.github.io/react-native'        
        },
        {
            title: 'Packt Publishing',
            imageUrl: 'https://www.packtpub.com/sites/default/files/packt_logo.png',
            description: 'Stay Relevant',
            date: new Date(),
            author: 'Packt Publishing',
            location: 'Birmingham, UK',
            url: 'https://www.packtpub.com/'           
        }
    ]
};

const styles = StyleSheet.create({
    newsItem: {
        marginBottom: 20
    }
});