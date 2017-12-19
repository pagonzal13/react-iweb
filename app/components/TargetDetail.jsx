import React from 'react';
import TargetElement from "./TargetElement.jsx";

//BOOTSTRAP
import { ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';

export default class TargetDetail extends React.Component {

	render(){
		if(this.props.targets === undefined){
			return <div>
				Targets undefined
			</div>
		}else if(this.props.targets.length === 0){
			return <div>
				<h3><Glyphicon className="icon" glyph="pushpin" /> Targets</h3>
				<ListGroup>
					<ListGroupItem className="Empty">No hay targets</ListGroupItem>
				</ListGroup>
			</div>
		}else{
			let targets = this.props.targets.map((target, numeroTarget) => {
	 			let mykey = "" + numeroTarget;
		  			return (<ListGroupItem key={mykey}>
							<TargetElement target={target}/>
						</ListGroupItem>
					);
	  		});
			return (<div>
				<h3><Glyphicon className="icon" glyph="pushpin" /> Targets</h3>
				<ListGroup>{targets}</ListGroup>
			</div>
			);
		}
	}
}