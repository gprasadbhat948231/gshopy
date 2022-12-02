import axios from "axios";
import React,{useState,useEffect,useRef} from "react"
import AdminNav from "./AdminNav";
import {Button} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Input
  } from '@chakra-ui/react'
import './men.css'
const getDataMen=(page)=>{
    return axios.get(`https://gshoppingdb.onrender.com/mens?_limit=20&_page=${page}`);
}
const deleteProduct=(id)=>{
    return axios({
        method: "DELETE",
        baseURL: "https://gshoppingdb.onrender.com",
        url: `/mens/${id}`
      });
}
const handleEditData=(id,image,offer,discount)=>{
    return fetch(`https://gshoppingdb.onrender.com/mens/${id}`,{
    method:"PATCH",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        image:image,
        offer_price:offer,
        discount:discount
    })
    })
    .then((res)=>res.json())
}
function Men()
{
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const ref=useRef(0);
    const [details,setDetails]=useState({
        image:"",
        offer_price:0,
        discount:""
    })
      const { isOpen, onOpen, onClose } = useDisclosure();
    const fetchData=(page)=>{
        getDataMen(page).then((res)=>setData(res.data));
    }
    useEffect(()=>{
        fetchData(page);
    },[page])
    const handleRemove=(id)=>{
        deleteProduct(id).then(()=>fetchData())
    }
    const handlePage=(val)=>{
        const value=page+val;
        setPage(value);
    }

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setDetails({...details,[name]:value});
    }
    const handleAddData=(id)=>{
        handleEditData(id,details.image,details.offer_price,details.discount).then(()=>fetchData(page))
    }
    const handleRef=(id)=>{
        ref.current=id;
    }   
    return (
        <div>
            <AdminNav/>
            <div className="menContainer">
                {
                    data.map((item)=>(
                        <div className="menCard" key={item.id}>
                            <img src={item.image} alt="menitem"/>
                            <h4>{item.brand}</h4>
                            <h5>{item.title}</h5>
                            <h5>{item.discount}</h5>
                            <h4>{item.offer_price}</h4>
                            <div className="modal">
                            <Button onClick={()=>handleRemove(item.id)}>Remove Item</Button>
                            <Button onClick={()=>{handleRef(item.id);onOpen();}}>Edit</Button>
                                <Modal
                                  initialFocusRef={initialRef}
                                  finalFocusRef={finalRef}
                                  isOpen={isOpen}
                                  onClose={onClose}
                                >
                                  <ModalOverlay />
                                  <ModalContent>
                                    <ModalHeader>Edit Product Details</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody pb={6}>
                                                  <label>New url</label>  
                                                  <Input placeholder="Edit Image url" name="image" value={details.image} onChange={handleChange}/>
                                                    <label>Change Price</label>
                                                  <Input placeholder="Edit price" name="offer_price" value={details.offer_price} onChange={handleChange}/>
                                                  <label>Change Discount Rate</label>
                                                  <Input placeholder="Change discount rate" name="discount" value={details.discount} onChange={handleChange}/>
                                      <Button onClick={()=>{handleAddData(ref.current);onClose()}}colorScheme='blue' mr={3}>
                                        Save
                                      </Button>
                                      <Button onClick={onClose}>Cancel</Button>
                                    </ModalBody>
                                    <ModalFooter>
                                    </ModalFooter>
                                  </ModalContent>
                                </Modal>
                                </div>
                        </div>
                    ))
                }
            </div>
            <div className="pagination">
                <Button disabled={page===1} onClick={()=>handlePage(-1)}>Prev</Button>
                <Button disabled>{page}</Button>
                <Button disabled={page===4} onClick={()=>handlePage(1)}>Next</Button>
            </div>
        </div>
    )
}
export default Men;