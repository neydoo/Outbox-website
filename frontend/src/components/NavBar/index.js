import React from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'reactstrap';
import LogoImage from '../../assets/images/logo-2.png';
import './index.scss';

const TopNavBar = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs="12" sm="6"><img src={LogoImage} alt="logo" /></Col>
                    <Col xs="12" sm="6">
                        <div className="top">
                            <ButtonGroup className="buttonGroup">
                                <Button style={{borderLeft: 0}}><a href="/web/">Help</a></Button>
                                <Button><a href="/web/">About</a></Button>
                                <Button style={{borderRight: 0}}><a href="/web/pricing.html#contact">Contact Us</a></Button>
                            </ButtonGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopNavBar;