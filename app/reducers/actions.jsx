export function elegirVisita(visitaSelect){
	return {
		type: 'ELEGIR_VISITA',
		visitaSelect: visitaSelect
	}
}

export function descargarVisitas(visits){
	return {
		type: 'DESCARGAR_VISITAS',
		visits: visits
	}
}

export function cambiarFav(id){
	return{
		type: 'CAMBIAR_FAV',
		id: id
	}
}