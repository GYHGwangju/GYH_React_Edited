import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UsingAI() {
  const [showModal, setShowModal] = useState(false);
  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const styles = {
    nanumGothicRegular: {
      fontFamily: '"Nanum Gothic", sans-serif',
      fontWeight: 400,
      fontStyle: 'normal'
    },
    customBtn: {
      position: 'absolute',
      top: '10px',
      right: '-3%',
      transform: 'translateX(-50%)',
      padding: '15px 30px',
      fontSize: '24px'
    },
    containerFluid: {
      height: '10%'
    },
    navbarBrand: {
      fontFamily: '"Nanum Gothic"',
      fontSize: 'xx-large',
      fontWeight: 'bold'
    },
    callStaff: {
      fontSize: 'xx-large'
    },
    aiQuestion: {
      position: 'absolute',
      width: '70%',
      height: '70%',
      top: '10%'
    },
    aiAnswer: {
      fontSize: '28px',
      color: 'black',
      textAlign: 'left'
    },
    userAnswer: {
      position: 'absolute',
      textAlign: 'left',
      width: '70%',
      height: '21%',
      top: '79%'
    },
    orderList: {
      position: 'absolute',
      width: '30%',
      height: '60%',
      left: '70%',
      top: '10%'
    },
    orderPrice: {
      position: 'absolute',
      width: '30%',
      height: '10%',
      left: '70%',
      top: '73%'
    },
    orderPriceItem: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    btnWarning: {
      position: 'absolute',
      left: '69.5%',
      top: '84%',
      width: '20%',
      height: '15%',
      fontSize: 'xx-large'
    },
    btnOutlineSuccess: {
      position: 'absolute',
      left: '89.5%',
      top: '84%',
      width: '10%',
      height: '15%',
      fontSize: 'xx-large'
    }
  };

  return (
    <div>
      <div className="alert alert-light" style={styles.aiQuestion}>
        <h4 className="alert-heading" style={{textAlign:"left"}}>대답하는 인공지능</h4>
        <p className="ai-answer" style={styles.aiAnswer }>카페라떼가 두 잔 추가됐어요. 그 다음은 어떤 것을 주문하실 건가요?</p>
      </div>

      <div className="alert alert-dark" style={styles.userAnswer}>
        <h4 className="alert-heading">이용자</h4>
        <p className="user-answer" style={{ fontSize: 'x-large', top: '25%' }}>카페라떼 두 잔 추가해줘.</p>
      </div>

      <div className="bd-example m-0 border-0" style={styles.orderList}>
        <table className="table table-striped" style={{ fontSize: 'x-large' }}>
          <thead>
            <tr>
              <th scope="col">메뉴</th>
              <th scope="col">수량</th>
              <th scope="col">가격</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">아메리카노</th>
              <td>1</td>
              <td>3,000</td>
            </tr>
            <tr>
              <th scope="row">카페라떼</th>
              <td>2</td>
              <td>7,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card text-bg-primary mb-3" style={styles.orderPrice}>
        <ul className="list-group list-group-flush" style={{ fontSize: 'xx-large' }}>
          <li className="list-group-item" style={styles.orderPriceItem}>주문 수량 <span>2 잔</span></li>
          <li className="list-group-item" style={styles.orderPriceItem}>총 가격 <span>10,000 원</span></li>
        </ul>
      </div>

      <button type="button" className="btn btn-warning" style={styles.btnWarning}>주문 확정</button>
      <button type="button" className="btn btn-outline-success" style={styles.btnOutlineSuccess}>주문 취소</button>
      
    </div>
  );
}

export default UsingAI;
