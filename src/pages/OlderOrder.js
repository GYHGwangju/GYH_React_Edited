import React, { useState } from 'react';
import './OlderOrder.css'
import { Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Pic from '../assets/images/americano.jpg';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './addModal.js';

const OlderOrder = () => {

    const navigate = useNavigate();

    const [orderList, setOrderList] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [modalShow, setModalShow] = useState(false);
    const [currentOrder, setCurrentOrder] = useState({})

    const handleConfirm = () => {
        navigate("/purchase");
    }

    const handleClear = () => {
        setOrderList([]);
        setTotalPrice(0);
    }

    const handleOpen = (data) => {
        setCurrentOrder(data);
        setModalShow(true);
    }

    const handleAdd = (data) => {
        const idx = orderList.findIndex((order) => order.id === data.id);
        if (idx !== -1) {
            const newOrderList = [...orderList];
            newOrderList[idx].count += 1;
            setOrderList(newOrderList);
        } else {
            setOrderList([...orderList, { ...data, count: 1 }]);
        }
        setTotalPrice(totalPrice + data.price);
    }

    const getOrderCount = () => {
        let count = 0;
        orderList.forEach((order) => {
            count += order.count;
        });
        return count;
    }

  return (
    <div>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">ABC 카페 키오스크</span>
          <button
            type="button"
            className="btn btn-success call-staff"
            data-bs-toggle="modal"
            data-bs-target="#callStaff"
          >
            직원 호출
          </button>
        </div>
      </nav>

      <div
        className="modal fade"
        id="callStaff"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                직원 호출
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              키오스크 사용이 어려우신가요? 직원이 도와드리겠습니다!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                닫기
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                data-bs-target="#calledStaff"
              >
                직원 호출
              </button>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column" style={{position:'relative', top:'100px'}}>
                                <li className="nav-item">
                                    <button className="btn btn-primary nav-link" style={{ fontSize: '48pt' , width:'250px', height:'300px'}}>인기</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-warning nav-link" style={{ fontSize: '48pt' , width:'250px', height:'300x'}}>음료</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-success nav-link" style={{ fontSize: '48pt' , width:'250px', height:'300px'}}>디저트</button>
                                </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="accordion" id="accordionExample" style={{ position: 'absolute', left: '17%', top: '15%', width: '54%' }}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{ fontSize: 'xx-large' }}
            >
              커피
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ height: '450px' }}>
              <div className="container">
                <div className="row" style={{ width: '1000px', float: 'left', marginRight: '2%', marginBottom: '2%' }}>
                  <div className="col-md-4">
                    <a href="카드1의 링크">
                      <div className="card">
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Image cap"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                            Image cap
                          </text>
                        </svg>
                        <div className="card-body">
                          <h3 className="card-title">아메리카노</h3>
                          <p className="card-text" style={{ textAlign: 'center', fontSize: 'x-large' }}>
                            에스프레소를 희석시킨 음료
                          </p>
                          <h4 style={{ color: 'red' }}>3,000￦</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="카드2의 링크">
                      <div className="card">
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Image cap"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                            Image cap
                          </text>
                        </svg>
                        <div className="card-body">
                          <h3 className="card-title">카페라떼</h3>
                          <p className="card-text" style={{ textAlign: 'center', fontSize: 'x-large' }}>
                            커피에 우유를 탄 음료
                          </p>
                          <h4 style={{ color: 'red' }}>3,500￦</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="카드3의 링크">
                      <div className="card">
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Image cap"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                            Image cap
                          </text>
                        </svg>
                        <div className="card-body">
                          <h3 className="card-title">바닐라라떼</h3>
                          <p className="card-text" style={{ textAlign: 'center', fontSize: 'x-large' }}>
                            바닐라 시럽을 섞은<br />
                            카페라떼
                          </p>
                          <h4 style={{ color: 'red' }}>3,700￦</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ fontSize: 'xx-large' }}
            >
              논커피
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{ height: '450px' }}>
              <div className="container">
                <div className="row" style={{ width: '1000px', float: 'left', marginRight: '2%', marginBottom: '2%' }}>
                  <div className="col-md-4">
                    <a href="카드1의 링크">
                      <div className="card">
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Image cap"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                            Image cap
                          </text>
                        </svg>
                        <div className="card-body">
                          <h3 className="card-title">초코라떼</h3>
                          <p className="card-text" style={{ textAlign: 'center', fontSize: 'x-large' }}>
                            초코 시럽을<br />
                            섞은 라떼
                          </p>
                          <h4 style={{ color: 'red' }}>3,500￦</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="카드2의 링크">
                      <div className="card">
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Image cap"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                            Image cap
                          </text>
                        </svg>
                        <div className="card-body">
                          <h3 className="card-title">그린티라떼</h3>
                          <p className="card-text" style={{ textAlign: 'center', fontSize: 'x-large' }}>
                            녹차와 우유의<br />
                            조화
                          </p>
                          <h4 style={{ color: 'red' }}>3,800￦</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4">
                    <a href="카드3의 링크">
                      <div className="card">
                        <svg
                          className="bd-placeholder-img card-img-top"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Placeholder: Image cap"
                          preserveAspectRatio="xMidYMid slice"
                          focusable="false"
                        >
                          <title>Placeholder</title>
                          <rect width="100%" height="100%" fill="#868e96"></rect>
                          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                            Image cap
                          </text>
                        </svg>
                        <div className="card-body">
                          <h3 className="card-title">밀크티</h3>
                          <p className="card-text" style={{ textAlign: 'center', fontSize: 'x-large' }}>
                            우유와 홍차의<br />
                            완벽한 조화
                          </p>
                          <h4 style={{ color: 'red' }}>3,700￦</h4>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bd-example m-0 border-0 order-list">
                <table className="table table-striped" style={{ fontSize: 'large' , position:'absolute', top:'10%',left:'72%' , width:'28%' }}>
                    <thead>
                        <tr>
                            <th scope="col" className="menu-column">메뉴</th>
                            <th scope="col" className="quantity-column">수량</th>
                            <th scope="col" className="price-column">가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderList.map((order, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <button className="btn btn-danger me-2" type="button" >삭제</button> 
                                        <span>{order.name}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="input-group">
                                        <button className="btn btn-outline-secondary" type="button">-</button>
                                        <input type="text" className="form-control" value={order.count} disabled />
                                        <button className="btn btn-outline-secondary" type="button" >+</button>
                                    </div>
                                </td>
                                <td>{order.price * order.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="card text-bg-primary mb-3 order-price" style={{position:'relative', top:'281px',left:'74%' , width:'26%' }}>
                <ul className="list-group list-group-flush" style={{ fontSize: 'x-large' }}>
                    <li className="list-group-item d-flex justify-content-between">주문 수량 <span>{getOrderCount()} 잔</span></li>
                    <li className="list-group-item d-flex justify-content-between">총 가격 <span>{totalPrice} 원</span></li>
                </ul>
            </div>

            {/* <button type="button" className="btn btn-warning" style={{ position: 'fix', left: '68.5%', bottom: '-0.8%', width: '20.5%', height: '15%', fontSize: 'xx-large' }} onClick={handleConfirm}>주문 확정</button>
            <button type="button" className="btn btn-outline-success" style={{ position: 'fix', left: '89%', bottom: '-0.8%', width: '10.5%', height: '15%', fontSize: 'xx-large' }} onClick={handleClear}>주문 취소</button> */}

            <button 
                type="button" 
                className="btn btn-warning" 
                style={{ 
                    position: 'absolute', 
                    left: '73.5%', 
                    top:'84%', 
                    width: '15.5%', 
                    height: '15%', 
                    fontSize: 'xx-large' 
                }} 
                onClick={handleConfirm}
            >
                주문 확정
            </button>
            <button 
                type="button" 
                className="btn btn-outline-success" 
                style={{ 
                    position: 'absolute', 
                    left: '89%', 
                    top:'84%',  // Negative value causing buttons to be off-screen
                    width: '10.5%', 
                    height: '15%', 
                    fontSize: 'xx-large' 
                }} 
                onClick={handleClear}
            >
                주문 취소
            </button>


    </div>
  );
};

export default OlderOrder;
