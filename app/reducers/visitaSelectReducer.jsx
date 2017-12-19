function visitaSelectReducer(state = null, action){
	switch (action.type){
		case 'ELEGIR_VISITA':
			let newState = [];
			newState = JSON.parse(JSON.stringify(action.visitaSelect));
			//console.log(action);
			return newState;
		case 'CAMBIAR_FAV':
			let nuevoEstado = JSON.parse(JSON.stringify(state));
			nuevoEstado.favourite = !nuevoEstado.favourite;
			return nuevoEstado;
		default:
			return state;
	}
}

export default visitaSelectReducer;