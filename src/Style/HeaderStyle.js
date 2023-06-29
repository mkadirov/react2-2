import { styled } from "styled-components";

const HeaderStyled = styled.header`

   width: 100vw;


   .navBox {

     @media (min-width: 1070px){
        display: none;
     }
   }
   
    #dropdown-basic {

        &:focus {
            border: 0 !important;
        }

    }
    
    /* @media screen and (min-width: 993px) {
        .dropdown:hover .dropdown-menu.show {
        display: block !important;
    } */

    .dropdown .dropdown-menu.show {
        display: none !important;
    }
   
    .dropdown:focus .dropdown-menu.show {
        display: block !important;
    }
    }

    .search-box {
        position: relative;

        .search-icon {
            position: absolute;
            top: 50%;
            left: 10%;
            transform: translate(-50%, -50%);
        }
    }

    

    .themeBtn {
        background-color: #ddd3d3;
        padding: 10px;
        border-radius: 50%;
    }

    .dark {
        background-color: #475569;
        border-bottom: 0 !important;

        .input {
        background-color: #475569;
       .span {
        color: #cbd5e1;
       }
    }
    }
`

export default HeaderStyled;