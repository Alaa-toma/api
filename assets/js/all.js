const price = document.getElementById("pr");
const title = document.getElementById("ti");
const asc = document.getElementById("asc");
const desc = document.getElementById("desc");
const sort_btn = document.querySelector(".sort_btn");


getresponse = async (page)=>{
    skip = (page-1)*8;
    const response = await axios.get(`https://dummyjson.com/products?limit=8&skip=${skip}`);
    return response;
};

getproduct = async (page=1)=>{
     const resp = await getresponse(page);
     const numofpages = Math.ceil(resp.data.total /8);
    console.log(resp.data);

    if (resp.status == 200){
        v = resp.data.products.map((p) => {
        return prod = `<div class="card " >
        <a   href="./det.html?id=${p.id}" > <img src="${p.thumbnail}" class="card-img-top" alt="..."> </a>
                
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-desc">${p.description}</p>
                    <a href="./det.html?id=${p.id}" class="btn btn-outline-success">details</a>
                </div>
            </div>`;


    })
    document.querySelector(".allproduct").innerHTML=v.join(" ");
    }

    let pagelink = '';

  if ((page > 1)&& (page < numofpages)) {
    pagelink += `<li class="page-item"><button class="page-link" onclick= "getproduct(${page}-1)" >Previous</button></li>`;
  } else {
    pagelink += `<li class="page-item"><button class="page-link disabled" >Previous</button></li>`;
  }
  for (let i=1; i <= numofpages; i++) {
    if ((i==1 || i== page || i== (page-1) || (i== (page+1) && (i+1 < numofpages)) || i == numofpages)  )
   { pagelink += `<li class="page-item"><button class="page-link ${i== page?"bg-info text-light":''}" onclick= "getproduct(${i})" >${i}</button></li>`;  
}else{}
}
    if ((page < numofpages) && page >1 ) {
    pagelink += `<li class="page-item"><button class="page-link" onclick= "getproduct(${page}+1)" >next</button></li>`;
  } else {
    pagelink += `<li class="page-item"><button class="page-link disabled" >next</button></li>`;
  }
document.querySelector(".pagination").innerHTML=pagelink;


};

sort_btn.addEventListener("click",async ()=>{

    let sortby, order;

    if(price.checked){
        sortby="price";
    }else{
        sortby="title";
    }
    if(asc.checked){
        order="asc";
    }else{order="desc"}

    console.log(`sort= ${sortby}, order = ${order}`);
    const response = await axios.get(`https://dummyjson.com/products?sortBy=${sortby}&order=${order}`); 
    arr = response.data.products;

         v = arr.map((p) => {
        return prod = `<div class="card " >
        <a   href="./det.html?id=${p.id}" > <img src="${p.thumbnail}" class="card-img-top" alt="..."> </a>
                
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-desc">${p.description}</p>
                    <a href="./det.html?id=${p.id}" class="btn btn-outline-success">details</a>
                </div>
            </div>`;


    })
    document.querySelector(".allproduct").innerHTML=v.join(" ");
    

}) 

getproduct();
