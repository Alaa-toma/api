const inputs = document.forms['product_input'];


inputs.addEventListener('submit', async(e)=>{
    e.preventDefault();
    const n = new FormData(inputs);
    const response = await axios.post("https://dummyjson.com/products/add", n);
    console.log(response);

  
})