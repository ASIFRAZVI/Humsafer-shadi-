document.addEventListener("DOMContentLoaded", function () {
    const clientList = document.getElementById("clientList");

    // Fetch client data from the /getallclients route
    fetch('/getallclients')
        .then(response => response.json())
        .then(clients => {
            clients.forEach(client => {
                const listItem = document.createElement("li");
                const detailsList = document.createElement("ul");

                // Define the fields you want to display
                const fieldsToDisplay = ['name', 'email', 'phnumber', 'gender', 'image', 'religion', 'age'];

                fieldsToDisplay.forEach(field => {
                    const detailItem = document.createElement("li");
                    detailItem.textContent = `${field}: ${client[field]}`;
                    detailsList.appendChild(detailItem);
                });

                listItem.appendChild(detailsList);
                clientList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching client data:', error);
        });
});
