import { async } from 'regenerator-runtime';
import { TIMEOUT_SEC } from './config.js';
import { Buffer } from 'buffer';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const AJAX = async function (url, uploadData = undefined) {
  try {
    const credentials = Buffer.from('leanhkhoa:123456').toString('base64');
    var auth = { Authorization: `Basic ${credentials}` };

    const fetchPro = fetch(url, {
      method: 'GET',
      headers: auth,
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};
