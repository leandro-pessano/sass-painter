let mix = require('laravel-mix');

mix.js('src/app.js', 'dist/js/script.js').sass('src/app.scss', 'dist/css/style.css').options({
    processCssUrls: false
});
