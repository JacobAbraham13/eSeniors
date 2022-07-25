import '../styles/Profile.css';
import '../images/default_profile_picture.png'
import Button from 'react-bootstrap/Button';
import {useNavigate, useParams} from "react-router-dom";
function Profile({name}) {
  let navigate = useNavigate();
  var navigateProfile = "/profile/" + name;
  return (
    <>
      <div className="holder" id="profile_Card">
        <div className="flex-container" id="content_row">
          <div className="name-row">
            <img className = "profile-pic" src = "https://www.w3schools.com/howto/img_avatar.png" alt = "Avatar">

            </img>
            <div className='txt-box'>
              <div className = "cg-name">
                {name}
              </div>
            </div>
            
          </div>
          <div className='exp-lbl'>
            Experience:
          </div>
          <div className="experience">
            <div className = "exp-text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque non tellus orci. Viverra mauris in aliquam sem fringilla ut. Mattis pellentesque id nibh tortor id aliquet lectus. Et odio pellentesque diam volutpat commodo sed egestas egestas fringilla. Enim tortor at auctor urna nunc id cursus.
            </div>
          </div>
          <div className='serv-lbl'>
            Services Offered:
          </div>
          <div className="services">
            <div className = "serv-text">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus in hendrerit gravida rutrum quisque non tellus orci. 
            </div>
          </div>
          <div className='bottom-row'>
            <div className = "sign-up-butn" >
              {/* Error with useNavigate */}
              {/* <Button href = '/' variant = "primary">Sign Up with this Companion</Button> */}
              <a class="btn btn-primary" href= {navigateProfile} role="button">Sign Up with this Companion</a>
            </div>
            <div className = "price">
              $22.99
            </div>
          </div>
          
        </div>
        
      </div> 
    </>
  );
}

export default Profile;