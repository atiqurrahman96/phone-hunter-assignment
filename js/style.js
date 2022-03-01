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
        console.log(phone.image);
        const div = document.createElement('div');
        div.innerHTML = `
               <div class="col p-4 rounded shadow-lg">
                <div class="card h-100">
                    <img  src="${phone.image}" class="card-img-top w-75" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Name:</h5>
                        <h5 class="card-title">Brand:${phone.brand}</h5>
                        <button class=" btn btn-primary rounded">Go For Details</button>

                    </div>
                </div>
        `;
        PhoneContainer.appendChild(div);
    }

}
