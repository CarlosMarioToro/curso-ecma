// enhanced object literals

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId,
    }
}

console.log(newUser('Carlos', 51, 'CO', 1));