var events = new Events();

events.on("some:event", function(data){
  console.log("i'm an event handler!");
  console.log("Data was passed to me", data);
});

events.trigger("some:event", "some data");
