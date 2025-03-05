import { ReactElement } from "react";
import ReactDOMServer from "react-dom/server";

import { DEVICE_TYPE } from "@/constants/common";
import { AlertsGraphType, NodeType } from "@/types/api";
import RouterIcon from "@/components/icons/RouterIcon";
import TVIcon from "@/components/icons/TVIcon";
import NVRIcon from "@/components/icons/NVRIcon";
import IpCameraIcon from "@/components/icons/IpCameraIcon";
import PCIcon from "@/components/icons/PCIcon";
import ModemIcon from "@/components/icons/ModelIcon";

const getIcon = (node: NodeType) => {
  const { type, isConnected } = node;

  switch (type) {
    case DEVICE_TYPE.ROUTER:
      return <RouterIcon width={50} height={50} isOnline={isConnected} />;
    case DEVICE_TYPE.TV:
      return <TVIcon width={50} height={50} isOnline={isConnected} />;
    case DEVICE_TYPE.NVR:
      return <NVRIcon width={50} height={50} isOnline={isConnected} />;
    case DEVICE_TYPE.CAMERA:
      return <IpCameraIcon width={50} height={50} isOnline={isConnected} />;
    case DEVICE_TYPE.PC:
      return <PCIcon width={50} height={50} isOnline={isConnected} />;
    case DEVICE_TYPE.MODEM:
      return <ModemIcon width={50} height={50} isOnline={isConnected} />;
    default:
      return <></>;
  }
};

const drawSVGToImage = (Component: ReactElement) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(Component);
  const img = new Image();
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgString);
  return img;
};

interface Props {
  alerts: AlertsGraphType;
}

export default function graphDto({ alerts }: Props) {
  const { nodes, edges } = alerts;

  return {
    nodes: nodes.map((item) => {
      const image = drawSVGToImage(getIcon(item));

      return {
        ...item,
        shape: "image",
        image: image.src,
        label: `${item.ip}\n${item.label}`,
      };
    }),
    edges,
  };
}
