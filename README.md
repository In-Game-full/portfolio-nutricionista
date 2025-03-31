# Portfolio Nutricionista

Um site profissional para nutricionista, desenvolvido com React, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- React 18.3.1
- TypeScript
- Tailwind CSS
- Lucide React (para ícones)
- Vite (bundler)

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
portfolio-nutricionista/
├── src/
│   ├── App.tsx          # Componente principal
│   ├── main.tsx         # Ponto de entrada
│   └── index.css        # Estilos globais
├── public/
├── index.html           # HTML template
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração TypeScript
├── tailwind.config.js   # Configuração Tailwind
└── vite.config.ts       # Configuração Vite
```

## Funcionalidades

- Design responsivo
- Integração com WhatsApp para agendamentos
- Seção de serviços
- Área de contato com links para redes sociais
- Interface moderna com gradientes e elementos visuais atrativos

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

3. Para build de produção:
```bash
npm run build
```

## Personalização

- O número do WhatsApp pode ser alterado na variável `whatsappNumber` no arquivo `App.tsx`
- As imagens são carregadas do Unsplash e podem ser substituídas alterando as URLs
- As cores seguem um tema verde que pode ser personalizado no Tailwind

## Componentes

### Header
- Navegação principal
- Logo com ícone do Lucide React
- Links para seções importantes

### Hero Section
- Título principal
- Descrição dos serviços
- Botões de call-to-action
- Imagem ilustrativa

### Serviços
- Grid de serviços oferecidos
- Descrições detalhadas
- Design com cards em destaque

### Contato
- Links para WhatsApp, Instagram e Email
- Integração direta com plataformas de mensagem

### Footer
- Informações de copyright
- Layout minimalista e profissional