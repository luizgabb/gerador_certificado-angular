# 📄 Gerador de Certificados - Angular

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

## 📋 Sobre o Projeto

Este é um gerador de certificados desenvolvido em Angular que permite criar e baixar certificados personalizados de forma simples e eficiente.

### 🌐 Links

- **Repositório**: [GitHub](https://github.com/luizgabb/gerador_certificado-angular)
- **Deploy**: [Netlify](https://beautiful-khapse-5280bc.netlify.app/)

## 🚀 Funcionalidades

- ✅ Geração de certificados personalizados
- ✅ Download dos certificados em formato de imagem
- ✅ Interface intuitiva e responsiva
- ✅ Customização de dados do certificado

## 🛠️ Tecnologias Utilizadas

- **Frontend**: Angular 16+
- **Linguagem**: TypeScript
- **Estilização**: CSS3
- **Deploy**: Netlify
- **Controle de Versão**: Git

## 📦 Estrutura do Projeto

```
gerador_certificado-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   └── certificado/
│   │   │       ├── certificado.component.ts
│   │   │       ├── certificado.component.html
│   │   │       └── certificado.component.css
│   │   ├── services/
│   │   │   └── certificado.service.ts
│   │   ├── models/
│   │   │   └── certificado.model.ts
│   │   └── app.module.ts
├── assets/
│   └── images/
├── angular.json
├── package.json
└── README.md
```

## 🎯 Como Usar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Angular CLI (`npm install -g @angular/cli`)

### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/luizgabb/gerador_certificado-angular.git
   cd gerador_certificado-angular
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto**
   ```bash
   ng serve
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:4200
   ```

### Build para Produção

```bash
ng build --prod
```

## 📝 Componentes Principais

### Certificado Component

Componente principal responsável pela geração e download dos certificados.

**Funcionalidades:**
- Formulário para inserção de dados
- Visualização prévia do certificado
- Geração de imagem para download
- Validação de campos obrigatórios

### Certificado Service

Serviço responsável pela lógica de negócio e manipulação dos certificados.

**Métodos principais:**
- `gerarCertificado()`: Processa os dados e gera o certificado
- `downloadCertificado()`: Cria e baixa a imagem do certificado
- `validarDados()`: Valida as informações inseridas

## 🎨 Customização

### Modelo de Certificado

O projeto permite customizar:
- Nome do participante
- Nome do evento
- Data do evento
- Carga horária
- Assinaturas

### Estilização

Os estilos podem ser modificados no arquivo `certificado.component.css` para alterar a aparência do certificado.

## 🔧 Desenvolvimento

### Adicionando Novos Campos

Para adicionar novos campos ao certificado:

1. Atualize o modelo em `certificado.model.ts`
2. Modifique o template em `certificado.component.html`
3. Atualize a lógica de geração no serviço

### Modificando o Layout

Edite o arquivo `certificado.component.css` para alterar cores, fontes e layout do certificado.

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona em:
- 💻 Desktop
- 📱 Mobile
- 📟 Tablets

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

- **Luiz Gabriel** - [GitHub](https://github.com/luizgabb)

## 🔄 Versões

- **v1.0.0** - Versão inicial com funcionalidades básicas de geração e download

---

⭐️ Se este projeto foi útil para você, deixe uma estrela no repositório!
