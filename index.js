/* spinner added */ 
 const spinner = document.getElementById('spinner');

 const searchTwoBtn = async() => {
  const searchInput = document.getElementById('search-box').value;
  
    spinner.style.display = 'block';
    setTimeout (() => {
      spinner.style.display = 'none'
      apiadded(searchInput);
    }, 2000);
    
 }
 /* api added */
const apiadded = async(brand) => {
  
  const res = await fetch (`https://openapi.programming-hero.com/api/phones?search=${brand}`);
  const data = await res.json();
  apiCalling(data.data);
};



const apiCalling = (data) => {
  const addedInputValue = document.getElementById('phones-container');
  data.forEach(da => {
    const {image, slug, brand, phone_name} = da;
    // console.log(da)
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
    
    <div class="card bg-base-100 w-96 shadow-xl mb-5">
  <figure class="px-10 pt-10">
    <img
      src="${image}"
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <p>${phone_name}</p>
    <div class="card-actions">
      <button onclick = "showDetails('${slug}')" class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
    `
    addedInputValue.appendChild(createDiv);
  });
  document.getElementById('search-box').value = " ";
 
};

const showDetails = async (slugs) => {
  const res = await fetch (`https://openapi.programming-hero.com/api/phone/${slugs}`);
  const data = await res.json();
  // console.log(data.data);

  const {brand, image, name, releaseDate, slug} = data.data
 
  const modelContainer = document.getElementById('modal-container');

  modelContainer.innerHTML = `
  
  <dialog id="my_modal_1" class="modal">
  <div class="modal-box justify-items-center items-center">
  <h3 class="text-2xl font-extra-bold">${brand}</h3>
  <img src="${image}" alt="">
    <h3 class="text-lg font-bold">${name}</h3>
    <p class="py-4">${releaseDate}</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  
  `

  my_modal_1.showModal()
}


// const apiDaynamic = (organic) => {
//   console.log(organic)
// }

// const handleShowAll = () => {
//   apiCalling(true);
// }

