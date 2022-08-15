const searchingSubject = async (value) =>{
    let response = [...(await getPromise("people",value)),...(await getPromise("vehicles",value)),...(await getPromise("starships",value)),...(await getPromise("planets",value))]
    console.log(response)
    
}

function getPromise(type,value){
    return new Promise((resolve,reject)=>{
        const searchData=[];
        
        const url=`https://swapi.dev/api/${type}/?search=${value}`;
        const xhr = initAjax(url)
        xhr.addEventListener("load", e=>{
            if(e.target.status===200){
                let json=JSON.parse(xhr.response)
                
                for(let i=0;i<2;i++){
                    searchData.push(json.results[i])
                    console.log(json.results[i])
                }
                resolve(searchData);
            }else{
                const error = {
                    type:`https://swapi.dev/api/${type}/?search=${object}`,
                    name: "Error status"
                };
                reject(error);
            }
        });
        xhr.addEventListener("error", () => {
            const error = {
                type: url,
                name: "Error AJAX"
            };
            reject(error);
        });
    });
}


const createHtmlList = (searchList) =>{
    const ul = document.createElement("ul");
    ul.classList.add("search-results");
    
}

const showSearchs = (searchList) =>{
    const container = document.querySelector("#search-results");
    console.log(searchList[0][0])
}

const searchBarBehaviour = () =>{
    
    const searchBar = document.querySelector("#searchBar")
    searchBar.addEventListener("keyup", e =>{
        const value = searchBar.value;
        searchingSubject(value);
        
       // showSearchs(SearchValueTotal);
        
    })
}