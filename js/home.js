/*Desktop JS    */
document.addEventListener('DOMContentLoaded', function() {
    // Desktop search functionality
    const searchInput = document.querySelector('.header_Computer .searchList input');
    const searchMask = document.querySelector('.header_Computer .searchMask');
    
    if (searchInput && searchMask) {
        // Input field interaction
        searchInput.addEventListener('focus', function() {
            searchMask.classList.add('active');
        });

        // Close on outside click
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.header_Computer .searchList')) {
                searchMask.classList.remove('active');
            }
        });

        // Show loading effect while typing
        searchInput.addEventListener('input', function() {
            searchMask.classList.add('searching');
            setTimeout(() => {
                searchMask.classList.remove('searching');
            }, 800);
        });
    }
});
/*Mobile JS*/
/*Search*/
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuButton = document.querySelector('.header_Wap .header_Wap_l li:nth-child(2) img');
    const wapMask = document.querySelector('.WapMask');
    
    if (menuButton && wapMask) {
        // Menu button click event
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Toggle menu state
            const isActive = wapMask.classList.contains('active');
            wapMask.classList.toggle('active', !isActive);
            document.body.style.overflow = isActive ? '' : 'hidden';
        });

    }
    /*Menu*/
    const menuButton1 = document.querySelector('.header_Wap .header_Wap_l li:nth-child(1)');
    const menu = document.querySelector('.wapList');
    const mask = document.querySelector('.menu_mask');

    // Toggle menu
    function toggleMenu() {
        menu.classList.toggle('active');
        mask.classList.toggle('active');
    }

    // Menu button click
    menuButton1.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // Close menu when clicking on overlay
    mask.addEventListener('click', function() {
        toggleMenu();
    });

    // Close menu when clicking on a menu item
    menu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            toggleMenu();
        });
    });
});