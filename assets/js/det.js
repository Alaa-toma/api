getdetails = async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);

    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    r = response.data;

    const details = `
        <div> <img src="${r.thumbnail}" alt=""> </div>
            <div><p>id: ${r.id}</p>
            <p>title: ${r.title}</p>
            <p> product category: ${r.category}</p>
            <p> product brand: ${r.brand}</p>       
             <p>price: ${r.price}</p>
              <p>rating: ${r.rating}</p>
            <button class="btn btn-outline-danger" onclick="remove(${r.id})" >REMOVE</button></div>
            `;
    document.querySelector(".prod_det").innerHTML = details;

}

const remove =  (id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            const delet_response = await axios.delete(`https://dummyjson.com/products/${id}`);
            console.log(id);

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });


}

getdetails();