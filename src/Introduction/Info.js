import React from 'react';
import './Info.css';

function Info() {
    return (
        <React.Fragment>
        <div className='info' >
        <h1>Về BK MUSI</h1>
        <p>
        BK Music là nhà phân phối nhạc cụ và phụ kiện âm nhạc hàng đầu ở Việt Nam hiện nay. 
        Danh mục sản phẩm của BK Music vô cùng đa dạng từ Guitar, Piano, Kèn, Sáo, Trống, Violin ... 
        tới các Thiết Bị Âm Thanh phục vụ biểu diễn âm nhạc cùng hệ thống Showroom nhạc cụ rộng 
        khắp tại Hà Nội, Hồ Chí Minh và Online Store tiện ích bậc nhất. BK Music vô cùng tự tin cung 
        cấp tới khách hàng các sản phẩm vvà dịch vụ hoàn mỹ làm hài lòng không chỉ các khách hàng 
        nghiệp dư mà cả giới nhạc công, nghệ sỹ chuyên nghiệp.
        <br/>
        Năm 2016 đánh dấu sự nghiệp gần 15 năm đam mê và gắn bó trong cộng đồng âm nhạc của BK Music. 
        Ở thời khắc quan trọng này, BK Music và các cộng sự càng cảm thấy phải quyết tâm, cống hiến 
        hết mình hơn nữa cho sự phát triển của cộng đồng âm nhạc nước nhà. Bởi vì chúng tôi tin 
        rằng âm nhạc gắn liền với đời sống văn hóa xã hội, khi một thứ tốt lên thì mọi thứ khác 
        cũng sẽ trở nên tốt đẹp hơn.
        </p>

        <h1>Đội ngũ phát triển</h1>

        <Person />
        <Person />
        <Person />
        <Person />
        <Person />


        </div>

        <iframe className='map' 
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007837!2d106.65843061460582!3d10.773374292323615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2sHCMUT!5e0!3m2!1sen!2s!4v1635658320762!5m2!1sen!2s'
        loading='lazy' allowFullScreen=''></iframe>
        </React.Fragment>
    );
}

function Person (){
    return (
        <div className='person-info'>
        <img className="person-avartar" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGkvHnw-e8xkeN27LPJn5JJvw4XbIgOM8OEw&usqp=CAU'/>
        <p> Name</p>
        </div>
    );
}

export default Info;