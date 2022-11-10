import {useState,useEffect, useContext} from "react";
import { Box, Image,Text} from "@chakra-ui/react";
import axios from "axios";
import Slider from "react-slick";
import BottomNavbar from "../Components/Navbar/BottomNavbar";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Womens.css";
import { addTocart } from "../Cartcontext/action";
import { CartContext } from "../Cartcontext/CartContextProvider";
const getData=()=>{
    return axios.get(`http://localhost:3002/Womens?_limit=10`);
}

const banner={
    backgroundImage:"url('https://www.yoox.com/images/yoox80/banners/6824_2_XmasLaunch_WM_Main.jpg?634485886601286852#width=1380&height=637')",
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat",
    height:"637px",
    width:"1380px",
    margin:"auto"
}
function Womens()
{
    const [data,setData]=useState([]);    
    const {state,dispatch}=useContext(CartContext);
    useEffect(()=>{
        getData("Womens")
        .then((res)=>setData(res.data));
    },[])
    console.log(data);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
      };
    return(
        <div className="women-container">
            <BottomNavbar/>
            <div style={banner}>
                    <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </div>
                    <Box fontFamily="Playfair Display,sans-serif" marginLeft="10px" padding="20px" height="150px" width="450px"color="black" bg="white" >
                        <Text  marginTop="2" fontSize="24px" fontWeight="700" >LIGHTS ON!</Text>
                        <Text  marginTop="4" fontSize="14px" fontWeight="100" color="gray.500">Enter to find the perfect present</Text>
                        <Text  marginTop="4" fontSize="14px" fontWeight="600" textDecoration="underline">LETS THE SHOW BEGIN</Text>
                    </Box>
            </div>
            <div className="container1">
            <div className="center">
                    <Box textAlign="center" padding="25px" bg="white">
                        <h4 style={{color:"gray"}}>DESIGNERS</h4>
                        <br/>
                        <div className="designers">
                            <h4>DOLCE & GABBANA</h4>
                            <h4>ROBERTO CAVALLI</h4>
                            <h4>DSQUARED2</h4>
                            <h4>MARNI</h4>
                            <h4>BALENCIAGA</h4>
                            <h4>CHLOE</h4>
                            <h4>STELLA MCCARTNEY</h4>
                            <h4>MAISON MARGIALA</h4>
                            <h4>PRADA</h4>
                            <h4>GUCCI</h4>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <h5 style={{textDecoration:"underline"}}>VIEW ALL</h5>
                    </Box>
                </div>
                
                <div>
                    <Image src="https://www.yoox.com/images/yoox80/banners/6965_2_HL_DM_ROW.png?634485886601286852#width=430&height=600" alt="single day"/>
                    <h3 className="off">GET UPTO 70%,80% & 90% OFF</h3>
                    <p>Ends November 14th</p>
                    <Text textDecoration="underline" fontWeight="700">SHOP NOW</Text>    
                </div>
                <div className="lastphoto">
                    <Image src="https://www.yoox.com/images/yoox80/banners/6824_1_FocusOnJacket_W_HL.jpg?634485886601286852#width=430&height=600" alt="woman"/>
                    <h3 className="off">COOL COATS</h3>
                    <p>Puffer jackets and more to keep you warm</p>    
                    <Text textDecoration="underline" fontWeight="700">SHOP NOW</Text>    
                </div>
            </div>
            <div className="carousel-Container">
            <div className="newArrival">
                <h2>NEW ARRIVALS</h2>
                <h4 style={{textDecoration:"underline"}}>VIEW ALL</h4>
            </div>
            <div style={{width:"900px",marginLeft:"51px"}}>
            <Slider {...settings} >
                {
                    data.map((item)=>(
                            <div className="carousel" key={item.id}>
                                <img className="cImage" src={item.image} alt="image1"/>
                                <div>
                                <Text fontWeight="700">{item.brand}</Text>
                                <Text>{item.title}</Text>
                                <div style={{display:"flex",justifyContent:"space-around",width:"100px",margin:"auto"}}> 
                                <Text textDecoration="line-through">{item.original_price}</Text>
                                <Text>{item.discount}</Text>
                                </div>
                                <div style={{display:"flex",justifyContent:"space-around",width:"100px",margin:"auto"}}>
                                <Text fontWeight="700">{item.price}</Text>
                                <Image onClick={()=>dispatch(addTocart(item))} src="https://cdn-icons-png.flaticon.com/128/7244/7244661.png" width="25px" height="20px" alt="heart"/>
                                </div>
                                </div>
                            </div>
                    ))
                }
            </Slider>   
            </div>
            </div>    
            <div className="ccontainer">
                <div className="cbelow">
                <div className="fstandlst">
                    <img src="https://www.yoox.com/images/yoox80/banners/6825_1_Hugo_Tris_W.jpg?634485886601286852#width=473&height=660" alt="image1"/>
                    <h1 className="h1tag">HUGO</h1>
                    <h5 className="h5tag">Express yourself</h5>
                </div>
                <div className="midone">
                    <img src="https://www.yoox.com/images/yoox80/banners/6825_6_Montblanc_W_Tris.jpg?634485886601286852#width=473&height=660" alt="image1"/>
                    <h1 className="h1tag">MONTBLANC</h1>
                    <h5 className="h5tag">Its gifting Season</h5>
                </div>
                <div className="fstandlst">
                    <img src="https://www.yoox.com/images/yoox80/banners/6825_5_Furla_W_Tris.jpg?634485886601286852#width=473&height=660" alt="image1"/>
                    <h1 className="h1tag">FURLA</h1>
                    <h5 className="h5tag">Autumn/Winter 2022 Collection</h5>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Womens;