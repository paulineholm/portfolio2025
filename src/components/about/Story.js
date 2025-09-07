import styled from "styled-components";
import SectionHead from "../home/SectionHead";
const StoryStyle = styled.section`
  width: 100vw;
  text-align: center;
  padding: 0.5vh 4vw 4.5vh;
  @media only screen and (max-width: 768px) {
    //mobile&tablet
    iframe {
      width: 75vw;
    }
  }
`;
const Story = () => {
  return (
    <StoryStyle>
      <SectionHead cherry={true} text="my story (ENG subtitles)" />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SxzGH24pO0w"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </StoryStyle>
  );
};

export default Story;
