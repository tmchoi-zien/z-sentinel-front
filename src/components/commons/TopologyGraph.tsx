import { getSecurityAlertsGraph } from "@/api";
import { HomeGraphType, ResponseType } from "@/types/api";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Edge, Network, Node } from "vis-network";
import useModal from "../modals/useModal";

const MOCK = {
  code: 200,
  data: {
    nodes: [
      {
        id: 1,
        label: "Synology RT6600ax Router",
        type: "Router",
        ip: "192.168.188.1",
        isConnected: true,
      },
      {
        id: 2,
        label: "Hanwha XRN-K820S NVR",
        type: "NVR",
        ip: "192.168.188.250",
        isConnected: true,
      },
      {
        id: 3,
        label: "Hanwha IPC-5510_AF27135Y Camera",
        type: "Camera",
        ip: "192.168.188.7",
        isConnected: true,
      },
      {
        id: 4,
        label: "IDIS DC-D4238HRAT Camera",
        type: "Camera",
        ip: "192.168.188.9",
        isConnected: true,
      },
      {
        id: 5,
        label: "Synology TC500 Camera",
        type: "Camera",
        ip: "192.168.188.83",
        isConnected: true,
        alertCount: 3,
      },
      {
        id: 6,
        label: "TAPO C200 Camera",
        type: "Camera",
        ip: "192.168.188.50",
        isConnected: true,
      },
      {
        id: 7,
        label: "Amcrest IP2M-841-V3 Camera",
        type: "Camera",
        ip: "192.168.188.78",
        isConnected: true,
        alertCount: 2,
      },
      {
        id: 8,
        label: "LG Electronics UQ7070ZUE TV",
        type: "TV",
        ip: "192.168.188.163",
        isConnected: true,
      },
      {
        id: 9,
        label: "Hanwha QND-6022R Camera",
        type: "Camera",
        ip: "192.168.188.178",
        isConnected: true,
      },
      {
        id: 10,
        label: "FOCUS H&S FNR-3004 NVR",
        type: "NVR",
        ip: "192.168.188.201",
        isConnected: true,
      },
      {
        id: 11,
        label: "Liteon PC",
        type: "PC",
        ip: "192.168.188.227",
        isConnected: true,
      },
    ],
    edges: [
      {
        from: 1,
        to: 8,
      },
      {
        from: 1,
        to: 2,
      },
      {
        from: 1,
        to: 10,
      },
      {
        from: 2,
        to: 9,
      },
      {
        from: 10,
        to: 3,
      },
      {
        from: 1,
        to: 6,
      },
      {
        from: 1,
        to: 5,
      },
      {
        from: 1,
        to: 4,
      },
      {
        from: 1,
        to: 7,
      },
      {
        from: 1,
        to: 11,
      },
    ],
  },
};

interface Props {
  width?: number;
  height?: number;
}

export default function TopologyGraph({ width = 1000, height = 600 }: Props) {
  const WIDTH = `w-[${width}px]`;
  const HEIGHT = `h-[${height}px]`;

  const [data, setData] = useState<HomeGraphType | null>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const { openChooseAlert } = useModal();

  useEffect(() => {
    const getData = async () => {
      // const res = await getSecurityAlertsGraph();
      // console.log(res);
      setData(MOCK.data);
    };
    getData();
  }, []);

  useEffect(() => {
    if (!data) return;
    if (!networkRef.current) return;

    // 네트워크 옵션 설정
    const options = {
      nodes: {
        shape: "dot",
        size: 20,
        font: {
          size: 15,
          color: "white",
        },
      },
      edges: {
        color: "#ffffff",
      },
      interaction: {
        dragNodes: false,
      },
      physics: {
        enabled: false, // 물리 효과 활성화
      },
      layout: {
        randomSeed: "0", // 네트워크가 렌더링 될 때 매번 같은 배치로 렌더링됨
      },
    };

    // 네트워크 그래프 생성
    const network = new Network(
      networkRef.current,
      { nodes: data.nodes, edges: data.edges },
      options,
    );

    network.on("click", (params) => {
      if (params.nodes.length > 0) {
        // alert(JSON.stringify(params.nodes[0]));
        openChooseAlert({
          deviceId: params.nodes[0],
          onClose: (res) => {
            console.log(res);
          },
        });
      }
    });

    return () => network.destroy(); // 언마운트 시 네트워크 제거
  }, [data]);

  return (
    <div
      ref={networkRef}
      className={`${WIDTH} ${HEIGHT} border-solid border-2 border-red-500`}
    />
  );
}
