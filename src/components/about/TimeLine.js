import styled from "styled-components";
import { Chrono } from "react-chrono";
import { useState, useEffect } from "react";
const TimeLineStyle = styled.section`
  background: var(--shimmering-blush);
  width: 100vw;
  padding-left: 4vw;
  padding-right:4vw;
  text-align: center;
  color: white;
  line-height: 1.5;
  .horizontal{
    bottom:none;
    left:none;
    top:0;
  }
  #timeline-main-wrapper{
    height:25vh;
  }
  .timeline-controls{
    display:none ;
  }
  #react-chrono-timeline{
    display:none;
  }
  .timeline-horizontal-container{
    width:90vw;
    justify-content:space-evenly;
  }
  .timeline-item-title{
    margin-top:4rem;
    font-weight:300;
    font-size:1rem;
    font-family:"Roboto Light";
  }
  }
  p{
    font-weight: 700;
    padding-bottom:1.5rem;
    a{
      color:var(--usafa-blue);
      :hover{
        color:var(--cherry-blossom-pink);
      }
    }
  }
  @media only screen and (max-width: 1200px) {
    //mobile&tablet
    .divMobile{
      padding: 2.5rem;
      font-family:"Roboto Light";
    }
  }
`;
const TimeLine = () => {
  const items = [
    {
      title: "May 2016: High-school graduation 🎓",
    },
    {
      title: "June 2016: Moving to Denmark 🇩🇰",
    },
    {
      title: "January 2020: PBA in Innovation and Entrepreneurship 💼",
    },
    {
      title: "March 2022: Educated as Web developer 👩‍💻",
    },
    {
      title: "2022: Masters in IT, learning and organisational change 👩‍🏫",
    },
    {
      title: "2023: Student Frontend Developer at DFDS 👩‍🏫",
    },
  ];
  const [mobileViewport, setMobileViewport] = useState(
    window.innerWidth < 1200
  );
  //console.log(mobileViewport);
  //mobile&tablet
  const updateViewport = () => {
    setMobileViewport(window.innerWidth < 1200);
  };
  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);
  return (
    <TimeLineStyle>
      {mobileViewport ? (
        <div className="divMobile">
          {items?.map((item) => (
            <p>{item.title}</p>
          ))}
        </div>
      ) : (
        <Chrono
          items={items}
          theme={{
            primary: "var(--cherry-blossom-pink)",
            secondary: "none",
            titleColor: "var(--baby-powder)",
            titleColorActive: "var(--baby-powder)",
          }}
          mode="HORIZONTAL"
        />
      )}

      <p>
        Curious? see my{" "}
        <a href="https://www.linkedin.com/in/paulineholm/">LinkedIn</a> for more
        details
      </p>
    </TimeLineStyle>
  );
};

export default TimeLine;
