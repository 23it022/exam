// Select all the "Buy Now" text elements
const buyNowTexts = document.querySelectorAll('.buyNowText');

// Add a click event listener to each "Buy Now" text
buyNowTexts.forEach((text, index) => {
    text.addEventListener('click', () => {
        // Get the corresponding item description
        const itemDescription = text.previousElementSibling.textContent;
        // Display an alert with the item description
        alert(`You clicked on Buy Now for: ${itemDescription}`);
    });
});