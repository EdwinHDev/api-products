const clients = [
  "Juan González", "María Rodríguez", "Carlos Gómez", "Laura Fernández", "Pedro López",
  "Ana Díaz", "Luis Martínez", "Sofía Pérez", "Diego García", "Valentina Sánchez",
  "Andrés Romero", "Camila Sosa", "Javier Álvarez", "Isabella Torres", "José Ruiz",
  "Gabriela Ramírez", "Miguel Flores", "Daniela Acosta", "Antonio Benítez", "Valeria Suárez",
  "Alejandro Molina", "Paula Castillo", "Fernando Gutiérrez", "Manuela Ortiz", "Ricardo Reyes",
  "Natalia Morales", "Jorge Delgado", "Emma Núñez", "Eduardo Cruz", "Juana Medina",
  "Roberto Herrera", "Adriana Aguilar", "Gonzalo Rojas", "Martina Jiménez", "Mateo Moreno",
  "Lucía Luna", "Fabián Arias", "Carolina Chávez", "Emilio Ortega", "Verónica Vargas",
  "Simón Rivera", "Renata Valdez", "Raúl Guerrero", "Diana Vázquez", "Arturo Salazar",
  "Olivia Aguirre", "Óscar Hernández", "Victoria Mendoza", "Ramón Cabrera", "Elena Ramos",
  "Francisco Cárdenas", "Marcela Campos", "César Espinoza", "Mónica Rosales", "Felipe Paz",
  "Catalina Guzmán", "Ignacio Silva", "Lorena Peralta", "Esteban León", "Tatiana Padilla",
  "Alfredo Bustamante", "Alejandra Domínguez", "Héctor Segura", "Patricia Montes", "Rafael Miranda",
  "Pilar Castañeda", "Santiago Calderón", "Bárbara Quintero", "Roberto Villa", "Carmen Ibarra",
  "Mauricio Nieves", "Julia Lara", "Bruno Corona", "Rebeca Gallegos", "Sebastián Esparza",
  "Sara Figueroa", "Óscar Mercado", "Angélica Gallardo", "Gustavo Olvera", "Yolanda Carmona",
  "Rogelio Valencia", "Rosa Fuentes", "Eduardo Treviño", "Dulce Carrillo", "Benjamín Andrade",
  "Alicia Salinas", "Víctor Ríos", "Beatriz Ochoa", "Martín Pacheco", "Eva Correa",
  "Julián Barrera", "Inés Beltrán", "Francisco Sánchez", "Constanza González"
]

