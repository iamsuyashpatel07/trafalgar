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
          <a className="mr-5" href="./"><b>Home</b></a>
          <a className="mr-5" href="./">Find a doctor</a>
          <a className="mr-5" href="./">Apps</a>
          <a className="mr-5" href="./">Testimonials</a>
          <a className="mr-5" href="./">About us</a>
       </span>
     </div>
       <div className="row2">
         <img src="../images/element.png" alt="element" />
      </div>
        <div className="row3">
        <div className="float-left col1-row3">
        <span  classsname="">
            <span  style={{fontFamily: `'Mulish', sans-serif`, fontSize: "3em"}}>
               Virtual healthcare<br/>for you
            </span>
            <br/>
            <span style={{paddingTop:"2%"}}>Trafalgar provides progressive, and affordable<br /> 
                  healthcare, accessible on mobile and online<br />
              for everyone</span><br />
            <div className="button-row3">
            <span className="border border-blue-600 rounded-full py-3 px-6 bg-blue-600 text-white">Consult today</span>
            </div>
        </span>
        </div>
        <div  classsname="float-right"> 
       <img style={{height:"10%", width:"37%"}} src="../images/illustration.png" alt="ilustration" />
       </div>
      </div>
      <div className="row4">
        <span style={{fontWeight:"700", fontSize:"36px"}}>Our services</span><br />
         <img style={{paddingLeft:"49%"}} src="../images/rectangle.png" alt="rectangle.png" /><br/>
         <span>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment <br/>
          with our highly qualified doctors you can consult with us which type of service is suitable for your health</span>
         </div>
        <div className="row5">
           <div class="grid-container">
             <div class="grid-item"><img src="../images/searchddoctor.png" alt="searchdoctor" />
               <span style={{fontWeight:"700", fontSize:"36px"}}>Search doctor</span><br />
               <span>Choose your doctor from thousands<br /> of specialist, general, and trusted<br /> hospitals.</span>
             </div>
             <div class="grid-item">
                 <img src="../images/searchddoctor.png" alt="searchdoctor" />
                 <span style={{fontWeight:"700", fontSize:"36px"}}>Search doctor</span><br />
                 <span>Choose your doctor from thousands<br /> of specialist, general, and trusted<br /> hospitals.</span>
             </div>
             <div class="grid-item">
                 <img src="../images/searchddoctor.png" alt="searchdoctor" /><br/>
                 <span style={{fontWeight:"700", fontSize:"36px"}}>Search doctor</span><br />
                 <span>Choose your doctor from thousands<br /> of specialist, general, and trusted<br /> hospitals.</span>
             </div>  
             <div class="grid-item">
                 <img src="../images/searchddoctor.png" alt="searchdoctor" />
                 <span style={{fontWeight:"700", fontSize:"36px"}}>Search doctor</span><br />
                 <span>Choose your doctor from thousands<br /> of specialist, general, and trusted<br /> hospitals.</span>
             </div>
             <div class="grid-item">
                 <img src="../images/searchddoctor.png" alt="searchdoctor" />
                 <span style={{fontWeight:"700", fontSize:"36px"}}>Search doctor</span><br />
                 <span>Choose your doctor from thousands<br /> of specialist, general, and trusted<br /> hospitals.</span>
             </div> 
             <div class="grid-item">
                 <img  src="../images/searchddoctor.png" alt="searchdoctor" />
                 <span style={{fontWeight:"700", fontSize:"36px"}}>Search doctor</span><br />
                 <span>Choose your doctor from thousands<br /> of specialist, general, and trusted<br /> hospitals.</span>
             </div>   
           </div>
       </div>
    </>
  );
}

export default App;
