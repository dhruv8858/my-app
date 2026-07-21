
import  './Register.css';
import TsIcon from "../TS.jpeg";
function Register(){
    
    return<>
    <div className="registration-wrapper">
      <div className="registration-card">

        {/* LEFT BRAND SECTION */}
        <div className="registration-left">
          <img src={TsIcon} />
        </div>

        {/* RIGHT FORM SECTION */}
        <div className="registration-right">
          <h2>Online Registration Form</h2>
          <p>Register online today and take the first step towards success!</p>

          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter Your Name" />
            </div>

            <div className="form-row">
              <div>
                <label>Email Address</label>
                <input type="email" placeholder="Enter Email Address" />
              </div>
              <div>
                <label>Phone Number</label>
                <input type="text" placeholder="Enter Phone Number" />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Course</label>
                <select>
                  <option>Select Course</option>
                </select>
              </div>
              <div>
                <label>Branch</label>
                <select>
                  <option>Select Branch</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea placeholder="Enter Address"></textarea>
            </div>

            <div className="form-row">
              <div>
                <label>City</label>
                <input type="text" placeholder="Enter City Name" />
              </div>
              <div>
                <label>Country</label>
                <input type="text" placeholder="Enter Country Name" />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Zipcode</label>
                <input type="text" placeholder="Enter ZIP Code" />
              </div>
              <div>
                <label>Amount</label>
                <input type="text" placeholder="Enter Amount" />
              </div>
            </div>

            <button className="submit-btn">Submit</button>
          </form>
        </div>

      </div>
    </div>
    </>
}
export default Register;