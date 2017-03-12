# ARIA Links

If you need a link, you should really just use the ```<a>``` element. But maybe there's some super corner-case example, that I can't think of, where you couldn't possibly use the appropriate ```<a>``` element?

Well, fortunately for that ridiculous corner-case example, this script exists to create accessible fake links.

[See the ARIA Links demo](https://scottaohara.github.io/aria-links/)  

## Usage

Since ARIA links require JavaScript to work, this script allows for two base mark-up patterns to construct the fake links. Each will gracefully degrade if JavaScript is unavailable.

__Option 1:__  
Use this mark-up if you are a-ok with your link just being text if JavaScript is unavailable.  

```html
<span data-action="aria-link" 
  data-href="http://www.google.com">
  Google
</span>
```

__Option 2:__  
Use this mark-up if you would like to display the link's URL if JavaScript is unavailable.  

```html
<span data-action="aria-link">
  Yahoo
  <span data-link>
    http://www.yahoo.com
  </span>
</span>
```

If JavaScript is unavailable, the follow CSS selector will add a '-' after the link title, but before the URL.

```css
[data-link]:before {
  content: "-";
}
```

__Optional Option - opening in a new window__  
Add a ```data-blank``` attribute to the same element as the ```data-action="aria-link"```, to make the link open in a new window.  

```html
<span data-action="aria-link" 
  data-href="http://duckduckgo.com" 
  data-blank>
  Duck Duck Go
</span>
```

But again, you should really just use a normal ```<a>``` element. Browsers will handle all the expected functionality, and more, if you just use the correct element :)


## License & Stuff

This script was written by [Scott O'Hara](https://github.com/scottaohara).

It has an [MIT](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md) license.
