import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonialData from "../data/testimonialData";

function TestimonialSlider() {
  return (
    <div className="p-4">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-medium text-blue-950">
         Assista <span className="text-orange-500">testemunho</span> de jovens que aceitarama a ajuda da <span className="bg-gradient-to-r from-orange-400 to-green-400 text-transparent bg-clip-text font-bold ">Kutchindja</span>.
        </h2> 
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonialData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col h-full">
              <img
                src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                alt={item.titulo}
                className="h-48 w-full object-cover"
              />
              <div className="flex justify-end -mt-6 pr-4 z-10">
                <button className="bg-purple-600 text-white px-4 py-1 rounded-full shadow-md text-sm">
                  ▶ Watch
                </button>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-md font-semibold text-gray-900">
                  {item.titulo}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{item.autor}</p>
                <p className="text-sm text-gray-500 flex-grow">
                  {item.descricao}
                </p>

                <div className="flex justify-between items-center mt-4 text-xs text-gray-500">
                  <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded">
                    {item.plataforma}
                  </span>
                  <span>⏳ {item.duracao}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialSlider;
