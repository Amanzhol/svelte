class User {

    name = 'Name Here'
    title = 'Title Here'

    constructor(name, title) {
        this.name = name;
        this.title = title;
    }

    getDetails() {
        return `Details: ${this.name}, ${this.title}`
    }

}

class Child extends User {
    father;

    constructor(name, title, father) {
        super(name, title);
        this.father = father;
    }

    getDetails() {
        return super.getDetails() + `, ${this.father}`;
    }
}

const user = new User('Vladius','Gladiator')
const child = new Child('Horrorin', 'Noble', 'Vladius')

document.getElementById('user').innerHTML=user.getDetails();
document.getElementById('child').innerHTML=child.getDetails();

