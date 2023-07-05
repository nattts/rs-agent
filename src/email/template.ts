import * as dots from "dot";

export const template = dots.template(`
<div>
    {{~ it.array :k}}
        <ul>
            <li>
                <a 
                    style="
                        display: block;
                        color: white; 
                        padding: 7px 10px;
                        margin: 10px;
                        "
                        href={{=k.href}}>{{=k.title}}
                </a>
            </li>
        </ul>
    {{~}}
    </div>
`);

