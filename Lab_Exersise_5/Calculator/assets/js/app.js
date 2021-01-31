const buttons = document.querySelectorAll('.button');
const viewPort = document.querySelector("#viewport");
buttons.forEach(element => {
    element.addEventListener('click',handleButtons);        
});
var viewportExp = "";
function handleButtons(e){
    if(e.target.classList.contains('num')){
        if(viewPort.value==="0" || viewPort.value ==="Infinity"){
            viewportExp = parseFloat(e.target.value);   
            viewPort.value = parseFloat(e.target.value);     
            return;    
        }
        else{
            viewportExp += parseFloat(e.target.value);
        }
        viewPort.value +=  parseFloat(e.target.value);    
    }
    else if (e.target.classList.contains('bo')){
        viewportExp += e.target.value;
        viewPort.value += e.target.value
    }
    else if(e.target.value==="Sqrt"){
        viewportExp = `Math.pow(${eval(viewport.value)},0.5)`; 
        viewPort.value = `Sqrt(${eval(viewport.value)})`; 
    }
    else if(e.target.value==="x^y"){
        viewportExp = `${eval(viewport.value)}**`; 
        viewPort.value = `${(viewport.value)}^`;     
    }
    else if(e.target.value==="="){
        viewportExp = viewportExp.toString();
        if(!(viewportExp.includes("*")||viewportExp.includes("Math")||viewportExp.includes("+")||viewportExp.includes("-")||viewportExp.includes("*")||viewportExp.includes("/"))){
            viewportExp = parseFloat(viewportExp);
        }
        viewportExp = viewportExp ? eval(viewportExp) : '0';
        if(viewportExp.toString()==="Infinity" || viewportExp.toString()==="NaN"){
            viewportExp=0;
            viewPort.value = "Can't Divide by Zero";
            return;
        }
        viewPort.value = viewportExp;
    }
    else if(e.target.value==="CE"){
        viewportExp = "";
        viewPort.value = "";
    }
}