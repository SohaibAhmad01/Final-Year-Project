import {Row, Col} from 'react-bootstrap'
import React,{useState, useEffect} from "react"
import {useDispatch, useSelector} from 'react-redux'
import { listProducts } from './actions/productActions'

function Result(){
    const [tweets,getTweets] = useState([])
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products} = productList
    
    useEffect(()=>{  
        dispatch(listProducts())
    },[dispatch])

    return(
        <div>
            <h1>Search Results</h1>
            {
            loading ? <h2>Loading...</h2>
                :error ? <h3>{error}</h3>
                :
                <Row>
                    {products.map(product=>(
                        <Col key={product.id}>
                            <h1>{product.tweet}</h1>
                        </Col>
                    ))}
                </Row>
            }
        </div>
    )
}

export default Result





// import React from "react";
// import Header from "./Component/Header";
// import VerticalMenu from "./Component/VerticalMenu";
// import Footer from "./Component/Footer";

// class Results extends React.Component{
//     render(){
//         return(
//             <React.Fragment>
//                 <Header/>
//                 <div className="ui grid">
//                     <div className="four wide column">
//                         <VerticalMenu/>

//                     </div>
//                     <div className="tewelve wide column">
//                         <table className="ui celled table" style={{marginTop:70, width:800}}>
//                             <thead>
//                                 <tr >
//                                     <th>ID</th>
//                                     <th>Body</th>
//                                     <th>Date</th>
//                                     <th>Body</th>
//                                     <th>Analysis</th>
//                                 </tr>

//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <th>1</th>
//                                     <th>Burewala</th>
//                                     <th>1-1-2022</th>
//                                     <th>I am phenominal</th>
//                                 </tr>
//                                 <tr>
//                                     <th>1</th>
//                                     <th>Burewala</th>
//                                     <th>1-1-2022</th>
//                                     <th>I am phenominal</th>
//                                 </tr>
//                                 <tr>
//                                     <th>1</th>
//                                     <th>Burewala</th>
//                                     <th>1-1-2022</th>
//                                     <th>I am phenominal</th>
//                                 </tr>
//                                 <tr>
//                                     <th>1</th>
//                                     <th>Burewala</th>
//                                     <th>1-1-2022</th>
//                                     <th>I am phenominal</th>
//                                 </tr>
//                                 <tr>
//                                     <th>1</th>
//                                     <th>Burewala</th>
//                                     <th>1-1-2022</th>
//                                     <th>I am phenominal</th>
//                                 </tr>
//                                 <tr>
//                                     <th>1</th>
//                                     <th>Burewala</th>
//                                     <th>1-1-2022</th>
//                                     <th>I am phenominal</th>
//                                 </tr>
//                                 <tr>
//                                     <th>1</th>
//                                     <th>Burewala</th>
//                                     <th>1-1-2022</th>
//                                     <th>I am phenominal</th>
//                                 </tr>
//                                 <tr>
//                                     <th>1</th>
//                                     <th>Burewala</th>
//                                     <th>1-1-2022</th>
//                                     <th>I am phenominal</th>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>

//                 </div>
//                 <Footer/>
//             </React.Fragment>
//         );
//     }
// }
// export default Results;