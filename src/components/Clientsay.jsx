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
  speed: 600,
  autoplay: true,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  pauseOnHover: true,
};

const Clientsay = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 px-6 py-16 flex justify-center">
      <div className="w-full max-w-3xl text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 drop-shadow-sm mb-10">
          What Our Clients Say
        </h2>

        {/* Slider */}
        <Slider {...sliderSettings}>
          {testimonials.map((t, index) => (
            <div key={index}>
              <div className="bg-white rounded-3xl shadow-lg px-8 py-10 mx-4 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl border border-green-50">
                <div className="flex flex-col items-center gap-5">
                  
                  {/* Image */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-20 h-20 rounded-full shadow-md border-2 border-green-300 p-1"
                  />

                  {/* Text */}
                  <p className="text-gray-700 text-lg italic max-w-xl leading-relaxed">
                    “{t.text}”
                  </p>

                  {/* Name & Title */}
                  <div className="mt-2">
                    <p className="font-bold text-lg text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.title}</p>
                  </div>
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
