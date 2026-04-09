# Playwright

Auto-wait forte, vários browsers, `request` para API no mesmo teste, trace viewer para flake.

## Locators

`getByRole`, `getByLabel`, `getByTestId`. Role+nome é o mais estável para acessibilidade.

## Isolamento

Cada teste em contexto novo. Storage state para reutilizar login sem acoplar a ordem da suíte.

## Trace e debug

`npx playwright test --trace on` e `playwright show-trace`. Melhor que screenshot solto.

## API no Playwright

`request.get/post` para preparar massa e validar backend sem abrir a UI.
