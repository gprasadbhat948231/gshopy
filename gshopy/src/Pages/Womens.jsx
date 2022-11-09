import {useState,useEffect} from "react";
import {Box, Image,Text} from "@chakra-ui/react";
import axios from "axios";
import "./Womens.css"
const getData=(cat)=>{
    return axios.get(`http://localhost:3002/clothing?category=${cat}&_limit=20`);
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
    useEffect(()=>{
        getData("Womens")
        .then((res)=>setData(res.data));
    },[])
    return(
        <div className="women-container">
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
        </div>
    )
}
export default Womens;