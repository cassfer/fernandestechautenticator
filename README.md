# fernandestechautenticacao


Este � um projeto que implementa autentica��o de dois fatores (2FA) usando otplib e authenticator. A aplica��o permite gerar segredos compartilhados, c�digos TOTP (Time-based One-Time Password) e validar esses c�digos para autentica��o.

### Funcionalidades
- Gera��o de segredos compartilhados em base32 para configurar aplicativos autenticadores, como Google Authenticator e Microsoft Authenticator.
- Gera��o de c�digos TOTP com base em segredos compartilhados.
- Valida��o de c�digos TOTP enviados pelo usu�ri