"use client";

import PositionedModal from "@/components/modals/PositionedModal";
import { useState, useRef, useEffect } from "react";

const MODAL_WIDTH = 300;
const MODAL_HEIGHT = 300;
const MARGIN = 8; // 버튼과 모달 사이 여백

export default function DragableButton() {
  const [modalPosition, setModalPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 100, y: 100 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isDragging = useRef(false);

  const handleOpenModal = () => {
    if (!buttonRef.current) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    let newX = buttonRect.right + MARGIN; // 기본적으로 버튼 우측
    let newY = buttonRect.top; // 버튼 높이 기준

    // 🔹 경계 체크 후 조정 (모달이 화면 밖으로 나가지 않도록)
    if (newX + MODAL_WIDTH > screenWidth) {
      newX = buttonRect.left - MODAL_WIDTH - MARGIN; // 오른쪽 벽에 닿으면 좌측으로 이동
    }
    if (newX < 0) {
      newX = MARGIN; // 좌측 벽에 닿으면 화면 안쪽으로
    }
    if (newY + MODAL_HEIGHT > screenHeight) {
      newY = buttonRect.top - MODAL_HEIGHT; // 아래쪽 벽에 닿으면 위로 이동
    }
    if (newY < 0) {
      newY = MARGIN; // 상단 벽에 닿으면 화면 안쪽으로
    }

    setModalPosition({ x: newX, y: newY });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    isDragging.current = true;

    const startX = event.clientX - buttonPosition.x;
    const startY = event.clientY - buttonPosition.y;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!isDragging.current) return;
      setButtonPosition({
        x: moveEvent.clientX - startX,
        y: moveEvent.clientY - startY,
      });
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="relative w-full h-full">
      {/* 🔹 드래그 가능한 버튼 */}
      <button
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onClick={handleOpenModal}
        className="absolute px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointer active:scale-95"
        style={{ left: `${buttonPosition.x}px`, top: `${buttonPosition.y}px` }}
      >
        모달 열기
      </button>

      {/* 🔹 모달 위치 반영 */}
      {modalPosition && (
        <PositionedModal
          x={modalPosition.x}
          y={modalPosition.y}
          width={MODAL_WIDTH}
          height={MODAL_HEIGHT}
          onClose={() => setModalPosition(null)}
        />
      )}
    </div>
  );
}
