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
    const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{6,}$/;
    const thaiPattern = /[\u0E00-\u0E7F]/;

    if (thaiPattern.test(PasswordDom.value)) {
        Swal.fire({
            title: 'Invalid Input',
            text: 'Password cannot contain Thai characters',
            icon: 'warning'
        });
        return;
    }



    if (PasswordDom.value !== ConfirmPasswordDom.value) {
            Swal.fire({
            title: 'Password Error',
            text: 'Password not match',
            icon: 'warning'
        });
        return;
    }  
    if (!strongPassword.test(PasswordDom.value)) {
        Swal.fire({
        title: 'Password Error',
        text: ' Password must contain letters, numbers and at least 6 characters and Special characters',
        icon: 'warning'
    });
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
            Swal.fire({
                title: 'Register Success',
                icon: 'success'
            }).then(() => {
                window.location.href = "index.html";
            });


        console.log(response.data)

    } catch (err) {
        console.error(err)
        Swal.fire({
        title: 'Error!',
        text: 'Register Failed',
        icon: 'error'
    });
    }
}

