import { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import "../../styles/components/authModal.css";

export default function AuthModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selected, setSelected] = useState("login");

  const handleTab = (tab: string) => {
    setSelected(tab);
  };

  return (
    <>
      <button onClick={onOpen} className="login-modal-btn">
        Login
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
      >
        <ModalContent className="min-h-[476px]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 mt-5">
                <div className="group-btn w-full">
                  <button
                    onClick={() => handleTab("login")}
                    className={`select-tab-btn ${
                      selected === "login"
                        ? "bg-white dark:bg-zinc-700 opacity-100 shadow-sm"
                        : "bg-transparent"
                    } w-1/2`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleTab("sign-up")}
                    className={`select-tab-btn ${
                      selected === "sign-up"
                        ? "bg-white dark:bg-zinc-700 opacity-100 shadow-sm"
                        : "bg-transparent"
                    } w-1/2`}
                  >
                    Sign up
                  </button>
                </div>
              </ModalHeader>
              <ModalBody className="pb-8">
                {(selected === "sign-up" && (
                  <SignUpForm handleTab={handleTab} />
                )) ||
                  (selected === "login" && (
                    <LoginForm handleTab={handleTab} />
                  ))}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
