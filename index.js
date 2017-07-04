/**
 * POSTCSS ELLIPSIS
 * A postcss plugin to add automatically add overflow: hidden and white-space: nowrap when text-overflow: ellipsis is declared
 * version          1.0.0
 * author           Arpad Hegedus <hegedus.arpad@gmail.com>
 */

// load dependencies
let postcss = require('postcss'),
    util = require('postcss-plugin-utilities');

// export plugin
module.exports = postcss.plugin('postcss-visibility', options => {
    return css => {
        css.walkDecls('text-overflow', decl => {
            let parent = decl.parent;
            if (decl.value === 'ellipsis') {
                let display = 'block',
                    width = null;
                parent.walkDecls('width', d => { width = d.value; });
                parent.walkDecls('display', d => {
                    display = null;
                    if (d.value !== 'block' && (d.value === 'inline-block' && !width)) {
                        d.value = 'block';
                    }
                });
                if (display) { decl.before({ prop: 'display', value: display }); }
                decl.before({ prop: 'overflow', value: 'hidden' });               
                decl.before({ prop: 'white-space', value: 'nowrap' });
            }
        });
    }
});