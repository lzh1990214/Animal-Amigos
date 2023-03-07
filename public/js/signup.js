

const signupFormHandler = async (event) => {
    event.preventDefault();

    const first_name = document.querySelector('#firstName').value.trim();
    const last_name = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const phone_number = document.querySelector('#phoneNumber').value.trim();
    const question1 = document.querySelector('#question1').value.trim();
    const answer1 = document.querySelector('#answer1').value.trim();
    const question2 = document.querySelector('#question2').value.trim();
    const answer2 = document.querySelector('#answer2').value.trim();
    const question3 = document.querySelector('#question3').value.trim();
    const answer3 = document.querySelector('#answer3').value.trim();
    const profile_picture = 'placeholder'
    // let is_owner;

    // if (owner === 'Y') {
    //     is_owner = true;
    // } else {
    //     is_owner = false;
    // }

    // console.log("******************");

    if (email && password) {
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password, phone_number, profile_picture, question1, answer1, question2, answer2, question3, answer3 }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // document.location.replace('/profile');
            document.location.replace('/');
            alert('Successfully created an account !');

        } else {
            alert(response.statusText);
        }
    }
};

// const uploadProPic = async (event) => {

//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('file', document.querySelector('#proFile').files[0]);
//     const proPicUrl = await fetch('/api/upload/pfp', {
//         method: 'POST',
//         body: formData
//     },
//         {
//             headers: { 'Content-Type': 'multipart/form-data' }
//         });
//     console.log('in uploadProPic', proPicUrl)
//     proPicUrl.then(data => {
//         console.log(data);
//         // profile_picture = data;
//     }
//     );

// }



// document.querySelector('#proPicForm').addEventListener('submit', uploadProPic);



document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);

