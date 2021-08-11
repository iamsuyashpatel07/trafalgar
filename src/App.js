import React from "react";

function App() {
  return (
    <>
      <div className="row1">
        <span className="mr-5 float-left img-logo">
          <a href="./">
            <img src="../images/logo.png" alt="logo" />
          </a>
        </span>
        <span className="float-right nav-right">
          <a className="mr-5" href="./">
            <b> Home </b>
          </a>
          <a className="mr-5" href="./">
            Find a doctor
          </a>
          <a className="mr-5" href="./">
            Apps
          </a>
          <a className="mr-5" href="./">
            Testimonials
          </a>
          <a className="mr-5" href="./">
            About us
          </a>
        </span>
      </div>
      <div className="row2">
        <img src="../images/element.png" alt="element" />
      </div>
      <div className="row3">
        <div className="float-left col1-row3">
          <span classsname="">
            <span
              style={{ fontFamily: `'Mulish', sans-serif`, fontSize: "3em" }}
            >
              Virtual healthcare <br />
              for you
            </span>
            <br />
            <span style={{ paddingTop: "2%" }}>
              Trafalgar provides progressive, and affordable <br />
              healthcare, accessible on mobile and online <br />
              for everyone
            </span>
            <br />
            <div className="button-row3">
              <span className="border border-blue-600 rounded-full py-3 px-6 bg-blue-600 text-white">
                Consult today
              </span>
            </div>
          </span>
        </div>
        <div classsname="float-right">
          <img
            style={{ height: "10%", width: "37%" }}
            src="../images/illustration.png"
            alt="ilustration"
          />
        </div>
      </div>
      <div className="row4">
        <span style={{ fontWeight: "700", fontSize: "36px" }}>
          Our services
        </span>
        <br />
        <center>
          <img src="../images/rectangle.png" alt="rectangle.png" />
        </center>
        <br />
        <span>
          We provide to you the best choiches for you.Adjust it to your health
          needs and make sure your undergo treatment <br />
          with our highly qualified doctors you can consult with us which type
          of service is suitable for your health
        </span>
      </div>
      <div className="row5">
        <div class="grid-container">
          <div class="grid-item">
            <img src="../images/searchddoctor.png" alt="searchdoctor" />
            <span style={{ fontWeight: "700", fontSize: "36px" }}>
              Search doctor
            </span>
            <br />
            <span>
              Choose your doctor from thousands <br /> of specialist, general,
              and trusted <br /> hospitals.
            </span>
          </div>
          <div class="grid-item">
            <img src="../images/onlinepharmacy.png" alt="searchdoctor" />
            <span style={{ fontWeight: "700", fontSize: "36px" }}>
              Online pharmacy
            </span>
            <br />
            <span>
              Buy your medicines with our <br /> mobile application with a
              simple <br /> delivery system.
            </span>
          </div>
          <div class="grid-item">
            <img src="../images/consultation.png" alt="searchdoctor" /> <br />
            <span style={{ fontWeight: "700", fontSize: "36px" }}>
              Consultation
            </span>
            <br />
            <span>
              Free consultation with our trusted <br /> doctors and get the best
              <br /> recomendations.
            </span>
          </div>
          <div class="grid-item">
            <img src="../images/Details-info.png" alt="searchdoctor" />
            <span style={{ fontWeight: "700", fontSize: "36px" }}>
              Details info
            </span>
            <br />
            <span>
              Free consultation with our trusted <br /> doctors and get the best
              <br /> recomendations.
            </span>
          </div>
          <div class="grid-item">
            <img src="../images/Emergency-care.png" alt="searchdoctor" />
            <span style={{ fontWeight: "700", fontSize: "36px" }}>
              Emergency care
            </span>
            <br />
            <span>
              You can get 24 / 7 urgent care for <br /> yourself or your
              children and your <br />
              lovely family.
            </span>
          </div>
          <div class="grid-item">
            <img src="../images/Tracking.png" alt="searchdoctor" />
            <span style={{ fontWeight: "700", fontSize: "36px" }}>
              Tracking
            </span>
            <br />
            <span>
              Track and save your medical history <br /> and health data.
            </span>
          </div>
        </div>
      </div>
      <center>
        <span className="items-center justify-center border border-blue-600 rounded-full text-center py-3 px-3 text-blue-600">
          Learn more
        </span>
      </center>
      <div>
        <div className="row6 pl-6 pr-6">
          
          {/* starting */}
          <div className="float-left">
            <span className="pl-4 ml-6">
              
              <img
                src="../images/leadinghp.png"
                alt="leading-healthcare-provider"
              />
            </span>
          </div>
          <div className="float-right">
            <span
              style={{
                fontFamily: `'Mulish', sans-serif`,
                fontSize: "3em",
                marginRight: "3%",
              }}
            >
              Leading healthcare <br /> providers <br />
              <img src="../images/rectangle.png" alt="rectangle.png" />
            </span>
            <br />
            <span>
              
              Trafalgar provides progressive, and affordable <br /> healthcare,
              accessible on mobile and online for <br /> everyone.To us, it’ s
              not just work.We take pride <br />
              in the solutions we deliver
            </span>
            <br />
            <div style={{ paddingTop: "6%" }}>
              <span className="items-center justify-center border border-blue-600 rounded-full text-center py-3 px-3 text-blue-600">
                Learn more
              </span>
            </div>
          </div>
          {/*ending */}
        </div>
        <br /> {/*repeated row 3 as row 7*/}
      </div>
      <div className="row7">
        <span className="float-left">
              <span style={{ fontFamily: `'Mulish', sans-serif`, fontSize: "3em" }}>
                Download our <br />
                mobile apps <br />
                <img src="../images/rectangle.png" alt="rectangle.png" />
              </span>
               <span>
                 Our dedicated patient engagement app and <br />
                 web portal allow you to access information <br /> instantaneously(no
                 tedeous form, long calls, <br />
                 or administrative hassle) and securely
               </span>
          <br />
 {/*starting of button*/}
           <div style={{paddingTop:"3%"}}>
             <img src="../images/downloadbtn.png" alt="arrow" /> 
             </div>
            {/*ending of download*/}
          </span>
        <span className="float-right">
           <img src="../images/downloadourma.png" alt="download" />
         </span>
      </div>
       <div className="row8">
         <center>
          {/* <div style={{border:"1px solid blue",width:"50%",background: "linear-gradient(208.18deg, #67C3F3 9.05%, #5A98F2 76.74%)"}} className="rounded-full">
          Hi
         </div> */}
          <img src="../images/row8.png" alt="card" />
         </center>
      </div>   
      <div className="row9">
         
      </div>
    </>
  );
}

export default App;
