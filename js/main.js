document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission behavior
        
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm === '') {
            alert('Search term cannot be empty!');
            return;
        }
        
        // Redirect to shop.html with search parameters
        window.location.href = `shop.html?search=${encodeURIComponent(searchTerm)}`;
    });
});
const mobileSearchForm = document.getElementById('mobileSearchForm');
const mobileSearchInput = document.getElementById('mobileSearchInput');

if (mobileSearchForm) {
    mobileSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const searchTerm = mobileSearchInput.value.trim();
        
        if (searchTerm === '') {
            alert('Search term cannot be empty!');
            return;
        }
        
        window.location.href = `shop.html?search=${encodeURIComponent(searchTerm)}`;
    });
}