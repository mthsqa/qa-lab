# Fundamentos de teste

Erro é o engano humano. Defeito é o que fica no produto. Falha é o comportamento observado em execução.

## Níveis

- Unitário: isolado, rápido, barato
- Integração: módulos conversando
- Sistema / E2E: fluxo do usuário

## Pirâmide

Muitos testes rápidos na base, poucos E2E no topo. E2E demais deixa o feedback lento e instável.

## Caixa preta

Particionamento de equivalência, valor limite, tabela de decisão e transição de estados.

## Equivalência

Agrupe entradas que devem se comportar igual. Um representante por classe válida e por classe inválida.

## Valor limite

Defeitos aparecem nas bordas: min, min-1, max, max+1, zero e vazio.

## Tabela de decisão

Quando regras de negócio combinam condições, modele ações por combinação em vez de lista solta de casos.
