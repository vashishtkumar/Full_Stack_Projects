let table=document.querySelector("table");
let product;
async function fetchData(){
  let res=await fetch("./product.json");
  res=await res.json();
  console.log(res);
  product=res;  

  product.forEach((item)=>{
    let tr=document.createElement("tr");
    let th1=document.createElement("td");
th1.innerText=item.product_id;
th1.style.backgroundColor="red";
let th2=document.createElement("td");
th2.innerText=item.title;
let th3=document.createElement("td");
th3.innerText=item.price;
let th4=document.createElement("td");
th4.innerText=item.category;
tr.append(th1,th2,th3,th4);
table.appendChild(tr);
})
}


let tr=document.createElement("tr");
let th1=document.createElement("th");
th1.innerText="product_id";
let th2=document.createElement("th");
th2.innerText="title";
let th3=document.createElement("th");
th3.innerText="price";
let th4=document.createElement("th");
th4.innerText="catogory";

tr.append(th1,th2,th3,th4);
table.appendChild(tr);

fetchData();

document.addEventListener("click",(event)=>{
    let clicked=event.target;
if(clicked.tagName==="TD"){
    if(clicked.innerText==="Bluetooth Speaker"){
        let row=clicked.parentElement;
        row.style.color="blue";
    }
}
})