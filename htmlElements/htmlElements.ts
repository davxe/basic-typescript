const titleElement:HTMLElement=document.getElementById('title')
if(titleElement){
    titleElement.innerHTML='hey i am learning typescript'
    titleElement.onclick=()=>{
        console.log('clicked')
    }
}
interface IhtmlFormElement{
    value:string
}
const getValue=():void=>{
    const inputElement:HTMLElement=document.getElementById('name')

    if(inputElement){
        console.log("input value",(inputElement as any).value)
    }
}
