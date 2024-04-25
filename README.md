# fernandestechautenticacao


Este é um projeto que implementa autenticação de dois fatores (2FA) usando otplib e authenticator. A aplicação permite gerar segredos compartilhados, códigos TOTP (Time-based One-Time Password) e validar esses códigos para autenticação.

### Funcionalidades
- Geração de segredos compartilhados em base32 para configurar aplicativos autenticadores, como Google Authenticator e Microsoft Authenticator.
- Geração de códigos TOTP com base em segredos compartilhados.
- Validação de códigos TOTP enviados pelo usuári