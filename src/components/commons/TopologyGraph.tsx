import React, { useEffect, useRef } from "react";
import { Network } from "vis-network";

import useModal from "../modals/useModal";

interface Props {
  nodes: any;
  edges: any;
  className?: string;
}

export default function TopologyGraph({ nodes, edges, className }: Props) {
  const networkRef = useRef<HTMLDivElement>(null);
  const { openChooseAlert } = useModal();

  useEffect(() => {
    if (!nodes || !edges) return;
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
        color: "#7856FF",
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
    const network = new Network(networkRef.current, { nodes, edges }, options);

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
  }, []);

  return <div ref={networkRef} className={`${className}`} />;
}
