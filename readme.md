# Casa de Câmbio

O projeto da casa de câmbio é uma aplicação que busca a conversão da taxa de uma moeda para diversas outras.
O protótipo da aplicação está [nesse link](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1).

## Requisitos

### 1. Ambiente do Projeto
- [ ] Criar um repositório do zero ou fazer um fork desse repositório (fique à vontade para fazer PRs quando terminar o desenvolvimento).
- [ ] Iniciar projeto com NPM.
- [ ] Estruturar o projeto para usar ESModules (usar `type` como `module` no `package.json` e nas tags `script`).
- [ ] Instalar Vite como Dev Tool e `npm run dev`.

### 2. Estrutura da Aplicação
- [ ] Estruturar o HTML de acordo com [protótipo](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1).
- [ ] Criar tags semânticas no HTML.

### 3. Interação com API
- [ ] O endpoint da API que deverá ser usada é `https://v6.exchangerate-api.com/v6/${SUA_API_KEY}/latest/${moeda}`. 
- [ ] A moeda a ser pesquisada deverá ser passada como o parâmetro `moeda` do _endpoint_.
- [ ] Todas as moedas deverão ser listadas na tela.
> Você precisará se cadastrar de forma gratuíta, e lembre de usar o `.env` para armazenar a sua `api_key`
> [Link da documentação da API](https://www.exchangerate-api.com/docs/overview) caso necessário

### 4. Tratamento de Erro
- [ ] Você deve usar o [Sweet Alert 2](https://sweetalert2.github.io/) para as mensagens de Erro.
- [ ] Um erro deverá aparecer quando nenhuma moeda é passada.
- [ ] Um erro deverá aparecer quando uma moeda inexistente é passada.

### 5. Estilização (Bônus)
- [ ] Implementação do [protótipo de alta fidelidade](https://www.figma.com/file/H3gBEiF0F94VESCGx9DD17/Casa-de-C%C3%A2mbio?node-id=0%3A1)
