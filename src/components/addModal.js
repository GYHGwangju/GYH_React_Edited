import React, { useState } from 'react';
import './addModal.css';
import Pic from '../assets/images/americano.jpg';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Image } from "react-bootstrap";
import { Flex, Radio } from "antd";

const AddModal = (props) => {
    const { show, data, onAdd, onHide } = props;

    const handleAdd = () => {
        onAdd(data);
        handleCancel();
    }

    const handleCancel = () => {
        onHide();
    }
    const [temperature, setTemperature] = useState('');

    const handleTemperatureChange1 = (event) => {
        data.temperature = 'Hot'
        setTemperature('Hot');
    };
    const handleTemperatureChange2 = (event) => {
        data.temperature = 'Cold'
        setTemperature('Cold');
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            dialogClassName="modal-90w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ height: '800px' }} // Set your desired width and height here
        >
            <Modal.Body>
                <div className="media">
                    <div className="media-left" href="#">
                        <Image className="avatarImg" src={Pic} style={{ width: '300px', height: 'auto' }} responsive></Image>
                    </div>
                    <div className="media-body" style={{marginTop:'10px', marginLeft:'15px'}}>
                        <p className="media-heading" style={{fontSize:'48pt'}}>{data.name}</p>
                        <p className="media-heading" style={{fontSize:'24pt'}}>{data.description}</p>
                        <p style={{ color: 'red' , fontSize:'32pt'}}>{data.price}￦</p>
                    </div>
                </div>

                <div style={{ textAlign: "center", fontSize:'36pt', marginTop:'20px'}}>음료의 온도</div>
                
                <Card>
                    <Card.Body style={{maxHeight:'auto', marginTop:'10px'}}>
                        {/* <Card.Title></Card.Title> */}
                        <Card.Text>
                            <Form>
                                <Flex vertical gap="middle">
                                    <Radio.Group style={{alignSelf:'center', scale:'1.25'}} defaultValue="Hot" buttonStyle="solid">
                                        <Radio.Button className="custom-radio-button" style={{alignContent:'center',minHeight:'100px' , textAlign: "center", fontSize:'64pt' }} size="large" value="Hot" onClick={handleTemperatureChange1}>Hot</Radio.Button>
                                        <Radio.Button style={{alignContent:'center',minHeight:'100px' , textAlign: "center", fontSize:'64pt'  }} value="Cold" onClick={handleTemperatureChange2}>Cold</Radio.Button>
                                    </Radio.Group>
                                </Flex>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div style={{ float: "right", fontSize:'48pt' }}>
                    <Button variant="secondary" onClick={handleCancel} style={{ width:'300px',height:'150px',fontSize:'48pt' }}>취소</Button>
                    <Button variant="primary" onClick={handleAdd} style={{ width:'300px',height:'150px',fontSize:'48pt' }}>확정</Button>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default AddModal;
