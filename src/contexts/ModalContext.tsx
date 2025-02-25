"use client";
import {
  Fragment,
  useState,
  ReactNode,
  useCallback,
  createContext,
  ComponentType,
  useContext,
  useEffect,
} from "react";
import Modal, { SizeType } from "@/components/modals/Modal";

export interface openModalProps {
  options: {
    size: SizeType;
    children: ComponentType<any>;
    data?: any;
  };
  onClose?: (res: any) => void;
}

export interface ModalType {
  id: string;
  size: SizeType;
  children: ComponentType<any>;
  open: boolean;
  data?: any;
  onClose?: (data: any) => void;
}

export interface ModalContextProps {
  modals: ModalType[];
  openModal: ({ options, onClose }: openModalProps) => void;
  closeModal: (id: string, res?: any) => void;
}

const defaultModalContext: ModalContextProps = {
  modals: [],
  openModal: () => {},
  closeModal: () => {},
};

export const ModalContext =
  createContext<ModalContextProps>(defaultModalContext);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modals, setModals] = useState<ModalType[]>([]);

  useEffect(() => {
    console.log("modals", modals);
  }, [modals]);

  const openModal = useCallback(
    ({ options, onClose }: openModalProps) => {
      const newModal: ModalType = {
        size: options.size,
        children: options.children,
        open: true,
        id: crypto.randomUUID(),
        // id: modals.length,
        data: options.data,
        onClose,
      };
      setModals((prev) => {
        return [...prev, newModal];
      });
    },
    [modals],
  );

  const closeModal = useCallback(
    (id: string, res?: any) => {
      console.log("close modal", id, res || "");
      const closedIndex = modals.findIndex((item) => item.id === id);
      if (modals[closedIndex].onClose) modals[closedIndex].onClose(res);
      setModals((prev) => {
        const updatedModal = [...prev];
        updatedModal[closedIndex].open = false;
        return updatedModal;
      });
    },
    [modals],
  );

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
      {modals.map((modal, idx) => {
        return (
          <Fragment key={idx}>
            {modal.open && (
              <Modal size={modal.size} onClose={() => closeModal(modal.id)}>
                <modal.children
                  data={modal.data}
                  onClose={(res: any) => closeModal(modal.id, res)}
                />
              </Modal>
            )}
          </Fragment>
        );
      })}
    </ModalContext.Provider>
  );
};
