const search = document.querySelector(".search_box");
const btn = document.querySelector(".search_btn");
const show = document.querySelector(".show");

const v = btn.addEventListener('click', async () => {
    console.log(` search .value =  ${search.value}`);
        const response = await axios.get(`https://dummyjson.com/products/search?q=${search.value}`);
        console.log(response.data.products);
        arr = response.data.products;

          m = arr.map((p) => {
        return prod = `<div class="card " >
        <a   href="./det.html?id=${p.id}" > <img src="${p.thumbnail}" class="card-img-top" alt="..."> </a>
                
                <div class="card-body">
                    <h5 class="card-title">${p.title}</h5>
                    <p class="card-desc">${p.description}</p>
                    <a href="./det.html?id=${p.id}" class="btn btn-outline-success">details</a>
                </div>
            </div>`;


    })
   show.innerHTML = m.join(" ");


})
