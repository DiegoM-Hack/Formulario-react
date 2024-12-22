import React, { useState } from 'react';
import '../style/style.css';

const FormularioRegistro = () => {
  // Estados para manejar los valores de cada campo
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [fecha, setFecha] = useState('');
  //const [numeroCredito, setNumeroCredito] = useState(''); // Nuevo estado
  //const [docente, setDocente] = useState(''); // Nuevo estado
  const [mensaje, setMensaje] = useState(''); // Estado para mostrar el mensaje final

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    // Verificar si el nombre tiene al menos dos palabras
    if (nombre.trim().split(' ').filter(word => word.length > 0).length < 2) {
        setMensaje('Por favor, ingresa tu nombre completo (nombre y apellido).');
        return;
      }

    // Validar que todos los campos estén llenos
    if (!nombre || !correo ||  !materia || !fecha ) {
       /* if (!nombre){
            setMensaje('nombre vacio')
            return;
        }
        if (!correo){
            setMensaje('correo vacio')
            return;
        }
        if (!carrera){
            setMensaje('carrera vacio')
            return;
        }
        if (!materia){
            setMensaje('materia vacio')
            return;
        }*/
      setMensaje('Por favor, completa todos los campos antes de enviar.');
      return;
    }
    setMensaje(
       `¡Gracias, ${nombre}!\nTus datos han sido registrados.\n` +
      `Materia: ${materia}\nFecha: ${fecha}`
    );
  };

  return (
    <div className="formulario-container">
      <h2>Registro de Estudiante</h2>
      <form onSubmit={handleSubmit} className="formulario">
        {/* Campo de nombre */}
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
          />
        </label>

        {/* Campo de correo */}
        <label>
          Correo electrónico:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingresa tu correo"
            required
          />
        </label>

         {/* Campo de materia */}
        <label>
          Materia:
          <input
            type="text"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Ingresa la materia"
            required
          />
        </label>

         {/* Campo de fecha */}
        <label>
          Fecha de inscripción:
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </label>

        {/* Botón de envío */}
        <button type="submit">Registrar</button>
      </form>

      {/* Mensaje de confirmación */}
      {mensaje && 
      <div className="mensaje-confirmacion">{mensaje}</div>}
    </div>
  );
};


export default FormularioRegistro;