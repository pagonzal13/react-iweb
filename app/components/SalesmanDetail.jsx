import React from 'react';

//BOOTSTRAP
import { Image, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

export default class SalesmanDetail extends React.Component {

	render(){
		if(this.props.salesman === undefined){
			return <div>
				Salesman undefined
			</div>
		}else{
			let pic = this.props.salesman.Photo === null ? "" : this.props.salesman.Photo.url;
			let fullname = this.props.salesman.fullname === "" ? "Sin nombre" : this.props.salesman.fullname;
			let email1 = this.props.salesman.email1 === "" ? "Sin email" : this.props.salesman.email1;
			let phone1 = this.props.salesman.phone1 === "" ? "Sin teléfono" : this.props.salesman.phone1;
			return <div>
				<h3><Glyphicon className="icon" glyph="shopping-cart" /> Salesman</h3>
				<Image src={pic} className="Imagen"/>
				<ListGroup>
					<ListGroupItem className={fullname === "Sin nombre" ? "Empty" : "SalesmanDetail"}><Glyphicon className="iconList" glyph="user" /> {fullname}</ListGroupItem>
					<ListGroupItem className={email1 === "Sin email" ? "Empty" : "SalesmanDetail"}><Glyphicon className="iconList" glyph="envelope" /> {email1}</ListGroupItem>
					<ListGroupItem className={phone1 === "Sin teléfono" ? "Empty" : "SalesmanDetail"}><Glyphicon className="iconList" glyph="phone" /> {phone1}</ListGroupItem>
				</ListGroup>
			</div>
		}
	}
}