document.addEventListener("DOMContentLoaded", function() {
    const texts = [" variety of dishes","healthy recipes"," Best Resturant", " low Price ordering ","Trustable food ordering"];
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 150;
    const erasingSpeed = 100;
    const newTextDelay = 1000;
    const typingText = document.getElementById("typingText");

    function type() {
        if (isDeleting) {
            if (charIndex > 0) {
                charIndex--;
                typingText.textContent = texts[index].substring(0, charIndex);
                setTimeout(type, erasingSpeed);
            } else {
                isDeleting = false;
                index = (index + 1) % texts.length;
                setTimeout(type, typingSpeed);
            }
        } else {
            if (charIndex < texts[index].length) {
                charIndex++;
                typingText.textContent = texts[index].substring(0, charIndex);
                setTimeout(type, typingSpeed);
            } else {
                isDeleting = true;
                setTimeout(type, newTextDelay);
            }
        }
    }

    type();
});

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-container input[type="search"]');
    const searchContainer = document.querySelector('.search-container');
    const suggestionBox = document.querySelector('.suggestion-box');

    // Fetch suggestion data
    const suggestionsData = [
        { name: "Chicken Biryani", url: "recipe1.html" },
        { name: "Butter Chicken", url: "recipe2.html" },
        { name: "Chicken Tikka Masala ", url: "recipe3.html" },
        { name: "Mutton Rogan Josh", url: "recipe4.html" },
        { name: "Fish Curry", url: "recipe5.html" },
        { name: " Chicken Korma", url: "recipe6.html" },
        { name: " Tandoori Chicken", url: "recipe7.html" },
        { name: " Prawn Curry", url: "recipe8.html" },
        { name: " Keema Matar", url: "recipe9.html" },
        { name: "Chicken 65", url: "recipe10.html" },
        { name: "Paneer Butter Masala", url: "recipe11.html" },
        { name: "Aloo Gobi", url: "recipe12.html" },
        { name: "Chana Masala", url: "recipe13.html" },
        { name: "Baingan Bharta", url: "recipe14.html" },
        { name: "Palak Paneer", url: "recipe15.html" },
        { name: "Dal Makhan", url: "recipe16.html" },
        { name: "Vegetable Pulao", url: "recipe17.html" },
        { name: "Bhindi Masala", url: "recipe18.html" },
        { name: "Veg Biryani", url: "recipe19.html" },
        { name: "Masoor dal", url: "recipe20.html" },
        { name: "Rajma", url: "recipe21.html" },
        { name: "Pindi Chole", url: "recipe22.html" },
        { name: "Gobi Manchurian", url: "recipe23.html" },
        { name: "Malai Kofta", url: "recipe24.html" },
        { name: "Sambar", url: "recipe25.html" },
        { name: "Dosa with Potato Filling", url: "recipe26.html" },
        { name: "Aloo Paratha", url: "recipe27.html" },
        { name: "Classic Cold Coffee", url: "recipe28.html" },
        { name: "Strawberry Banana Smoothi", url: "recipe29.html" },
        { name: "Mango Lassi", url: "recipe30.html" },
        { name: "Fried Rice", url: "recipe31.html" },

        // { name: "Fish Curry", url: "recipe5.html.html" }
        // Add more suggestions as needed
    ];

    // Add event listener to the search input
    searchInput.addEventListener('input', function () {
        const filter = searchInput.value.toUpperCase();

        // Clear previous suggestions
        suggestionBox.innerHTML = '';

        // If the search input is empty, do not display suggestions
        if (filter === '') {
            return;
        }

        // Use a Set to keep track of added suggestions to avoid duplicates
        const addedSuggestions = new Set();

        // Display matching results as suggestions
        suggestionsData.forEach(function (suggestion) {
            const text = suggestion.name;
            if (text.toUpperCase().indexOf(filter) > -1 && !addedSuggestions.has(text)) {
                const suggestionItem = document.createElement('li');
                suggestionItem.textContent = text;
                suggestionItem.addEventListener('click', function () {
                    // Navigate to the corresponding URL
                    window.location.href = suggestion.url;
                });
                suggestionBox.appendChild(suggestionItem);
                addedSuggestions.add(text);
            }
        });
    });

    // Close suggestion box when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!searchContainer.contains(event.target)) {
            suggestionBox.innerHTML = '';
        }
    });
});
