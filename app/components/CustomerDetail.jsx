import React from 'react';

//BOOTSTRAP
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

export default class CustomerDetail extends React.Component {

	render(){
		if(this.props.customer === undefined){
			return <div>
				Customer undefined
			</div>
		}else{
			let name = this.props.customer.name === "" ? "Sin nombre" : this.props.customer.name;
			let code = this.props.customer.code === "" ? "Sin código" : this.props.customer.code;
			let cif = this.props.customer.cif === "" ? "Sin cif" : this.props.customer.cif;
			let address1 = this.props.customer.address1 === "" ? "Sin dirección" : this.props.customer.address1;
			let postalCode = this.props.customer.postalCode === "" ? "Sin código postal" : this.props.customer.postalCode;
			let phone1 = this.props.customer.phone1 === "" ? "Sin teléfono" : this.props.customer.phone1;
			let email1 = this.props.customer.email1 === "" ? "Sin email" : this.props.customer.email1;
			let web = this.props.customer.web === "" ? "Sin sitio web" : this.props.customer.web;

			return <div>
				<h3><Glyphicon className="icon" glyph="briefcase" /> Customer</h3>
				<ListGroup>
					<ListGroupItem className={name === "Sin nombre" ? "Empty" : "CustomerDetail"}><Glyphicon className="iconList" glyph="user" /> {name}</ListGroupItem>
					<ListGroupItem className={code === "Sin código" ? "Empty" : "CustomerDetail"}><Glyphicon className="iconList" glyph="barcode" /> {code}</ListGroupItem>
					<ListGroupItem className={cif === "Sin cif" ? "Empty" : "CustomerDetail"}><Glyphicon className="iconList" glyph="tag" /> {cif}</ListGroupItem>
					<ListGroupItem className={address1 === "Sin dirección" ? "Empty" : "CustomerDetail"}><Glyphicon className="iconList" glyph="home" /> {address1}, {this.props.customer.city}</ListGroupItem>
					<ListGroupItem className={postalCode === "Sin código postal" ? "Empty" : "CustomerDetail"}><Glyphicon className="iconList" glyph="map-marker" /> {postalCode}</ListGroupItem>
					<ListGroupItem className={phone1 === "Sin teléfono" ? "Empty" : "CustomerDetail"}><Glyphicon className="iconList" glyph="phone" /> {phone1}</ListGroupItem>	
					<ListGroupItem className={email1 === "Sin email" ? "Empty" : "CustomerDetail"}><Glyphicon className="iconList" glyph="envelope" /> {email1}</ListGroupItem>	
					<ListGroupItem className={web === "Sin sitio web" ? "Empty" : "CustomerDetail"}><Glyphicon className="iconList" glyph="cloud" /> {web}</ListGroupItem>
				</ListGroup>
			</div>
		}
	}
}