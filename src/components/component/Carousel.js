import React from "react";
import Slider from "react-slick";
// // Carousel images
import img_1 from '../../assets/images/carousel/99.jpg';
import img_2 from '../../assets/images/carousel/22.jpg';
import img_3 from '../../assets/images/carousel/33.jpg';
import img_4 from '../../assets/images/carousel/44.jpg';
import img_5 from '../../assets/images/carousel/55.jpg';
import img_6 from '../../assets/images/carousel/66.jpg';
import img_7 from '../../assets/images/carousel/77.jpg';

export default function Carousel() {
    const settings = {
        arrows: true,
        dots: true,
        autoplay: true,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const slides = [
        {
            title: "Continuous sliders",
            discription: "Sliders reflect a range of values along a bar, from which users may select a single value They are ideal for adjusting settings such as volume, brightness, or applying image filters",
            img: img_1,
        },
        {
            title: "Continuous sliders",
            discription: "Sliders reflect a range of values along a bar, from which users may select a single value They are ideal for adjusting settings such as volume, brightness, or applying image filters",
            img: img_2,
        },
        {
            title: "Continuous sliders",
            discription: "Sliders reflect a range of values along a bar, from which users may select a single value They are ideal for adjusting settings such as volume, brightness, or applying image filters",
            img: img_3,
        },
        {
            title: "Continuous sliders",
            discription: "Sliders reflect a range of values along a bar, from which users may select a single value They are ideal for adjusting settings such as volume, brightness, or applying image filters",
            img: img_4,
        },
        {
            title: "Continuous sliders",
            discription: "Sliders reflect a range of values along a bar, from which users may select a single value They are ideal for adjusting settings such as volume, brightness, or applying image filters",
            img: img_5,
        },
        {
            title: "Continuous sliders",
            discription: "Sliders reflect a range of values along a bar, from which users may select a single value They are ideal for adjusting settings such as volume, brightness, or applying image filters",
            img: img_6,
        },
        {
            title: "Continuous sliders",
            discription: "Sliders reflect a range of values along a bar, from which users may select a single value They are ideal for adjusting settings such as volume, brightness, or applying image filters",
            img: img_7,
        },
    ]
    return (
      <div>
        <Slider {...settings}>
            {slides.map((item, index) => (
                <div className="slide-item" key={index}>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </Slider>
      </div>
    );
}