import React from 'react';
import VisitDetail from "./VisitDetail.jsx";
import TargetDetail from "./TargetDetail.jsx";
import CustomerDetail from "./CustomerDetail.jsx";
import SalesmanDetail from "./SalesmanDetail.jsx";

// BOOTSTRAP
import { Grid, Row, Col } from 'react-bootstrap';

export default class Detail extends React.Component {
    constructor(props) {
    	super(props);
    	this.favClick = this.favClick.bind(this);
  	}
    favClick(esfav, visitId) {
    	this.props.appFavClick(esfav, visitId);
  	}
    render() {
        if(this.props.visita === null) {
            return <div className="DefaultDetail">
				Select a visit to see its details
			</div>;
        }
        let plannedFor = this.props.visita.plannedFor;
        let fulfilledAt = this.props.visita.fulfilledAt;
        let notes = this.props.visita.notes;
        let visitId = String(this.props.visita.id);
        let favourite = this.props.visita.favourite;
        let targets = this.props.visita.Targets;
        let customer = this.props.visita.Customer;
        let salesman = this.props.visita.Salesman;
        return <Grid fluid>
				<Row><Col md={12}><VisitDetail plannedFor={plannedFor} fulfilledAt={fulfilledAt} notes={notes} favClick={this.favClick} visitId={visitId} favourite={favourite} /></Col></Row>
				<Row><Col md={12}><TargetDetail targets={targets}/></Col></Row>
				<Row>
					<Col md={6}><CustomerDetail customer={customer}/></Col>
					<Col md={6}><SalesmanDetail salesman={salesman}/></Col>
				</Row>
			</Grid>;

    }
}
