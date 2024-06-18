import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/slices/cartSlice";
import { toast } from "react-hot-toast";


function ConfirmCheckoutModal() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        className="sm:ml-auto rounded-md sm:px-10 bg-emerald-500 dark:bg-emerald-600 text-white"
      >
        Check Out
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          {(onClose) => {
            const confirm = async () => {
              await dispatch(clearCart());
              await toast.success("Order Confirmed");
              await onClose();
            };
            return (
              <>
                <ModalHeader>Confirm Checkout</ModalHeader>
                <ModalBody>
                  <p>
                    Welcome to the checkout section. This is being a development
                    project, I haven't implemented any payment related task. If
                    you click the cancel button you'll go back to the cart
                    segment. Clicking confirm button will consider your order
                    confirmed, payment done & also order delivered successfully.
                  </p>
                  <div className="flex justify-between gap-4 pb-4 mt-6">
                    <Button
                      color="danger"
                      className="text-white rounded-md w-full"
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      color="success"
                      className="text-white rounded-md w-full"
                      onClick={confirm}
                    >
                      Confirm
                    </Button>
                  </div>
                </ModalBody>
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </>
  );
}

export default ConfirmCheckoutModal;
