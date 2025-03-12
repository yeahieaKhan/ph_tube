const loadData = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((res) => res.json())
        .then((data) => {
            displayData(data.categories)
        })
}




const displayData = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    console.log(categories)
    for (let cat of categories) {

        const div = document.createElement("div");

        div.innerHTML = `
                <button class="btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
            `
        categoryContainer.appendChild(div);
    }
}


loadData()