# 🍒 Cherry Bomb Web

![Cherry Bomb Logo](/public/Logo_CHERRY_BOMB.png)

> Mi plataforma de e-commerce enfocada en moda, diseñada para cerrar ventas directamente por WhatsApp.

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-blue?style=flat&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css)
![Status](https://img.shields.io/badge/Estado-Activo-green)

</div>

---

## Sobre el Proyecto

¡Hola! Este es **Cherry Bomb**, una aplicación web de ventas que desarrollé pensando en ofrecer una experiencia de compra súper visual y directa. Mi objetivo principal fue crear un catálogo fluido donde los usuarios pudieran armar su pedido y enviarlo listo por WhatsApp, eliminando la fricción de los procesos de pago tradicionales, todo esto de manera gratuita.

Recientemente refactoricé todo el código para aprovechar la potencia de **Next.js 16** y el nuevo **Tailwind CSS 4**, logrando que la navegación sea instantánea y se sienta muy moderna en móviles.

## Lo que he implementado

### Experiencia de Compra
Me enfoqué mucho en los detalles que mejoran la usabilidad:
- **Carrito Inteligente:** Implementé persistencia con `LocalStorage`, así que si recargas la página, tus productos siguen ahí.
- **Control Total:** Puse selectores intuitivos para sumar o restar cantidades sin complicaciones.
- **Pedido a WhatsApp:** Automaticé la creación del mensaje de pedido. Al finalizar, la app genera un texto detallado y profesional listo para enviar al vendedor.
- **Feedback Visual:** Agregué notificaciones (Toasts) para que sepas exactamente cuándo agregaste algo al carrito.

### Diseño y UX
- **Mobile First:** Diseñé pensando primero en el celular. Agregué pistas visuales para el scroll horizontal en las categorías para que sea más fácil navegar.
- **Badge Flotante:** Siempre mantengo visible cuántos items llevas seleccionados.
- **Accesibilidad:** Mejoré la navegación por teclado y las etiquetas para que la web sea más inclusiva.

## Mi Stack Tecnológico

Para este proyecto elegí las herramientas más actuales para asegurar rendimiento y escalabilidad:

- **Framework:** [Next.js 16.0.10](https://nextjs.org/) (Usando App Router para mejor estructura).
- **Librería:** [React 19.2.1](https://react.dev/) (Aprovechando los últimos Hooks).
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/) (Para mantener el CSS limpio y mantenible).
- **Calidad de Código:** ESLint v9.

## ¿Qué vas a encontrar en el catálogo?

Organicé los productos en secciones claras para facilitar la búsqueda:
- **Chicas:** Desde Jeans y Faldas hasta Casacas.
- **Niñas:** Poleras y Conjuntos completos.
- **Deportiva:** Ropa cómoda para entrenar.
- **Novedades y Moda:** Accesorios, peluches, maquillaje y perfumes.

## 🛠️ Cómo correr el proyecto en tu local

Si quieres probar el código en tu máquina o colaborar, sigue estos pasos sencillos:

1. **Clona mi repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/cherry-bomb.git](https://github.com/tu-usuario/cherry-bomb.git)
   cd cherry-bomb
2. **Instala las dependencias:**
   *npm install*
3. **Levanta el servidor de desarrollo:**
   *npm run dev*
