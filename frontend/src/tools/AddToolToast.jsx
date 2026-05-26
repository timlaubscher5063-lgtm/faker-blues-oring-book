import Toast from "react-bootstrap/Toast";

export default function AddToolToast() {
  console.log("toast called");
  return (
    <Toast autohide delay={3000}>
      <Toast.Header>
        <strong>✓ Success</strong>
      </Toast.Header>
      <Toast.Body>Tool added successfully.</Toast.Body>
    </Toast>
  );
}
