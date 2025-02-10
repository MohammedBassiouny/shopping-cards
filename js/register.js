const submit = document.querySelector('#myForm');


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    const firstName = document.querySelector('#firstName').value;
    const lastName = document.querySelector('#lastName').value;
    const email =document.querySelector('#email').value.trim().toLowerCase();
    const passWord = document.querySelector('#password').value.trim();
    const Gender = document.querySelector('.gender:checked');
    const GenderStuts = Gender? Gender.value :'';

        let newUser = {
            firstName : firstName ,
            lastName : lastName ,
            email : email ,
            passWord : passWord ,
            Gender : GenderStuts ,
        }


    let storeDataUser = localStorage.getItem('formData')
    let dataUser = [];

    try {
        dataUser = storeDataUser ? JSON.parse(storeDataUser) : [];
        if (!Array.isArray(dataUser)) dataUser = []; 
    } catch (error) {
        // console.error(error);
        dataUser = [];
    }
    const emailExists = dataUser.some(user => user.email.toLowerCase() === email.toLowerCase());

    if (emailExists) {
        alert("your E-mail have already Exist");
        return;
    }else{
    // console.log(newUser)
    dataUser.push(newUser);

    localStorage.setItem("formData", JSON.stringify(dataUser));
    sessionStorage.setItem("currentUser", JSON.stringify(newUser));

    
    sessionStorage.setItem('status',JSON.stringify(true))
    window.location.href = '../index.html';
    
    }}
)






