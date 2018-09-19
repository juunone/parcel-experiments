import React, {Component} from "react";
import styles from "./styles.scss"
import serialize from 'serialize-javascript';
import sanitizeHtml from 'sanitize-html';
import assign from "lodash.assign";
import { hot } from 'react-hot-loader';

export default class App extends Component{
    constructor(){
        super();
        this._on = this._on.bind(this);
    }

    _on(e){
        //console.log(1312323231,e.target); 
    }
  
    _sanitizeHtml(data, settings) {
        // Basic configuration
        let CONFIG = {
            allowedTags: ["p", "div", "h4", "h5", "h6", "ul", "ol", "li", "a", "em", "strong", "br", "span", "b", "i"],
            allowedAttributesByTags: {"a": ["href", "title"], "img": ["src", "alt", "title"]},
            allowedSchemas: ["http", "https"],
        };

        let defaultSettings = {
            allowedTags: CONFIG.allowedTags,
            allowedAttributes: CONFIG.allowedAttributesByTags,
            allowedSchemes: CONFIG.allowedSchemas,
        };
        settings = assign(defaultSettings, settings);
        return sanitizeHtml(data, settings);
    }

    render(){
        return(
            <div className={styles.title}>
                <h1 onClick={(e)=>{this._on(e)}}>Hello!</h1>
                <p>World!</p>
                <b>open it!</b>
                <div dangerouslySetInnerHTML={{__html: this._sanitizeHtml('<a id="ddb">151211</a>')}}></div>
                <script>
                    window.__PRELOADED_STATE__ = ${serialize('<script>alert(1323)</script>', {isJSON: true})}
                </script>
            </div>
        )
    }
}