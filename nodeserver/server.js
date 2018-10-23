const express=require("express")
const http=require("http")
const socketio=require("socket.io")

const app =express()
const server= http.Server(app)
server.listen(3000)
const io=socketio(server)
var listeUsersConnecteds=[]
var listemessage=[]


io.on("connection",(socket)=>{
  
  socket.on("listemessages",(data)=>{
          let msgsend={
                 "user":data.username,
                 "message":data.message,
                "connect":data.connect
            }
    

            listemessage.push(msgsend)
            
            if(msgsend.connect ){
            socket.emit("listemessages",listemessage)
            }
            socket.broadcast.emit("listemessages",listemessage)


           
    })
  // user connexion
    socket.on("usernameconnect",(data)=>{
      
        for (i = 0; i < listeUsersConnecteds.length; i++) {
            if (listeUsersConnecteds[i].username==data) {
                listeUsersConnecteds.splice(i, 1);
                
            }
        }

        userconnexion={
            "idsocket":socket.id,
            "username":data,
        }
        console.log(" user connectado -->"+data)

        let  usercnx={
            "user":"newsocket",
            "message":data+" vient de se connecter",
           "connect":false,
           "justconnect":true
       }

   
            listeUsersConnecteds.push(userconnexion)

            listeUsersConnecteds.map((val,indx,array)=>{

                console.log(val)

        })
      
        socket.broadcast.emit("usrconnexion",usercnx)
        
        socket.emit("getuserconnecteds")
        
       socket.emit("listemessages",listemessage)

    })



    socket.on("getuserconnecteds",()=>{
        
        socket.emit("sendmeliste",listeUsersConnecteds)
       socket.broadcast.emit("getlisteuser",listeUsersConnecteds)
        
        })
    socket.on("disconnect",() => {
     
     
      for (i = 0; i < listeUsersConnecteds.length; i++) {
        if (listeUsersConnecteds[i].idsocket==socket.id) {
            console.log("descopnnectar "+listeUsersConnecteds[i].username)
            listeUsersConnecteds.splice(i, 1);
            console.log("socket id desconnectado "+socket.id)
            socket.broadcast.emit("getlisteuser",listeUsersConnecteds)
   
           //
           //socket.disconnect()
           //vengo de quitar el socket
        }
       
    }
    
   
   

      });

    
})

