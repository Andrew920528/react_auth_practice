const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const moment = require("moment");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
const TIMEZONE = process.env.TIMEZONE;

let clients = [];
let eventData = null;

function getNowTimeDisplay() {
  return moment().add(TIMEZONE, "h").format("YY/MM/DD HH:mm:ss");
}

// cross origin
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// simple api test
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// get who connects to event source
app.get("/status", (req, res) => {
  let clientIds = [];
  for (let item of clients) {
    clientIds.push(item.id);
  }
  res.json({ number: clients.length, clients: clientIds });
});

// event source route
// EVENT_URL + ?userId=${currentUser.userId}
app.get("/EventSource", async (req, res) => {
  // set headers
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };
  res.writeHead(200, headers);

  // initial data
  const data = `data: ${JSON.stringify(eventData)}\n\n`;

  res.write(data);

  // connectClient(req, res);

  console.log("connect to client", req.query);
  if (!req.query.userId) {
    console.log("request param does not include userId");
  }
  // 將每一個網頁端命名並存在 clients 裡面
  const clientId = `${req.query.userId}_${Date.now()}`;

  const newClient = {
    id: clientId,
    res,
  };

  clients.push(newClient);

  clients.forEach((element) => {
    console.log(`[${getNowTimeDisplay()}] Event Message | ` + element.id);
  });

  req.on("error", (error) => {
    console.log(`[${getNowTimeDisplay()}] Event Message | ` + error);
  });

  req.on("close", () => {
    console.log(
      `[${getNowTimeDisplay()}] Event Message | ${clientId} Connection closed`
    );
    clients = clients.filter((client) => client.id !== clientId);
  });
});

function sendEventsToAll(newEventData) {
  clients.forEach((client) => {
    // 將資料傳給每一個前端網頁，記得拿資料是 response.data 不是只有 response
    client.res.write(`data: ${JSON.stringify(newEventData)}\n\n`);
  });
}

app.post("/sensor", async (req, res) => {
  // 外部 call 這個 post, 所傳的資料會包含在 request 物件的 body
  if (req.body.operation === "add") {
    // Add new item to database
  } else if (req.body.operation === "update") {
    // Make update to database
  } else if (req.body.operation === "delete") {
    const id = req.body.id;

    // Delete item in database
  }
  res.json({ indicator: true, message: "Successfully" });
  // 回傳給所有跟這個伺服器連線的前端
  return sendEventsToAll(req.body);
});

app.listen(PORT, () => {
  console.log(
    `[${getNowTimeDisplay()}] Event Server | Server is listening on port ${PORT}...`
  );
});
