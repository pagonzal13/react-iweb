import React from 'react';

// BOOTSTRAP
import { Glyphicon, Button, ListGroupItem } from 'react-bootstrap';

export default class VisitsListElement extends React.Component {
    constructor(props) {
        super(props);
        this.vElementClick = this.vElementClick.bind(this);
    }
    vElementClick() {
        this.props.visitClick(this.props.arrayVisita);
    }

    render() {
  	let nameCustomer = this.props.arrayVisita.Customer.name;
        let nameSalesman = this.props.arrayVisita.Salesman.fullname;
        let plannedFor = this.props.arrayVisita.plannedFor;
        let d = new Date(plannedFor);
        let dstr = d.toLocaleDateString();

        return (<ListGroupItem>
                  <Button className="BotonVisitas" onClick={this.vElementClick}>
                      <p><Glyphicon className="iconList" glyph="briefcase" /> {nameCustomer}</p>
                      <p><Glyphicon className="iconList" glyph="shopping-cart" /> {nameSalesman}</p>
                      <p><Glyphicon className="iconList" glyph="calendar" /> {dstr}</p>
                  </Button>
                </ListGroupItem>
        );
    }
}
