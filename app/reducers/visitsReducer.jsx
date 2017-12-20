function visitsReducer(state = null, action) {
    switch (action.type) {
    case 'DESCARGAR_VISITAS':
        let newState = [];
        newState = JSON.parse(JSON.stringify(action.visits));
			// console.log(action);
        return newState;
    case 'CAMBIAR_FAV':
        let nuevoEstado = JSON.parse(JSON.stringify(state));
        for (let i in nuevoEstado) {
            if(nuevoEstado[i].id === action.id) {
                nuevoEstado[i].favourite = !nuevoEstado[i].favourite;
                break;
            }
        }
        return nuevoEstado;
    default:
        return state;
    }
}

export default visitsReducer;
