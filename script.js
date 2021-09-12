document.querySelector('button').addEventListener('click',imageDisplay);
function imageDisplay(){
    fetch('https://dog.ceo/api/breeds/image/random').then((response)=>response.json())
                                                    .then((data)=>{
                                                        document.body.insertAdjacentHTML('beforeend',`<br><img src="${data.message}" width="70" height="70"><br>`);
                                                    })
                                                    .catch((error)=>console.log(error));
}