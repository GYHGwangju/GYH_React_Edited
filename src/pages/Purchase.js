import React, { useEffect, useState } from 'react';
import completeImg from '../assets/images/v27_99.png';
import purchaseImg from '../assets/images/v27_56.png';
import './Purchase.css'
import { useNavigate } from "react-router-dom";
import { Row, Col } from 'react-bootstrap'

const Purchase = () => {
    const [status, setStatus] = useState(0) // 0 purchase 1 complete
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setStatus(1)
        }, 3000)
    }, [])

    return (
        <div className='purchase-container'>
            <Row style={{ height: '100%', width: '100%' }}>
                <Col md={4}>
                    <div className='purchase-img'>
                        <img src={status === 0 ? purchaseImg : completeImg} alt="purchase" />
                    </div>
                </Col>
                <Col md={4}>
                    <div className='purchase-info'>
                        {
                            status === 0 ? <>
                                <span style={{ fontSize: 96 }}>결제 대기</span>
                                <span style={{ fontSize: 64 }}>카드를 단말기에 넣어주세요.</span>
                            </> : <>
                                <span style={{ fontSize: 96 }}>결제 완료</span>
                                <span style={{ fontSize: 64 }}>이용해주셔서 감사합니다.
                                    <br />
                                    카드를 빼주세요.</span>
                                <span style={{ fontSize: 96 }}>주문 번호</span>
                                <span style={{ fontSize: 96, color: 'rgba(255,0,0,1)' }} >007</span>
                            </>
                        }
                    </div>
                </Col>
            </Row>
            
        </div>
        
    );
};

export default Purchase;