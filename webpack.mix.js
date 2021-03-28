const mix = require('laravel-mix');
mix.disableNotifications();

mix.js('src/js/app.js', 'assets/js')
    .postCss('src/css/app.css', 'assets/css', [
        require("tailwindcss")
    ])
    .sourceMaps()
    .setPublicPath("public");