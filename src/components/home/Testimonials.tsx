import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import SectionHead from "./SectionHead";
import testimonials from "../../assets/data/testimonials";
import { FaLinkedinIn } from "react-icons/fa";

const Testimonials = () => {
  console.log(testimonials);
  return (
    <section className="w-screen my-[4vh] text-center md:h-[30vh]  sm:h-[50vh] mb-[5dvh]">
      <SectionHead text="people say about me..." />
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <article className="leading-[1.7]">
              <p className="py-[0.5vh] px-[6vw]">{testimonial.text}</p>
              <a
                href={testimonial.linkedin}
                className="text-secondary leading-[3] hover:text-white"
              >
                {testimonial.name}
              </a>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="btn bg-[#0072b1] hover:bg-[#0072b1]/80 text-primary border-none my-5">
        <FaLinkedinIn className="-mt-[2px] mx-[7px] text-[0.85rem]" />
        <a href="https://www.linkedin.com/in/paulineholm/">
          Visit my LinkedIn profile
        </a>
      </button>
    </section>
  );
};

export default Testimonials;
