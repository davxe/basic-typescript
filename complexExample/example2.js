var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var applicationState = {
    categories: [
        "Electronics", "Mobiles", ""
    ],
    products: [
        {
            name: 'name',
            rating: 5,
            description: 'kcndvndvkjfddk'
        }
    ],
    userInfo: {
        username: 'prince',
        email: 'prince.kaushal@appknit.io',
        firstName: 'Prince',
        token: 'aldkmdkf',
        isLogedIn: true,
        lastLoginTime: 'Wed Oct 14 2020 06:45:45 GMT+05:30 (India Standard Time)',
        gender: Gender.male,
        otherInfo: {
            name: 'some name',
            isQualified: true,
            graduatedOn: new Date(),
            address: {
                street: {
                    firstLine: '35',
                    secondLine: 'Some nagar'
                }
            }
        }
    }
};
var state = {
    categories: ['dkkmffdfd'],
    products: [{ name: 'assa', rating: 5 }]
};
console.log("json data", applicationState);
