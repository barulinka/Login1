function login () {

    const users = [
        "barunkahanus@sezman.cz.heslo123",
        "vali@seznam.cz.heslo122",
        "honza@seznam.cz.Heslo666",
    ]

    let userEmail, userPassword

    userEmail = document.getElementById("emailIn").value
    userPassword = document.getElementById("passwordIn").value 
    
    let userLogin = userEmail + "." + userPassword

    let errors = 0

    for(let i = 0; i < users.length; i++) {
        if(userLogin === users[i]) {
            alert("Úspěšně přihlášen!")
            break
        } else {
            errors++ 
            alert("Špatně zadané heslo nebo email!")
        }
    }
    
    if(errors === users.length) alert
}