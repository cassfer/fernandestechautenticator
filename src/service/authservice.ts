import { HashAlgorithms } from '@otplib/core';
import { authenticator, totp} from 'otplib';
import qrcode from 'qrcode';
export default class AuthService{
    

    constructor() {

        authenticator.options = {
            step: 30, // Intervalo de tempo em segundos
            window: 1, // Janela de tolerância para aceitar códigos fora do tempo (opcional)
            digits: 6, // Tamanho do código OTP,
            algorithm: HashAlgorithms.SHA256
        };
    }

    criaAutenticacaoSegredo(): string {
        return authenticator.generateSecret();
    }

    geraAutenticacaoQrcode(segredo: string, user: string) {
        let imgUrl;
        const otpauth = authenticator.keyuri(user, "FernandesTech", segredo);
        qrcode.toString(otpauth, { type: 'terminal', size: 32 }, (err, imgUrl) => {
            if (err) {
                console.log('Error with QR');
                return;
            }
            console.log(imgUrl);
            return imgUrl;
        });
        return imgUrl
    }

    geraAutenticacaoToken(segredo: string) {
        return authenticator.generate(segredo);
    }

    confirmaAutenticacaoToken(token: string, segredo: string): boolean {
        return authenticator.check(token, segredo);
    }

}


