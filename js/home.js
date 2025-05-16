/*电脑js    */
document.addEventListener('DOMContentLoaded', function() {
    // 电脑端搜索功能
    const searchInput = document.querySelector('.header_Computer .searchList input');
    const searchMask = document.querySelector('.header_Computer .searchMask');
    
    if (searchInput && searchMask) {
        // 输入框交互
        searchInput.addEventListener('focus', function() {
            searchMask.classList.add('active');
        });

        // 点击外部关闭
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.header_Computer .searchList')) {
                searchMask.classList.remove('active');
            }
        });

        // 输入时添加loading效果
        searchInput.addEventListener('input', function() {
            searchMask.classList.add('searching');
            setTimeout(() => {
                searchMask.classList.remove('searching');
            }, 800);
        });
    }
});
/*手机js*/
/*搜索*/
document.addEventListener('DOMContentLoaded', function() {
    // 移动端菜单切换功能
    const menuButton = document.querySelector('.header_Wap .header_Wap_l li:nth-child(2) img');
    const wapMask = document.querySelector('.WapMask');
    
    if (menuButton && wapMask) {
        // 菜单按钮点击事件
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // 切换菜单状态
            const isActive = wapMask.classList.contains('active');
            wapMask.classList.toggle('active', !isActive);
            document.body.style.overflow = isActive ? '' : 'hidden';
        });

    }
    /*菜单*/
    const menuButton1 = document.querySelector('.header_Wap .header_Wap_l li:nth-child(1)');
    const menu = document.querySelector('.wapList');
    const mask = document.querySelector('.menu_mask');

    // 切换菜单
    function toggleMenu() {
        menu.classList.toggle('active');
        mask.classList.toggle('active');
    }

    // 菜单按钮点击
    menuButton1.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });

    // 点击遮罩关闭
    mask.addEventListener('click', function() {
        toggleMenu();
    });

    // 点击菜单项关闭
    menu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            toggleMenu();
        });
    });
});