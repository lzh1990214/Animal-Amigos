const deleteButtons = document.querySelectorAll('.deleteBtn');
const saveButtons = document.querySelectorAll('.saveServiceBtn');

const editServiceFormHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        event.preventDefault();
        const id = event.target.getAttribute('data-id');
        // console.log(dataID);
        // Collect values from the sign up form,
        // ZL: added id numbers after each original id names to collect values from the corresponding forms
        const service_name = document.querySelector(`#serviceName${id}`).value.trim();
        const service_description = document.querySelector(`#serviceDescription${id}`).value.trim();
        const service_price = document.querySelector(`#servicePrice${id}`).value.trim();
        const service_status = document.querySelector(`#status${id}`).value.trim();
        const service_date = document.querySelector(`#serviceDate${id}`).value.trim();
        const service_time = document.querySelector(`#serviceTime${id}`).value.trim();
        const service_location = document.querySelector(`#serviceLocation${id}`).value.trim();

        if (service_name && service_description) {
            event.preventDefault();
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

// document
//     .querySelector('.saveServiceBtn')
//     .addEventListener('click', editServiceFormHandler);


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

// console.log('Failed to delete project');
// console.log(deleteButtons[0]);

// ZL: apply addEventListener to each delete button
function addEventListenerDeleteBtn() {
    // console.log(deleteButtons.length);
    for (let i = 0; i < deleteButtons.length; i++) {
        const element = deleteButtons[i];
        // console.log(element);
        element.addEventListener('click', delButtonHandler);
    }
};

addEventListenerDeleteBtn();

// ZL: apply addEventListener to each save button
function addEventListenerSaveBtn() {
    // console.log(deleteButtons.length);
    for (let i = 0; i < saveButtons.length; i++) {
        const element = saveButtons[i];
        // console.log(element);
        element.addEventListener('click', editServiceFormHandler);
    }
};

addEventListenerSaveBtn();
