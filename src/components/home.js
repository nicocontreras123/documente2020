import React,{Component} from 'react'
import Header from './header';
import LeftMenu from './left-menu';
import './../css/home.css';

export default class Form extends Component {
    render(){
    
        return(
            <div>
                <Header/>
                <LeftMenu/>
            </div>
        )
}

}