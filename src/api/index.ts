import axios from "axios";
import { AuthAxios } from "./AuthAxios";

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

const instance = AuthAxios();

export async function getAssetList(queryString: string) {
  const response = await instance.get(
    `http://192.168.2.134:8001/api/external/inspection/list?${queryString}`,
  );
  return response.data;
}
