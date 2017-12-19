import React from 'react';

//BOOTSTRAP
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

export default class TargetElement extends React.Component {
	render(){
		let comName = this.props.target.Company.name  === "" ? "Sin nombre de compañía" : this.props.target.Company.name;
		let comWeb = this.props.target.Company.web1 === "" ? "Sin sitio web de compañía" : this.props.target.Company.web1;
		let comNotes = this.props.target.Company.notes === "" ? "Sin notas de compañía" : this.props.target.Company.notes;
		let tarName = this.props.target.TargetType.name === "" ? "Sin tipo de target" : this.props.target.TargetType.name;
		let tarNotes = this.props.target.notes === "" ? "Sin notas de target" : this.props.target.notes;
      return (
        <ListGroup>
          <ListGroupItem className={comName === "Sin nombre de compañía" ? "Empty" : "TargetElement"}><Glyphicon className="iconList" glyph="user" /> {comName}</ListGroupItem>
          <ListGroupItem className={comWeb === "Sin sitio web de compañía" ? "Empty" : "TargetElement"}><Glyphicon className="iconList" glyph="cloud" /> {comWeb}</ListGroupItem>
          <ListGroupItem className={comNotes === "Sin notas de compañía" ? "Empty" : "TargetElement"}><Glyphicon className="iconList" glyph="list" /> {comNotes}</ListGroupItem>
          <ListGroupItem className={tarName === "Sin tipo de target" ? "Empty" : "TargetElement"}><Glyphicon className="iconList" glyph="flag" /> {tarName}</ListGroupItem>
          <ListGroupItem className={tarNotes === "Sin notas de target" ? "Empty" : "TargetElement"}><Glyphicon className="iconList" glyph="list" /> {tarNotes}</ListGroupItem>
        </ListGroup>
      );

	}
}