# Totaleuc E-commerce - Documentación del proyecto

Totaleuc E-commerce, una aplicación de comercio electrónico que se especializa en la venta de monociclos, también llamados, Electric Unicycle o por sus siglas EUC.

Aquí encontrarás información sobre la configuración del proyecto, las tecnologías utilizadas y las instrucciones para ejecutar la aplicación en tu entorno local.

## Tecnologías utilizadas

El proyecto Totaleuc E-commerce ha sido desarrollado utilizando las siguientes tecnologías:

-   **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
-   **Create React App**: Una herramienta para configurar y gestionar proyectos de React.
-   **Firebase**: Una plataforma de desarrollo de aplicaciones web que proporciona servicios en la nube como hosting, autenticación, base de datos y almacenamiento.
-   **React Router DOM**: Una biblioteca de enrutamiento utilizada para gestionar las rutas de la aplicación React.
-   **React Toastify**: Una biblioteca que permite mostrar notificaciones de manera sencilla en una aplicación React.
-   **react circular progressbar** componente de barra de progreso circular, construido con SVG y ampliamente personalizable.

## Requisitos previos

Antes de ejecutar la aplicación Totaleuc E-commerce, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

-   Node.js: Puedes descargar e instalar Node.js desde [https://nodejs.org](https://nodejs.org).

## Configuración del proyecto

Sigue los pasos a continuación para configurar el proyecto Totaleuc E-commerce en tu entorno local:

1. Clona el repositorio de Totaleuc E-commerce desde GitHub.

2. Navega hasta el directorio del proyecto en tu terminal.

3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

    ```bash
    npm install
    ```

4. Crea un proyecto en Firebase (si aún no tienes uno) y habilita los servicios de autenticación, base de datos y almacenamiento.

5. Copia las credenciales de Firebase (configuración de Firebase) y pégalas en el archivo `src/firebase.js` del proyecto.

6. Configura las reglas de seguridad de la base de datos de Firebase según tus necesidades.

## Ejecución de la aplicación

Una vez que hayas configurado el proyecto, puedes ejecutar la aplicación Totaleuc E-commerce utilizando el siguiente comando:

```bash
npm start
```

Este comando iniciará la aplicación en modo de desarrollo y abrirá automáticamente una ventana del navegador en `http://localhost:3000`.

## Despliegue

Si deseas implementar la aplicación en producción, puedes utilizar el siguiente comando para crear una versión optimizada para producción:

```bash
npm run build
```

Este comando generará una carpeta `build` con los archivos estáticos de la aplicación listos para ser desplegados en un servidor.

## Soporte adicional

Si necesitas más información o tienes problemas con el proyecto Totaleuc E-commerce, puedes consultar la documentación adicional en la [documentación oficial de Create React App](https://create-react-app.dev/) y en la documentación de las bibliotecas utilizadas, como [React Router DOM](https://reactrouter.com/), [React Toastify](https://fkhadra.github.io/react-toastify/). [react circular progressbar](https://www.npmjs.com/package/react-circular-progressbar)

## Navegación

A continuación se muestra una descripción de las rutas y componentes principales del proyecto Totaleuc E-commerce para facilitar su comprensión:

1. **/itemListContainer**

    - Componente responsable de llamar a la base de datos para obtener los productos.
    - Pasa los resultados al componente **itemList** para su renderizado.

2. **/itemList**

    - Componente encargado de renderizar los productos recibidos del contenedor de lista de elementos.

3. **/item**

    - Utiliza este componente para renderizar cada tarjeta de producto.
    - Contiene botón detalles que redirige a **itemDetail**

4. **/itemDetail**

    - Componente que muestra una vista detallada de un producto específico.
    - Contiene el componente **itemCont**, que tiene un botón para "Agregar" el producto al carrito, así como botones para agregar o quitar unidades según el stock disponible en la base de datos.

5. **/cart**

    - Ruta que muestra el carrito de compras.
    - Puede accederse de las siguientes formas:
        - A través del componente **cardWidget**, ubicado en la esquina superior derecha, que posee un contador de los productos agregados.
        - Al hacer clic en el botón "Agregar al carrito" en el componente **ItemDetail**, aparecerá el botón "Finalizar compra" que redirige al carrito.
        - Al hacer clic en una alerta que aparece en la esquina superior derecha después de hacer clic en "Agregar" en la vista de detalles de los articulos.

6. **/checkout**
    - Ruta que muestra la página de finalización de compra.
    - Renderiza el componente **Checkout**, que contiene el formulario **CheckoutForm** para que el comprador complete los datos necesarios.
    - Una vez completado el formulario, el componente **Checkout** redirige al componente **CheckoutFinal**, que muestra una confirmación con los datos del comprador guardados en la base de datos.

## Convenciones

Formato de textos:

En Totaleuc E-commerce se utiliza Google Fonts para aplicar formatos de texto personalizados. A continuación, se detallan las fuentes utilizadas y las clases asociadas:

-   class fuente_textos: Bruno Ace SC
-   class tipografia_Titul: Roboto

Estas se enceuntra instaladas en: **public/index.html** y **src/index.csss**
Puedes encontrar más información y opciones de fuentes en [Google Fonts](https://fonts.google.com/).

Componente Botón:
El componente Boton es un componente reutilizable que contiene un botón al que se le pueden pasar los siguientes valores a través de las props:

-   `texto`: Texto que se muestra en el botón.
-   `agregadoClasse`: Clases adicionales para darle estilo personalizado.
-   `onClick`: Función que se ejecuta cuando se hace click en el botón.
-   `type`: determina un comportamiento espesifico del botón (opcional) .
    Nota:los estilos posibles del boton se encuentran dentro del la carpeta del componente en archivo**boton.css**

Componente BotonesRestarSumar:

Componente reutilizable que contiene botones para funcionar como un contador. Viene con un estilo predefinido y se le pueden pasar los siguientes valores a través de las props:

-   `accionRestar`: Función que se encarga de llamar a la operación de resta que desees utilizar en ese momento.
-   `accionSumar`: Función que se encarga de llamar a la operación de suma que desees utilizar en ese momento.
-   `cantidad`: Valor que se le pasa al componente para mostrar la cantidad afectada por las dos acciones anteriores.

## Futuro

Se aspira a incluir en futuro más artículos como ropa, implementos de seguridad y accesorios, también sección de noticas, nuevos productos y videos de usario

## Licencia

Este proyecto está licenciado bajo la [MIT License]
