import React,{useState,useEffect} from "react";
import { Link,useParams} from "react-router-dom";
import { Row, Col, Button, Image, ListGroup, Card } from "react-bootstrap";
import products from "../../products";
import Rating from "../Rating";
// import axios from 'axios';


function ProductScreen({ match }) {
  // const [product,setProduct]=useState([]);
  // const { id } = useParams();
  // useEffect(()=>{
    // console.log("match",id)
    // console.log("produtcs[0]._id",product[0]?._id)
    // console.log("product",product)
    // axios.get(`/api/products/${id}`).then((res)=>{
      // setProduct(res.data);
      // console.log('product',res.data)
      // }).catch((err)=>console.log(err))
      // },[id])
      
  // Get the product by its id from the server. If it doesn't exist then redirect to /404
  
  // useEffect(()=>{
  // //console.log(id)
  //   async function fetchProduct(){
  //     const {data}=await axios.get(`http://127.0.0.1:8000/api/products/${id}`)
  //     setProduct(data)
  //   }
  //   fetchProduct();
  // },[id])

  const { id } = useParams();
  const product = products.find((p) => p._id === id); //dynamic route parameter

  return (
    
    <div>

      <Link to="/" className="btn btn-dark my-2">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"yellow"}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price:</strong>${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description:
              <br />
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>                 
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price} </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock >0 ? "In Stock":"Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              
                <ListGroup.Item>
                <Button  className='btn-block' type="button" disabled={product.countInStock === 0 }>Add to Cart</Button>
                </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
       {product.name}
    </div>
  );
}

export default ProductScreen;
