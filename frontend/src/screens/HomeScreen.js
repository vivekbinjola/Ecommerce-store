import React,{ useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
 
import Product from '../components/Product';

const HomeScreen = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
       const fetchproducts = async() =>{
        const res  /* or destructuring res = {data} */ 
        = await axios.get('/api/products')
        setProducts(res.data) /* or (data) */
       }
      fetchproducts()
    },[])




    return (
        <>
        <h1>Latest Products</h1>
        <Row>
        {products.map((product)=>(
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
            </Col> 
        ))}
        </Row>

            
            </>
     
    )
}

export default HomeScreen;
