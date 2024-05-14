# works on node v22 now

## install dependencies
$ yarn

## build js
$ yarn build

## create pkg files
$ yarn pkg


This will create 2 files in dist/
One for windows, one for mac, types/versions specified in package.json pkg config

Drop the .exe into a folder, run it, choose advanced + run anyway, the command prompt will find all the .jpgs or .pngs in the folder, and create same-name webps

There's a optional lossless setting in the code. I rarely use it because compression is so little: queueGen.ts#17
It's usually much more efficient to make the image dimensions bigger than use lossless