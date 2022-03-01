const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}
    `;
    fetch(url)
        .then(response => response.json())
        .then(data => displayPhone(data.data))
}
const displayPhone = phones => {
    const PhoneContainer = document.getElementById('phone-container');
    console.log(PhoneContainer);
    console.log(phones)
    for (const phone of phones) {
        console.log(phone);
        const div = document.createElement('div');
        div.innerHTML = `
               <div class="col p-4 rounded shadow-lg">
                <div class="card h-100">
                    <div class="w-75 mx-5 px-5"><img  src="${phone.image}" class="card-img-top w-75" alt="..."></div>
                    <div class="card-body">
                        <h5 class="card-title">Name:${phone.phone_name}</h5>
                        <h5 class="card-title">Brand:${phone.brand}</h5>
                        <button onclick="searchDetails('${phone.slug}')" class=" btn btn-primary rounded">Go For Details</button>
                        <button onclick="mainFeatures('${phone.slug}')" class=" btn btn-primary rounded">Main Features</button>

                    </div>
                </div>
        `;
        PhoneContainer.appendChild(div);
    }

}

const searchDetails = id => {
    console.log(id)
    const url = `
    https://openapi.programming-hero.com/api/phone/${id}
    `
    fetch(url)
        .then(response => response.json())
        .then(data => displayDetail(data.data))
}
const displayDetail = id => {
    const detailContainer = document.getElementById('detail-container');
    console.log(id)
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="w-25 mx-auto"><img id="image" src="${id.image}" class="card-img-top" alt="..."></div>
    <div class="card-body text-center">
        <h5 class="card-title">Name:${id.name}</h5>
        <p class="text-primary" >Release Date:${id.releaseDate}</p>

    </div> 
    `;
    detailContainer.appendChild(div);


}
const mainFeatures = id => {
    console.log(id)
    const url = `
    https://openapi.programming-hero.com/api/phone/${id}
    `
    fetch(url)
        .then(response => response.json())
        .then(data => displayFeatures(data.data))
}
const displayFeatures = feature => {
    const featureContainer = document.getElementById('feature-container');
    console.log(feature.mainFeatures);
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card-header">
                <h3>Main Features of ${feature.name}</h3>
            </div>
            <div class="card-body">
                <h3>Storage :${feature.mainFeatures.storage}</h3>
                <h3>Display Size :${feature.mainFeatures.displaySize}</h3>
                <h3>Chipset :${feature.mainFeatures.chipSet}</h3>
                <h3>Memory : ${feature.mainFeatures.memory}</h3>
            </div>
    `;
    featureContainer.appendChild(div);
}