const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); 

    await submitData();
});




const submitData = async () => {
    let FullnameDom = document.querySelector('input[name="Fullname"]')
    let EmailDom = document.querySelector('input[name="Email"]')
    let UsernameDom = document.querySelector('input[name="Username"]')
    let PasswordDom = document.querySelector('input[name="Password"]')
    let ConfirmPasswordDom = document.querySelector('input[name="ConfirmPassword"]')
    const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (PasswordDom.value !== ConfirmPasswordDom.value) {
        alert("Password not match")
        if (!strongPassword.test(PasswordDom.value)) {
        alert("Password must contain letters, numbers and at least 6 characters");
        return;
    }


    try {

     

        let userData = {
            Fullname: FullnameDom.value,
            Email: EmailDom.value,
            Username: UsernameDom.value,
            Password: PasswordDom.value
        }

        const response = await axios.post(
            'http://localhost:3000/users',
            userData
        )
          alert("Register Success 🎉");


        console.log(response.data)

    } catch (err) {
        console.error(err)
    }
}
