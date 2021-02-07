console.log(`JavaScript says: Ola Que Pasa?`);



$(document).ready(function() {


    let loginButton = document.getElementById("login");
    let logOutButton = document.getElementById("logout");
    let RegisterButton = document.getElementById("register");
    let createName = document.getElementById("regUname");
    let createPass = document.getElementById("regPass");
    let nameInput = document.getElementById("uname");
    let passInput = document.getElementById("pass");
    let message = document.getElementById("message");
    let myList = document.getElementById("list");
    let header4 = document.getElementById("header4");
    let paragraph = document.getElementById("paragraph");


    let users = [];


    function User(nameInput, passInput, isAdmin, logIn) {

        this.userName = nameInput;
        this.passWord = passInput;
        this.isAdmin = false;
        this.logIn = false;
    };


    users.push(new User("Darko", "123456"));

    users[0].isAdmin = true;

    users.push(new User("Pero", "456789"));
    users.push(new User("Blazo", "789456"));
    users.push(new User("Risto", "321654"));




    function validate(user, pass) {

        for (let i = 0; i < users.length; i++) {

            if (users[i].userName === user) {
                if (users[i].passWord === pass) {

                    return true
                }
            }
        }

        return false
    };


    function logUser(user) {

        for (let i = 0; i < users.length; i++) {

            if (users[i].userName === user) {
                users[i].logIn = true
            } else {
                users[i].logIn = false
            }

        }
    };

    function isAdmin(username) {

        for (let i = 0; i < users.length; i++) {

            if (users[i].userName === username && users[i].isAdmin === true)
                return true
        }
        return false
    };

    function logOut() {

        for (let i = 0; i < users.length; i++) {

            if (users[i].logIn === true) {
                users[i].logIn = false
            }
        }
    };



    loginButton.addEventListener('click', function() {

        if (nameInput.value === "" || nameInput.value.length < 3 || passInput.value.length < 6 || nameInput.Pass === "") {

            message.innerText = "Wrong Username or Password!";

            paragraph.innerText = `* 
            - Username and Password inputs should not be empty
            - Username needs to include more than 3 characters
            - Password has to be longer than 6 characters`;

        } else if (validate(nameInput.value, passInput.value)) {

            logUser(nameInput.value);

            if (isAdmin(nameInput.value)) {

                message.innerText = `Welcome SuperAdmin "${nameInput.value}"`;
                header4.innerText = "List of all the users and their passwords: ";
                for (let user of users) {
                    myList.innerHTML += `<li>Username: "${user.userName}" &nbsp;&nbsp;&nbsp; Password: "${user.passWord}" </li>`
                };
                paragraph.innerText = "";


            } else {
                paragraph.innerText = "";
                header4.innerText = "";
                myList.innerHTML = "";
                message.innerText = `Welcome "${nameInput.value}" to our awesome app`;
            }

        }
        nameInput.value = "";
        passInput.value = "";
        this.defaultPrevented;
        console.log(users);
    });



    RegisterButton.addEventListener('click', function() {

        if (createName.value === "" || createName.value.length < 3 || createPass.value.length < 6 || createName.Pass === "") {

            message.innerText = "Please Enter Valid Username and Password";

            paragraph.innerText = `* 
            - Username and Password inputs should not be empty
            - Username needs to include more than 3 characters
            - Password has to be longer than 6 characters`;


        } else {
            users.push(new User(createName.value, createPass.value))
            message.innerText = `"${createName.value}" You Have Successfully registered to out platform`;
            header4.innerText = "";
            paragraph.innerText = "";
            myList.innerHTML = "";
        }
        createName.value = "";
        createPass.value = "";


        this.defaultPrevented;
        console.log(users);
    });

    logOutButton.addEventListener('click', function() {

        logOut();
        message.innerText = `You Have Successfully Logged Out Of Your Account`;

        nameInput.value = "";
        passInput.value = "";
        this.defaultPrevented;
        paragraph.innerText = "";
        header4.innerText = "";
        myList.innerHTML = "";
        console.log(users);
    });


});