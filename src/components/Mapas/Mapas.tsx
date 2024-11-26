import { Link } from "react-router-dom";

const Mapas = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Explorar Mapas</h2>
      <br />
      <br />
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "10px" }}>
            <Link
              to=""
              style={{
                textDecoration: "none",
                color: "#007BFF",
                fontWeight: "bold",
              }}
              aria-label="Ir al mapa de producción"
            >
              Mapa Producción
            </Link>
          </li>
          <li style={{ marginBottom: "10px" }}>
            <Link
              to=""
              style={{
                textDecoration: "none",
                color: "#007BFF",
                fontWeight: "bold",
              }}
              aria-label="Ir al mapa de rutas"
            >
              Mapa Ruta
            </Link>
          </li>
          <li>
            <Link
              to=""
              style={{
                textDecoration: "none",
                color: "#007BFF",
                fontWeight: "bold",
              }}
              aria-label="Ir al mapa de ventas"
            >
              Mapa Ventas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Mapas;
