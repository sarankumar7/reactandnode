import React ,{useState}from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import MaterialMovement from "../Forms/MaterialMove";
import VehicleEntry from "../Forms/VehicleEntry"
import ToolsandEquipment from "../Forms/ToolsandEquipment";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
const HomePage = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [buttonOne, setButtonOne] = useState(true);
  const [buttonTwo, setbuttonTwo] = useState(false);
  const [buttonThree, SetbuttonThree] = useState(false);
  if (!currentUser) {
    return <Redirect to="/login" />;
  } 

const onClickB1=()=>{
  setButtonOne(true);
  setbuttonTwo(false);
  SetbuttonThree(false)
}
const onClickB2=()=>{
  setButtonOne(false);
  setbuttonTwo(true);
  SetbuttonThree(false)
}
const onClickB3=()=>{
  setButtonOne(false);
  setbuttonTwo(false);
  SetbuttonThree(true)
}
  return (
    <div style={{background:"#17223B",height:"100%"}} >
       <ButtonGroup size="lg" className="mb-2" style={{margin:"10px"}}>
    <Button onClick={onClickB1}>Movement Permit</Button>
    <Button onClick={onClickB2}>Vehicle Entry</Button>
    <Button onClick={onClickB3}>Tools and Equipment</Button>
  </ButtonGroup>
    <Container>
   

  {buttonOne && 
 <MaterialMovement/>
  }
   { buttonTwo && 
    <VehicleEntry/>
   }
    
    {
      buttonThree &&
      <ToolsandEquipment/>
    }
 

    </Container>
    </div>
  );
};

export default HomePage;
