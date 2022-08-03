const initAjax = (location, method = "get") =>{
    const xhr = new XMLHttpRequest();
    xhr.open(method, location);
    xhr.send();
    return xhr;
}

const createURL = (id) =>{
    return "partials/" + id + ".html"
}

    

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