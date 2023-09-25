import React from "react";
import ReactDOM from "react-dom/client";
const myName="sidharth surya"
const head1=<h1>this is {myName}</h1>//React element

//React component   nothing but normal fn. which will return some piece of jsx or react element
const HeaderComponenet=()=>{
    return (
        <div>
            {head1}
            <p>Made by learning react</p>
            <FooterComp/>
        </div>
    )
}
const FooterComp=()=>{
    return (
        <div>
            <p>all copyrights reserved</p>
        </div>
    )
}

console.log(head1);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponenet />)