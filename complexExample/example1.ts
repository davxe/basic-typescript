interface IUserReference{
    username:string|number;
    id:number|string;
    isLoggedIn?:boolean,
    isLogedInfo?:(userId:number|string)=>boolean;
    isTokengenerated?:boolean,
    getUserId?:()=>number|string,
    addUser?():string|number,
}
const singleUser:IUserReference={
    id:4,
    username:'learning',
    isLoggedIn:false,
    getUserId():IUserReference['id']{
        return this.id
    },
    isLogedInfo(id:number|string):boolean{
        return true
    }
}

const userReference:IUserReference[]=[
    {
        id:1,
        username:'a',
        isLoggedIn: true,
    },
    {
        id:2,
        username:'b',
        isTokengenerated:true,
    },
    {
        id:3,
        username:'c'
    },
    {
        id:4,
        username:'d'
    },
    {
        id:5,
        username:'e'
    }
]
const getUserName=(id:IUserReference['id']):IUserReference['username'] => {
    const user=userReference.find((ele)=>ele.id===id)
    return user?(user.username):''
}
console.log(getUserName(1))
console.log(getUserName(3))
console.log(userReference)
console.log(singleUser.getUserId())
console.log(singleUser.isLogedInfo(5))