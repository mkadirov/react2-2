import { styled } from "styled-components";

const MainStyled = styled.main`
    
    .section1 {
        padding-top: 100px !important;

        
        
    }
    .section2 {
        padding-top: 200px;

        p{
            cursor: pointer;
        }
    }
    .section2.dark,
    .section1.dark {
            background-color: #0b1324 !important;
            .grey-300 {
                color: #cbd5e1;
            }

            .s2p {
                color: white;
            } 

            .card {
                background-color:  #475569;
            }
           
        }

    .section4 {
        padding-top: 100px;

        @media (min-width: 992px) {
            padding-top: 200px;
        }
    }
    
    

    .section6 {
        .card-footer {
            position: relative;
        }
        .big-box-img {
            position: absolute;
            width: 90px;
            left: 50%;
            top: 0;
            transform: translate(-50%, -50%);
        }
    }

`

export default MainStyled;