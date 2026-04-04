# Cypress

Roda no browser. Bom para E2E web. Evite `cy.wait(ms)` fixo; prefira esperas na UI/rede.

## Seletores

Prefira `data-testid`. CSS/XPath frágeis quebram no primeiro redesign.

## Comandos úteis

`cy.session` para login, `cy.intercept` para stub/assert de API, `cy.clock` para tempo.

## Flake

Causas comuns: animação, id dinâmico, race de request, ambiente compartilhado. Trate a causa, não só retry.
