import React,{Component} from 'react'
import './../css/login.css';
import logo from './../img/logo.png'
import {Redirect} from 'react-router-dom'

//import { Link } from "react-router-dom";
import axios from 'axios';
export default class Form extends Component {
    state={
        user:'',
        password:'',
        loggedIn:false,
        loading:false,
        errorInvalid:false
    }
    handleChange (evt, field) {
       this.setState({ [field]: evt.target.value });
      }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({loading:true})
        const email ={
            user: this.state.user
        }
        const pass ={
            password: this.state.password
        }
        axios({
            method: 'POST',
            url: "https://documente-env.eba-pb2a4dyw.us-east-1.elasticbeanstalk.com/loginTest",
            data: {
                email: email.user,
                pass: pass.password
            }
          }).then((response) => {
              console.log(response.status);
            if(response.status === 200){
                this.setState({
                    loggedIn: true,
                    loading:false
                })
                localStorage.setItem('email', email.user);
                localStorage.setItem('pass', pass.password);

            }
          }, (error) => {
            console.log(error);
            localStorage.clear();
            this.setState({
                errorInvalid:true,
                loading:false
            })
          });
    }

    render(){
        localStorage.clear();
        const { loading } = this.state;
        const { errorInvalid  } = this.state;
        if(this.state.loggedIn){
            return <Redirect to="/codigo"/>
        }
        return(
            <div class="loginclass">
            <form onSubmit={this.handleSubmit}>
                <img src={logo} class="logo-img"></img>
                <p  align="center">  
                    <label>Usuario </label>
                    <br></br>
                    <input
                    id="name"
                    type="email"
                    name="user"
                    class="input_style"
                    onChange={(event)=>this.handleChange(event, "user")}
                    >
                    </input>
                    <br></br>
                    <br></br>
                    <label>Contraseña </label>
                    <br></br>
                    <input
                    type="password"
                    id="pass"
                    name="password"
                    class="input_style"
                    onChange={(event)=>this.handleChange(event, "password")}
                    >
                    </input>
                    <p></p>

                    <button type="submit" class="button buttonlogin" disabled={loading}>
                    {loading && (
                        <i
                        className="fa fa-refresh fa-spin"
                        style={{ marginRight: "5px" }}
                        />
                    )}
                    {loading && <span>Iniciando...</span>}
                    {!loading && <span>Iniciar Sesión</span>}
                    </button>
                    <br></br>
                    {errorInvalid && <label class="errortoken">Usuario o contraseña invalido</label>}
                </p>
            </form>
            </div>
        )
}

}