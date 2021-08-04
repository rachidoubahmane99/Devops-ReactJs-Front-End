import React, {Component} from 'react';
import {Card ,Table,ButtonGroup,Button} from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';
export default class VoitureListe extends Component {
        constructor(props) { super(props);
            this.state={
                voitures : []
            };

        }
        componentDidMount(){
            axios.get("http://localhost:8080/voitures")
            .then(response => response.data)
            .then((data)=>{
                this.setState({voitures:data});
            });
        }
        render() { return ( 
                <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header> Liste Voitures </Card.Header> 
                <Card.Body>
                <Table bordered hover striped variant="dark">
                <thead>
                <tr>
                <th>Marque</th>
                <th>Modele </th>
                <th>Couleur</th>
                <th>Annee</th>
                <th>Prix</th>
                </tr>
                </thead>
                <tbody>
                {
                this.state.voitures.length === 0 ?
                <tr align="center">
                <td colSpan="6"> voiturs disponible</td>
                </tr> :
                this.state.voitures.map((voiture) =>(
                <tr key={voiture.id}>
                <td>{voiture.marque}</td>
                <td>{voiture.couleur}</td>
                <td>{voiture.immatricule}</td>
                <td>{voiture.annee}</td>
                <td>{voiture.prix}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}/></Button>{' '}
                        <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash}/></Button>
                    </ButtonGroup>
                </td>
                    
                </tr>
                ))
                }
                
                </tbody>
                </Table>
                </Card.Body>
                </Card>
        );        
        }
                }

