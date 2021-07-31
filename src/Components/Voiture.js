import React, {Component} from 'react';
import {Card , Form ,Button,Col} from 'react-bootstrap';
export default class Voiture extends Component {
        constructor(props) { super(props);
            this.state={marque:'', modele:'', couleur:'', annee:'', prix:''};
            this.voitureChange = this.voitureChange.bind(this);
            this.submitVoiture = this.submitVoiture.bind(this);

        }
        submitVoiture(event) { alert (this.state.marque); event.preventDefault(); }
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
            <Form.Group as={Col} controlId="formGridMarque">
            <Form.Label> Modele </Form.Label>
            <Form.Control name="modele" type="text" className={"bg-dark text-white"} placeholder= "Entrez Modele Voiture"
            value={this.state.marque} onChange={this.voitureChange}
            />
            </Form.Group>
            </Form.Row>
            </Card.Body>
            <Card.Footer style={{"textAlign":"right"}}>
                    <Button size="sm" variant="success" type="submit"> Submit </Button>
            </Card.Footer>
            </Form>

                    );
        }
    }