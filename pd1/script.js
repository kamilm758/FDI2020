document.getElementById("nilfgaardButton").addEventListener("click",function(){
        HideAllChildsOfElem("content");
        document.getElementById("emhyrImg").hidden=false;
        document.getElementById("textArea").hidden=false;
        document.getElementById("nilfgaardDescription").hidden=false;
})

document.getElementById("redaniaButton").addEventListener("click",function(){
    HideAllChildsOfElem("content");
    document.getElementById("radovidImg").hidden=false;
    document.getElementById("textArea").hidden=false;
    document.getElementById("redaniaDescription").hidden=false;
})

document.getElementById("temeriaButton").addEventListener("click",function(){
    HideAllChildsOfElem("content");
    document.getElementById("rocheImg").hidden=false;
    document.getElementById("textArea").hidden=false;
    document.getElementById("temeriaDescription").hidden=false;
})

document.getElementById("kovirButton").addEventListener("click",function(){
    HideAllChildsOfElem("content");
    document.getElementById("trissImg").hidden=false;
    document.getElementById("textArea").hidden=false;
    document.getElementById("kovirDescription").hidden=false;
})

document.getElementById("skeligeButton").addEventListener("click",function(){
    HideAllChildsOfElem("content");
    document.getElementById("yenneferImg").hidden=false;
    document.getElementById("textArea").hidden=false;
    document.getElementById("skelligeDescription").hidden=false;
})

document.getElementById("alertButton").addEventListener("click",function(){
    alert("W celu kontaktu, proszę pisać na e-mail kamilm758@witcher.tr");
})


function HideAllChildsOfElem(divId){
    let children = document.getElementById(divId).children;

    for(let i=0;i<children.length;i++){
        children[i].hidden=true;
        if(children[i].children.length!=0){
            HideAllChildsOfElem(children[i].id)
        }

    }
}