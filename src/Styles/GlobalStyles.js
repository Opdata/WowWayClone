import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
.noScroll{
    position:fixed;
    overflow-y:scroll;
}
${reset}
`;
