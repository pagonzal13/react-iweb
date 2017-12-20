import React from 'react';
import VisitsListElement from "./VisitsListElement.jsx";

// BOOTSTRAP
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

export default class VisitsList extends React.Component {
    constructor(props) {
    	super(props);
    	this.visitClick = this.visitClick.bind(this);
  	}
  	visitClick(visita) {
    	this.props.appClick(visita);
  	}
  	render() {
  		if(this.props.visits === null) {
      return <div>
				Descargando visitas...
			</div>;
  }
	  		// console.log(this.props.visits)
		  	let visitas = this.props.visits.map((arrayVisita, numeroVisita) => {
		 		let mykey = "" + numeroVisita;
		  			return (
							<VisitsListElement key={mykey} arrayVisita={arrayVisita} visitClick={this.visitClick}/>
  );
		  	});
		    return (<div>
		    	<h2><Glyphicon className="icon" glyph="list" /> Visits</h2>
		    	<ListGroup className="TableVisits">{visitas}</ListGroup>
		    </div>
		    );

  }
}
