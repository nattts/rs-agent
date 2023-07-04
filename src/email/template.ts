const dots = require("dot");

export const template = dots.template(`
    {{~ it.array :k}}
        <h3>{{=k.title}}</h3>
        <a style="
            background-color: cornflowerblue; 
            color: white; 
            padding: 7px 10px;
            border: 2px solid pink; 
            border-radius: 10px"
        href={{=k.href}}>read</a>
    {{~}}
`);

