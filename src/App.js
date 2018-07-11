import React, {Component} from "react";
import styles from "./styles.scss"

export default class App extends Component{
    constructor(){
        super();
        this._on = this._on.bind(this);
    }

    _on(e){
       console.log(1312323231,e.target); 
    }

    render(){
        return(
            <div className={styles.title}>
                <h1 onClick={(e)=>{this._on(e)}}>Hello!</h1>
                <p>World!</p>
                <b>open it!</b>
            </div>
        )
    }
}