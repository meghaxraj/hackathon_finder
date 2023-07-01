let url = "https://kontests.net/api/v1/all"
let reponse = fetch(url)
let cardcontainer = document.getElementById("cardcontainer")
reponse.then((v)=>{
    return v.json()
}).then((v)=> {
    console.log(v)
    ihtml = ""
    for (item in v){
        console.log(v[item])
        ihtml += `<div class="card m-2" style= "width: 22em;">
        <img src="public/${v[item].name}.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${v[item].name}</h5>
            <p class="card-text">Start on: ${v[item].start_time}</p>
            <p class="card-text">End on: ${v[item].end_time}</p>
            <a href="${v[item].url}" class="btn btn-primary">Know more</a>
        </div>
    </div>`
    }
    cardcontainer.innerHTML = ihtml
})
