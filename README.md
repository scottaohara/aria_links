# ARIA Links  
If you need a link, you should really just use the `<a>` element with a valid `href`. But maybe there's some super corner-case situation, that I can't presently think of, where you can't use an `<a href="...">`?  

Fortunately, this script exists to help create accessible fake links using the [ARIA `role="link"`](https://www.w3.org/TR/wai-aria-1.1/#link).   

See the script in action: [ARIA Links demo](https://scottaohara.github.io/aria_links/)  


## Usage  
Since custom ARIA links require JavaScript to work, this script allows for two base mark-up patterns to be progressively enhanced into functioning links. Each pattern will gracefully degrade to static text if JavaScript is unavailable.

### Option 1
Use the following mark-up if you want to provide static text, if JavaScript is unavailable:  

```html
<span data-action="aria-link" 
  data-href="https://www.google.com">
  Google
</span>
```

### Option 2 
Use the following mark-up if the static text should display a static URL, if JavaScript is unavailable:  

```html
<span data-action="aria-link">
  Yahoo
  <span data-link>
    https://www.yahoo.com
  </span>
</span>
```

If JavaScript is disabled, the following CSS selector will add a "-" between what would have been the link text, and the static URL.  

```css
[data-link]:before {
  content: "-";
}
```

### Optional Option - opening in a new window
Including a `data-blank` attribute on the same element as the `data-action="aria-link"`, will allow the custom link to open in a new window.  

```html
<span data-action="aria-link" 
  data-href="https://duckduckgo.com" 
  data-blank>
  Duck Duck Go
</span>
```


## This is a really bad idea
Again, if you need to create links you should really just use the `<a>` element. By default browsers already handle all the functionality this script provides, and *more*. 

For instance, native links have unique context menus (right click on a link to invoke), where users can choose to open links in new windows or tab, copy the link location, save to disk, and many other actions. 

Do you really want to remake these menus and actions for each of your faux links with more custom components and JavaScript? 

The correct answer is "no".  You don't. :)


## License & Such  
This script was written by [Scott O'Hara](https://twitter.com/scottohara).  

It has an [MIT](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md) license.  

Do with it what you will :)  

