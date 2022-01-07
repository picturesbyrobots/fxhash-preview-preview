# FXHash Preview Preview
![image](screenshots/previewpreview.gif)

## What is this?
This is a small node.js tool that I wrote to that attempts to mimic the preview processes that FXHash uses when miniting a new GNTK.

## What problem does this solve?
 As a fxhash creator I work exculsively with WebGL. This often causes some strange behavior during the mint processes. I found that processes of checking preview outputs was a bit cumbersum and wrote this small tool to help myself and other WebGL users streamline preview output testing.

## Is it accurate?
This projects generates a screen shot by using puppeteer to 
1) generate a viewport at a given size 
2) navigate to http://localhost:8080 
3) take a screen shot after a certain amount of time or after fxpreview() is called in your code.

This should give you a fairly good sense of if your project is outputing previews and should allow you to catch obvious errors like black screens.  However, it's not meant as a drop in replacement for the verification process that the website provides. 
 ## Sounds cool. how do I use?
 - clone the repo and install with `npm install` 
 - make sure you have your project runing on localhost. The fxhash webpack boiler plate is awesome
 - `run npm start` to generate a preview using the default settings
 - play around with the  flags. `--wait` will change the waittime. `--size` will control the size of the viewport generated. `--help` will give you the commands `node ./ --size 1024 --time 1024 --method wait --usefeh true` will generate a screenshot at 1024x1024 after 1.24 seconds and attempt to use the command line program `feh` to open the image after generation
- make beautiful art!


## I have found a bug.
Sweet! open an issue and I'll poke at it when I have a free moment. PR are also welcome!

That's it!

Have a great day. I can't wait to see what you'll make.
