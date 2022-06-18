import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap'

function Template2() {

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
          <Card className='col-8 mx-auto p-5 m-3'>
            <Card.Body>
                    <Card.Img variant="top" src={item.Img} className='w-100 d-block mx-auto' />

                    <Card.Title className='text-danger'>Personal details</Card.Title>
                    <Card.Title>Name: <Card.Title className='text-warning'>{item.username}</Card.Title></Card.Title>
                    <Card.Title>Email: {item.email}</Card.Title>
                    <Card.Title>City: {item.city}</Card.Title>
                    <Card.Title>Mobile NO.: {item.phone}</Card.Title>
                  
              <div className="row">
                  <Card.Title className='text-danger'>Education</Card.Title>
                  <Card.Title>Institution Name : {item.instiname}</Card.Title>
                  <Card.Title>Branch : {item.branch}</Card.Title>
                  <Card.Title>GPA : {item.gpa}</Card.Title>
                  <Card.Title>skills</Card.Title>
              </div>
              <Card.Title>{item.skill1}</Card.Title>
              <Card.Title>{item.skill2}</Card.Title>
            </Card.Body>
        </Card>
        )
      }
    </div>
  )
}

export default Template2