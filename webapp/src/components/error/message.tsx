import "./message.css";

interface ErrorMessageProps {
  type: "404" | "500";
}

const errorMessage = ({ type }: ErrorMessageProps) => {
  let title = "";
  let message = "";
  let style: React.CSSProperties = {};

  if (type === "404") {
    title = "Producto no encontrado";
    message = "El producto que estabas buscando no existe o fue removido.";
    style = {
      backgroundColor: "#FEF3C7",
      border: "1px solid #FBBF24",
      color: "#B45309",
    };
  } else {
    title = "Error de conexión con la API";
    message =
      "No fue posible cargar los datos. Verifica tu conexión con la API.";
    style = {
      backgroundColor: "#FECACA",
      border: "1px solid #F87171",
      color: "#B91C1C",
    };
  }

  return (
    <div
      className="error-message-container"
      style={{
        ...style,
        padding: "1rem",
        borderRadius: "0.375rem",
        maxWidth: "48rem",
        margin: "2rem auto 0",
        position: "relative",
      }}
      role="alert"
    >
      <center>
        <strong style={{ fontWeight: "bold" }}>{title}</strong>
      </center>
      <center>
        <span style={{ marginLeft: "0.5rem", display: "inline-block" }}>
          {message}
        </span>
      </center>
    </div>
  );
};

export default errorMessage;
