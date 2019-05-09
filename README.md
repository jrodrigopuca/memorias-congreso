# Memorias para congreso
## Descripción
Implementación de un visor-selector de las memorias ó e-book de los congresos CONAIISI (2016/2018) y CIIDDI (2018).

### Forma de usar los recursos
1) Crear una nueva carpeta en Google Drive (para facilitar el trabajo) y subir los archivos. Compartir carpeta para que cualquier usuario pueda ver los pdfs. 
2) Pasar los datos a la forma de ebook.json
    - el dato 'id' puede venir de la plataforma de trabajo o ser utilizado para consultas 
    - el dato 'archivo': Al abrir cada pdf en Google Drive el mismo tiene un id del archivo en su dirección (https://drive.google.com/file/d/archivo/view)
3) Cambiar el memorias.html ó index.html
    - Cambiar el nombre del congreso en jumbotron
    - Revisar las categorías y tipos de trabajos (en caso de que los mismos cambien con respecto a la edición anterior)
    - Cambiar la sede al final del html 
    - en 'showdata' puede agregar el contenido inicial o de presentación
    - en 'show' puede agregar un pdf de presentación
4) el sc-ebooks.js cambiarlo solamente en caso de querer agregar más datos (por ejemplo: autores/universidad/descripción)


