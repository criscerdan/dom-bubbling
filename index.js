function main(){
    const cuadrado=document.querySelector(".cuadrado-rojo");
    document.addEventListener("keydown",function(evento){
        const marginLeftText=cuadrado.style.marginLeft.replace("px","");
        const marginLeft=parseInt(marginLeftText || "0");
        let newMarginLeft=marginLeft;
        if(evento.code=="ArrowLeft"){
            newMarginLeft--;
        }else if(evento.code=="ArrowRight"){
            newMarginLeft++;
        }
        cuadrado.style.marginLeft=newMarginLeft+"px";
    })
}

main();