const concatSearchs = (value) =>{
    return [...[searchingSubject("people",value)],...[searchingSubject("vehicles",value)],...[searchingSubject("starships",value)],...[searchingSubject("planets",value)]]
}

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

const searchBarBehaviour = () =>{
    
    const searchBar = document.querySelector("#searchBar")
    searchBar.addEventListener("keyup", e =>{
        const value = searchBar.value
        let SearchValueTotal = concatSearchs(value)
        console.log(SearchValueTotal)
        
    })
}