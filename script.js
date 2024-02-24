try {
  let div=document.createElement("div");
let breweryImg=document.createElement("img");
breweryImg.setAttribute("src","brewery img.png")
let header=document.createElement("h1");
header.innerText="Brewery DataBase";
let inputfield=document.createElement("input");
inputfield.setAttribute("type","text");
inputfield.setAttribute("placeholder","Search for Brewery's Info........");
let button=document.createElement("button");
button.setAttribute("id","button")
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerText="Search";
button.addEventListener("click",foo);
div.append(header,inputfield,button);
document.body.append(breweryImg,div);
// implemeting search filter

async function foo(){
    let res=await fetch(`https://api.openbrewerydb.org/v1/breweries/search?query={${inputfield.value}}`);
    res=await res.json();
    if (res.length > 0) {
      return fun(res);
  } else {
    alert("No breweries found.");
      inputfield.value=null;
  }
}

let container=document.createElement("div");
container.setAttribute("class","container");
let row=document.createElement("div");
row.setAttribute("class","row");
container.append(row);
document.body.append(container);
function fun(data){
  // console.log(location.host);
  if(data.length===1){
    document.body.style.backgroundImage = "url('single data.jpg')";
   div.style.display="none";
  row.innerHTML=`
  <div class="col-lg-12">
  ${header.innerHtml=`<h1 class="headers">Brewery Data<h1>`}
  <div class="card cards border-white mb-3" style="max-width: 30rem;max-height:20rem;">
      <h5 class="card-header text-white">${data[0].name}<h5>
      <div class="card-body text-white">
        <h5 class="card-title">Type:${data[0].brewery_type}</h5>
        <h5 class="card-title">Address:${data[0].address_1}</h5>
        <h5 class="card-title">Phone-No:${data[0].phone}</h5>
        <div class="card-footer bg-transparent"><a href="${data[0].website_url}" ><button class="bg-light border-dark" type="button">click for website </button></a></div>
    </div>
</div>
<a href="http://${location.host}" ><button class="btn btn-primary"type="button">Go back</button></a>
`
  inputfield.value=null;
}
else if(data.length===2){
  document.body.style.backgroundImage = "url('double data.jpg')";
  div.style.display="none";
  container.style.marginTop="0px", row.style.marginTop="0px";
 row.innerHTML=`
  <div class="col-md-12 ">
  <h1 class="header1">Brewery Data<h1>
    <div class="card card1 border-white" style="max-width: 25rem;max-height:15rem;">
            <h5 class="card-header text-white">${data[0].name}<h5>
            <div class="card-body text-white">
              <h5 class="card-title">Type:${data[0].brewery_type}</h5>
      <h5 class="card-title">Address:${data[0].address_1}</h5>
              <h5 class="card-title">Phone-No:${data[0].phone}</h5>
              <div class="card-footer bg-transparent"><a href="${data[0].website_url}" ><button class="bg-light border-dark" type="button">click for website </button></a></div>
          </div>
    </div>
    <p></p>
  <div class="col-md-12">
  <div class="card border-white mb-3 double" style="max-width: 25rem;max-height:15rem;">
  <h5 class="card-header text-white">${data[1].name}<h5>
  <div class="card-body text-white">
    <h5 class="card-title">Type:${data[1].brewery_type}</h5>
    <h5 class="card-title">Address:${data[1].address_1}</h5>
    <h5 class="card-title">Phone-No:${data[1].phone}</h5>
    <div class="card-footer bg-transparent"><a href="${data[1].website_url}" ><button class="bg-light border-dark" type="button">click for website </button></a></div>
      </div>
</div>
<a href="http://${location.host}" ><button class="btn btn-primary"type="button">Go back</button></a>
`
inputfield.value=null;
}
else{
  document.body.style.backgroundImage = "url('mutiple data.jpg')";
  document.body.style.backgroundRepeat= "repeat";
  document.body.style.backgroundSize= "contain";
  div.style.display="none";
  header.innerHTML=` <h1 class="header3">Brewery's Data<h1>`
for (var i in data){
  row.innerHTML+=`
  <div class="col-md-4">
  <div class="card card3 border-white" style="max-width: 18rem;max-height:20rem;">
      <h5 class="card-header text-dark">${data[i].name}<h5>
      <div class="card-body text-dark">
        <h5 class="card-title">Type:${data[i].brewery_type}</h5>
        <h5 class="card-title">Address:${data[i].address_1}</h5>
        <h5 class="card-title">Phone-No:${data[i].phone}</h5>
        <div class="card-footer bg-transparent"><a href="${data[i].website_url}" ><button class="bg-light border-dark" type="button">click for website </button></a></div>
    </div>
</div>
`}
let button1=document.createElement("div");
button1.innerHTML=`
<a href="http://${location.host}" ><button class="btn space btn-primary"type="button">Go back</button></a>
`
document.body.append(header,row,button1);
}
}
// // Event listener for keyup event
document.addEventListener("keyup",(events)=>{
  let keyValue=events.key;
  console.log(events)
  if(keyValue==="Enter"){
   foo();
  }
})
} catch (error) {
  console.log("Error")
}