import React from 'react';
import './../assets/scss/main.scss';
import $ from 'jquery';
import { connect } from 'react-redux';
import { elegirVisita, descargarVisitas, cambiarFav } from './../reducers/actions';
import VisitsList from "./VisitsList.jsx";
import Detail from "./Detail.jsx";

// BOOTSTRAP
import { Grid, Row, Col, Panel } from 'react-bootstrap';

class App extends React.Component {
    constructor(props) {
    	super(props);
    	this.appClick = this.appClick.bind(this);
    	this.appFavClick = this.appFavClick.bind(this);
  	}

  	componentDidMount() {
  		let querystring = location.search;
  		let urlstr = "";
  		if (querystring.includes("?")) {
  			querystring = querystring.replace("?", "&");
  			// console.log(querystring)
  			urlstr = "https://dcrmt.herokuapp.com/api/visits/flattened?token=b37682686028434bb137" + querystring;
  		}else{
  			// console.log(querystring)
  			urlstr = "https://dcrmt.herokuapp.com/api/visits/flattened?token=b37682686028434bb137" + querystring;
  		}
  		let descarga = $.ajax({
  			url: urlstr,
  		})
  		// console.log(descarga);
  		.done(function(data) {
  			// console.log(data);
  			this.props.dispatch(descargarVisitas(data));
  		}.bind(this));
  	}

    appClick(visita) {
        this.props.dispatch(elegirVisita(visita));
  	}
  	appFavClick(esfav, visitId) {
  		let urlstrPUT = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/" + visitId + "?token=b37682686028434bb137&_method=PUT";
  		let urlstrDELETE = "https://dcrmt.herokuapp.com/api/users/tokenOwner/favourites/" + visitId + "?token=b37682686028434bb137&_method=DELETE";
  		if (esfav) {
  			// console.log("Pasa de favorito a noFavorito");
  			$.ajax({
  				url: urlstrDELETE,
  			})
  			.done(function(data) {
  				// console.log(data);
  				if(data === "OK") {
  					this.props.dispatch(cambiarFav(visitId));
  				}else{console.log("Error al cambiar estado favorito");}
  			}.bind(this));
  		}else{
  			// console.log("Pasa de noFavorito a favorito");
  			$.ajax({
  				url: urlstrPUT,
  			})
  			.done(function(data) {
  				// console.log(data);
  				if(data === "OK") {
  					this.props.dispatch(cambiarFav(visitId));
  				}else{console.log("Error al cambiar estado favorito");}
  			}.bind(this));
  		}
  	}
    render() {
	    return (<div>
	    	<Grid fluid><h1><Panel header="CRM - IWEB (Paula y Ángel)" bsStyle="info" /></h1></Grid>
	    	<Grid fluid>
	    		<Row>
	    			<Col md={3}><VisitsList visits={this.props.visits} appClick={this.appClick}/></Col>
	    			<Col md={9}><Detail visita={this.props.visitaSelect} appFavClick={this.appFavClick}/></Col>
	    		</Row>
	    	</Grid>
	    	</div>
	    );
    }
}
function mapStateToProps(state) {
    return{
        visits: state.visits,
        visitaSelect: state.visitaSelect,
    };
}
export default connect(mapStateToProps)(App);

