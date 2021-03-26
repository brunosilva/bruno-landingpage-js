const body = document.getElementById("body");

//data
const itensMenu = ['about', 'contact'];


//function create element
function newElement(name, className, tipo){
    name = document.createElement(tipo);
    name.className = className;
    return name;
}


//---------------------------------------------START HEADER
//create element header
header = newElement("header","header","header");

//create element Logo
logo = newElement("logo","logo","div");
imgLogo = newElement("imgLogo","","img");
imgLogo.src = "src/img/Logo.png";

//create element Menu e List Menu
menu = newElement("menu","menu","div")
listMenu = newElement("listMenu","listMenu","ul");

//"for" to append list of itens of menu
for(var i = 0; i < itensMenu.length; i++){
    link = newElement("link","linkItem","a");
    link.setAttribute("href", itensMenu[i].toLowerCase());
    li = newElement("li","item","li");
    span = newElement("span","","span");
    span.innerHTML = itensMenu[i];

    li.appendChild(span);
    link.appendChild(li);
    listMenu.appendChild(link);
}


menu.appendChild(listMenu);
logo.appendChild(imgLogo);
header.appendChild(logo);
header.appendChild(menu);
//---------------------------------------------END HEADER


//---------------------------------------------START FULLBANNER
//create element fullbanner
divFullbanner = newElement("divFullbanner","fullbanner","section");

//create element Logo
banner = newElement("banner","banner","img");
banner.src = "src/img/fullbanner.png";
divFullbanner.appendChild(banner);
//---------------------------------------------END FULLBANNER


body.appendChild(header);
body.appendChild(divFullbanner);
