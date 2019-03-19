import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';

const SLIDER_1_FIRST_ITEM = 1;

export default class QDCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: props.bannerList,
            activeSlide: props.bannerList && props.bannerList.length > 1 ? SLIDER_1_FIRST_ITEM : 0,
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            list: props.bannerList,
            activeSlide: props.bannerList && props.bannerList.length > 1 ? SLIDER_1_FIRST_ITEM : 0,
        })
    }

    static propTypes = {
        containerHeight: PropTypes.number.isRequired,
        bannerList: PropTypes.array.isRequired,
        bannerPress: PropTypes.func,
        pageIndicatorStyle: PropTypes.number,
        pageActiveIndicatorStyle: PropTypes.number,
        pageInactiveIndicatorStyle: PropTypes.number,
        carouselItemStyle: PropTypes.number.isRequired,
    }

    static defaultProps = {
        bannerList: [],
        bannerPress: (item, clickIndex) => {},
    }

    _renderCarouselItem = ({ item, index }) => (
        <TouchableWithoutFeedback onPress={() => {
            this.props.bannerPress(item, this.state.activeSlide);
        }}>
            <Image source={{ uri: item.image }} style={this.props.carouselItemStyle} />
        </TouchableWithoutFeedback>
    )

    _renderPageControl = () => {
        const select = this.state.activeSlide;
        const length = this.state.list.length;
        const items = [];
        for (let i = 0; i < length; i++) {
            items.push(
                <View
                    style={select === i ? this.props.pageActiveIndicatorStyle : this.props.pageInactiveIndicatorStyle}
                    key={`carousel_item${i}`}
                />
            )
        }
        return (
            <View style={this.props.pageIndicatorStyle}>
                {items}
            </View>
        )
    }

    render() {
        return (
            <View style={{ height: this.props.containerHeight }}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.list}
                    renderItem={this._renderCarouselItem}
                    sliderWidth={this.props.sliderWidth}
                    itemWidth={this.props.itemWidth}
                    itemHeight={this.props.itemHeight}
                    inactiveSlideScale={this.props.inactiveSlideScale}
                    loop={this.props.loop}
                    autoplay={this.props.autoplay}
                    firstItem={SLIDER_1_FIRST_ITEM}
                    contentContainerCustomStyle={styles.carousel}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                {this._renderPageControl()}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    carousel: {
        alignItems: 'center',
    },
});