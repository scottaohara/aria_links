# ARIA Links  

If you need a link, you should really just use the `<a>` element with a valid `href`. But maybe you have a legitimate reason to not use an `<a href="...">`?  I can't imagine it's actually a 'good' reason. But hey, you do you.

And while you are doing you, you can use this script to help make sure your fake links will be keyboard accessible and programmatically exposed as links to assistive technologies. 

See the script in action: [ARIA Links demo](https://scottaohara.github.io/aria_links/)  


## Usage  

Since custom ARIA links require JavaScript to work, this script allows for two base mark-up patterns to be progressively enhanced into functioning links. Each pattern will gracefully degrade to static text if JavaScript is unavailable.


### Option 1

Use the following mark-up to display static text if JavaScript is unavailable:  

```html
<span data-aria-link data-href="https://url-here">
  Link text here
</span>
```


### Option 2 

Use the following mark-up to display a static URL if JavaScript is unavailable:  

```html
<span data-aria-link>
  Link text here
  <span data-link>
    https://url-here
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

Including a `data-blank` attribute on the same element as the `data-aria-link`, will allow the custom link to open in a new window.  

```html
<span data-aria-link 
  data-href="https://url-here" 
  data-blank>
  Link text here
</span>
```


## One last chance to rethink your life choices

Again, if you need to create links you should really just use the `<a href>` element. By default browsers already handle all the functionality this script provides, and *more*. 

For instance, native links have unique context menus (right click on a link to invoke), where users can choose to open links in new windows / tab, copy the link location, save to disk, etc. 

Do you really want to remake these menus and actions for each of your faux links with more custom components and JavaScript? 

The correct answer is "no".  You don't. :)


## License & Such  

This script was written by [Scott O'Hara](https://twitter.com/scottohara).  

It has an [MIT](https://github.com/scottaohara/accessible-components/blob/master/LICENSE.md) license.  

Do with it what you will, but hopefully you will do nothing with it at all :)
