"use client";

import React, { useEffect, useRef } from "react";

interface PositionedModalProps {
  x: number;
  y: number;
  width: number;
  height: number;
  onClose: () => void;
}

const PositionedModal: React.FC<PositionedModalProps> = ({
  x,
  y,
  width,
  height,
  onClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose(); // 모달 외부 클릭 시 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      className="fixed bg-white shadow-lg rounded-lg p-4 border border-gray-300"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">모달</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          ✖
        </button>
      </div>
      <p className="text-gray-600">이곳에 모달 내용을 입력하세요.</p>
    </div>
  );
};

export default PositionedModal;
