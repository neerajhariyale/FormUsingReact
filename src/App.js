import React from 'react'
import { useState } from 'react'

const App = () => {
  const [formData,setFormData] = useState({firstname: "" ,lastname:"" ,email:"" ,streetaddress:"" ,city:"" ,state:"" ,postalcode:"",comments:false , offers:true , candidates:true ,notifications:"" }) 

  function clickHandler(event) {
    const {name,value,checked ,type} = event.target
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [name] : type==="checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("form Data");
    console.log(formData);
  }


  return (
    <div className='h-full flex flex-col justify-center items-center '>
      <form  className='border-2 p-5 mt-3 shadow-2xl shadow-gray-600 mb-80 rounded-lg' onSubmit={submitHandler}>
        <h1 className='flex flex-col justify-center items-center text-2xl font-bold text-slate-500'>Form</h1>
        <label forhtml="First name" className='font-medium'>First Name</label><br/>
        <input 
          type="text" 
          placeholder="Neeraj" 
          name="firstname"
          className='w-[550px] border-2 border-slate-300 rounded-md outline-none px-1 '
          onChange={clickHandler}
          value={formData.firstname}
        />
        <br/>


        <label forhtml="First name" className='font-medium'>Last Name</label><br/>
        <input 
          type="text" 
          placeholder="Hariyale" 
          name="lastname"
          className='w-[550px] border-2 border-slate-300 rounded-md outline-none px-1'
          onChange={clickHandler}
          value={formData.lastname}
        />
        <br/>

        <label forhtml="email" className='font-medium'>Email address</label><br/>
        <input 
          type="email" 
          placeholder="hariyaleneeraj31@gmail.com" 
          name="email"
          className='w-[550px] border-2 border-slate-300 rounded-md outline-none px-1'
          onChange={clickHandler}
          value={formData.email}
        />
        <br/>


        <label forhtml="Street-address" className='font-medium'>Street address</label><br/>
        <input 
          type="text" 
          placeholder="124 Main Road No.3" 
          name="streetaddress"
          className='w-[550px] border-2 border-slate-300 rounded-md outline-none px-1'
          value={formData.streetaddress}
          onChange={clickHandler}
        />
        <br/>

        <label forhtml="city" className='font-medium'>City</label><br/>
        <input 
          type="text" 
          placeholder="Bhopal" 
          name="city"
          className='w-[550px] border-2 border-slate-300 rounded-md outline-none px-1'
          value={formData.city}
          onChange={clickHandler}
        />
        <br/>

        <label forhtml="city" className='font-medium'>State/Province</label><br/>
        <input 
          type="text" 
          placeholder="Madhya Pradesh" 
          name="state"
          className='w-[550px] border-2 border-slate-300 rounded-md outline-none px-1 '
          value={formData.state}
          onChange={clickHandler}
        />
        <br/>

        <label forhtml="postalcode" className='font-medium'>Zip/Postal code</label><br/>
        <input 
          type="text" 
          placeholder="462016" 
          name="postalcode"
          className='w-[550px] border-2 border-slate-300 rounded-md outline-none px-1'
          value={formData.postalcode}
          onChange={clickHandler}
        />
        <br/>

        <label forhtml="email" className='font-medium'>By Email</label><br/>

        <input 
          type="checkbox"  
          name="comments"
          id="comments"
          checked={formData.comments}
          onChange={clickHandler}
        />
        <label forhtml="comments" className='ml-2 font-medium '>Comment <br/>
        <span className='ml-5 font-normal'>Get notified when someone posts a comments on a posting.</span>
        </label>
        <br/>

        <input 
          type="checkbox"  
          name="candidates"
          id="candidates"
          onChange={clickHandler}
          formData={formData.candidates}
        />
        <label forhtml="candidates" className='ml-2 font-medium '>Candidates <br/>
        <span className='ml-5 font-normal'>Get notified when a candidates applies for a job.</span>
        </label>
        <br/>

        <input 
          type="checkbox"  
          name="offers"
          id="offers"
          onChange={clickHandler}
          formData={formData.offers}
        />
        <label forhtml="offers" className='ml-2 font-medium'>Offers <br/>
        <span className='ml-5 font-normal'>Get notified when a candidate accepts or rejects offer.</span>
        </label>
        <br/>
        <br/>

        <p className='font-medium gap-5'>Push Notifications</p>
        <p>There are delievered via SMS to your mobile phone.</p>

        <input 
          type="radio"  
          onChange={clickHandler}
          name="notifications"
          id="offer"
          value="offer"
          // checked={FormData.notifications === "offer"}
          />
        <label forhtml="offer" className='ml-2 font-medium'>Offers <br/></label>

        <input 
          type="radio"  
          onChange={clickHandler}
          name="notifications"
          id="sameAsEmail"
          value="sameAsEmail"
          // checked={ FormData.notifications === "sameAsEmail"}

        />
        <label forhtml="sameAsEmail" className='ml-2 font-medium'>Same as email <br/></label>

        <input 
          type="radio" 
          onChange={clickHandler} 
          name="notifications"
          id="noPushNotifications"
          value="noPushNotifications"
          // checked={FormData.notifications === "noPushNotifications"}
        />
        <label forhtml="noPushNotifications" className='ml-2 font-medium'>No push notifications <br/></label>
        <br/>
        <br/>

        <button className='text-white bg-blue-600 border-1px rounded-sm px-3 py-1' type='submit' >Save</button>
        
      </form>
    </div>
  )
}

export default App
