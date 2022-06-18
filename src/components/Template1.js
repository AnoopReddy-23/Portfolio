import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap'


function Template1() {

  let {userObj}=useSelector(state=>state.user);
  let [data,setdata]=useState([])
  let newArray;

  useEffect(()=>{
    const fetchProducts=async ()=>{
      //http get req
      let response=await axios.get('/admin/getEvents')
      let productList=response.data.payload
      //getting the cart products only that belongs to the user logged in
      newArray= productList.filter((item=> item.key===userObj._id))
      setdata(newArray)
      //console.log(productList)
    }
    fetchProducts()
  },[])
  //console.log(data)

  return (
    <div className='row m-5 p-5'>
      {
        data.map((item)=>
          <Card className='col-8 mx-auto p-5'>
            <Card.Img variant="top" src={item.Img} />
            <Card.Body>
              <Card.Title>{item.username}</Card.Title>
              <Card.Title>{item.email}</Card.Title>
              <Card.Title>{item.city}</Card.Title>
              <Card.Title>{item.phone}</Card.Title>
            </Card.Body>
        </Card>
        )
      }
    </div>
  )
}

export default Template1