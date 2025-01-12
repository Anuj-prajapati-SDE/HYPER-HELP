import { useState, useEffect } from "react";
import LoaderAnimation from "../../utils/loader"
import upperImg from "../../assets/HYPER-loader.png";
import lowerImg from "../../assets/Help-loader.png";
import "./Loader.css";
function Loader() {
  let [isLoading, setIsLoading] = useState(0); 
    LoaderAnimation(isLoading);
  useEffect(() => { 
    function increment() {
      if (isLoading < 100) {  
        setIsLoading((isLoading = isLoading + Math.floor(Math.random() * 10)));
        // console.log(isLoading)
      }  
    }
    setInterval(increment,300)
    if(isLoading>100){ 
      setIsLoading(100);
      clearInterval(increment)  
    }
  }, []);  
  return (
    <div className="loader-container"> 
      <div className="main-loader">
        <div className="upper-img-container">
          <img src={upperImg} alt="" />
        </div>
        <div className="mid-counter">
          <h1>{`loading..${isLoading}%`}</h1>
        </div>
        <div className="lower-img-container">
          <img src={lowerImg} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Loader;
