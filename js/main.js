document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止表单默认提交行为
        
        const searchTerm = searchInput.value.trim();
        
        if (searchTerm === '') {
            alert('Search term cannot be empty!');
            return;
        }
        
        // 跳转到shop.html并传递搜索参数
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