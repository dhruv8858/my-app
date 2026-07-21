
import './App.css';
import { Link,BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Course from './Components/Course';
import Register from './Components/Register';
import TsIcon from "../src/TS.jpeg";
import 'bootstrap/dist/css/bootstrap.min.css';
import ChatBot from 'react-chatbotify';
import LimConnector ,{OpenaiProvider}from '@rcb-plugins/llm-connector';

function App() {
const settings = {
  general: {
    embedded: false,
  },

  chatButton: {
    icon: TsIcon,
  },

  botBubble: {
    avatar: TsIcon,
  },

  header: {
    title: "Tech Academy Assistant",
  },
};

const flow = 
{ start: { message: "How can I help You?", 
  options: ["Courses Available?", "How can I Join?"], 
  path: "handle_faq" }, 

  handle_faq: 
  { message: async (params) => { const userInput = params.userInput.trim().toLowerCase(); 
    let reply = "";
     switch (userInput) 
     { case "courses available?": reply = "HTML, CSS, JavaScript, React JS, TypeScript, Bootstrap, Java, etc."; 
      break; 
      case "how can i join?": reply = "Mail your details to: roncksingh41@gmail.com";
       break; default: reply = "Want more details? Contact: 995811XXXX"; } 
       await params.injectMessage(reply); }, options: ["I have more questions"],
        path: "start",
         chatDisabled: true, }, };
  return (
   
    <BrowserRouter>
       <div className="App">

        <div className='banner'>
         <img src={TsIcon} />
         <ul>
        <li><Link to="/home">Home</Link></li>  
        <li><Link to="/course">Course</Link></li> 
        <li><Link to="/Registration">Registration</Link></li>
         </ul>
        </div>
        

        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/course' element={<Course/>} />
          <Route path='/Registration' element={<Register/>} />
        </Routes>
          
<ChatBot
 flow={flow}
  settings={settings}
/>

{/* <ChatBot flow={flow} plugins={[LimConnector()]}/> */}
    </div>
    </BrowserRouter>
 
  );
}

export default App;
