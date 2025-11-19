import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Carlos Rivera",
    title: "Logistics Lead, E-Marketplace",
    text: "The best logistics partner we’ve worked with. Seamless integrations and great customer support.",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    name: "Sarah Johnson",
    title: "Supply Manager, RetailCo",
    text: "Always on time and extremely professional. Our go-to for logistics solutions.",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922656.png",
  },
  {
    name: "Anil Mehta",
    title: "Head of Ops, TradeHub",
    text: "Reliable, efficient, and easy to work with. Highly recommended for scaling operations.",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922688.png",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2500, // Faster auto-slide
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
};

const Clientsay = () => {
  return (
    <div className="bg-white px-4 py-10 md:py-16 lg:py-20 flex justify-center">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-green-600 text-xl md:text-2xl font-semibold mb-8">
          What Our Clients Say
        </h2>

        <Slider {...sliderSettings}>
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md px-6 py-8 mx-2"
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <p className="text-gray-700 text-sm md:text-base max-w-md">
                  “{t.text}”
                </p>
                <div className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Clientsay;
