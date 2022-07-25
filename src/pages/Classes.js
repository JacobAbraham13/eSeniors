import '../styles/Classes.css';
import ClassButton from '../components/ClassButton';
import EmbedVideo from '../components/EmbedVideo';
import Schedule from '../components/Schedule';
import Header from '../components/Header';
function Classes() {  

  return (
    <div className="App">
      <div>
        <Header  name = "Live Classes" number = {1}/>
        <div id = "sch">
          <Header name = "Schedule" number = {2} />
        </div>
        
        <Schedule />
      </div>    
      <div id = "video">
        <Header name = "Live Class" number = {2}/>
        
      </div>
      <div>
        <EmbedVideo />
      </div>
        

      
    </div>
  );
}

export default Classes;
