function ordenar(producto, precio) {
    let mensaje = `Hola, quiero ordenar: ${producto} por L. ${precio}`;
    let url = `https://wa.me/92319653?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
