const editServiceFormHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        event.preventDefault();

        // Collect values from the sign up form
        const service_name = document.querySelector('#serviceName').value.trim();
        const service_description = document.querySelector('#serviceDescription').value.trim();
        const service_price = document.querySelector('#servicePrice').value.trim();
        const service_status = document.querySelector('#serviceStatus').value.trim();
        const service_date = document.querySelector('#serviceDate').value.trim();
        const service_time = document.querySelector('#serviceTime').value.trim();
        const service_location = document.querySelector('#serviceLocation').value.trim();

        const id = event.target.getAttribute('data-id');

        if (service_name && service_description) {
            // Send a POST request to the API endpoint 
            const response = await fetch(`/api/services/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify({ service_name, service_description, service_price, service_status, service_date, service_time, service_location }),
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
    .querySelector('#save')
    .addEventListener('click', editServiceFormHandler);

const delButtonHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        event.preventDefault();
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/services/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

// document
//     .querySelector('#delete')
//     .addEventListener('click', delButtonHandler);

document
    .getElementsByClassName('deleteServiceBtn')
    .addEventListener('click', delButtonHandler);