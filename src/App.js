//import React, { Component } from "react";
import React, { Component } from "react";
import "bootswatch/dist/morph/bootstrap.min.css";
import Navbar from "./componentes/Navbar/Navbar";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";



class App extends Component {

      state = {
        termino: '',
        imagenes : [],
        pagina:""
      }

      scroll =()=>{
        const elemento = document.querySelector('.jumbotron')
        elemento.scrollIntoView('smooth', 'end')
      }

      paginaAnterior = () =>{
         //leer el state de la pag actual
         let pagina = this.state.pagina

         //leer si la pag es 1 no es atras
         if(pagina === 1) return null;

         //resta uno a la pag actual
           pagina -=1
 
 
         //agregar el cambio al state
           this.setState({
             pagina
           }, ()=>{
            this.consultarApi();
            this.scroll();
           });
 
 
         //console.log(pagina);
      }

      paginaSiguiente = () =>{
        //leer el state de la pag actual
          let pagina = this.state.pagina

        //sumar uno a la pag actual
          pagina +=1


        //agregar el cambio al state
          this.setState({
            pagina
          }, () =>{
            this.consultarApi();
            this.scroll();
          });


        //console.log(pagina);
      }

      consultarApi = () =>{
        const termino = this.state.termino;
        const pagina = this.state.pagina;
        const url = `https://pixabay.com/api/?key=33431688-971fd0c32bf9f85443ff20c4f&q=${termino}&per_page=20&page=${pagina}`;
        console.log(url);
        fetch(url)
          .then(respuesta => respuesta.json())
          .then(resultado => this.setState({ imagenes : resultado.hits }))
      }

      datosBusqueda = (termino) =>{
        this.setState({
          termino : termino,
          pagina: 1
        }, () => {
          this.consultarApi();
        })
        
      }

      render(){

        return(
          <div className="app">
            <Navbar/>

            <div className="container mt-4">
              <div className="jumbotron">
                <Buscador datosBusqueda={this.datosBusqueda}/>
              </div>
            
              <div className="row justify-content-center">
                  <Resultado
                      imagenes={this.state.imagenes}
                      paginaAnterior={this.paginaAnterior}
                      paginaSiguiente={this.paginaSiguiente}

                  />
              </div>
            </div>
          </div>
          
          
        )
      };  
}

export default App;
