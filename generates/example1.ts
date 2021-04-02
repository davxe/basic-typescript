
interface ISimpleGenerate<T>{//after ISimpleGenerate we pass <T> it means it takes arguments whenever it called
    value:T;
    data:T,
    json:T
}

const simpleValue:ISimpleGenerate <string>={
    value:'jdj',
    data:'dkflnfkdfnd',
    json:'lmdskdsmdss,'
}

// if we take 2 argument then we have to use 
interface ISecondGeneric<T,AT>{
    value:T,
    data:AT,
    json:T
}

const secondValue:ISecondGeneric<string,number>={
    data:45467,
    json:'djfdjnfdk',
    value:'kdklskfmkdf,dm'
}
//if we wanata to declare properties on the argument then we use below wxample

const anotherValue:ISecondGeneric<string,{id:number,value:string}>={
    data:{id:1,value:'kfkfmlkdlf'},
    json:'kldksmlkdmsdms',
    value:"lkndkfnkdf"
}
console.log('simple data',simpleValue)
console.log('second data',secondValue)
console.log('another data',anotherValue)