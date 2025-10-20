getprod = async () => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
    arr = response.data.products ;
console.log(arr);
    val = arr.map((e)=>{
        return `<div class="card " >
                <a     href="./det.html?id=${e.id}"     > <img src="${e.thumbnail}" class="card-img-top" alt="..."> </a>
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-desc">${e.description}</p>
                    <a href="./det.html" class="btn btn-outline-success">details</a>
                </div>
            </div>`;
    });
    console.log(val);
    document.querySelector(".category-prod").innerHTML = val.join(" ");
};

getprod();


