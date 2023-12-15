import axios from "axios";

import {
  IMAGE_DECRYPTOR_API_BASE,
  PASSWORD_MANAGER_API_BASE,
} from "../utils/constants";

export const createPassword = async (passwordUid) => {
  const response = await axios.post(`${PASSWORD_MANAGER_API_BASE}/password`, {
    identifier: passwordUid,
  });

  return response;
};

export const fetchPasswords = async () => {
  const response = await axios.get(`${PASSWORD_MANAGER_API_BASE}/passwords`);
  return response;
};

export const rotateAESKeyAndIV = async (passUid) => {
  const response = await axios.put(
    `${PASSWORD_MANAGER_API_BASE}/password/aes/${passUid}`
  );
  return response;
};

export const rotateCharset = async (passUid) => {
  const response = await axios.put(
    `${PASSWORD_MANAGER_API_BASE}/password/charset/${passUid}`
  );
  return response;
};

export const encryptPassword = async (passUid, password) => {
  const response = await axios.post(
    `${PASSWORD_MANAGER_API_BASE}/password/encrypt/${passUid}`,
    {
      password,
    }
  );
  return response;
};

export const decryptPassword = async (passUid, pmsFile) => {
  const formData = new FormData();
  formData.append("file", pmsFile);

  const response = await axios.post(
    `${IMAGE_DECRYPTOR_API_BASE}/password/decrypt/${passUid}`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      responseType: "json",
    }
  );
  return response;
};

export const deletePassword = async (passUid) => {
  const response = await axios.delete(
    `${PASSWORD_MANAGER_API_BASE}/password/${passUid}`
  );
  return response;
};

export const getCpuTemp = async () => {
  const response = await axios.get(
    `${PASSWORD_MANAGER_API_BASE}/device/cpu-temp`
  );
  return response;
};
