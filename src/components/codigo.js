import React,{Component} from 'react'
import './../css/login.css';
import logo from './../img/logo.png'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

export default class codigo extends Component {
    state={
        codigo:'',
        loggedInCod:false,
        loading:false,
        errorInvalid:false
    }
    handleChange (evt, field) {
        this.setState({ [field]: evt.target.value });
       }
     
     handleSubmit = event => {
         event.preventDefault();
         this.setState({loading:true})
         var email = localStorage.getItem('email');
         var pass = localStorage.getItem('pass');
         const codigo ={
             codigo: this.state.codigo
         }
         

         axios({
             method: 'POST',
             url: "https://documente-env.eba-pb2a4dyw.us-east-1.elasticbeanstalk.com/loginTest/claveDinamica",
             data: {
                 email: email,
                 pass: pass,
                 claveDinamica: codigo.codigo
             }
           }).then((response) => {
               console.log(response.status);
             if(response.status === 200){
                 this.setState({
                    loggedInCod: true,
                     loading:false
                 })
             }
           }, (error) => {
             console.log(error);
             this.setState({
                loggedInCod: false,
                errorInvalid:true,
                 loading:false
             })
           });
     }
    render(){
        const { loading } = this.state;
        const { errorInvalid  } = this.state;
        if(this.state.loggedInCod){
            return <Redirect to="/home"/>
        }
        return(
            <div class="loginclass">
            <form onSubmit={this.handleSubmit}>
            <img src={logo} class="logo-img"></img>
            <h1>Introducir código de verificación</h1>
            <h2>Acabamos de enviar un SMS con el codigo
                de confirmación, ingrésalo aqui abajo.
            </h2>
            <p align="center">
            <label>Codigo</label>
            <br></br>
            <input type="number"
            min="0" max="999999"
            maxLength={6}
            class="input_style"
            onChange={(event)=>this.handleChange(event, "codigo")}
            ></input>
            <br></br>
            <button type="submit" class="button buttonlogin" disabled={loading}>
                    {loading && (
                        <i
                        className="fa fa-refresh fa-spin"
                        style={{ marginRight: "5px" }}
                        />
                    )}
                    {loading && <span>Comprobando...</span>}
                    {!loading && <span>Enviar</span>}
                    </button>
                    <br></br>
                    {errorInvalid && <label class="errortoken">Codigo invalido!</label>}
            </p>
            <Link to="/"><label>
                Volver atras
                </label></Link>
            </form>
            
            </div>
        )
}

}