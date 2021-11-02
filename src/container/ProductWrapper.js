import styled from "styled-components";

export const ProductWrapper = styled.div`
    .card-footer {
        border-top: transparent;
        background-color: white;
    }
    .card-footer p {
        font-size: 20px;
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
            color: #ffdd00;
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
        background-color: #ffdd00;
        border: 1px white solid;
        color: white;
        transform: translate(100%, 100%);
        font-size: 30px
    }
    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }  
    .card-img-top {
        width: 100%;
        height: 200px;
    }
    .img-container {
        position: relative;
        overflow: hidden;
    }
    .link {
        text-decoration: none;
    }
    .card {
        height: 400px;
        width: 300px;
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
    height: 200px;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .link {
    text-decoration: none;
  }
  .card {
    height: 400px;
    width: 300px;
  }
  .card li {
    border: none;
  }
`;

export const ExProductWrapper = styled(ProductWrapper)`
  display: inline-block;
  margin-right: 40px;
  width: 300px;
  height: 400px; 
`