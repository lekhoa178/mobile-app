import { TIMEOUT_SEC } from "./config.js";
import { Buffer } from "buffer";
import { getToken } from "./service/LoginService.js";

const timeout = function(s) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function(
  url,
  method = "GET",
  uploadData = undefined
) {
  try {
    const token = await getToken();

    const fetchPro = fetch(url, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(uploadData)
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
export const AJAX_REQUEST = async (
  url,
  method = "POST",
  uploadData = undefined
) => {
  try {
    const fetchPro = fetch(url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(uploadData)
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
