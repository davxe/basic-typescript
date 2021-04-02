enum Gender{
    male,female
}
// second way to create a product and it is recommanded way
interface IProduct{
    name:string,
    rating:number;
    description?:string,
}
interface IStreet{
    firstLine:string,
    secondLine:string
}
interface IAddress{
    street:IStreet
}
interface IOtherInfo{
    name:string,
    isQualified:boolean,
    graduatedOn:Date,
    address:IAddress
}
interface IUserInfo{
    username:string,
    email:string|number,
    firstName:string,
    token:string|number,
    isLogedIn:boolean,
    lastLoginTime:string,
    gender:Gender,
    otherInfo:IOtherInfo
}
interface IApplicationState {
    categories:Array<string>,
    // products:Array<{name:string,rating:number}> first way to declare the products 
    products:Array<IProduct>,
    userInfo:IUserInfo;
}
const applicationState:IApplicationState={
    categories:[
        "Electronics","Mobiles",""
    ],
    products:[
        {
            name:'name',
            rating:5,
            description:'kcndvndvkjfddk'
        }
    ],
    userInfo:{
        username:'prince',
        email:'prince.kaushal@appknit.io',
        firstName:'Prince',
        token:'aldkmdkf',
        isLogedIn:true,
        lastLoginTime:'Wed Oct 14 2020 06:45:45 GMT+05:30 (India Standard Time)',
        gender:Gender.male,
        otherInfo:{
            name:'some name',
            isQualified:true,
            graduatedOn:new Date(),
            address:{
                street:{
                    firstLine:'35',
                    secondLine:'Some nagar',
                }
            }
        }
    }
}
/*if we want to use limited properties then we have 2 ways
    1. using conditional symbol(?)
    2. using Pick<object name,"what property we want ">
*/ 
const state:Pick<IApplicationState,'categories'|'products'>={
    categories:['dkkmffdfd'],
    products:[{name:'assa',rating:5}]
}

const userDetails:Pick<IUserInfo,'email'|'firstName'>={
    email:'kmfkmvdfkvdlf@kfvmlfk.com',
    firstName:'fkvmfmkvfl',
}

/* if we want to add other attributes or key into a particular obkect then we have 2 methods 
    1. using extends keyword
    2. using concatenated (&)
*/

//1. using extends keyword add attribute to object

interface IDetailedProductInfo extends IProduct{
    price:number,
    sellerInfo:string,
}
const productInfo:IDetailedProductInfo={
    name:'jfvnkv',
    rating:4,
    description:'dmnjvkfvnf',
    price:43,
    sellerInfo:'fknjnkvfvd'
}

//2. using & if we don't want to extend then we use & operator to concat
interface IDetailProduct{
    price:number,
    sellerInfo:string
}
const productDetail:IProduct & IDetailProduct={
    name:'fkdjkfdn',
    price:55,
    rating:4,
    sellerInfo:'dkjnkdc',
    description:"kjdjfn"
}
/* doubts 
1.unknown
2.never
*/ 