A [PostCSS] plugin to add automatically add overflow: hidden and white-space: nowrap when text-overflow: ellipsis is declared

[PostCSS]: https://github.com/postcss/postcss
[Gulp]: https://github.com/gulpjs/gulp

## Installation

```js
npm install postcss-ellipsis
```

## Example

```css
div {
    text-overflow: ellipsis
}
```

will produce

```css
div { 
    display: block; 
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
```

## Usage

Using [Gulp].

```js
var gulp            = require('gulp'),
    postcss         = require('gulp-postcss'),
    ellipsis        = require('postcss-ellipsis');

gulp.task('css', function() {
    gulp.src('path/to/dev/css').
        .pipe(postcss({
            // use it after nesting plugins
            ellipsis
        }))
        .pipe(gulp.dest('path/to/build/css'));
});

// rest of the gulp file
```
