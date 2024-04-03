# teste-gabi_gomes_and_kelvyn_dos_reis

## Instruções

### Dos objetivos

- Materializar o layout do site fictício **Rodeio Digital** que será fornecido pela Zuump.Net (item obrigatório);
- Salvar no backend (base de dados "rodeiodigital", e tabela "ropes", coluna "ropes") as "armadas" cada vez que é acionada uma tecla de atalho (X, Z, S, P, D, C, G e R), após a célula ter sido selecionada pelo mouse. Para maiores informações sobre o significado de cada tecla, vide layout. Para cada linha haverá um objeto (que inclusive está sendo salvo como string) no seguinte formato **[{"1": "", "2": "", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}]**, o que pode ser convertido pra JSON posteriormente pelo **JSON.parse** (item facultativo, mas se conseguir fazer vai contar pontos extras);

### Instruções adicionais acerca do cadastro das armadas (parte de comunicação do FRONTEND e BACKEND)
1º passo: usuário clica no "span.square" que representa o quadrado da armada (ou volta). A borda de "span.square" é alterada para "border: 4px solid pink", pra fazer a marcação

2º passo: após o "span.square" específico ter sido selecionado pelo mouse, o usuário irá acionar uma tecla de atalho ("X", "Z", "S", "P", "D", "C", "G", "R"). X é verde e o restante das teclas é vermelho. As voltas não realizadas/avaliadas vem por default vazias ou em branco.

3º passo (sugestão): a informação do objeto (como string) [{"1": "X", "2": "Z", "3": "", "4": "", "5": ""},{"1": "", "2": "", "3": "", "4": "", "5": ""}] deve ser atualizada e armazenada em algum lugar no front. Pode ser um input[type="hidden"]. Pegar o valor do input[type="hidden"] e passar como parâmetro para a função updateInputValue, onde será feita a requisição para atualização dos dados do registro (linha da tabela) na coluna "ropes" da tabela "ropes", respectivo ao ID da dupla (ou registro).

Obs: Não haverá um botão salvar no final, para forçar a entrada de todas as mudanças de todos os dados de uma vez. O salvamento terá que ocorrer no momento em que o usuário (Juiz) aciona a tecla de atalho. Esse salvamento ocorrerá por linha (tabela "ropes"). Pra isso tem que pegar o ID certinho da tabela "ropes".

Se houver alguma dependência que não está sendo utilizada, é bom retirar. E isso conta como ponto extra.

### O que será avaliado

- Capacidade de lidar com projetos legados
- Capacidade de corrigir pontos do código que estejam fora do padrão do framework ou tecnologias utilizadas

### Base de dados

A base de dados se encontra em **.mysql/db**

### Requisitos para fazer o projeto funcionar.
- Ter instalado na máquina o MySQL e deixá-lo ativo rodando na porta 3306.
- Ou se não tiver, conseguir a imagem do MySQL ou montar um arquivo .yml para o Docker Compose e colocar todo o projeto pra rodar num container.
- Prestar atenção que existe um arquivo .env tanto na raiz (/), quanto na pasta /server. Irei passar esses arquivos manualmente. E então é só mudar os valores das constantes DB_USERNAME e DB_PASSWORD.
- Versão do NPM recomendada: 8.18.0
- Versão do Node recomendada: 18.8.0
- Versão do React recomendada: 18.2.0

### Observações adicionais

Não precisa usar Docker. Mas se usar, também contará como pontos extras.