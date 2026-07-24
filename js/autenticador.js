const CHAVE_USUARIOS = 'usuarios'
const CHAVE_SESSAO = 'usuarioLogado'

 function lerUsuarios(){
    const json = localStorage.getItem(CHAVE_USUARIOS)
    return json ? JSON.parse(json) : []
 }

 export function registrar(usuario){
    const usuarios = lerUsuarios()

    if(usuarios.some(user => user.email === usuario.email)){
        throw new Error('Este email já é cadastrado.')
    }
     usuarios.push(usuario)
     localStorage.setItem(CHAVE_USUARIOS, JSON.stringify(usuarios))
 }

//Conferindo Login e senha usuário
export function login(email, senha){
    const usuarios = lerUsuarios()
    const usuario = usuarios.find(user => user.email === email && user.senha === senha)

    //Se não localizar o usuário
    if(!usuario){
        throw new Error('Email ou senha incorretos.')
    }

    //Guardando sessão no navegador
    localStorage.setItem(CHAVE_SESSAO,JSON.stringify({
        email: usuario.email
    }))

    return usuario
}

