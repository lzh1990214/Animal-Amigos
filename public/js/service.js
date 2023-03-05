const serviceFormHandler = async (event) => {
    event.preventDefault();

    // Collect values from the sign up form
    const service_name = document.querySelector('#serviceName').value.trim();
    const service_description = document.querySelector('#serviceDescription').value.trim();
    const service_price = document.querySelector('#servicePrice').value.trim();
    const service_status = document.querySelector('#serviceStatus').value.trim();
    const service_date = document.querySelector('#serviceDate').value.trim();
    const service_time = document.querySelector('#serviceTime').value.trim();
    const service_location = document.querySelector('#serviceLocation').value.trim();

    if (service_name && service_description) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/services/addservice', {
            method: 'POST',
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
};

document.querySelector('.service-form').addEventListener('submit', serviceFormHandler);

