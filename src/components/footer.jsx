import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Background from '../images/FooterBG.png';

import Gmail from '../SVGs/gmail';
import Phone from '../SVGs/phone'

import Form from 'react-bootstrap/Form';



const Footer=()=>{

    var bgStyle = {
        marginTop:"100px",
        minWidth: "100%",
        minHeight: "442px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
        color:"#fff",
        opacity: 0.9,
        backgroundImage: `url(${Background})`
      };


    return(
        <div style={bgStyle}>
            <Container  >
                <Row className="justify-content-center footer_content" >
                    <Col lg={4} md={8} sm={12}>
                        <div className='footer_title'>
                            About Us
                        </div>
                        <div className='footer_text' >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </div>
                        <div className='footer_text'>
                            <Phone/>+966 - 112 426 668
                        </div>
                        <div className='footer_text'>
                            <Gmail/>info@stamina.com.sa
                        </div>
                    </Col>
                        
                    <Col lg={2} md={4} sm={12}>
                        <div className='footer_title'>
                            Quick Links
                        </div>
                        <div className='footer_text'>
                            Home
                        </div>
                        <div className='footer_text' > 
                            Our Products
                        </div>
                        <div className='footer_text'>
                            About Us
                        </div>
                        <div className='footer_text'>
                            Contact Us
                        </div>
                    </Col>
                    <Col lg={2} md={4} sm={12}>
                        <div >
                            Our Products
                        </div>
                        <div className='footer_text'>
                            Lima Mixers
                        </div>
                        <div className='footer_text'>
                            Stamina Mixers
                        </div>
                        <div className='footer_text'>
                            Lima Mixers
                        </div>
                        <div className='footer_text'>
                            Stamina Mixers
                        </div>
                        <div className='footer_text'>
                            Accessories
                        </div>
                    </Col>
                    <Col lg={4} md={8} sm={12}>
                        <div className='footer_title'>
                            Keep In Touch
                        </div>
                        <div className='footer_text' >
                            Subscribe to our website to get products that meet the needs of every home. 
                        </div>
                        <div className='footer_text'>
                            <Form.Control className='input_footer_style' type="text" placeholder="Normal text" />
                            <button className='btn_style_1' > Subscribe </button>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center" >
                    <hr className='hr_Style' />
                </Row>
                <Row className="justify-content-center" >
                    <Col className="text-center" lg={12} xs={12} > Copyright 2022 Stamina. All rights reserved.</Col>
                </Row>
            </Container>
        </div>
    )
}
export default Footer