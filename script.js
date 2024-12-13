
let searchBtn = document.getElementById("searchBtn")
let searchUser = document.getElementById("searchUser")



function handleProfile() {

let profileManager = new userProfile()

searchBtn.addEventListener("click",() => {
    let userText = searchUser.value
    if(userText != ""){
        fetch(`https://api.github.com/users/${userText}`)
        .then(res => res.json())
        .then(user => {
            if(user.message == "Not Found"){
                profileManager.showAlert("User Not Found","alert alert-danger text-center mb-3")
            }else{
                profileManager.showProfile(user)
            }
        })
    }else{
        profileManager.clearProfile()
    }
})

}

handleProfile();
