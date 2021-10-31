import React from "react";
import Title from "../components/title/title";
import { Form } from "react-bootstrap";
import Post from "../components/contactComponents/Posts";
import GoodProduct from "../components/contactComponents/goodproduct";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <div class="container contact">
          <Title title="Liên hệ" />
          <div class="row">
            <div class="col-8 col-md-5 col-lg-4">
              <h4 className="py-3">Thông tin và giới thiệu về cửa hàng</h4>
              <p className="py-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                fugit, odit id corrupti rerum officia quaerat aliquam ea enim!
                Commodi, molestiae fugiat non maiores quas voluptates minus
                recusandae dolores debitis. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloremque cum, odio iste
                consectetur adipisci, dignissimos obcaecati, beatae voluptatum
                deleniti possimus praesentium vel voluptate blanditiis quibusdam
                mollitia corporis maiores est id? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error eveniet voluptatem eum,
                atque, quisquam enim laudantium nostrum quo aspernatur assumenda
                aliquid reiciendis impedit odit veniam iste earum, quos itaque!
                Officiis! Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Nostrum similique, beatae et iure labore laborum
                blanditiis deleniti, tempore molestias at dolorem sint est
                ratione expedita enim tempora hic corrupti cum! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Laboriosam impedit
                aut ea unde ratione. Unde temporibus eligendi ullam saepe
                praesentium voluptatem autem alias perferendis esse, mollitia
                quae aspernatur officia commodi.
              </p>
            </div>
            <div class="col-8 col-md-5 col-lg-4 ctcol2">
              <h5 className="py-3">
                Nếu quý khách có thắc mắc gì xin vui lòng liên hệ với cửa hàng
              </h5>
              <Form className="info">
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control type="email" placeholder="Họ và tên" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Địa chỉ Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control type="email" placeholder="Số điện thoại" />
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                  <Form.Label>Tiêu đề</Form.Label>
                  <Form.Control type="email" placeholder="Tiêu đề" />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Nội dung</Form.Label>
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>
              </Form>
            </div>
            <div class="col-8 col-md-5 col-lg-4 ctcol3">
              <div class="row">
                <h3>Bài viết nổi bật</h3>
                <div class="col-8 col-md-5 col-lg-9 posts">
                  <Post />
                </div>
                <h3>Sản phẩm nổi bật</h3>
                <div class="col-8 col-md-5 col-lg-9 items">
                  <GoodProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
