# CI de testes

Smoke no PR, regressão maior em main/nightly. Artefatos: relatório, vídeo só no fail, trace.

## Paralelismo

Divida por spec, não por passo. Cuidado com massa compartilhada e rate limit.

## Falhas no pipeline

Classifique: produto, ambiente, teste instável. Quarentena com dono e data para sair.
