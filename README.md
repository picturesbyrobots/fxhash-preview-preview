# FXHash Preview Preview

## What is this?
This is a small node.js tool that I wrote to that attempts to mimic the preview processes that FXHash uses when miniting a new GNTK.

## What problem does this solve?
 As a fxhash creator I work exculsively with WebGL. Which often causes some strange behavior during the mint processes. I found that processes of checking preview outputs was a bit cumbersum and wrote this small tool to help myself and other WebGL users streamline preview output testing.

## Is it accurate?
This projects generates a screen shot by using pupeteer to generate a viewpor at a given size, navigating to http://localhost:8080 and taking a screen shot. As far as I can tell what fxhash does when a preview image is generated. However, it's not meant as a drop in replacement for the verification process that the website provides. 
 ## Sounds cool. how do I use?
 - clone the repo and install with `npm install` 
 - make sure you have your project runing on localhost. The fxhash webpack boiler plate is awesome
 - run npm start to generate a preview using the default settings
 - play around with the  flags. `--wait` will change the waittime. `--size` will control the size of the viewport generated. `--help` will give you the commands
- make beautiful art!


## I have found a bug.
Sweet! open an issue and I'll poke at it when I have a free moment. PR are also welcome!

That's it!

Have a great day. I can't wait to see what you'll make.
