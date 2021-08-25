
let myhttp=require("http");
let myserver= myhttp.createServer(
  function (myrequest, myresponse){
    console.log(myrequest.url);

    let mytext;
    if(myrequest.url==="/hey"){
      mytext = "Well hello there...";
    }else{
      mytext="I dont know you! Haha";
    }
    myresponse.writeHead(200, {"Content-Type": "text/plain"});

    myresponse.end("Hello Everyone!\n");
  } 
);

myserver.listen(8080, "0.0.0.0");
console.log("server has started");