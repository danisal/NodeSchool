'use strict';

function replaceChar(s) {
  return s.replace(/&/g, '&amp;')
          .replace(/>/g, '&gt;')
          .replace(/</g, '&lt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;')
}

function html(username, ...comment) {
    var result = username[0];
    for (var i = 0; i < comment.length; ++i) {
        result += replaceChar(comment[i]) + username[i + 1];
    }
    return result;
}

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
