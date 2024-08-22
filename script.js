document.addEventListener('DOMContentLoaded', (event) => {
    const profilePic = document.querySelector('.profile-pic');
    const username = document.querySelector('.username');
    const bio = document.querySelector('.bio');
    const links = document.querySelectorAll('.link-item');
    const discordBtn = document.getElementById('discordBtn');
    const copyNotification = document.getElementById('copyNotification');
    const modItems = document.querySelectorAll('.mod-item h3');

    // Animate profile picture
    profilePic.style.opacity = '0';
    profilePic.style.transform = 'scale(0.5)';
    setTimeout(() => {
        profilePic.style.transition = 'all 1s ease';
        profilePic.style.opacity = '1';
        profilePic.style.transform = 'scale(1)';
    }, 100);

    // Animate username and bio
    [username, bio].forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        setTimeout(() => {
            el.style.transition = 'all 1s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 300 + index * 200);
    });

    // Animate links
    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(20px)';
        setTimeout(() => {
            link.style.transition = 'all 0.8s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 700 + index * 100);
    });

    // Discord button click event
    discordBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('px93').then(() => {
            copyNotification.style.display = 'block';
            setTimeout(() => {
                copyNotification.style.opacity = '1';
            }, 10);
            setTimeout(() => {
                copyNotification.style.opacity = '0';
                setTimeout(() => {
                    copyNotification.style.display = 'none';
                }, 300);
            }, 2000);
        });
    });

    // Add click animation to links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.target.closest('.link-item').style.animation = 'none';
            setTimeout(() => {
                e.target.closest('.link-item').style.animation = 'glow 0.5s ease-in-out';
            }, 10);
        });
    });

    // MODS section toggle
    modItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            const toggleBtn = item.querySelector('.toggle-btn');

            content.classList.toggle('active');
            toggleBtn.textContent = content.classList.contains('active') ? '-' : '+';
        });
    });

    // Smooth scroll for MODS button
    document.querySelector('.mods-button').addEventListener('click', (e) => {
        e.preventDefault();
        const modsSection = document.getElementById('mods');
        modsSection.scrollIntoView({ behavior: 'smooth' });
    });
});