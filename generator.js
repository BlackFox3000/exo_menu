
function displayMenu(){
    let menu='<div class="menu"> ' +
        '<ul> ' +
        '<li><a href="eval_layout_menu.html">Accueil</a></li>' +
        '<li><a href="cerise.html">Cerise</a></li>' +
        '<li><a href="poire.html">Poire</a></li>' +
        '<li><a href="pomme.html">Pomme</a></li>' +
        '<li><a href="tomate.html">Tomate</a></li>' +
        '</ul> </div>';

    document.write(menu)
}

function displayImage() {
    console.log(document.title);
    let title= document.title.charAt(0).toUpperCase()+document.title.substr(1).toLowerCase();
    let image=
        '<div class="content">' +
            '<div class="inner" >' +
                '<img class="image" src="../img/'+document.title+'.jpg">' +
            '</div>' +
            '<div class="titre">' +
                    title+
            '</div>' +
        '</div>';
    document.write(image);
}