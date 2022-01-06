const puppeteer = require('puppeteer');
const yargs = require('yargs/yargs')

const {hideBin} = require('yargs/helpers');
const { exit } = require('yargs');
const {exec} = require("child_process");
const { stderr } = require('process');

// set up some easy args
const argv = yargs(hideBin(process.argv))
  .command('size', 'specify the default viewport width', {
    size : {
      description : 'the size of the viewport',
      alias : 's',
      type : 'number'
    }
  })
  .command('out' , 'specify the filename' , {
    filename : {
      description : 'the name of the file to save',
      alias : 'f',
      type : 'string'
    }
  })
  .command('method' , 'wait for a function or a time', {
    method :{
      description : 'wait for a time or a method. use preview to wait for fxpreview(), use wait to wait for a time',
      alias : 'm',
      type : 'string'
    }
  })
  .command('time', 'time to wait', {
    time :  {
      description : 'time to wait',
      alias : 'w',
      type : 'number'
    }
  })
  .command('usefeh', 'use feh to preview the image', {
    time :  {
      description : 'preview the image with feh',
      type : 'boolean'
    }
  })
  .help()
  .alias('help', 'h').argv
  



  // run function does most of the work here
const run = async function (argv) {
  const browser = await puppeteer.launch({
      args: [
          '--disable-web-security'
      ]
  });
  const page = await browser.newPage();
  const size = argv.size ? argv.size : 2048
  await page.setViewport({
  width: size,
  height: size,
  deviceScaleFactor: 1,
});
let host_string = argv.host ? argv.host : 'http://localhost:8080/'

try 
{
  await page.goto(host_string);

}
catch(error) 
{
  console.log(`Got an error when navigating to ${host_string}\nis it running?`)
  exit()
  return
}
const screenshot = async ()  => {
const dimensions = await page.evaluate(() => {
      return {
          width : document.documentElement.clientWidth,
          height : document.documentElement.clientHeight,
          deviceScaleFactor : window.devicePixelRatio
      }
  })
  console.log(dimensions)
  let outfile_path = argv.out ? argv.out : 'preview.png'
  await page.screenshot({ path:outfile_path });
  console.log(`SAVED to : ${outfile_path}`)
  await browser.close();
  if(argv.usefeh)
  {
  exec(`feh ${outfile_path}`, (error, stdout, stderr) => {

    })
  }
}

if(argv.method === 'wait' || !argv.method)
{
  let wait_time = argv.time ? argv.time : 1000
  await page.waitFor(wait_time)
  await screenshot()
}
else
{
  console.log('WAITING FOR fxpreview()')
  page.on('console', async message => {
    if(message.text().includes('fxhash: TRIGGER PREVIEW'))
    {
      await screenshot()
    }
  })
  await page.waitFor(1000)
  console.log('preview never called taking screenshot')
  screenshot()
}

}

run(argv)


