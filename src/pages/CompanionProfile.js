import React from 'react'
import {useParams, useNavigate} from "react-router-dom";
import '../styles/CompanionProfile.css'
import Button from 'react-bootstrap/Button';
export default function CompanionProfile() {
  let {username} = useParams();
  let navigate = useNavigate();
  return (
    <div>
      <div className = "comp-page">
        <div>
          <div>Profile Page for {username}</div>
          <button onClick = {() => navigate("/findcompanion")} >Go back</button>
        </div>
        <div className="profile-holder">
          <div className = "top-row">
              <div className = "prof-pic-sect">
                <img className = "pfp" src = "https://www.w3schools.com/howto/img_avatar.png">
                </img>
                <p><strong>(555)-555-555</strong></p>
              </div>
              <div className='top-row-info'>
                <div className = 'top-top-row'>
                  <div className='top-row-left'>
                    <div className='trl-txt'>
                      <h1>{username}</h1>
                      <p>$8 per hour</p>
                      <p>United States of America</p>
                      <p>email@gmail.com</p>
                    </div>
                  </div>
                  <div className='top-row-right'>
                    <Button id = "add-comp-btn" 
                    variant = "primary">Add Companion to Cart</Button>
                    <Button id = "contact-sell-btn"
                    variant = "success">Contact Seller</Button>
                  </div>
                </div>
                <div className='top-btm-row'>
                  <div className='description-box'>
                      <h3>Description</h3>
                      <p>He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.
                      </p>
                      
                  </div>
                </div>
              </div>
          </div>
          <div className='skills-exp'>
            <div className='skills-box'>
              <div className='skills-txt'>
                <h3>Skills</h3>
                <p>He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.</p>
              </div>
              
            </div>
            <div className='exp-box'>
              <div className='exp-txt'>
                <h3>Experience</h3>
                <p>He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement. It had taken years to perfect and he could now do it without even putting any thought behind it. Nobody seemed to fully understand the beauty of this accomplishment except for the new worker who watched in amazement.</p>
              </div>
            </div>
          </div>
          <div className = 'pinfo-contact-row'>
            <div className='pinfo-box'>
              <div className='pinfo-txt'>
                <h3>Personal Information</h3>
                <p>Age: 40</p>
                <p>Sex: Male</p>
                <p>Location: Dallas, USA</p>
                <p>Religion: </p>
                <p>Profession: </p>
              </div>
            </div>
            <div className='contact-box'>
              <div className='contact-txt'>
                  <h3>Contact Information</h3>
                  <p>Phone Number: (555)-555-555</p>
                  <p>Email: email@gmail.com</p>
                  <p>LinkedIn: </p>
                  <p>Twitter: </p>
                  <p>Facebook: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}
