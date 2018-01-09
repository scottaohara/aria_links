# ARIA Links  

If you need a link, you should really just use the ```<a>``` element. But maybe there's some super corner-case example, that I can't think of, where you couldn't possibly use the appropriate ```<a>``` element?  

Well, fortunately for that ridiculous example, this script exists to create accessible fake links.  

[See the ARIA Links demo](https://scottaohara.github.io/aria-links/)  

## Usage  
Since non-native links require JavaScript to work, this script allows for two base mark-up patterns to construct the ARIA links. Each will gracefully degrade to static text if JavaScript is unavailable.

__Option 1:__  
Use this mark-up if you are a-OK with your link just being text if JavaScript is unavailable.  

```html
<span data-action="aria-link" 
  data-href="https://www.google.com">
  Google
</span>
```

__Option 2:__  
Use this mark-up if you would like to display the link's URL if JavaScript is unavailable.  

```html
<span data-action="aria-link">
  Yahoo
  <span data-link>
    https://www.yahoo.com
  </span>
</span>
```

If JavaScript is unavailable, the following CSS selector will add a '-' after the link title, but before the URL.  

```css
[data-link]:before {
  content: "-";
}
```

__Optional Option - opening in a new window__  
Add a `data-blank` attribute to the same element as the `data-action="aria-link"`, to make the link open in a new window.  

```html
<span data-action="aria-link" 
  data-href="https://duckduckgo.com" 
  data-blank>
  Duck Duck Go
</span>
```

### This is a really bad idea

If you need to create links, you should really just use a normal `<a>` element. Browsers will handle all the functionality of this script by default, if the appropriate `<a>` element is used. 

Additionally, native links have context menus built in, where users can decide themselves to open links in new windows, tabs, copy the link location, save to disk, and many other actions. Do you really want to remake these menus and actions with JavaScript?

The correct answer is, "no".  You don't.  Just use a real `<a>` instead. :)


## License & Such  
This script was written by [Scott O'Hara](https://twitter.com/scottohara).  

It has an [MIT](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md) license.  

Do with it what you will :)  

