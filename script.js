
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
            <h5 class="card-top">${post[con].id}.
            <span class="card-title">${post[con].name}</span></h5><br>
            <p class="card-top"><u>Username:</u> ${post[con].username}<br>
            <u>Email:</u> ${post[con].email}<br>
            <u>Phone:</u> ${post[con].phone}<br>
            <u>Website:</u> ${post[con].website}<br>
             
            <u>Adress:</u> ${post[con].address.street},
             ${post[con].address.suite},
             ${post[con].address.city},
             ${post[con].address.zipcode}
             ${post[con].address.geo.lat},
             ${post[con].address.geo.lng}<br>
             
             <u> Company:</u> ${post[con].company.name},
             ${post[con].company.catchPhrase},
             ${post[con].company.bs}<br>
             
             
             </p>
             </div>

            `
        con=con+1;
        }
    })
    .catch((error)=>{
console.log(error);
      })
}
