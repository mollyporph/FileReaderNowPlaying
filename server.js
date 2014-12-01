var express = require('express')

var fs = require('fs')
, filename = "song.json",
songInfo;

var app = express()
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.set('views', __dirname + '/views')
app.set('view engine', 'jade')



app.get('/',function(req,res)
{

fs.readFile(filename, 'utf8', function(err, data) {
  if (err){
    throw err;
  }
  else
    {
      songInfo = JSON.parse(data);
      res.render('index',
      {
        artist: songInfo.artist,
        title: songInfo.title,
        albumart: songInfo.albumart
      });
    }

});

})
app.listen(3000)
