import Header from "../../componets/Header/Header"
import { Link } from "react-router-dom"
import img from '../../assets/hero-section/diani3.jpeg'
import img2 from '../../assets/featured-places/Mt Kenya.jpg'
import img3 from '../../assets/featured-places/tsavo.jpg'
import img4 from '../../assets/featured-places/Nairobi_National_Park.jpg'
import img5 from '../../assets/featured-places/L.Nakuru.jpg'
import img6 from '../../assets/featured-places/mt Lonogonot.jpeg'


import './Home.css'
export default function Home(){
    return(
        <>
<div className="hero">
        <h2 className="hero-tagline">Explore World With Us</h2>
        <p className="motto">Hakuna Matata</p>
</div>
<div className="about-us">
    <h1 className="about-us-heading">About Us</h1>
    <p className="about-us-exercept">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias atque pariatur vero placeat doloremque sed. Vitae incidunt explicabo laborum, numquam, vel nisi, rerum animi molestias voluptatibus repellat eaque. Neque.</p>

</div>
<div className="featured-header">
        <h1 className="featured-header-titte">Must Visit !!</h1>
    </div>
<div className="featured-destinations">

    <div className="featured-data"><Featured description={"Diani Beach"} price={14000} url={img}/></div>
    <div className="featured-data"><Featured description={"Mt Kenya"} price={4000} url={img2}/></div>
    <div className="featured-data"><Featured description={"Lake Nakuru"} price={6999} url={img5}/></div>
    <div className="featured-data"><Featured description={"Mt Longonot"} price={1000} url={img6}/></div>
    <div className="featured-data"><Featured description={"Tsavo"} price={5500} url={img3}/></div>
    <div className="featured-data"><Featured description={"Nairobi National Park"} price={1200} url={img4}/></div>
  
    
</div>
        </>
    )
}




function Featured({ description, price, url}){
    return(
    <>
    
<div className="feature1">
<img src={url} alt="" />
 <p className="description2">{description}</p>
 <p className="price2">Starting @ $ {price}</p>
 <div className="div"> <button className="btn">Book Now</button></div>

</div>
    </>
    )

}