const parent = document.getElementById("parent");
//console.log(parent);
const root = ReactDOM.createRoot(parent);
const h2 = React.createElement("h2", {style:{backgroundColor:"#6B8E23"}}, "Welcome to React Dom");
const li1 =React.createElement("li", {style:{backgroundColor:"#87CEEB"}}, "java");
const li2 =React.createElement("li", {style:{backgroundColor:"#DDA0DD"}}, "python");
const li3 =React.createElement("li", {style:{backgroundColor:"#98FB98"}}, "React");
const ul =React.createElement("ul", {style:{backgroundColor:"#FFE4E1"}}, li1,li2,li3);
const pic =React.createElement("img", {
    src:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    style:{height:'200px',width:'200px'}
});
const myname=React.createElement("h1", {}, "Vishnu Pathak");
const image = React.createElement("div", {style:{display:'flex', alignItems:'center',gap:"50px"}}, pic, myname);
const hr = React.createElement("hr", {style:{ border:'2px solid #333'}});
const wrapper =React.createElement("div", {}, h2,image,hr,ul);
root.render(wrapper);