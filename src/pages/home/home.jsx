import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from './card';
import Table from './table';
import axios from "axios";


import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import SearchBar from '../../components/searchBar'
const Home=()=>{
    const [selectedProduct, setSelectedProduct]=React.useState([]);
    const [data, setData]=React.useState([]);

    React.useEffect(() => {
        axios.get( "https://www.stamina.babkisanresturant.com/api/categories",
          {
            headers:{
                'Content-Type': 'application/json',
                'Accept':"application/json"
            }
          })
            .then((response) => {
                console.log(response.data)
                setData(response.data.data)
            })
            .catch((error) =>{ 
              console.log(error);
             });
    }, []);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    const AddProduct=(item)=>{
        if(selectedProduct.length<3){
            setSelectedProduct(selectedProduct => [...selectedProduct, item])
            setOpen(false)
        }
            
    }
    const MyDialog=()=>{
        return(
        <Dialog
            open={open}
            onClose={handleClose}
            style={{ borderRadius : "120px" }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Select a product to compare
                <hr className='hr_Style' />
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <SearchBar />
                    <Row className="justify-content-center">
                            {data.map((item)=>{
                                return(
                                    <Col className="center" lg={6} md={12} >
                                        <Card 
                                            onClick={()=>AddProduct(item) } 
                                            name={item.name} 
                                            image={item.image} 
                                            id={item.id} 
                                            slug={item.slug} 
                                        />

                                    </Col> 
                                )
                            })}
                    </Row>
                </DialogContentText>
            </DialogContent>
        </Dialog>
        )
    }

    return(
        <Container>
            <Row  className="justify-content-center">
                
                    {selectedProduct.map((item)=>{
                        return(
                            <Col lg={6} md={12} >
                                <div className="center">
                                    <Card name={item.name} image={item.image} id={item.id} slug={item.slug} />
                                </div>
                                
                                
                            </Col> 
                        )
                    })}
                <Col lg={6} md={12}  className="center" >
                    <button onClick={handleClickOpen} className='btn_style_1 pt'> Add product </button>
                </Col>
                <Col md={12} >
                    <Table />
                </Col>
                
            </Row>
            <MyDialog />
        </Container>


    )
}
export default Home