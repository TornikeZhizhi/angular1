import { Component } from "@angular/core";
import { FormsModule } from '@angular/forms';

@Component({

    selector:'app-server',
    templateUrl:"./server.component.html",
    styles:[`
     .offline {
         color:red;
     }
    

    `]
    
})

export class ServerComponent {
    serverId:number = 10;
    serverStatus: string = "offline";
    allowServer = false;
    serverText : string = "server down";
    serverCreated = true;
    status = "offline";

    serverName:string = "testServer";
    servers=["tornike","ani","shmani"]



    getServerStatus(){
        return this.serverStatus;
    }

    constructor(){

        setTimeout(() => {
           this.allowServer = true 
        }, 2000);

    }

    onCreateServer(){
        
        this.servers.push(this.serverName)
        this.serverText = "server Is ONLINE !!!"
    }

    inputHandler(event:any){
        console.log(event)
    //    this.serverText = (<HTMLInputElement>event.target).value
    this.serverText = event.target.value

    }

  


}