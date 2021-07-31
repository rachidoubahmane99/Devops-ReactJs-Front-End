import React from 'react';
import './App.css';
import { Container, Row, Jumbotron, Col } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';
import Bienvenue from './Components/Bienvenue';
import Voiture from './Components/Voiture';
import VoitureListe from './Components/VoitureListe';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
    const marginTop = { marginTop:"20px"};
    {
       return (
           <Router>
            <NavigationBar/>
            <Container>
            <Row>
        
            <Col lg={12} style = {marginTop}>
               
                    <Switch>
                    <Route path="/" exact component={Bienvenue}/>
                    <Route path="/add" exact component={Voiture}/>
                    <Route path="/list" exact component={VoitureListe}/>
                    </Switch>
            </Col>
          
            </Row>
            </Container>
            <Footer/>
            </Router>
       );
   }
}
export default App;
