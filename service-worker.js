self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/assets/css/style.css',
                '/assets/css/bootstrap.css',
                '/assets/css/swiper.css',
                '/assets/img/amount.png',
                '/assets/img/boxing.png',
                '/assets/img/camera.png',
                '/assets/img/card-added.png',
                "/add-card.html",
                "/betsuccess.html",
                "/card-added.html",
                "/comments.html",
                "/congrat.html",
                "/deposit.html",
                "/edit-profile.html",
                "/emptywallet.html",
                "/enable-notification.html",
                "/forgot.html",
                "/invite.html",
                "/login-email.html",
                "/login.html",
                "/match-details.html",
                "/matchboard.html",
                "/messages.html",
                "/mybets.html",
                "/news.html",
                "/nochat.html",
                "/nochat.html",
                "/noresult.html",
                "/notifications.html",
                "/participated.html",
                "/register.html",
                "/resetsuccess.html",
                "/setpassword.html",
                "/single-news.html",
                "/single-news2.html",
                "/sports.html",
                "/statistics.html",
                "/terms.html",
                "/verification.html",
                "/wallet.html",
                "/wins.html",
                "/withdraw.html",
                 // Add all your app's assets here
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
