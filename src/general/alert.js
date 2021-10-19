import swal from "sweetalert";
import swalReact from "@sweetalert/with-react";
import ModalWrapper from "../components/layout/ModalWrapper";

function successAlert(content, rightBtnName, callback) {
    swal({
        title: "Thành công",
        text: content,
        icon: "success",
        button: rightBtnName,
    }).then(function onConfirm() {
        if (typeof callback == "function") {
            callback();
        }
    });
}

function errorAlert(content, rightBtnName, callback) {
    swal({
        title: "Lỗi",
        text: content,
        icon: "error",
        button: rightBtnName,
    }).then(function onConfirm() {
        if (typeof callback == "function") {
            callback();
        }
    });
}

function confirmAlert(content, callback) {
    swal({
        title: "Thông báo",
        text: content,
        // icon: "error",
        button: "Xác nhận",
    }).then((value) => {
        if (value && typeof callback == "function") {
            callback();
        }
    });
}

function openModal({ content, onSubmit, onCancel, type, title, noAni }) {
    swalReact({
        content: <ModalWrapper title={title}>{content}</ModalWrapper>,
        className: type == "full" ? "modal-full" : "modal-default",
        animation: noAni,
        buttons: {
            cancel: {
                text: "Hủy",
                value: "cancel",
            },
            // confirm: {
            //     text: "Xác nhận",
            //     value: "confirm",
            // },
        },
    }).then((value) => {
        switch (value) {
            case "cancel":
                typeof onCancel === "function" && onCancel();
                break;
            case "confirm":
                typeof onSubmit === "function" && onSubmit();
                break;
            default:
                break;
        }
    });
}

function closeModal() {
    swalReact.close();
}

export { errorAlert, successAlert, openModal, closeModal, confirmAlert };