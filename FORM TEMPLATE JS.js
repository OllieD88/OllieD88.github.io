let currentPage = 0;

window.onload = function() {
    showPage(currentPage); // Show the first page initially
};

function showPage(pageNumber) {
    // Hide all pages
    const pages = document.getElementsByClassName('form-page');
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    // Show the specified page
    pages[pageNumber].style.display = 'block';
    
    // Update progress bar
    const progressPercentage = ((pageNumber + 1) / pages.length) * 100;
    document.getElementById('progressBar').style.width = progressPercentage + '%';
}

function nextPage(pageIncrement) {
    currentPage += pageIncrement;
    showPage(currentPage);
}

function previousPage(pageDecrement) {
    currentPage -= pageDecrement;
    showPage(currentPage);
}

const trades = [
    "Accident investigator",
    "Accountant",
    "Acoustic engineer",
    "Actor (excluding stunt work)",
    "Actuary",
    "Acupuncture",
    "Administrator",
    "Adventure Goods Shop",
    "Advertising agent",
    "Aerial & satellite dish erectors - residential only",
    "Aerial erector - non residential",
    "Agricultural Tool Shop",
    "Agricultural contractors (excluding crop spraying)",
    "Agricultural contractors (including crop spraying)",
    "Air conditioning installation",
    "Alarm installers",
    "Amusement Arcade",
    "Animal breeder",
    "Antique Book Shop",
    "Antique Furniture Shop",
    "Antique Shop",
    "Antique dealer",
    "Appliance Repair Shop",
    "Appliance repairers - domestic",
    "Appliances Shop"
];

function showSuggestions(inputText) {
    const suggestionsContainer = document.getElementById('tradeSuggestions');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions
    if (inputText.length > 0) {
        const filteredTrades = trades.filter(trade => trade.toLowerCase().startsWith(inputText.toLowerCase()));
        if (filteredTrades.length) {
            suggestionsContainer.style.display = 'block';
            filteredTrades.forEach(trade => {
                const div = document.createElement('div');
                div.innerHTML = trade;
                div.classList.add('suggestion-item');
                div.onclick = function() {
                    document.getElementById('trade').value = this.innerText;
                    suggestionsContainer.style.display = 'none'; // Hide suggestions after selection
                };
                suggestionsContainer.appendChild(div);
            });
        } else {
            suggestionsContainer.style.display = 'none';
        }
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

// Hide suggestions when clicking outside
document.addEventListener('click', function (e) {
    if (!document.getElementById('trade').contains(e.target)) {
        document.getElementById('tradeSuggestions').style.display = 'none';
    }
});

    // Function to attach event listeners to radio buttons for dynamic styling
    function attachRadioBtnEventListeners() {
        document.querySelectorAll('.btn-radio-group input').forEach(input => {
            input.addEventListener('change', function() {
                let parent = this.closest('.btn-radio-group');
                parent.querySelectorAll('label').forEach(label => {
                    label.classList.remove('selected');
                });
                let selectedLabel = parent.querySelector(`label[for="${this.id}"]`);
                if(selectedLabel) {
                    selectedLabel.classList.add('selected');
                }
            });
        });
    }

    // JavaScript to toggle the visibility
    document.getElementById('yesOptionpublicliability').addEventListener('change', function() {
        document.getElementById('coverQuestion').style.display = 'block';
    });

    document.getElementById('noOptionpublicliability').addEventListener('change', function() {
        document.getElementById('coverQuestion').style.display = 'none';
    });

    document.getElementById('yesOptionprofessionalindemnity').addEventListener('change', function() {
        document.getElementById('coverQuestionpi').style.display = 'block';
    });

    document.getElementById('noOptionprofessionalindemnity').addEventListener('change', function() {
        document.getElementById('coverQuestionpi').style.display = 'none';
    });

    document.getElementById('yesOptionportablehandtools').addEventListener('change', function() {
        document.getElementById('coverQuestiontools').style.display = 'block';
    });

    document.getElementById('noOptionportablehandtools').addEventListener('change', function() {
        document.getElementById('coverQuestiontools').style.display = 'none';
    });

    document.getElementById('yesOptionbusinessequipment').addEventListener('change', function() {
        document.getElementById('coverQuestionbe').style.display = 'block';
    });

    document.getElementById('noOptionbusinessequipment').addEventListener('change', function() {
        document.getElementById('coverQuestionbe').style.display = 'none';
    });

function submitForm() {
    // Collect data from the form
    const formData = {
        businessName: document.getElementById('businessName').value,
        businessEmail: document.getElementById('businessEmail').value,
        coverAmount: document.getElementById('coverAmount').value,
        declaration1: document.getElementById('declaration1').checked,
        // Add all other form fields here
    };
    
    // Convert formData to a format suitable for emailing (e.g., JSON)
    const formDataForEmail = JSON.stringify(formData);
    
    // Here, you'll need to add code to send `formDataForEmail` to your server or email service
    console.log(formDataForEmail); // For demonstration, replace this with an actual email sending implementation
    alert('Form submitted!'); // Placeholder feedback
}
