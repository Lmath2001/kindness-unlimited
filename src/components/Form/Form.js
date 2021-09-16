import React, { useState } from "react";
import emailjs from "emailjs-com";
import api from "../../apis/api"
import "./Form.css";

const Form = () => {
  const [user_details, setUser_details] = useState({
    name: "",
    email: "",
    about: "",
    address: "",
    pincode: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const calculateScore=(user_details)=>{
      let count=0;
    if(user_details.q1==="Lorem0"){
        count++;
    }
    if(user_details.q2==="Lorem10"){
        count++;
    }
    if(user_details.q3==="Lorem20"){
        count++;
    }
    if(user_details.q4==="Lorem30"){
        count++;
    }
    if(user_details.q5==="Lorem10"){
        count++;
    }
    return count;
  }

  const addUserHandler=async()=>{
    const response=await api.post("/user_info", user_details)
    console.log(response.data);
    if(response.data){
      alert("Please check your email for your score");
    }else{
      console.error();
    }
  }

  const onSubmit = (e) => {
     e.preventDefault();
     console.log(user_details);

     let count=calculateScore(user_details);
     console.log(count)

     let html_message="Congratulations!! You have scored "+count+"/5";

     let toSend={
         name:user_details.name,
         email:user_details.email,
         html_message:html_message
     }

     emailjs.send('service_oq36xw8','template_7myf8so',toSend,'user_619opOKiAkc5gNE3iPzNo')
     .then(()=>{
      addUserHandler();
     })
     .catch(()=>{
      alert("Something went wrong, please try again");
     })
     setUser_details({
        name: "",
        email: "",
        about: "",
        address: "",
        pincode: "",
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
     })
  };

  return (
    <div className="form-design">
      <div className="text-center heading head">CHECK YOUR KINDNESS SCORE</div>
      <div class="container-form pb-2">
        <form id="survey-form" className="form">
          <div class="form-group">
            <label id="name-label" for="name" className="label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control input"
              placeholder="Enter your name"
              value={user_details.name}
              onChange={(event) => {
                setUser_details({ ...user_details, name: event.target.value });
              }}
              required
            />
          </div>

          <div class="form-group">
            <label id="email-label" for="email" className="label">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              class="form-control input"
              placeholder="Enter your email-id"
              value={user_details.email}
              onChange={(event) => {
                setUser_details({ ...user_details, email: event.target.value });
              }}
              required
            />
          </div>

          <div class="form-group">
            <p className="p-para">Tell us about yourself</p>
            <textarea
              id="aboutyou"
              class="input-textarea textarea"
              name="aboutyou"
              placeholder="Enter here.."
              value={user_details.about}
              onChange={(event) => {
                setUser_details({ ...user_details, about: event.target.value });
              }}
            ></textarea>
          </div>

          <div class="form-group">
            <p className="p-para">Location</p>
            <textarea
              id="location"
              class="input-textarea textarea"
              name="location"
              placeholder="Enter your location"
              value={user_details.address}
              onChange={(event) => {
                setUser_details({ ...user_details, address: event.target.value });
              }}
            ></textarea>
          </div>

          <div class="form-group">
            <label id="pincode-label" for="email" className="label">
              Pincode
            </label>
            <input
              type="number"
              name="pincode"
              id="pincode"
              class="form-control input"
              placeholder="Enter your pincode"
              value={user_details.pincode}
              onChange={(event) => {
                setUser_details({ ...user_details, pincode: event.target.value });
              }}
              required
            />
          </div>

          <div class="form-group">
            <p className="p-para">Question-1</p>
            <select
              id="most-liked"
              name="most-liked"
              class="form-control select"
              value={user_details.q1}
              onChange={(event) => {
                setUser_details({ ...user_details, q1: event.target.value });
              }}
              required
            >
              <option selected value>
                Select an option
              </option>
              <option value="Lorem0">Lorem0</option>
              <option value="Lorem10">Lorem10</option>
              <option value="Lorem20">Lorem20</option>
              <option value="Lorem30">Lorem30</option>
            </select>
          </div>

          <div class="form-group">
            <p className="p-para">Question-2</p>
            <select
              id="most-liked"
              name="most-liked"
              class="form-control select"
              value={user_details.q2}
              onChange={(event) => {
                setUser_details({ ...user_details, q2: event.target.value });
              }}
              required
            >
              <option selected value>
                Select an option
              </option>
              <option value="Lorem0">Lorem0</option>
              <option value="Lorem10">Lorem10</option>
              <option value="Lorem20">Lorem20</option>
              <option value="Lorem30">Lorem30</option>
            </select>
          </div>

          <div class="form-group">
            <p className="p-para">Question-3</p>
            <select
              id="most-liked"
              name="most-liked"
              class="form-control select"
              value={user_details.q3}
              onChange={(event) => {
                setUser_details({ ...user_details, q3: event.target.value });
              }}
              required
            >
              <option selected value>
                Select an option
              </option>
              <option value="Lorem0">Lorem0</option>
              <option value="Lorem10">Lorem10</option>
              <option value="Lorem20">Lorem20</option>
              <option value="Lorem30">Lorem30</option>
            </select>
          </div>

          <div class="form-group">
            <p className="p-para">Question-4</p>
            <select
              id="most-liked"
              name="most-liked"
              class="form-control select"
              value={user_details.q4}
              onChange={(event) => {
                setUser_details({ ...user_details, q4: event.target.value });
              }}
              required
            >
              <option selected value>
                Select an option
              </option>
              <option value="Lorem0">Lorem0</option>
              <option value="Lorem10">Lorem10</option>
              <option value="Lorem20">Lorem20</option>
              <option value="Lorem30">Lorem30</option>
            </select>
          </div>

          <div class="form-group">
            <p className="p-para">Question-5</p>
            <select
              id="most-liked"
              name="most-liked"
              class="form-control select"
              value={user_details.q5}
              onChange={(event) => {
                setUser_details({ ...user_details, q5: event.target.value });
              }}
              required
            >
              <option selected value>
                Select an option
              </option>
              <option value="Lorem0">Lorem0</option>
              <option value="Lorem10">Lorem10</option>
              <option value="Lorem20">Lorem20</option>
              <option value="Lorem30">Lorem30</option>
            </select>
          </div>

          <div class="form-group">
            <input
              type="submit"
              id="submit"
              value="Show Results"
              class="submit-button"
              onClick={onSubmit}
            />
              
            
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
