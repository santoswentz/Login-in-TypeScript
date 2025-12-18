const conta = {
    email: 'email@gmail.com',
    nome: 'email',
    password: 'email'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})