import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col,
    Form,
    FormGroup,
    Input,
    Button
} from 'reactstrap';
import TopNavBar from '../../components/NavBar/index';
import BackgroundSlideshow from 'react-background-slideshow';

import image1 from '../../assets/images/background-1.jpeg';
import image2 from '../../assets/images/background-2.jpeg';
import './styles.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            businessName: "",
            showReg: false,
            type: "password"
        };
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    toggleFormView = () => {
        this.setState({showReg: this.state.showReg ? false : true});
    };

    showHidePassword = e => {
        e.preventDefault();
        this.setState({
            type: this.state.type === "input" ? "password" : "input"
        });
    };

    handleSignUp = (e) => {
        e.preventDefault();
    };

    handleSignIn = (e) => {
        e.preventDefault();
    }

    renderRegForm = () => (
        <div>
            <div className="form-header">
                <h3>Create new account</h3>
                <p>
                    Already have an account? <br/>
                    <button type="button" onClick={this.toggleFormView}>Sign In</button>
                </p>
            </div>
            <Form className="form-content" onSubmit={this.handleSignUp}>
                <FormGroup>
                    <Input 
                        type="text" 
                        name="businessName" 
                        placeholder="Business name" 
                        onChange={this.handleChange}
                        value={this.state.businessName}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type="email" 
                        name="email" 
                        placeholder="Email address" 
                        onChange={this.handleChange} 
                        valaue={this.state.email}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type={this.state.type} 
                        name="password" 
                        placeholder="Password" 
                        onChange={this.handleChange} 
                        value={this.state.password}
                    />
                    <span
                        className="fa fa-eye field-icon toggle-password"
                        onClick={this.showHidePassword}
                    />
                </FormGroup>
                <div className="form-footer">
                    <FormGroup>
                        <Button color="primary" type="submit" disabled>Sign Up</Button>
                    </FormGroup> 
                </div>
            </Form>
        </div>
    );

    renderSignInForm = () => (
        <div>
            <div className="form-header">
                <h3>Hello</h3>
                <p>
                    Sign in with your credentials or <br/>
                    <button onClick={this.toggleFormView}>create a new account</button>
                </p>
            </div>
            <Form className="form-content" onSubmit={this.handleSignIn}>
                <FormGroup>
                    <Input 
                        type="email" 
                        name="email" 
                        placeholder="Email address"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type={this.state.type}
                        name="password" 
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <span
                        className="fa fa-eye field-icon toggle-password"
                        onClick={this.showHidePassword}
                    />
                </FormGroup>
                <div className="form-footer">
                    <FormGroup>
                        <Button color="primary" type="submit" disabled>Login</Button>
                    </FormGroup>
                </div>
            </Form>
        </div>
    );

    render() {
        return (
            <div>
                <div className="content-container">
                    <TopNavBar />
                    <Container className="main-body" fluid>
                        <Row className="first-row">
                            <Col xs="12" sm="3" className="form-box">
                                {this.state.showReg ? this.renderRegForm() : this.renderSignInForm()}
                            </Col>
                            <Col xs="12" sm="4"></Col>
                            <Col xs="12" sm="4"></Col>
                        </Row>
                    </Container>
                </div>

                <div className="background-container">
                    <BackgroundSlideshow images={[ image1, image2 ]} />
                </div>
            </div>
        );
    };
};

export default Home;