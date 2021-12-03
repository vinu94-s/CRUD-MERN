
import React,{useEffect} from 'react'
import { Button,Container,Row }from "react-bootstrap";
import "./Landingpage.css";
const Landingpage = ({ history }) => {

    
    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");
         
       if (userInfo) {
       history.push("/notes");
      }  
      }, [history]);
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                           <h1 className="title">Welcome</h1>
                           <p className="subtittle">one safe place for all your notes</p>
                     </div>
                     <div className="buttonContainer">
                       <a href="/login">
                    <Button size='lg' className="landingbutton">Login</Button>
                       </a>
                       <a href="/register">
                    <Button size='lg' className="landingbutton" variant="outline-primary">Signup</Button>
                       </a>
                         </div>
                    </div>
                </Row>
            </Container>
            
        </div>
    )
}

export default Landingpage
