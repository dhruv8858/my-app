import "./Course.css";  
import HtmlPdf from "../PDFs/html.pdf";
import CssPdf from "../PDFs/css.pdf";
import jsPdf from "../PDFs/js.pdf";
import reactPdf from "../PDFs/react.pdf";

function Course(){
    
    return<>
    <div className="Row"style={{background:"violet"}}>
      <h1>Hmtl</h1>
     <a href={HtmlPdf} target="_self">click View free Resource</a>
    </div>
    <div className="Row"style={{background:"yellow"}}>
      <h1>css</h1>
        <a href={CssPdf} target="_self">click View free Resource</a>
    </div>
    <div className="Row" style={{background:"pink"}}>
      <h1>JAVA Script</h1>
    <a href={jsPdf} target="_self">click View free Resource</a>
    </div>
    <div className="Row"style={{background:"skyBlue"}}>
      <h1>React js</h1>
       <a href={reactPdf} target="_self">click View free Resource</a>
    </div>
    
    </>
}
export default Course;