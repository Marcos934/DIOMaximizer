# Controle de Player e Menu da DIO (DIO Maximizer)

Criado com o objetivo de contribuir com a comunidade de estudantes, este é um userscript simples e eficaz que aprimora a experiência de visualização das aulas na plataforma da DIO.

![Demonstração do Script](https://i.imgur.com/eCXUCWn.gif)

## 🚀 Funcionalidades

- **Maximizar Vídeo:** Expande o player de vídeo para ocupar toda a janela do navegador, proporcionando uma visualização imersiva e sem distrações.
- **Ocultar Menu:** Esconde o menu lateral de aulas com uma animação suave, dando foco total ao conteúdo.
- **Botão de Controle:** Adiciona um botão flutuante e intuitivo no canto da tela para alternar facilmente entre os modos de visualização.
- **Carregamento Inteligente:** O script aguarda os elementos da página serem criados dinamicamente antes de ser executado, garantindo o funcionamento em todas as situações.

## 💡 Propósito e Sugestão

Este projeto nasceu do desejo de aprimorar a usabilidade da plataforma para todos. Acredito que uma funcionalidade como esta, se implementada de forma nativa, agregaria muito valor à experiência de aprendizado.

Portanto, este script serve não apenas como uma ferramenta útil para a comunidade, mas também como uma **sugestão para que a equipe da DIO considere adicionar um "Modo Foco" ou "Modo Cinema"** em futuras atualizações da plataforma.

## 🛠️ Instalação Passo a Passo

Para utilizar o script, você precisa da extensão **Tampermonkey**. Siga os passos abaixo:

### Passo 1: Instalar o Tampermonkey

1.  Primeiro, você precisa ter a extensão Tampermonkey instalada no seu navegador. Ela é gratuita e segura.
Baixe a Extensão: 
  - 🔗 **[Baixar Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)**

### Passo 2: Adicionar o Script

1.  Com a extensão instalada, clique no **ícone do Tampermonkey** no seu navegador e selecione **"Painel de Controle"** (Dashboard).
2.  Vá até a aba com um ícone de **`+`** (sinal de mais) para criar um novo script.
3.  Um editor de código irá aparecer com um modelo padrão. **Apague todo o conteúdo** que veio nele.
4.  Agora, acesse o arquivo do meu script aqui no GitHub. O nome do arquivo é `DIOMaximizer.js`.
5.  **Copie todo o código** do arquivo do script.
6.  **Cole o código** que você copiou no editor do Tampermonkey que você deixou em branco.
7.  Vá em `Arquivo` > `Salvar` no menu do editor do Tampermonkey.

Pronto! O script já está instalado. Agora, basta acessar qualquer página de aula da DIO e você verá o novo botão de controle em ação.

## ⚙️ Como Funciona

Este script é executado através da extensão **Tampermonkey**. Ele monitora a página de aulas da DIO e, assim que o player de vídeo e o menu são detectados, injeta um botão de controle no DOM.

Ao clicar no botão, o script aplica estilos CSS para:
1.  **Ocultar o menu:** Utiliza `transform: translateX(100%)` para deslizar o menu para fora da tela.
2.  **Maximizar o vídeo:** Altera a posição do container do vídeo para `position: fixed` e ajusta suas dimensões (`width` e `height`) para ocupar 100% da viewport.

Ao clicar novamente, os estilos originais são restaurados, retornando ao layout padrão da plataforma.

## 👨‍💻 Autor

Feito com ❤️ por **Marcos V. Mulinari**

- **LinkedIn:** [https://www.linkedin.com/in/marcosmulinarii](https://www.linkedin.com/in/marcosmulinarii)
- **GitHub:** [https://github.com/Marcos934](https://github.com/Marcos934)
