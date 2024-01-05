import React,{useState,useEffect} from 'react'
import products from '../../products'
import { Row,Col } from 'react-bootstrap'
import Product from '../Product'
// import { useDispatch,useSelector } from 'react-redux';
// import { listProducts } from '../../action/productActions'
// import Message from '../Message';
// import Loader from '../Loader';

import axios from 'axios'
function HomeScreen() {
  // const [products,setProducts] = useState([]);
  // // This will run once when the component is first loaded into the DOM.

  // // const dispatch=useDispatch();
  // // const productList = useSelector((state) => state.productList);
  // // const {error,loading,products} = productList;
  // useEffect(()=>{
  //     async function fetchProducts(){
  //       const {data}=await axios.get('/api/products/')
  //       setProducts(data)
  //     }
  //     fetchProducts();
  //     // dispatch(listProducts())
  //   // },[dispatch])
  //   },[])

  return (
    // <div>
    //   <h1 className='text-center'>Latest Products</h1>
    //   {loading ?(
    //     <Loader/>
    //   ) : error ?(
    //     <Message variant="danger">{error}</Message>
    //   ) :(   
    //   <Row>
    //     {products.map((product) =>
    //     (<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
               
    //     <Product product={product} />
    //    </Col>)
    //     )}
    //   </Row>
    //    )}
    // </div>
    <div>
        <h1 className='text-center'>Latest Products</h1>                 
      <Row>
        {products.map((product) =>
        (<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
               
        <Product product={product} />
       </Col>)
        )}
      </Row>
       
    </div>
  )
}

export default HomeScreen
