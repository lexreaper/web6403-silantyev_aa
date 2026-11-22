class User {
    constructor(login, password, agree) {
        this.login = login;
        this.password = password;
        this.agree = agree;
    }

    printInfo() {
        console.log("Данные пользователя:");
        console.log(`Логин: ${this.login}`);
        console.log(`Согласие: ${this.agree}`);
        console.log("Пароль: [скрыт]");
    }
}

const form = document.getElementById("register-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    const agree = document.getElementById("agree").checked;

    const user = new User(login, password, agree);

    user.printInfo();
});