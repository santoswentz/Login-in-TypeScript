import {login} from "./login";

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    const mockEmail = 'wentz@dio.me'

    it('deve exbiri uma mensagem de login', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`bem vindo ${mockEmail}!`)
    })
})