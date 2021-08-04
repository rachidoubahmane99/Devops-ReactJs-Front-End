import React, {Component} from 'react';
import {Card , Form ,Button,Col} from 'react-bootstrap';
import axios from 'axios';
export default class Voiture extends Component {
        constructor(props) { super(props);
            this.state={marque:'', modele:'', couleur:'', annee:'', prix:''};
            this.voitureChange = this.voitureChange.bind(this);
            this.submitVoiture = this.submitVoiture.bind(this);

        }
        submitVoiture(event) { axios.post("http://localhost:8080/voitures", Voiture)
        .then(Response =>{
        if(Response.data !=null){
                this.setState(this.initialState);
                alert("voiture ajouté avec success");
        }
        })
 }
        voitureChange(event) { this.setState ( { [event.target.name]:event.target.value } ) ; }

        render() {
            return (
                    <Form onSubmit={this.submitVoiture} id="VoitureFormId">
            <Card.Body>
            <Form.Row>
            <Form.Group as={Col} controlId="formGridMarque">
            <Form.Label> Marque </Form.Label> 
            <Form.Control name="marque" type="text" className={"bg-dark text-white"}
            placeholder= "Entrez Marque Voiture" value={this.state.marque} onChange={this.voitureChange}
            /> 
            </Form.Group>
            <Form.Group as={Col} controlId="formGridModele">
            <Form.Label> Modele </Form.Label>
            <Form.Control name="modele" type="text" className={"bg-dark text-white"} placeholder= "Entrez Modele Voiture"
            value={this.state.modele} onChange={this.voitureChange}
            />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridCouleur">
            <Form.Label> Couleur </Form.Label>
            <Form.Control name="couleur" type="text" className={"bg-dark text-white"} placeholder= "Entrez Couleur Voiture"
            value={this.state.couleur} onChange={this.voitureChange}
            />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridImatricule">
            <Form.Label> imatricule </Form.Label>
            <Form.Control name="imatricule" type="text" className={"bg-dark text-white"} placeholder= "Entrez Imatricule Voiture"
            value={this.state.imatricule} onChange={this.voitureChange}
            />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPrix">
            <Form.Label> Prix </Form.Label>
            <Form.Control name="prix" type="text" className={"bg-dark text-white"} placeholder= "Entrez Prix Voiture"
            value={this.state.prix} onChange={this.voitureChange}
            />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAnnee">
            <Form.Label> Annee </Form.Label>
            <Form.Control name="annee" type="text" className={"bg-dark text-white"} placeholder= "Entrez Annee Voiture"
            value={this.state.annee} onChange={this.voitureChange}
            />
            </Form.Group>
            </Form.Row>
            </Card.Body>
            <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit"> Submit </Button>
                    <Button size="sm" variant="info" type="rest"> rest </Button>
            </Card.Footer>
            </Form>

                    );
        }
    }