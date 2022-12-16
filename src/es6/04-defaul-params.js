function newUser(name, age, country) {
    var name = name || 'Carlos';
    var age = age || 34;
    var country = country || 'CO';
    console.log(name, age, country);
}

newUser();
newUser('Carlos Mario', 15, 'MX');

function newAdmin(name = 'Carlos', age = 51, country = 'US') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');