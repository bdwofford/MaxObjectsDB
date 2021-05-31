let category = 'All'



//Get the selected category from search bar
const searchDropdown = document.querySelectorAll('.dropdown-item')
const dropDownButton = document.querySelector('#myDropdown')
searchDropdown.forEach(categoryButton=>{
    categoryButton.onclick = ()=>{
        category = categoryButton.textContent
        dropDownButton.textContent = category
        console.log(category)
    }
})

//There is another dropdown for the OS selection (#myDropdown_OS  >All >Mac >Windows)

//Grab the search term as its being written
const inputSearch = document.querySelector('#inputSearch')
inputSearch.oninput = (event)=>{
    console.log(event.target.value)
}
