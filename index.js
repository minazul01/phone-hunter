/* calling api */
const searchBtn = async(status, brandName) => {
    console.log('wow we are done 3 second');
    document.getElementById('spinner').style.display = 'none';

    const calling = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:"iphone"}`)
    const data = await calling.json();
    // addedData(data.data.slice(0,5));

    if(status){
        addedData(data.data);
    }else{
        addedData(data.data.slice(0,5));
    }
}
/* calling api and spiner 3 second added */
const searchTwoBtn = () => {
    document.getElementById('spinner').style.display = 'block';

    const searchInput = document.getElementById('search-box').value;
    // console.log(searchInput)

   setTimeout(() => {
    searchBtn(false, searchInput)
   }, 2000);
}
/* console api data */
const addedData = (apiData) => {

    const phoneContainer = document.getElementById('phones-container');
    apiData.forEach(data => {
        const {brand, image, phone_name, slug} = data;
    
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
        
        <div class="card mt-8 bg-base-100 w-96 shadow-xl border-2">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p class"text-xl">${phone_name}</p>
    <p>${slug}</p>
    <div class="card-actions">
      <button class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
        
        `
        phoneContainer.appendChild(createDiv);
  
    });
    
    
}

const handleShowAll = () => {
    searchBtn(true);
    document.getElementById('spinner').style.display = 'block';
    setTimeout(() => {
        document.getElementById('spinner').style.display = 'none';
    }, 1500);
}
