document.addEventListener('DOMContentLoaded', () => {
    const isHome = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const prefix = isHome ? 'pages/' : '';
    const homeLink = isHome ? '#' : '../index.html';

    const navHTML = `
        <nav>
            <div class="nav-container">
                <a href="${homeLink}" class="nav-logo">
                    <i class="fas fa-graduation-cap text-indigo-300"></i>
                    두석의 AI 교실
                </a>
                <div class="nav-links">
                    <a href="${homeLink}" class="nav-link">홈</a>
                    <a href="${prefix}deeplearning.html" class="nav-link">딥러닝 게임</a>
                    <a href="${prefix}seatingarrangement.html" class="nav-link">자리 배치</a>
                    <a href="${prefix}smartgrouper.html" class="nav-link">스마트 모둠</a>
                    <a href="${prefix}rolerotater.html" class="nav-link">1인 1역</a>
                </div>
            </div>
        </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Highlight active link
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') !== '#' && currentPath.includes(link.getAttribute('href').replace('../', '').replace('pages/', ''))) {
            link.classList.add('active');
        }
    });
});
