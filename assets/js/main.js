
getresponse = async () => {
    const response = await axios.get(`https://dummyjson.com/products?limit=8`);
    console.log(`response ${response.data.products}`);
    return response;
};

gethprod = async () => {
    const hres = await getresponse();
    prodarr = hres.data.products;
   

    v = prodarr.map((p) => {
        return prod = `<div class="card " >
        <a   href="./det.html?id=${p.id}" > <img src="${p.thumbnail}" class="card-img-top" alt="..."> </a>
                
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-desc">${p.description}</p>
                    <a href="./det.html?id=${p.id}" class="btn btn-outline-success">details</a>
                </div>
            </div>`;


    })
    document.querySelector(".product_card").innerHTML = v.join(" ");

}

getcateg = async () => {
    const categ_resp = await axios.get(`https://dummyjson.com/products/category-list`);
    x = categ_resp.data.map((prod) => {
        return `<a class="p-4 text-light" href="./productofcateg.html?category=${prod}"> ${prod} </a>`
    });
    document.querySelector(".categories").innerHTML = x.join(" ");
};

gethprod();
getcateg();



