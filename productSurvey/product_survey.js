function submitFeedback() {
    // feedback input
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    
    // Displaying the feedback output
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    
    // Make the feedback output visible
    document.getElementById('userInfo').style.display = 'block';

    // Display a thank you message
    alert('Thank you for your valuable feedback');
}

// Assigning the submit button event listener
document.getElementById('submitBtn').onclick = submitFeedback;

// Adding an event listener for pressing Enter key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
