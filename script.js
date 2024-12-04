// Initialize the first menu item (Beef) with the underline effect
document.addEventListener('DOMContentLoaded', () => {
    const firstButton = document.querySelector('.filter-btn');
    if (firstButton) {
        firstButton.classList.add('active');
    }
    // Initialize the content for  by default
    filterContent('crepes');
});

// Function to filter content based on selection
function filterContent(category) {
    const content = document.getElementById('popular-content');
    const imageGrid = content.querySelector('.image-grid'); // Directly target the image grid section

    // Update the title
    content.innerHTML = `<h2>Most Popular: ${category.charAt(0).toUpperCase() + category.slice(1)}</h2>`;
    
    // Add the image grid container back
    const grid = document.createElement('div');
    grid.classList.add('image-grid');

    // Update the images based on the selected category
    let imagesHTML = '';
    if (category === 'crepes') {
        imagesHTML = `
            <img src="images/crepe1.jpg" alt="crepes Item 1">
            <img src="images/crepe2.jpg" alt="crepes Item 2">
            <img src="images/crepe3.jpg" alt="crepes Item 3">
        `;
    } else if (category === 'sweets') {
        imagesHTML = `
            <img src="images/sweet1.jpg" alt="sweets Item 1">
            <img src="images/sweet2.jpg" alt="sweets Item 2">
            <img src="images/sweet3.jpg" alt="sweets Item 3">
        `;
    } else if (category === 'drinks') {
        imagesHTML = `
            <img src="images/drink1.jpg" alt="drinks Item 1">
            <img src="images/drink2.jpg" alt="drinks Item 2">
            <img src="images/drink3.jpg" alt="drinks Item 3">
        `;
    }

    grid.innerHTML = imagesHTML;
    content.appendChild(grid);

    // Remove the active class from all filter buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Add the active class to the clicked button
    const clickedButton = document.querySelector(`.filter-btn[data-category="${category}"]`);
    clickedButton.classList.add('active');
}

// Function to handle the smooth sliding effect for the active button underline
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Get the current active button and remove the 'active' class
        const activeButton = document.querySelector('.filter-btn.active');
        if (activeButton) {
            activeButton.classList.remove('active');
        }

        // Add the 'active' class to the clicked button
        this.classList.add('active');

        // Filter content when a button is clicked
        filterContent(this.getAttribute('data-category'));
    });
});
