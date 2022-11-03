/* lets bring the html input element in js to get the text of input element */
let searchInputEl = document.getElementById("searchInput")
let searchResultBox = document.getElementById("searchResults")
let spinnerEl = document.getElementById("spinner")

  function createAndAppendSearchresult(result){
  let {title,link, description} = result
 /*  lets build all the components of the search item dynamically */
      /* 1. create result item container */
      let resultItem = document.createElement("div")
      resultItem.classList.add("result-item")
      searchResultBox.appendChild(resultItem)
      
      /* 2. anchor item - title of result */
      let resultTitle = document.createElement("a")
      resultTitle.classList.add("result-title")
      resultTitle.textContent = title 
      resultTitle.href = link
      resultTitle.target = "_blank"
      resultItem.appendChild(resultTitle)
     /*  3.title  break */
     let titleBreak = document.createElement("br")
     resultItem.appendChild(titleBreak)
    /*   4.anchor url - url for result */
    let urlEl = document.createElement("a")
    urlEl.classList.add("result-url")
    urlEl.href = link
    urlEl.target = "_blank"
    urlEl.textContent = link
    resultItem.appendChild(urlEl)
		/* 5.line brerak */
     let lineBreak = document.createElement("br")
     resultItem.appendChild(lineBreak)
    /* 6.paragraph description */
    let descriptionEl = document.createElement("p")
    descriptionEl.classList.add("line-description")
    descriptionEl.textContent = description
    resultItem.appendChild(descriptionEl)
  }

function displayResults(searchResults){
spinner.classList.toggle("d-none")
for(let result of searchResults){
  createAndAppendSearchresult(result)
  }
} 

function searchWikipedia(event)
{
if(event.key === "Enter"){

searchResultBox.textContent = ""
spinner.classList.toggle("d-none")
let searchInput = searchInputEl.value
let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;

let options = {
		method:"GET"
}

fetch(url,options)
.then(function(response){
return response.json()
})
.then(function(jsonData){
 let {search_results} = jsonData
 displayResults(search_results)
})
}

}
 /* to get the input value after clicking enter, we add an evenlistener and a CALL back functon */
searchInputEl.addEventListener("keydown", searchWikipedia)

/* lets fetch the ddata from web resource */
/* "https://apis.ccbp.in/wiki-search?search=" */
