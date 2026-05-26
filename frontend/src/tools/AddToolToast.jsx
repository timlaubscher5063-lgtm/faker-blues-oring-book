import Toast from "react-bootstrap/Toast";
import { useState } from "react";

export default function AddToolToast() {
  return (
    <Toast delay={3000} autohide>
      <Toast.Header>
        <strong>✓ Success</strong>
      </Toast.Header>
      <Toast.Body>Tool added successfully.</Toast.Body>
    </Toast>
  );
}
