function main(){
    const cuadrado=document.querySelector(".cuadrado-rojo");
    
    document.addEventListener("keydown", function(e){
        const marginLeftText=cuadrado.style.marginLeft.replace("px","");
        const marginLeft=parseInt(marginLeftText || "0"); 
        let newMarginLeft=marginLeft;
        if(e.code =="ArrowLeft"){
            newMarginLeft--;
        }else if(e.code =="ArrowRight"){
            newMarginLeft++;
        }
        cuadrado.style.marginLeft= newMarginLeft +"px"
    })
}

main();