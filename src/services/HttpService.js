import React, { useState, useEffect } from "react";
import axios from "axios";
class HttpService {
  send() {
    console.log("send http request");
  }
}

export function SendRequest() {
  console.log("new request!");
  // const [config, setConfig] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://10.0.0.172:5063", {
  //       params: {
  //         service: "config",
  //         operation: "get_security_device",
  //         token:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNpdGVfaWQiOiJOZXgwMDEiLCJzaXRlX25hbWUiOiJOZXh1bmkxNzIiLCJ1c2VyX25hbWUiOiJldmVudCBzZXJ2ZXIiLCJ1c2VyX2lkIjoiZXZlbnRTZXJ2ZXIiLCJwZXJtaXNzaW9uIjoiMyIsImV4cGlyZSI6MTY4NDM0Nzg2MC42MDI5NjF9LCJleHAiOjE2ODQzNDc4NjAsImlzcyI6Ik1hcGxldHJlZUxvZ2lzdGljVHJ1c3RTZWN1cml0eSJ9.hU8efStoGeyDF_gLA2_7isIytIb2sL1ZlpKlRhtqRN4",
  //       },
  //     })
  //     .then((res) => {
  //       if (res.data.indicator) {
  //         setConfig(res.data.message[0].device_id);
  //       } else {
  //         alert(res.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   console.log("123132132131");
  // }, []);
}
export async function handleUpdata() {
  let data = {
    service: "sensor",
    operation: "add_comments",
    star: 2,
    room_id: "Taipei1F",
    comments: "test",
  };
  const res = await axios.post("https://10.0.0.172:5063", data);
  console.log(res.data);
}

export default HttpService;
