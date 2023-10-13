function saveUserDetails() {
    // Get user input
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Create user object
    const user = {
        username: username,
        email: email
    };

    // Check if local storage already has user data
    let usersData = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user data to the array of users
    usersData.push(user);

    // Store the updated array of users in local storage
    localStorage.setItem('users', JSON.stringify(usersData));

    // Clear the input fields for the next entry
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';

    // Alert the user that data is saved (you can also provide feedback in a different way)
    alert('User details saved!');
}
