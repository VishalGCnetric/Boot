import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bannerData = [
    {
        title: "OUAI",
        subtitle: "Care for your hair",
        description: "Your one-Ouai ticket to healthy hair. NEW & only at Boots",
        buttonText: "SHOP NOW",
        imageUrl: "https://assets.boots.com/content/dam/boots/shop-by-department/beauty-and-skincare/2023-2024/p9a/no7/jeunesse-2-0/heroes/P13a_Homepage_Hero_No7_FutureRenew_3f2.dam.361x135x1440.ts%3D1723028404171.jpg",
        imageAlt: "Product 1"
    },
    {
        title: "Product 2",
        subtitle: "Subtitle for Product 2",
        description: "Description for Product 2",
        buttonText: "SHOP NOW",
        imageUrl: "https://assets.boots.com/content/dam/boots/homepage/2023-2024/12--august/wc-0508/P13a_0708_Homepage_Hero_Olay_DayCream_HP.dam.361x135x1440.ts%3D1722847787871.jpg",
        imageAlt: "Product 2"
    },
    {
        title: "Product 3",
        subtitle: "Subtitle for Product 3",
        description: "Description for Product 3",
        buttonText: "SHOP NOW",
        imageUrl: "https://assets.boots.com/content/dam/boots/homepage/2023-2024/12--august/wc-0508/P13a_0708_Homepage_Hero_Olay_DayCream_HP.dam.361x135x1440.ts%3D1722847787871.jpg",
        imageAlt: "Product 3"
    },
    {
        title: "Product 4",
        subtitle: "Subtitle for Product 4",
        description: "Description for Product 4",
        buttonText: "SHOP NOW",
        imageUrl: "https://assets.boots.com/content/dam/boots/shop-by-department/beauty-and-skincare/2023-2024/p9a/no7/jeunesse-2-0/heroes/P13a_Homepage_Hero_No7_FutureRenew_3f2.dam.361x135x1440.ts%3D1723028404171.jpg",
        imageAlt: "Product 4"
    }
];

const HomeBannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="relative w-full mx-auto">
            <Slider {...settings}>
                {bannerData.map((banner, index) => (
                    <Banner
                        key={index}
                        title={banner.title}
                        subtitle={banner.subtitle}
                        description={banner.description}
                        buttonText={banner.buttonText}
                        imageUrl={banner.imageUrl}
                        imageAlt={banner.imageAlt}
                    />
                ))}
            </Slider>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: 0 }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: 0 }}
            onClick={onClick}
        />
    );
};

const Banner = ({ title, subtitle, description, buttonText, imageUrl, imageAlt }) => {
    return (
        <div className="flex items-center justify-between bg-gray-100 p-8 rounded-lg">
            <div className="w-1/2">
                <h2 className="text-3xl font-bold">{title}</h2>
                <h3 className="text-xl mt-2">{subtitle}</h3>
                <p className="text-lg mt-4">{description}</p>
                <button className="mt-6 bg-black text-white py-2 px-4 rounded-lg">{buttonText}</button>
            </div>
            <div className="w-1/2">
                <img src={imageUrl} alt={imageAlt} className="rounded-lg" />
            </div>
        </div>
    );
};


export default HomeBannerSlider;
