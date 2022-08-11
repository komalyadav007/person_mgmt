// //document.querySelector('#button').addEventListener('click', () => {
//     // API call
//     const xhr = new XMLHttpRequest()
//     //const value = document.querySelector('#search').value

//     let url = `https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
    
//     xhr.open('GET', url)

//     xhr.onload = function() {
//         if(xhr.status === 200 && xhr.readyState === 4) {
//            // console.log(xhr.responseText);
//             const response = JSON.parse(xhr.responseText);
//            // console.log(response);
//             console.log(response.id);
            

//             let template = "";
//             for(let i=0; i < response.length; i++) {
//                 template += `

//                 <div style="width:300px;margin:20px;margin:0.5em;color:white;box-sizing:border-box;
//                 <img src="r15.jpg" style="width:100%">
//                 <h4 style="font-family:sans-serif;margin-left:2px">Title:${response[i].title}</h4>
//                 <p style=color:grey;margin-left:3px">id:${response[i].name}</p>
//                 <p style=color:grey;margin-left:3px">id:${response[i].id}</p>
//                 <p style=color:grey;margin-left:3px">id:${response[i].email}</p>
//                 <p style="font-family:monospace;margin-left:3px">body:${response[i].body}</p>

//             `;
//            }

//             document.querySelector('#container').innerHTML = template;
//         }
//     };

//     xhr.send();

var btn=document.getElementById("btn").addEventListener("click",getPost);
var con=0;
var div=document.getElementById("cardDiv");
function getPost(){
    fetch('https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09')
    .then((res)=>{
        return res.json();
    })
    .then((post)=>{
        for(let index=0;index<9;index++){
            div.innerHTML+=`
            <div class="card col-3 m-1 mx-auto">
            <div class="card-img-top" src="${post[con].email}">
            <div class="card-body">
             <h5 class="card-title">${post[con].id}</h5>
             <p class="card-text">${post[con].name}</p>
             </div>
             </div>

            `
        
        con=con+1;
        }
    })
    .catch((error)=>{
console.log(error);;
      })
}