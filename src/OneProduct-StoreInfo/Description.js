import './Description.css'


function Description(props) {
    return (
      <div className="container_des">
        <div>Thông số và mô tả sản phẩm</div>
        <section>
        <p className="des" style={{paddingTop: '40px'}}> Xuât sứ: {props.origin} </p>
        <p className="des"> Thương hiệu: {props.brand} </p>
        <p className="des"> Kiểu dáng: {props.style}</p>
        <p className="des"> Loại: {props.type} </p>
        <p className="des"> Chất liệu:{props.material} </p>
        <p className="des"> Kích thước: {props.size}</p>
        <p className="des"> Cân nặng: {props.weight}</p>
        <p className="des"> Phụ kiện: {props.accessories}</p>
        <p className="des"> Bảo hành: {props.insurance}</p>
        </section>
       
       </div>
       
    );
  }

  export default Description;