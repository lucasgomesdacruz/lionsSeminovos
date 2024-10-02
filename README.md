# Lions | Concessionária 🚗
![image](https://github.com/user-attachments/assets/24c5003b-76d2-4422-bfc2-e6033c54027a)





## 🔥 Introdução
Este projeto é uma landing page desenvolvida para a concessionária de veículos Lions Seminovos, utilizando **Next.js**, **TypeScript**, **Sass**, **React Icons** e **Lucide Icons**.


# 🔥 Como resolvi o teste ?
Eu escolhi usar o Next.js por sua eficiência na construção de aplicações web, especialmente pela sua estrutura de páginas que facilita a criação de SPAs, além da renderização do lado do servidor (SSR), que melhora a performance e a otimização para SEO. Organizei meu código separando componentes em pastas como Benefits, Categories, Footer e Header para manter uma estrutura clara e escalável, facilitando a localização e o gerenciamento de cada parte do projeto. Utilizei módulos SCSS para encapsular os estilos, evitando conflitos e tornando a manutenção mais simples, enquanto a organização com pastas para assets, components e app proporciona uma visão geral do projeto, melhorando a legibilidade e agilidade no desenvolvimento, especialmente em colaboração com outros desenvolvedores. <br>

Para a prototipagem do projeto, utilizei o Figma, onde consegui criar um design visual que respeita as cores originais da empresa. Essa abordagem não apenas garantiu a consistência da identidade visual, mas também facilitou a comunicação das ideias e a visualização do layout antes de iniciar a implementação no Next.js. <br>

![image](https://github.com/user-attachments/assets/e5574083-d205-4fe7-9fa1-60dbd372c094)

### 🛠️ Tecnologias Utilizadas
- **Next.js**: Framework de React com suporte para renderização no lado do servidor e geração de sites estáticos.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática e mais segurança no desenvolvimento.
- **Sass**: Pré-processador CSS que permite escrever CSS de forma mais simples e modularizada.
- **React Icons** e **Lucide Icons**: Bibliotecas de ícones otimizados para React.



### Benefícios de Utilizar Next.js
- Renderização Híbrida: O Next.js oferece a possibilidade de misturar renderização estática e dinâmica, melhorando o desempenho e SEO. <br>
- Otimização Automática: O framework otimiza automaticamente as imagens, fontes e o código, proporcionando uma experiência de carregamento mais rápida. <br>
- Rotas Simples: A estrutura de rotas é baseada em arquivos, o que simplifica o desenvolvimento. <br>
- Suporte Completo a API Routes: Permite a criação de APIs de maneira simples e rápida sem a necessidade de configurar um backend separado. <br>

### Funcionalidades
- Página Inicial: A página inicial apresenta informações sobre a concessionária, destacando sua missão, visão e valores. <br>
- Seções de Benefícios, Suporte ao Cliente e Categorias de Veículos: Essas seções fornecem detalhes sobre as vantagens de adquirir um veículo na concessionária, informações úteis para o cliente e uma lista de categorias de veículos disponíveis. <br>
- Navegação com Menu Responsivo e Ícones Interativos: O menu foi projetado para ser responsivo, garantindo uma experiência de navegação fluida em diferentes dispositivos. Os ícones interativos melhoram a usabilidade e a estética do site. <br>
- Integração com WhatsApp: Ofereci a funcionalidade de contato direto com a equipe de vendas através do WhatsApp, facilitando a comunicação e a resolução de dúvidas para os clientes. <br>
- Menu Hambúrguer: O menu hambúrguer foi implementado para otimizar o espaço na tela, especialmente em dispositivos móveis, permitindo uma navegação simples  <br>

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

