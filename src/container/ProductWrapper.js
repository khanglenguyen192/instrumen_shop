import styled from "styled-components";

export const ProductWrapper = styled.div`
    .card-footer {
        border-top: transparent;
    }
    .card-footer p {
        font-size: 15px;
    }
    .card-footer h5 {
        color: red;
        font-size: 17px; 
    }
    .card-footer p:hover {
        color: blue;
    }
    .card:hover {
        border: 0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
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
`