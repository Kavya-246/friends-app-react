import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const Add = () => {
    const [data, setData]=useState({
        "name":"",
        "friendName":"",
        "friendNickName":"",
        "DescribeYourFriend":""
       

    }
       
    )

    const inputHandler = (event) =>{
        setData({...data,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/view",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                    
                } else {
                    alert("error")
                    
                }
            }
                
).catch()
}
  return (
        <div>
            <NavBar/>
            <div className="container">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="row">
                                <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" class="form-label">name</label>
                                    <input type="text"  id="" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                                </div>
                                <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" class="form-label">friendName</label>
                                    <input type="text"  id="" className="form-control" name='friendName' value={data.name} onChange={inputHandler} />
                                </div>
                                <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label for="" class="form-label">friendNickName</label>
                                    <input type="text" id="" className="form-control" name='friendNickName' value={data.name} onChange={inputHandler}  />
                                </div>
                                <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label for="" class="form-label">DescribeYourFriend</label>
                                    <input type="text" id="" className="form-control" name='DescribeYourFriend' value={data.name} onChange={inputHandler}  />
                                </div>
                                
                                
                                
                        
                        
                                
                                <br></br>
                            <div className="col- col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary" onClick={readValue}>Add</button>
                            </div>
        </div>
        </div>
        </div>
        </div>
        </div>
                       


    
    
  )

}
export default Add