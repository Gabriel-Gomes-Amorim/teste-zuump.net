# teste-gabi_gomes_and_kelvyn_dos_reis

## Instruções

### Dos objetivos

- Materializar o layout do site fictício **Rodeio Digital** que será fornecido pela Zuump.Net (item obrigatório);
- Salvar no backend (base de dados "rodeiodigital", e tabela "ropes", coluna "ropes") as "armadas" cada vez que é acionada uma tecla de atalho (X, Z, S, P, D, C, G e R), após a célula ter sido selecionada pelo mouse. Para maiores informações sobre o significado de cada tecla, vide layout. Para cada linha haverá um objeto (que inclusive está sendo salvo como string) no seguinte formato **[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]**, o que pode ser convertido pra JSON posteriormente pelo **JSON.parse** (item facultativo, mas se conseguir fazer vai contar pontos extras);

### O que será avaliado

- Capacidade de lidar com projetos legados
- Capacidade de corrigir pontos do código que estejam fora do padrão do framework ou tecnologias utilizadas

### Base de dados

A base de dados se encontra em **.mysql/db**

### Requisitos para fazer o projeto funcionar.
- Ter instalado na máquina o MySQL e deixá-lo ativo rodando na porta 3306.
- Ou se não tiver, conseguir a imagem do MySQL ou montar um arquivo .yml para o Docker Compose e colocar todo o projeto pra rodar num container.
- Prestar atenção que existe um arquivo .env tanto na raiz (/), quanto na pasta /server. Irei passar esses arquivos manualmente. E então é só mudar os valores das constantes DB_USERNAME e DB_PASSWORD.

### Observações adicionais

Não precisa usar Docker. Mas se usar, também contará como pontos extras.