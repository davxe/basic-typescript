var singleUser = {
    id: 4,
    username: 'learning',
    isLoggedIn: false,
    getUserId: function () {
        return this.id;
    },
    isLogedInfo: function (id) {
        return true;
    }
};
var userReference = [
    {
        id: 1,
        username: 'a',
        isLoggedIn: true
    },
    {
        id: 2,
        username: 'b',
        isTokengenerated: true
    },
    {
        id: 3,
        username: 'c'
    },
    {
        id: 4,
        username: 'd'
    },
    {
        id: 5,
        username: 'e'
    }
];
var getUserName = function (id) {
    var user = userReference.find(function (ele) { return ele.id === id; });
    return user ? (user.username) : '';
};
console.log(getUserName(1));
console.log(getUserName(3));
console.log(userReference);
console.log(singleUser.getUserId());
console.log(singleUser.isLogedInfo(5));
