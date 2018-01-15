import React,{Component} from "react";
import ReactDom from "react-dom";
require("../css/main.less")
class ComponentMain extends Component{
     render(){
         return <article>
             <header>less 抽出</header>
         </article>
     }
}

ReactDom.render(<ComponentMain />,document.querySelector(".router"))
