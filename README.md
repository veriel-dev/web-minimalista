

## Optimización de la aplicación 

### Code Splitting 
- Cade sección se carga de manera lzay 
- Se incluye un fallback para mostrar durante la carga 
- Los componentes se dividen en chunks separados 

### Memorización
- Todos los componentes están memorizados con `memo` 
- Se incluyen displayName para debugging 
- Cada sección tiene su propio boundary de Suspense 

### Configuración del Bundler 

- División manual de chunks para mejor control
- Visualización del tamaño del bundle incluido
- Sourcemaps para debugging