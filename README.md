# 🎲 Utopia Board Game - Catálogo Interativo

> Um catálogo web moderno e responsivo para listar, filtrar e gerenciar uma coleção de jogos de tabuleiro, desenvolvido com foco em experiência do usuário e interatividade.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🖼️ Preview

*(Sugestão: Coloque um print da tela do seu site aqui depois)*

## 🚀 Funcionalidades

Este projeto conta com diversas funcionalidades lógicas avançadas utilizando apenas JavaScript puro (Vanilla JS):

* **🔎 Busca em Tempo Real:** Filtre jogos instantaneamente pelo nome enquanto digita.
* **👥 Filtro Inteligente de Jogadores:** Digite um número (ex: `4`) e o sistema mostra apenas jogos compatíveis (lê intervalos como "2-5 jogadores").
* **🏷️ Filtros por Categoria/Dificuldade:** Botões rápidos para encontrar jogos para "Casais", "Iniciantes" ou "Experts".
* **❤️ Sistema de Favoritos:** Adicione jogos a uma lista pessoal. Os dados são salvos no **LocalStorage**, permanecendo lá mesmo se fechar o navegador.
* **🌗 Dark & Light Mode:** Alternância de tema com troca automática de identidade visual (Logo Utopia 🌙 vs. Logo Villa Pizza ☀️).
* **📱 Responsivo:** Layout adaptável para celulares, tablets e desktops.
* **🎥 Links de Regras:** Integração direta com vídeos do YouTube para aprender a jogar.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica e organizada.
* **CSS3:** Variáveis CSS (`:root`), Flexbox, Grid Layout e transições suaves.
* **JavaScript (ES6+):** Manipulação do DOM, lógica de filtragem complexa (Arrays/Objects) e persistência de dados.

## 📂 Estrutura do Projeto

```text
📁 utopia-board-game/
│
├── 📄 index.html      # Estrutura principal
├── 🎨 style.css       # Estilos e temas (Dark/Light)
├── ⚙️ script.js       # Lógica, banco de dados JSON e filtros
├── 🖼️ 1.png           # Logo para o Modo Claro
└── 📄 README.md       # Documentação