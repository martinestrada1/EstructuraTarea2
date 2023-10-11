class UsuarioArbol {
    constructor() {
      this.usuarios = {};
    }
  
    buscarPorId(id) {
      return this.usuarios[id] || null;
    }
  
    insertar(usuario) {
      const id = usuario.id;
      if (!this.usuarios[id]) {
        this.usuarios[id] = usuario;
      }
    }
  
    eliminarPorId(id) {
      if (this.usuarios[id]) {
        delete this.usuarios[id];
      }
    }
  
    actualizarPorId(id, nuevoUsuario) {
      if (this.usuarios[id]) {
        this.usuarios[id] = nuevoUsuario;
      }
    }
  }
  

  const arbolUsuarios = new UsuarioArbol();
  
  const usuario1 = {
    id: 1,
    usuario: "Mar",
    password: "2910",
    nombre: "martin",
    apellidos: "Estrada"
  };
  
  const usuario2 = {
    id: 2,
    usuario: "Sam",
    password: "1234",
    nombre: "Samuel",
    apellidos: "Morales"
  };
  
  arbolUsuarios.insertar(usuario1);
  arbolUsuarios.insertar(usuario2);
  
  console.log(arbolUsuarios.buscarPorId(2)); 
  arbolUsuarios.eliminarPorId(1); 
  console.log(arbolUsuarios.buscarPorId(1)); 
  arbolUsuarios.actualizarPorId(2, { ...usuario2, nombre: "Brandon" }); 
  console.log(arbolUsuarios.buscarPorId(2)); 
  