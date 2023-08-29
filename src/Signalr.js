import * as signalR from "@microsoft/signalr";

function fulfilled() {
  console.log("Connection to User Hub Successful");
}

function rejected() {}

const hubConnection = new signalR.HubConnectionBuilder()
  .withAutomaticReconnect()
  .withUrl("https://localhost:7129/ForexService")
  .build();
hubConnection.start().then(fulfilled, rejected);

export default hubConnection;
