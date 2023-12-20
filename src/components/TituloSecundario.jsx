const TituloSecundario = (props) => {
  return (
    <article>
      <h2>Practica con react {props.anioActualProps}</h2>
      <p>
        React.js, comúnmente llamado simplemente React, es una biblioteca de
        JavaScript que se utiliza para construir interfaces de usuario. Toda
        aplicación web React se compone de componentes reutilizables que
        conforman partes de la interfaz de usuario — podemos tener un componente
        distinto para nuestra barra de navegación, otro para el pie de página,
        otro para el contenido principal, etc. Entenderás mejor esto cuando
        lleguemos a la sección en la que tenemos que trabajar con componentes.
        <br />
        Comision: {props.comision}
      </p>
    </article>
  );
};

export default TituloSecundario;
