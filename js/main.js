const galleryContainer = document.querySelector('.gallery-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    leftArrow.addEventListener('click', () => {
        galleryContainer.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        galleryContainer.scrollBy({ left: 300, behavior: 'smooth' });
    });




    (function(){
        emailjs.init("rix0cuuLnWSqcIAW-"); // Replace with your EmailJS user ID
    })();

    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get values from the form
        const ratingBar = document.getElementById('ratingBar').value;
        const reviewBar = document.getElementById('reviewBar').value;
        const ratingRestaurant = document.getElementById('ratingRestaurant').value;
        const reviewRestaurant = document.getElementById('reviewRestaurant').value;
        const ratingStaff = document.getElementById('ratingStaff').value;
        const reviewStaff = document.getElementById('reviewStaff').value;

        // Prepare the email data
        const templateParams = {
            ratingBar: ratingBar,
            reviewBar: reviewBar,
            ratingRestaurant: ratingRestaurant,
            reviewRestaurant: reviewRestaurant,
            ratingStaff: ratingStaff,
            reviewStaff: reviewStaff,
            userEmail: 'lavistarestaurants7@gmail.com' // Your recipient email
        };

        // Send the email
        emailjs.send('service_w3gy6gm', 'template_3qosk83', templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Thank you for your review!'); // Show success message
                document.getElementById('reviewForm').reset(); // Clear the form
            }, function(error) {
                console.log('Failed to send email:', error);
                alert('Sorry, there was an error sending your review. Please try again later.');
            });
    });



    