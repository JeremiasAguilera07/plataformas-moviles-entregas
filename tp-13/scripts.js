const listaProductosEl = document.getElementById('lista-productos');
const formProducto = document.getElementById('form-producto');
const btnOrdenar = document.getElementById('btn-ordenar');
const btnLimpiar = document.getElementById('btn-limpiar');


let listaProductos = JSON.parse(localStorage.getItem('listaProductos')) || [
    { nombre: 'Pan', comprado: false }
];


function guardarLista() {
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
}


function crearElementoProducto(producto, index) {
    const li = document.createElement('li');
    li.className = 'list-group-item producto-item';
    li.setAttribute('data-index', index);

    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-2';
    checkbox.checked = producto.comprado;
    checkbox.setAttribute('aria-label', 'Marcar como comprado');
    checkbox.addEventListener('change', () => {
        listaProductos[index].comprado = checkbox.checked;
        if (checkbox.checked) {
            nombreSpan.classList.add('comprado');
        } else {
            nombreSpan.classList.remove('comprado');
        }
        guardarLista();
    });

    
    const nombreSpan = document.createElement('span');
    nombreSpan.className = 'producto-nombre';
    nombreSpan.textContent = producto.nombre;
    if (producto.comprado) {
        nombreSpan.classList.add('comprado');
    }
    nombreSpan.tabIndex = 0; // para que sea focusable
    nombreSpan.setAttribute('role', 'textbox');
    nombreSpan.setAttribute('aria-label', 'Nombre del producto editable');

    
    nombreSpan.addEventListener('dblclick', () => {
        nombreSpan.contentEditable = "true";
        nombreSpan.focus();
    });

   
    function guardarEdicion() {
        nombreSpan.contentEditable = "false";
        const nuevoNombre = nombreSpan.textContent.trim();
        if (nuevoNombre.length === 0) {
          
            nombreSpan.textContent = listaProductos[index].nombre;
        } else {
            listaProductos[index].nombre = nuevoNombre;
            guardarLista();
        }
    }

    nombreSpan.addEventListener('blur', guardarEdicion);
    nombreSpan.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            nombreSpan.blur();
        }
    });

    
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn btn-sm btn-danger btn-eliminar';
    btnEliminar.setAttribute('aria-label', 'Eliminar producto');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () => {
        listaProductos.splice(index, 1);
        renderizarLista();
        guardarLista();
    });

    li.appendChild(checkbox);
    li.appendChild(nombreSpan);
    li.appendChild(btnEliminar);

    return li;
}


function renderizarLista() {
    listaProductosEl.innerHTML = '';
    listaProductos.forEach((producto, index) => {
        const li = crearElementoProducto(producto, index);
        listaProductosEl.appendChild(li);
    });
}


function agregarProducto(nombreProducto) {
    const nombreTrim = nombreProducto.trim();
    if (nombreTrim.length === 0) return;
    listaProductos.push({ nombre: nombreTrim, comprado: false });
    renderizarLista();
    guardarLista();
}


function ordenarProductos() {
    listaProductos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    renderizarLista();
    guardarLista();
}


function limpiarLista() {
    if (confirm('¿Seguro que quieres limpiar toda la lista?')) {
        listaProductos = [];
        renderizarLista();
        guardarLista();
    }
}

function handlerFormulario(evento) {
    evento.preventDefault();
    const input = evento.target.querySelector('input');
    const nombreProducto = input.value;
    input.value = "";
    agregarProducto(nombreProducto);
}


formProducto.addEventListener('submit', handlerFormulario);
btnOrdenar.addEventListener('click', ordenarProductos);
btnLimpiar.addEventListener('click', limpiarLista);


renderizarLista();
