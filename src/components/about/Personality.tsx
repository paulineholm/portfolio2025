import styled from "styled-components";
import Traits from "../../assets/img/personalitycloud.png";
const PersonalityStyle = styled.section`
  display: flex;
  flex-direction: column;
  img {
    width: 50vw;
    margin-left: 30vw;
    margin-right: 30vw;
    padding: 6vh 4vw;
  }
  @media only screen and (max-width: 768px) {
    //mobile
    img {
      width: 70vw;
      margin-left: 15vw;
      margin-right: 15vw;
      padding: 4.5vh 1.5vw;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 1100px) {
    //tablet
    img {
      width: 65vw;
      margin-left: 17.5vw;
      margin-right: 17.5vw;
      padding: 4.5vh 1.5vw;
    }
  }
`;
const Personality = () => {
  return (
    <PersonalityStyle>
      <img src={Traits} alt="Personality Traits" />
    </PersonalityStyle>
  );
};

export default Personality;
