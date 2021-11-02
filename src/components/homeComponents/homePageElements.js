import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const AdContainer = styled.div`
  margin-top: 40px;
`;
export const AdContainerRow = styled.div`
  display: flex;
  height: 300px;
`;

export const ListWrapper = styled.div`
  margin: 40px 0 40px 0;
  padding: 0 20px 10px 10px;
  background-color: #ededed;
  border-radius: 10px;
`;

export const ListTitle = styled.p`
  font-weight: bold;
  font-size: 36px;
  margin: auto 0 -20px 0;
  padding: 0;
`;

export const ListLink = styled(Link)`
  font-size: 18px;
  color: #000;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    color: #000;
  }

  &.active {
    font-size: 20px;
    color: #fff;
    background: #000;
    transform: translateY(0px);
  }
`;
