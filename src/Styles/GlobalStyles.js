import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`

body{
    overflow-x: hidden;
}
.noScroll{
    position:fixed;
    overflow-y:scroll;
}
${reset}
`;
