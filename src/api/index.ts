import axios from "axios";

/**
 * File 업로드 예시
 **/

// export async function upload(formData: FormData) {
//   const response = await axios.post(
//     `${URL}/api/upload`,
//     formData,
//     {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     },
//   );

//   return response.data;
// }

/**
 * File 다운로드 예시
 **/

// export async function downloadTool(serverType: string) {
//   return axios.get(`${URL}/api/download`, {
//     responseType: "blob",
//   });
// }

/**
 * 기본 데이터 조회 예시
 */

// export async function getData() {
//   const response = await axios.get(`${URL}/api/get`);
//   return response.data;
// }

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

/**
 * Home
 */

export async function getHomeDevices() {
  const response = await axios.get(`${BASE_URL}/api/devices`);
  return response.data;
}

export async function getHomeScans() {
  const response = await axios.get(`${BASE_URL}/api/scans`);
  return response.data;
}

export async function getHomeDevicesHighRisk() {
  const response = await axios.get(`${BASE_URL}/api/devices-high-risk`);
  return response.data;
}

export async function getHomeAlerts(week?: string) {
  const response = await axios.get(`${BASE_URL}/api/alerts`, {
    params: {
      week,
    },
  });
  return response.data;
}

export async function getHomeWeakDevices() {
  const response = await axios.get(
    `${BASE_URL}/api/devices-vulnerability-category`,
  );
  return response.data;
}

export async function getHomeVulns() {
  const response = await axios.get(`${BASE_URL}/api/vulnerabilities-top5`);
  return response.data;
}

export async function getHomeSecurityAlerts() {
  const response = await axios.get(`${BASE_URL}/api/devices-alert-category`);
  return response.data;
}

/**
 * Devices
 */

export async function getDevices() {
  const response = await axios.get(`${BASE_URL}/api/devices`);
  return response.data;
}

/**
 * Devices detail
 */

/**
 * Vulnerabilities
 */
/**
 * Security-alerts
 */
/**
 * Modal
 */
