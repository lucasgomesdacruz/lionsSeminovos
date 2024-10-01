# Projeto Lions Seminovos 🚀 
![image](https://github.com/user-attachments/assets/0ac0e6cf-7309-4d8d-9b4a-136c2ef0d8bf)



## 🔥 Introdução
Este projeto é uma landing page desenvolvida para a concessionária de veículos Lions Seminovos, utilizando **Next.js**, **TypeScript**, **Sass**, **React Icons** e **Lucide Icons**.


# 🔥 Como resolvi o teste ?
Eu escolhi usar o Next.js por sua eficiência na construção de aplicações web, especialmente pela sua estrutura de páginas que facilita a criação de SPAs, além da renderização do lado do servidor (SSR), que melhora a performance e a otimização para SEO. Organizei meu código separando componentes em pastas como Benefits, Categories, Footer e Header para manter uma estrutura clara e escalável, facilitando a localização e o gerenciamento de cada parte do projeto. Utilizei módulos SCSS para encapsular os estilos, evitando conflitos e tornando a manutenção mais simples, enquanto a organização com pastas para assets, components e app proporciona uma visão geral do projeto, melhorando a legibilidade e agilidade no desenvolvimento, especialmente em colaboração com outros desenvolvedores. <br>

Para a prototipagem do projeto, utilizei o Figma, onde consegui criar um design visual que respeita as cores originais da empresa. Essa abordagem não apenas garantiu a consistência da identidade visual, mas também facilitou a comunicação das ideias e a visualização do layout antes de iniciar a implementação no Next.js. <br>

## 🚀 Funcionalidades e mais:
• Envio de Email, utilizando o metodo post juntamente com formspree.<br>
• Scroll Suave para ir a cada seção do site<br>
• Menu hamburguer para melhor experiência do usuário<br>
• Visulização dos projetos em destaques.<br>
• Biblioteca Animate.Css e wow.js para animações fluidas<br>
• Biblioteca font awesome para ícones<br>

### 🛠️ Tecnologias Utilizadas
- **Next.js**: Framework de React com suporte para renderização no lado do servidor e geração de sites estáticos.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática e mais segurança no desenvolvimento.
- **Sass**: Pré-processador CSS que permite escrever CSS de forma mais simples e modularizada.
- **React Icons** e **Lucide Icons**: Bibliotecas de ícones otimizados para React.

### 🛠️ Tecnologias usadas:
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![tailwind css](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)  


### Benefícios de Utilizar Next.js
- Renderização Híbrida: O Next.js oferece a possibilidade de misturar renderização estática e dinâmica, melhorando o desempenho e SEO. <br>
- Otimização Automática: O framework otimiza automaticamente as imagens, fontes e o código, proporcionando uma experiência de carregamento mais rápida. <br>
- Rotas Simples: A estrutura de rotas é baseada em arquivos, o que simplifica o desenvolvimento. <br>
- Suporte Completo a API Routes: Permite a criação de APIs de maneira simples e rápida sem a necessidade de configurar um backend separado. <br>

### Funcionalidades
- Página inicial com informações sobre a concessionária. <br>
- Seções de benefícios, suporte ao cliente e categorias de veículos. <br>
- Navegação com menu responsivo e ícones interativos. <br>
- Integração com WhatsApp para contato direto com a equipe de vendas. <br>

### 📁 Instalação e Uso:
1 - Clone o repositório: Git clone `(https://github.com/lucasgomesdacruz/lionsSeminovos.git)` <br>
2 - Instale as dependências: npm install <br>
3 - Use o comando no terminal para rodar local - Npm run dev <br>
4 - Abra o navegador e acesse: http://localhost:3000.<br>

###  📁 Organização de Pastas
# A estrutura do projeto está organizada da seguinte maneira: <br>
📁 src <br>
 ┣ 📁 app  <br>
 ┃ ┣ 📄 global.scss  <br>
 ┃ ┣ 📄 layout.tsx  <br>
 ┃ ┣ 📄 page.tsx  <br> 
 ┃ ┗ 📄 styles.module.scss  <br>
 ┣ 📁 assets  <br>
 ┃ ┗ 📁 images  <br>
 ┃    ┣ 📄 bannerLions.webp  <br>
 ┃    ┣ 📄 bannerSupport.jpg  <br>
 ┃    ┣ 📄 bronze.png  <br>
 ┃    ┣ 📄 categories.jpg  <br>
 ┃    ┣ 📄 logo.png  <br>
 ┃    ┣ 📄 ouro.png  <br>
 ┃    ┗ 📄 prata.png  <br>
 ┣ 📁 components  <br>
 ┃ ┣ 📁 Benefits  <br>
 ┃ ┃ ┣ 📄 index.tsx  <br>
 ┃ ┃ ┗ 📄 styles.module.scss  <br>
 ┃ ┣ 📁 BenefitsTwo  <br>
 ┃ ┃ ┣ 📄 index.tsx  <br>
 ┃ ┃ ┗ 📄 styles.module.scss  <br>
 ┃ ┣ 📁 Categories  <br>
 ┃ ┃ ┣ 📄 index.tsx  <br>
 ┃ ┃ ┗ 📄 styles.module.scss  <br>
 ┃ ┣ 📁 Footer  <br>
 ┃ ┃ ┣ 📄 index.tsx  <br>
 ┃ ┃ ┗ 📄 styles.module.scss  <br>
 ┃ ┣ 📁 Header  <br>
 ┃ ┃ ┣ 📄 index.tsx  <br>
 ┃ ┃ ┗ 📄 styles.module.scss  <br>
 ┃ ┣ 📁 Hero <br>
 ┣ ┣ ┣ 📄 index.tsx <br>
 ┃ ┃ ┗ 📄 styles.module.scss  <br>
 ┃ ┣ 📁 Input  <br>
 ┃ ┃ ┣ 📄 index.tsx <br>
 ┃ ┃ ┗ 📄 styles.module.scss <br>
 ┃ ┗ 📁 Support  <br>
 ┃    ┣ 📄 index.tsx  <br>
 ┃    ┗ 📄 styles.module.scss  <br>
 ┣ 📄 .env.local  <br>
 ┗ 📄 .gitignore <br>




### 👷 Autores

**Lucas Gomes - Front-End do projeto - [@LucasGomes](https://github.com/lucasgomesdacruz)**

### Acesso ao projeto
Você pode acessar o projeto final clicando aqui: <a>https://lions-seminovos-beryl.vercel.app/</a>

### 📄 Licença
Esse projeto está sob a licença (MIT License)

### 💡 Expressões de gratidão
**Link para o meu linkedin - [@LucasGomes](https://www.linkedin.com/in/lucaass1997)**

