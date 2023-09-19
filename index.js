const head1=React.createElement("h1",{
    id:"head1",
    style:{color:"green",textAlign:"center"}
},"this is heading 1")

const head2=React.createElement("h2",{
    id:"head2",
    style:{color:"red",marginLeft:"20px"}
},"this is heading 2")

const cont=React.createElement("div",{
    className:"container"
},[head1,head2])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(cont)