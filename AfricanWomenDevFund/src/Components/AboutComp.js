import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label,
    Collapse, NavItem, Jumbotron, Col, Row, Breadcrumb, BreadcrumbItem, Card, CardImg, CardImgOverlay, CardTitle
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Image1 from '../imgs/Head.jpg';
import { find } from 'lodash';


const CAMPSITES = [
    { id: 1, name: "Nancy Muturi", image: { Image1 }, description: "A Muranga District native, Nancy studied Sociology at the University of Nairobi and attended the University of Iowa where she completed her graduate studies in Health Communications and International development.Nancy currently works as a professor at an American Insititution." },
    { id: 2, name: "Erwin Chege", image: { Image1 }, description: "Placeholder Text: Donec tempus fusce ridiculus praesent consectetur dignissim scelerisque condimentum parturient consectetur lobortis condimentum hac imperdiet nibh urna quisque mi enim inceptos non parturient ridiculus placerat aliquet ridiculus.Viverra in adipiscing dui tempus dui a nam eu scelerisque scelerisque hac a purus a risus a adipiscing." },
    { id: 3, name: "Sam Mwangi", image: { Image1 }, description: "Placeholder Text: Donec tempus fusce ridiculus praesent consectetur dignissim scelerisque condimentum parturient consectetur lobortis condimentum hac imperdiet nibh urna quisque mi enim inceptos non parturient ridiculus placerat aliquet ridiculus.Viverra in adipiscing dui tempus dui a nam eu scelerisque scelerisque hac a purus a risus a adipiscing." },
    { id: 4, name: "Margaret Nyambura", image: { Image1 }, description: "Placeholder Text: Donec tempus fusce ridiculus praesent consectetur dignissim scelerisque condimentum parturient consectetur lobortis condimentum hac imperdiet nibh urna quisque mi enim inceptos non parturient ridiculus placerat aliquet ridiculus.Viverra in adipiscing dui tempus dui a nam eu scelerisque scelerisque hac a purus a risus a adipiscing." }
];


class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            
        };
        this.toggleModal = this.toggleModal.bind(this);
    } 
    toggleModal(num) {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    render() {
        
        return (
            <div className="container" >
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>About Us</h2>
                        <hr />
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}><h2>Women are our Future</h2></ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                
                                <h4>Call or email us at the contact info below to learn more
                                    about how you can contribute to our program.
                                </h4>
                                <h5>
                                <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-555-555-5555</a><br />
                        <a role="button" className="btn btn-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> email@placeholder.com</a>
                                </h5>
                            </FormGroup>  
                        </Form>
                    </ModalBody>
                </Modal>
                <h3><u>Who We Are </u></h3>
                <div class="row row-content">
                    <div class="col-sm-3" >
                        <h3>Nancy Muturi</h3>
                        <a class="ml-5" ><img src={Image1} id = "1" height="70" width="70" onClick={this.toggleModal} /></a>
                    </div>

                    <div class="col mt-4">
                        <p>
                            A Muranga District native, Nancy studied Sociology at the University of Nairobi and attended the
                            University of Iowa where she completed her graduate studies in Health Communications and
                            International development. Nancy currently works as a professor at an American Insititution.

                            </p>
                    </div>

                </div>
                <div class="row row-content">
                <div class="col mt-4">
                    <p>
                        <b>Placeholder Text:</b> Donec tempus fusce ridiculus praesent consectetur dignissim scelerisque
                        condimentum parturient
                        consectetur lobortis condimentum hac imperdiet nibh urna quisque mi enim inceptos non parturient
                        ridiculus placerat aliquet ridiculus. Viverra in adipiscing dui tempus dui a nam eu scelerisque
                        scelerisque hac a purus a risus a adipiscing.

                    </p>
                </div>
                <div class="col-sm-3">

                    <h3>Erwin Chege</h3>
                    <a class="ml-5" ><img src={Image1} id = "1" height="70" width="70" onClick={this.toggleModal} /></a>
                </div>
            </div>

            <div class="row row-content">
                <div class="col-sm-3">
                    <h3>Sam Mwangi</h3>
                    <a class="ml-5" ><img src={Image1} id = "1" height="70" width="70" onClick={this.toggleModal} /></a>
                </div>
                <div class="col mt-4">
                    <p>
                        <b>Placeholder Text:</b> Donec tempus fusce ridiculus praesent consectetur dignissim scelerisque
                        condimentum parturient
                        consectetur lobortis condimentum hac imperdiet nibh urna quisque mi enim inceptos non parturient
                        ridiculus placerat aliquet ridiculus. Viverra in adipiscing dui tempus dui a nam eu scelerisque
                        scelerisque hac a purus a risus a adipiscing.
                    </p>
                </div>
            </div>

            <div class="row row-content">
                <div class="col mt-4">
                    <p>
                        <b>Placeholder Text:</b> Donec tempus fusce ridiculus praesent consectetur dignissim scelerisque
                        condimentum parturient
                        consectetur lobortis condimentum hac imperdiet nibh urna quisque mi enim inceptos non parturient
                        ridiculus placerat aliquet ridiculus. Viverra in adipiscing dui tempus dui a nam eu scelerisque
                        scelerisque hac a purus a risus a adipiscing.
                    </p>
                </div>
                <div class="col-sm-3">

                    <h3>Margaret Nyambura</h3>
                    <a class="ml-5" ><img src={Image1} id = "1" height="70" width="70" onClick={this.toggleModal} /></a>
                </div>
            </div>

                
                <div className="row row-content">

                </div>
            </div>
        );
    }
    
}

export default About;
