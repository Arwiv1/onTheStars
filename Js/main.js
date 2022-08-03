const initAjax = (location, method = "get") =>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, location);
    xhr.send();
    return xhr;
}

const createURL = (id) =>{
    return "partials/" + id + ".html"
}

/*
const searchingSubject = (type, object) =>{
    const searchData=[];
    fetch(`https://swapi.dev/api/${type}/?search=${object}`)
      .then(response => response.json())
      .then(data => {
        const results = data.results

        for(let i=0;i<2;i++){
            if(results[i]!==undefined){
                searchData.push(results[i]);
            }
        }
       }
      );
      return searchData;
    }
*/

    const navBarBehaviour = () =>{
        const navBar = document.querySelector(".navbar")
    navBar.addEventListener("click", e =>{
        //clickSearchBarButton(e);
        //clickRandomButtons();
    })
    }   
/*
const concatSearchs = (value) =>{
    return [...[searchingSubject("people",value)],...[searchingSubject("vehicles",value)],...[searchingSubject("starships",value)],...[searchingSubject("planets",value)]]
}
*/

/*
const searchBarBehaviour = () =>{
    
    const searchBar = document.querySelector("#searchBar")
    searchBar.addEventListener("keyup", e =>{
        const value = searchBar.value
        let SearchValueTotal = concatSearchs(value)
        console.log(SearchValueTotal)
        
    })
}
*/

const loadPage= ()=>{
    const id = createURL("nav-bar")
    const navBar = initAjax(id)
    navBar.addEventListener("load",()=>{
        document.querySelector("body").innerHTML=(navBar.responseText)
        navBarBehaviour();
        searchBarBehaviour();
    })
}



loadPage()