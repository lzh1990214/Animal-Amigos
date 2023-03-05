var acceptServiceHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        event.preventDefault();

        var serviceId = event.target.getAttribute('data-id');

        // var id = 3;

        if (serviceId) {
            // Send a POST request to the API endpoint 
            const response = await fetch(`/api/services/currentService/${serviceId}`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                });

            if (response.ok) {
                // If successful, redirect the browser to the profile page
                document.location.replace('/api/services');
            } else {
                alert(response.statusText);
            }
        }
    }
};

document
    .querySelector('.services-list')
    .addEventListener('click', acceptServiceHandler);