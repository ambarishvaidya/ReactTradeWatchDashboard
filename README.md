# TradeWatch Dashboard

This is a **Work In Progress** project which currently displays Spot ticks from [ForexService](https://github.com/ambarishvaidya/ForexService). The React application can add new subscriptions, start, stop, pause and resume the publishing.
![Dashboard](/Screenshots/Dashboard.jpg)
## Preparing the Application

-  Download the codebase.
-  Open the folder in VS Code
-  Run ***npm install*** in VS Code terminal window to get all the required packages.

## How to Run the Application

-  Start [ForexService](https://github.com/ambarishvaidya/ForexService). This is launched with pre-configured tickers that is published at different frequencies. If you need to alter the frequency, update the code or you can change the frequency from this app.
-  Inside VS Code run the application using **npm start**. This will launch the React page on port 3000.
-  The application connects to [ForexService](https://github.com/ambarishvaidya/ForexService) @ https://localhost:7129/. If this URL has changed, make relevant changes to the application.
  -   On launch, the grid will connect to the [ForexService](https://github.com/ambarishvaidya/ForexService).
  -   Published Tick data will be pushed to the app.
-   To Add new Subscription, populate the input and hit Add.
    
  -   Existing valid subscription is overwritten
  -   Invalid subscription is neglected    
-  Other operations are trivial!
