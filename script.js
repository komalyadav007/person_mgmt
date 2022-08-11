
var btn=document.getElementById("btn").addEventListener("click",getPost);
var con=0;
var div=document.getElementById("cardDiv");
function getPost(){
    fetch('https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09')
    .then((res)=>{
        return res.json();
    })
    .then((post)=>{
        for(let index=0;index<10;index++){
            div.innerHTML+=`
            <div class="card col-4 m-1 mx-auto">
            <h5 class="card-top">${post[con].id}
            <span class="card-title">${post[con].name}</span></h5>
            <div class="card-top">Username:"${post[con].username}"
            <div class="card-body">Email:"${post[con].email}"
             
             <p class="card-text">Adress:"${post[con].address.street},
             ${post[con].address.suite},
             ${post[con].address.city},
             
             ${post[con].address.zipcode}</p>
             <p>
             ${post[con].address.geo.lat},
             ${post[con].address.geo.lng}"</p>
             <p>
             <div class="card-body">Phone:"${post[con].phone}"
             <div class="card-body">Website:"${post[con].website}"
             <div class="card-body">Company:"${post[con].company.name},
             ${post[con].company.catchPhrase},
             ${post[con].company.bs}"
             
             </p>
             </div>
             </div>

            `
        con=con+1;
        }
    })
    .catch((error)=>{
console.log(error);
      })
}
