(()=>{const e=e=>{const[t,a]=React.useState(e.username);return React.createElement("div",null,React.createElement("p",null,"Hello ",t),React.createElement("label",null,"Change Name: "),React.createElement("input",{type:"text",value:t,onChange:e=>a(e.target.value)}))};window.onload=()=>{ReactDOM.render(React.createElement(e,{username:"Alex"}),document.getElementById("app"))}})();