import { createGlobalStyle } from "styled-components";
import RobotoRegular from "../fonts/Roboto-Regular.ttf";
import RobotoLight from "../fonts/Roboto-Light.ttf";
import RobotoThin from "../fonts/Roboto-Thin.ttf";
import RobotoRegularIt from "../fonts/Roboto-Italic.ttf";
import RobotoLightIt from "../fonts/Roboto-LightItalic.ttf";
import RobotoThinIt from "../fonts/Roboto-ThinItalic.ttf";
import LoraRegular from "../fonts/Lora-Regular.ttf";
import LoraRegularIt from "../fonts/Lora-Italic.ttf";
import LoraMedium from "../fonts/Lora-Medium.ttf";
import LoraMediumIt from "../fonts/Lora-MediumItalic.ttf";
const GlobalStyles = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}
// fonts
@font-face {
    font-family: 'Roboto Regular';
    src: url(${RobotoRegular});
    font-style: normal;
}
@font-face {
    font-family: 'Roboto Light';
    src: url(${RobotoLight});
    font-style: normal;
}
@font-face {
    font-family: 'Roboto Thin';
    src: url(${RobotoThin});
    font-style: normal;
}
@font-face {
    font-family: 'Lora Regular';
    src: url(${LoraRegular});
    font-style: normal;
}
@font-face {
    font-family: 'Lora Medium';
    src: url(${LoraMedium});
    font-style: normal;
}
// italic fonts
@font-face {
    font-family: 'Roboto Italic';
    src: url(${RobotoRegularIt});
    font-style: italic;
}
@font-face {
    font-family: 'Roboto Light Italic';
    src: url(${RobotoLightIt});
    font-style: italic;
}
@font-face {
    font-family: 'Roboto Thin Italic';
    src: url(${RobotoThinIt});
    font-style: italic;
}
@font-face {
    font-family: 'Lora Italic';
    src: url(${LoraRegularIt});
    font-style: italic;
}
@font-face {
    font-family: 'Lora Medium Italic';
    src: url(${LoraMediumIt});
    font-style: italic;
}
:root{
    --usafa-blue: #2B50AA;
    --cherry-blossom-pink: #da627d;
    --shimmering-blush: #FFA5AB;
    --teal: #2F9D99;
    --baby-powder:#FDFFF7;
    /* Origin
    --usafa-blue: #004E98;
    --cherry-blossom-pink: #FBAEC0;
    --shimmering-blush: #DB8592;
    --teal: #218380;
    --baby-powder:#FDFFF7;
    --mat-black: #272727; */
    --body-text: 15px;
    --body-height:25px;
    --small-head:16px;
    --small-line-height:1.1;
    --medium-head: 24px;
    --medium-line-height:1.1;
    --regular-head: 36px;
    --regular-spacing:0.075em;
    --regular-line-height:1.1;
}
img{
    max-width:100%;
}
html{
    font-size: 15px;
    color:#272727;
    background-color:var(--baby-powder);
    font-family:'Roboto Regular';
}
ul,li{
    list-style: none;
}
a{
    text-decoration: none;
}
h1{
    font-size:var(--regular-head);
    letter-spacing:var(--regular-spacing);
    line-height:var(--regular-line-height);
    color:var(--cherry-blossom-pink);
    line-height:1.4;
}
h2{
    font-size:var(--medium-head);
    line-height:var(--medium-line-height);
    color:var(--shimmering-blush);
    line-height:1.5;
    font-family:'Roboto Light';
}
h3{
    font-size:var(--small-head);
    line-height:var(--small-line-height);
    color:var(--teal);
    line-height:1.5;
    font-family:'Roboto Light';
}
`;
export default GlobalStyles;
