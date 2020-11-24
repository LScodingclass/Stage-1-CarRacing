class Player{
    constructor(){

    }
    getCount(){
       var PlayerCountRef =  database.ref("PlayerCount");
       PlayerCountRef.on("value", function(data){
           playerCount = data.val();
           
       });
    }
    updateCount(count){
        database.ref("/").update({
            playerCount: count
            
        })
       
    }
    update(name){
        var playerNameRef = "player" + playerCount;
        database.ref(playerNameRef).set({
            name: name
        })
    }
}