const comments = [
  "¡Excelente producto! Lo recomiendo totalmente.",
  "El producto llegó antes de lo esperado, muy contento con la compra.",
  "Buena relación calidad-precio.",
  "El artículo cumple con todas mis expectativas.",
  "Me encanta este producto, definitivamente compraré otro.",
  "El envío fue rápido y el producto estaba bien empaquetado.",
  "Increíble, este producto cambió mi vida.",
  "Buen producto, fácil de usar.",
  "Estoy muy satisfecho con mi compra.",
  "El producto es tal como se describe en la página.",
  "¡Qué buen servicio al cliente! Me ayudaron con todas mis dudas.",
  "Me arrepiento de no haber comprado este producto antes.",
  "Muy buena calidad, lo recomendaré a mis amigos.",
  "El producto es justo lo que necesitaba.",
  "El precio es muy bueno para la calidad que ofrece el producto.",
  "Llegó en perfecto estado, sin ningún problema.",
  "¡Impresionante! No puedo creer lo bueno que es este producto.",
  "Lo compré como regalo y la persona quedó encantada.",
  "Es justo lo que estaba buscando.",
  "El producto superó mis expectativas.",
  "No tengo quejas sobre este producto.",
  "Muy contento con la compra, 10/10.",
  "Excelente servicio de entrega, llegó en el tiempo estimado.",
  "Muy útil, estoy muy feliz con mi compra.",
  "Buena comunicación con el vendedor, respondieron rápido mis preguntas.",
  "Producto de alta calidad, estoy muy satisfecho.",
  "Lo recomendaría a cualquier persona que esté buscando algo similar.",
  "El producto funciona perfectamente, estoy muy contento.",
  "El proceso de compra fue muy sencillo.",
  "Me encanta, no puedo dejar de usarlo desde que llegó.",
  "Cumple con todas mis expectativas, lo recomiendo.",
  "No me arrepiento de haber comprado este producto.",
  "Buen embalaje, llegó en perfecto estado.",
  "¡Fantástico! Estoy muy impresionado con la calidad del producto.",
  "Muy bueno, lo usaré todo el tiempo.",
  "Producto excelente, volvería a comprarlo sin dudarlo.",
  "El producto es exactamente lo que necesitaba.",
  "Muy rápido el envío, excelente servicio.",
  "Me gusta mucho este producto, es muy práctico.",
  "El producto llegó en perfecto estado, sin daños.",
  "Buena relación calidad-precio, lo recomiendo.",
  "La atención al cliente fue excepcional.",
  "¡Estoy muy feliz con mi compra!",
  "El producto es fácil de configurar y usar.",
  "Lo compraría de nuevo sin dudarlo.",
  "Muy satisfecho con la calidad del producto.",
  "El producto es tal como se describe en la página.",
  "Buena experiencia de compra en general.",
  "Llegó mucho antes de lo esperado, ¡gracias!",
  "¡Muy recomendado! Excelente servicio y producto.",
  "No tengo quejas sobre este producto.",
  "Muy buena compra, estoy muy satisfecho.",
  "El producto llegó en perfecto estado.",
  "Buena calidad, definitivamente vale la pena.",
  "El envío fue rápido y eficiente.",
  "Estoy impresionado con la calidad del producto.",
  "Producto excelente, muy feliz con mi compra.",
  "Muy contento con mi compra, lo recomendaré a mis amigos.",
  "El producto es justo lo que necesitaba.",
  "Muy útil, estoy muy contento con mi compra.",
  "¡Estoy enamorado de este producto!",
  "Muy buena relación calidad-precio.",
  "El producto es exactamente como se describe.",
  "Buena experiencia de compra en general.",
  "¡Gracias por este gran producto!",
  "Estoy muy satisfecho con la calidad del producto.",
  "Muy rápido el envío, llegó en perfecto estado.",
  "Excelente servicio al cliente, respondieron todas mis preguntas.",
  "Producto de alta calidad, lo recomendaré a mis amigos.",
  "Me gusta mucho este producto, es muy práctico.",
  "¡Increíble! No puedo creer lo bueno que es este producto.",
  "Lo recomendaría a cualquiera que esté buscando algo similar.",
  "Muy feliz con mi compra, gracias.",
  "El producto es fácil de usar y funciona perfectamente.",
  "Buen embalaje, el producto llegó sin daños.",
  "Estoy muy impresionado con la calidad del producto.",
  "Me encanta este producto, definitivamente volveré a comprar aquí.",
  "¡Qué buena compra! El producto es excelente.",
  "El envío fue rápido y eficiente, muy contento con mi compra.",
  "Producto excelente, estoy muy satisfecho.",
  "Buen producto, lo recomendaré a mis amigos.",
  "Estoy muy contento con mi compra, gracias.",
  "El producto llegó en perfectas condiciones, sin problemas.",
  "Buena calidad, estoy muy impresionado.",
  "¡Muy recomendado! Excelente servicio al cliente.",
  "El producto es exactamente lo que necesitaba.",
  "Me encanta este producto, es muy útil.",
  "Excelente relación calidad-precio, lo recomendaría.",
  "El envío fue rápido y el producto llegó en perfecto estado.",
  "¡Fantástico! Estoy muy satisfecho con mi compra.",
  "Muy contento con la calidad del producto.",
  "Producto excelente, muy feliz con mi compra.",
  "El proceso de compra fue muy sencillo y rápido.",
  "Estoy impresionado con la atención al cliente, muy profesional.",
  "Buena comunicación con el vendedor, respondieron rápidamente.",
  "Me gusta mucho este producto, es muy práctico.",
  "El producto es exactamente como se describe en la página.",
  "Muy satisfecho con mi compra, gracias.",
  "Excelente servicio al cliente, respondieron todas mis preguntas.",
  "Buena calidad, definitivamente vale la pena.",
  "El producto llegó en perfecto estado, sin problemas.",
  "¡Estoy muy feliz con mi compra!",
  "El envío fue rápido y el producto llegó en perfectas condiciones.",
  "Muy recomendado, excelente servicio.",
  "El producto es tal como se describe, estoy muy satisfecho.",
  "Me encanta este producto, definitivamente compraré otro.",
  "Estoy muy satisfecho con la calidad del producto.",
  "¡Fantástico! Estoy muy impresionado con la calidad del producto.",
  "El producto es fácil de usar y funciona perfectamente.",
  "Me encanta este producto, es justo lo que estaba buscando.",
  "Excelente servicio al cliente, muy profesional.",
  "Buena relación calidad-precio, lo recomiendo totalmente.",
  "El producto llegó en perfecto estado, sin daños.",
  "Muy contento con mi compra, gracias.",
  "Estoy muy satisfecho con la calidad del producto.",
  "Buena calidad, definitivamente vale la pena."
]

module.exports = {
  clients, comments
}