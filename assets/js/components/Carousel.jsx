import React from 'react'
import Slider from "react-slick";

export default class Carousel extends React.Component {
    render(){
        return(
            <Slider {...this.props.settings}>
                {this.props.children}
            </Slider>
        );
    }
}