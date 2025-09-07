import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import SectionHead from "./SectionHead";
import testimonials from "../../assets/data/testimonials";
import { FaLinkedinIn } from "react-icons/fa";
const TestimonialsStyle = styled.section`
  width: 100vw;
  height: 38vh;
  padding: 4vh 15vw;
  text-align: center;

  article {
    line-height: 1.7;
    p {
      padding: 0.5vh 6vw;
    }
    a {
      color: var(--usafa-blue);
      line-height: 3;
      :hover {
        color: var(--shimmering-blush);
      }
      svg {
        margin: -2px 7px;
        font-size: 0.85rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    //mobile&tablet
    height: 65vh;
  }
  @media only screen and (min-width: 768px) and (max-width: 1100px) {
    //tablet
    padding: 2vh 2vw;
    height: 35vh;
  }
`;

const Testimonials = () => {
  return (
    <TestimonialsStyle>
      <SectionHead text="people say about me..." cherry />
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <article>
              <p>{testimonial.text}</p>
              <a href={testimonial.linkedin}>
                <FaLinkedinIn />
                {testimonial.name}
              </a>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </TestimonialsStyle>
  );
};

export default Testimonials;
