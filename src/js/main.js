const body = document.getElementById("body");

//data
const itensMenu = ['download', 'contact'];
const iconsRules = [
    {icon: 'src/img/landing-page/ghost.gif', text: 'Truques de stories'},
    {icon: 'src/img/landing-page/lightning.gif', text: 'Novos filtros e fontes'},
    {icon: 'src/img/landing-page/angry-cat.gif', text: 'Receba gifs inéditos'},
    {icon: 'src/img/landing-page/in-love.gif', text: 'Técnicas para stories mais interessantes'}
];
const itensInsta = ['src/img/carousel/insta-1.png', 'src/img/carousel/insta-2.png', 'src/img/carousel/insta-3.png', 'src/img/carousel/insta-4.png', 
                    'src/img/carousel/insta-5.png', 'src/img/carousel/insta-6.png', 'src/img/carousel/insta-7.png'];

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
imgLogo.src = "src/img/9storm.png";

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

    if(itensMenu[i] == "download"){
        link.className = "linkItem btnDownload";
        span.innerHTML = "DOWNLOAD GRÁTIS";
    }

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
//create element section fullbanner
divFullbanner = newElement("divFullbanner","fullbanner","section");

//create element banner
banner = newElement("banner","banner","img");
banner.src = "src/img/fullbanner.jpg";
divFullbanner.appendChild(banner);

boxMessage = newElement("boxMessage","text-fullbanner","div");
smallTxtDownload = newElement("smallTxtDownload","txt-download","small")
smallTxtDownload.innerHTML = "Download Grátis";

txtPrincipal = newElement("txtPrincipal","txt-principal","p")
txtPrincipal.innerHTML = "Conteúdos criativos para stories do instagram";

txtSecond = newElement("txtSecond","txt-second","span")
txtSecond.innerHTML = "Aumente seguidores, faça melhores postagens, construa uma audiência fiel, faça conteúdo interessante e alavanque seus stories.";

btnDownloadBanner = newElement("btnDownloadBanner","btnBanner","a")
btnDownloadBanner.innerHTML = "Faça download";

boxMessage.appendChild(smallTxtDownload);
boxMessage.appendChild(txtPrincipal);
boxMessage.appendChild(txtSecond);
boxMessage.appendChild(btnDownloadBanner);
divFullbanner.appendChild(boxMessage);
//---------------------------------------------END FULLBANNER


//---------------------------------------------START RULE
//create element section rules with icon
divRules = newElement("divRules","rules","section");
rulesContainer = newElement("rulesContainer","container","div");

titleRule = newElement("titleRule","txt-principal","p")
titleRule.innerHTML = "Tudo que você precisa saber para criar stories criativas nas redes sociais";

icons = newElement("icons","icons","div");

listRules = newElement("listRules","listRules","ul")

for(var i = 0; i < iconsRules.length; i++){
    itemRules = newElement("itemRules","itemRules","li")
    imgRule = newElement("imgRule","imgRule","img")
    imgRule.setAttribute("src", iconsRules[i].icon);
    spanRule = newElement("spanRule","spanRule","span")
    spanRule.innerHTML = iconsRules[i].text;

    itemRules.appendChild(imgRule);
    itemRules.appendChild(spanRule);
    listRules.appendChild(itemRules);
}

icons.appendChild(listRules);
rulesContainer.appendChild(titleRule);
rulesContainer.appendChild(icons);
divRules.appendChild(rulesContainer);
//---------------------------------------------END RULE


//---------------------------------------------START CAROUSEL
divSectionInsta = newElement("divSectionInsta","imagens-insta","section");
divContainer = newElement("divContainer","container","div");
divCarousel = newElement("divCarousel","carousel","div");

for(var i = 0; i < itensInsta.length; i++){
    item = newElement("item","","div");
    imgCarousel = newElement("imgCarousel","imgCarousel","img")
    imgCarousel.setAttribute("src", itensInsta[i]);

    item.appendChild(imgCarousel);
    divCarousel.appendChild(item);
    divContainer.appendChild(divCarousel);
}
divSectionInsta.appendChild(divContainer);
//---------------------------------------------END CAROUSEL


//---------------------------------------------START PRODUCTS
divProducts = newElement("divProducts","products","section");
divContainer = newElement("divContainer","container","div");
titleSectionProducts = newElement("titleSectionProducts","title","h2");
titleSectionProducts.innerHTML = "Confira nossos produtos";
divRowProducts = newElement("divRowProducts","row","div");
divTxtMessage = newElement("divTxtMessage","message","p");
divTxtMessage.innerHTML = "<strong>Prenda a atenção de todos</strong> que passam pelas suas postagens nos stories de forma impactante, totalmente criativa, inovadora, com mais filtros, novas fontes, gifs exclusivos e o melhor, de uma forma <strong>100% online e 100% gratuita!</strong>";

divBtnContent = newElement("divBtnContent","btnDefaultBlack","a");
divBtnContent.innerHTML = "acesse conteÚdo grátis";

divContainer.appendChild(titleSectionProducts);
divContainer.appendChild(divTxtMessage);
divContainer.appendChild(divBtnContent);
divProducts.appendChild(divContainer);
//---------------------------------------------END PRODUCTS


//---------------------------------------------START LEARNING
divStartLearning = newElement("divStartLearning","start-learning","section");
divContainer = newElement("divContainer","container","div");
titleSectionStartLearning = newElement("titleSectionStartLearning","title","h2");
titleSectionStartLearning.innerHTML = "Comece a aprender agora com conteúdo gratuito e exclusivo.";

divBtnStartLearning = newElement("divBtnStartLearning","btnDefaultBlack","a");
divBtnStartLearning.innerHTML = "faça o download";

divContainer.appendChild(titleSectionStartLearning);
divContainer.appendChild(divBtnStartLearning);
divStartLearning.appendChild(divContainer);
//---------------------------------------------END LEARNING



body.appendChild(header);
body.appendChild(divFullbanner);
body.appendChild(divRules);
body.appendChild(divSectionInsta);
body.appendChild(divProducts);
body.appendChild(divStartLearning);
