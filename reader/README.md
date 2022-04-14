# Reader

The motivation here is that when going to best of the CS pages, which
are the webpages of incredibly thoughtful computer scientists, 
are mostly without `css` (which is great), but they are so long that I
would have to open the console and make some style changes to make the
page readable, like `max-width: 600px` and `margin: auto`!

So, this extension just does just that! And of course, because
finding the extension and clicking it is no faster than just making
these style changes yourself, they come with keyboard shortcuts.

| Command | Description |
| --------| ------------|
| Ctrl+i  | apply reader styles |
| Ctrl+Shift  | very primitive dark mode |
| Ctrl+Shift+L  | very primitive light mode |

**For macs *Ctrl* means *Command* key**

And, if you look at the <./script.js> it looks like the functions have
to be totally standalone, so couldn't use much of high-level
programming to make the code succinct/un-redundant. But this is only
my speculation, and that I might be unaware of the possibilities to
use features that lets me reuse logics across these functions. If you
know that, please let me know.
