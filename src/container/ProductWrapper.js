import styled from "styled-components";

export const ProductWrapper = styled.div`
    .card-footer {
        border-top: transparent;
        background-color: white;
    }
    .card-footer p {
        font-size: 15px;
    }
    .card-footer h5 {
        color: red;
        font-size: 17px; 
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            background-color: rgba(247, 247, 247);
        }
        .card-footer p {
            color: blue;
        }
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: #0589f3;
        border: 1px black solid;
        color: white;
        transform: translate(100%, 100%);
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }  
    .card-img-top {
        width: 100%;
        height: 25vh;
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .link {
        text-decoration: none;
    }
    .card {
        height: 50vh;
    }
    .card li {
        border: none;
    }
`