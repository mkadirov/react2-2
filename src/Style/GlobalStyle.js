import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
   
   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
   }

   .list-unstyled {

        display: flex;
        flex-direction: column;

       
   }

   .light-dark {
                color: #94a3b8
            }

   .orange {
    color: coral
   }

   .btn-block {
    width: 100%;
   }

   .btn-prime {
        background-color: #754ffe;
        color: white;
        font-weight: 500;

        &:hover {
            background-color:#754ffe;
        }
    }

    .bg-gray-300 {
        background-color: #e2e8f0 !important;
    }

   
    .mb-10 {
        margin-bottom: 100px;
    }

    .display-7 {
        font-size: 20px;
    }

    .imgRounded {
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

    .white-text {
            color: white;
    }
    
    .bg-dark-gray {
        background-color: #475569;
    }

    .bg-darker-gray {
        background-color: #1e293b;
    }

    .py-8 {
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .py-16 {
        padding-top: 160px;
        padding-bottom: 160px;
    }

    .dark-theme {
        background-color: #0b1324
    }

    .accordion, .accordItem ,
    .accordHeader, .accordBody,.accordion-button {
        background-color: inherit !important;
        color: #94a3b8;
    }

    .nav a{
        text-decoration: none;
        color: black;
        margin-bottom: 10px;

       
    }

    .nav.darkMode a {
        color: white;
    }

    footer {
        a {
            &:hover{
                color:#754ffe !important;
            }
        }
    }

    

`

export default GlobalStyle;