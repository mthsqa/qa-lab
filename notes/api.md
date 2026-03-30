# Teste de API

Valide contrato, status, corpo, headers e efeitos colaterais. UI não substitui isso.

## Status

2xx sucesso, 4xx erro do cliente (validação/auth), 5xx falha do servidor. 401 ≠ 403.

## Auth

Sem token, token expirado, token de outro usuário e token válido. IDOR é caso clássico.
