
# @qudian_mobile/qd-react-native-snap-carousel

## Getting started

`$ npm install @qudian_mobile/qd-react-native-snap-carousel --save`

## Install peer dependency

`$ npm install react-native-snap-carousel --save`


## Usage example
```javascript
import RNWebviewplus from '@qudian_mobile/qd-react-native-snap-carousel';

<Carousel
                bannerList={this.state.bannerList}
                bannerPress={(item, clickIndex) => {
                }}
                containerHeight={Dimensions.W(410)}
                pageIndicatorStyle={styles.pageControlContainer}
                pageActiveIndicatorStyle={styles.active}
                pageInactiveIndicatorStyle={styles.inactive}
                carouselItemStyle={styles.carouselItem}
                sliderWidth={Dimensions.SCREEN_WIDTH}
                itemWidth={Dimensions.W(624.0)}
                itemHeight={Dimensions.W(330)}
                inactiveSlideScale={0.9}
                loop={true}
                autoplay={true}
            />

const styles = StyleSheet.create({
    carouselItem: {
        height: Dimensions.W(330),
        width: Dimensions.W(624),
        borderRadius: Dimensions.W(12),
    },
    pageControlContainer: {
        position: 'absolute',
        bottom: Dimensions.W(58),
        height: Dimensions.W(16),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.SCREEN_WIDTH,
    },
    active: {
        width: Dimensions.W(20),
        height: Dimensions.W(6),
        marginLeft: Dimensions.W(6),
        marginRight: Dimensions.W(6),
        borderRadius: Dimensions.W(3),
        backgroundColor: '#0CC499',
    },
    inactive: {
        width: Dimensions.W(6),
        height: Dimensions.W(6),
        marginLeft: Dimensions.W(6),
        marginRight: Dimensions.W(6),
        borderRadius: Dimensions.W(3),
        backgroundColor: '#FFFFFF',
        opacity: 0.6,
    }
})
```
