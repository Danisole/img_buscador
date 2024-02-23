import React, { Component } from "react";

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) =>{
        e.preventDefault();

        //tomamos el valor del input y lo enviamos al componente principal
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }

    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-goup col-md-8">
                        <input ref={this.busquedaRef}
                        type="text" 
                        className="form-control" 
                        placeholder="Busca tu imagen..."/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-danger btn-block" value="Buscar"style={{borderRadius: '8px'}}/>
                    </div>
                </div>
            </form>
        )
    }
}
export default Buscador;