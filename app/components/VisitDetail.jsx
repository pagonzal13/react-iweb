import React from 'react';

//BOOTSTRAP
import { Grid, Row, Col, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

export default class VisitDetail extends React.Component {
	constructor(props) {
	    super(props);
	    this.favClick = this.favClick.bind(this);
  	}
	favClick(){
    	this.props.favClick(this.props.favourite, this.props.visitId);
  	} 
	render(){
		let pstr = this.props.plannedFor;
		let p = pstr === (null||undefined)? "" : new Date(pstr);
    	let pformatted = p === "" ? "Sin planificar" : p.toLocaleDateString();
		
		let fstr = this.props.fulfilledAt;
		let f = fstr === (null||undefined) ? "" : new Date(fstr);
    	let fformatted = f === "" ? "Pendiente" : f.toLocaleDateString();
		
    	let notes = this.props.notes === "" ? "Sin notas" : this.props.notes;
    	let favourite = this.props.favourite === true ? "yes" : "no";
    	
		return <div>
			<h2><Glyphicon className="icon" glyph="info-sign" /> Info <Glyphicon id={favourite === "yes" ? "fav" : "nofav"} glyph="star" onClick={this.favClick} /></h2>
			<Grid>
				<Row>
					<Col md={6}>
						<h4><Glyphicon className="iconList" glyph="calendar" /> Planned for:</h4>
						<span className={pformatted === "Sin planificar" ? "Empty" : "VisitDetail"}>{pformatted}</span>
					</Col>
					<Col md={6}>
						<h4><Glyphicon className="iconList" glyph="calendar" /> Fulfilled at:</h4>
						<span className={fformatted === "Pendiente" ? "Empty" : "VisitDetail"}>{fformatted}</span>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<h4><Glyphicon className="iconList" glyph="list-alt" /> Notes:</h4>
						<span className={notes === "Sin notas" ? "Empty" : "VisitDetail"}>{notes}</span>
					</Col>
				</Row>
			</Grid>
		</div>
	}
}