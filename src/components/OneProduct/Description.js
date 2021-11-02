import {DesContainer, Des, Title} from "./DescriptionElement";

  function Description(props) {
    return (
      <DesContainer>
        <Title>Thông số và mô tả sản phẩm</Title>
        <Des> Xuât sứ: {props.origin} </Des>
        <Des>  Thương hiệu: {props.brand} </Des>
        <Des>  Kiểu dáng: {props.style}</Des>
        <Des>  Loại: {props.type} </Des>
        <Des>  Chất liệu:{props.material} </Des>
        <Des>  Kích thước: {props.size}</Des>
        <Des>  Cân nặng: {props.weight}</Des>
        <Des>  Phụ kiện: {props.accessories}</Des>
        <Des>  Bảo hành: {props.insurance}</Des>
       
       </DesContainer>
       
    );
  }

  export default Description;