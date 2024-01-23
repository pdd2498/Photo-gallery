const but = document.querySelector("#button");
var no = 1;
but.addEventListener("click" , searchPhoto)









function searchPhoto(){
    no = 1;
    const ul = document.querySelector('#ul')
    ul.innerHTML = "";
    const search = document.querySelector('#input').value;
    var data ;
    console.log(search);
    fetch(`https://api.unsplash.com/search/photos?page=${no}&query=${search}&client_id=7ZivbZ5QY1ZAklrvfgURZq0tz4Pkt63fj5Iqx2gflkU`)
.then(response => response.json())
.then(pro => {
    data = pro;
    console.log(data)
    printData(data);
})
.catch(response => {
    alert("Something went wrong. [1001]")
})

}



function printData(data){
    const ul = document.querySelector('#ul')
    

    for(let i = 0;i<10;i++){

        const li = document.createElement('li');
        const img = document.createElement('img');
        img.className = "imags";
        const spn = document.createElement('span');
        spn.className = "youno"
        
        
        img.src = data.results[i].urls.full;
        spn.innerText = data.results[i].alt_description;
        li.append(img , spn);
        ul.append(li);
    }
    const itm = document.querySelector('#more');
    itm.innerHTML = "";
    const more = document.createElement('span');
    more.className = 'more'
    more.innerText = 'Lode more'
    itm.append(more);
    
    itm.addEventListener("click" , (e)=>{
        no++;
        lodePhoto();
    })
}


function lodePhoto(){
    
    const search = document.querySelector('#input').value;
    var data ;
    console.log(search);
    fetch(`https://api.unsplash.com/search/photos?page=${no}&query=${search}&client_id=7ZivbZ5QY1ZAklrvfgURZq0tz4Pkt63fj5Iqx2gflkU`)
.then(response => response.json())
.then(pro => {
    data = pro;
    console.log(data)
    printData(data);
})
}