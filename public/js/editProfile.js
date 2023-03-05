const editProfileButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        event.preventDefault();
        // Collect values from the sign up form
        const first_name = document.querySelector('#firstName').value.trim();
        const last_name = document.querySelector('#lastName').value.trim();
        const email = document.querySelector('#email').value.trim();
        const password = document.querySelector('#password').value.trim();
        const phone_number = document.querySelector('#phoneNumber').value.trim();
        const address = document.querySelector('#address').value.trim();
        const city = document.querySelector('#city').value.trim();
        const state = document.querySelector('#state').value.trim();
        const zip = document.querySelector('#zip').value.trim();
        const country = document.querySelector('#country').value.trim();

        const id = event.target.getAttribute('data-id');

        if (first_name && last_name) {
            // Send a POST request to the API endpoint 
            const response = await fetch(`/api/user/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify({ first_name, last_name, email, password, phone_number, address, city, state, zip, country }),
                    headers: { 'Content-Type': 'application/json' },
                });

            if (response.ok) {
                // If successful, redirect the browser to the profile page
                document.location.replace('/profile');
            } else {
                alert(response.statusText);
            }
        }
    }
};

document
    .querySelector('#saveprofile')
    .addEventListener('click', editProfileButtonHandler);