---
type: PageLayout
title: 'Serviços'
metaTitle: 'Serviços da MS-Software | Sistemas, automações, sites e suporte'
metaDescription: 'Conheça os serviços da MS-Software: desenvolvimento de sistemas sob medida, automações, sites profissionais, suporte técnico e soluções administrativas.'
colors: colors-a
backgroundVideo:
  type: VideoBlock
  url: /movie/black-bghome.mp4
  autoplay: true
  loop: true
  muted: true
  controls: false
sections:
  - elementId: hero
    type: HeroSection
    colors: colors-f
    backgroundSize: full
    subtitle: 'Serviços MS-Software'
    title: 'Serviços pensados para operações que precisam funcionar melhor, vender melhor e evoluir com segurança.'
    text: >+
      A **MS-Software** atua na construção e evolução de soluções digitais para empresas que precisam de mais eficiência, controle e posicionamento profissional.

      Nossos serviços cobrem desde a **criação de sistemas e automações** até a **presença institucional da marca na web**, sempre com foco em aplicação real.
    actions:
      - type: Button
        label: 'Falar sobre uma demanda'
        url: 'https://wa.me/5541987940764'
        style: primary
        showIcon: true
        icon: whatsapp
      - type: Button
        label: 'Ver soluções'
        url: '/projects'
        style: secondary
        showIcon: true
        icon: arrowRight
    styles:
      self:
        class: hero-copy-bare
        width: wide
        padding:
          - pt-12
          - pb-8
          - pl-4
          - pr-4
        textAlign: left

  - elementId: portfolio-servicos
    type: TextSection
    variant: variant-b
    colors: colors-f
    kicker: 'Portfólio de serviços'
    title: 'O que desenvolvemos para empresas e operações'
    subtitle: 'Cada serviço pode ser contratado isoladamente ou fazer parte de uma solução mais ampla.'
    text: >+
      **Atuamos com foco em:**

      - desenvolvimento de sistemas sob medida para gestão, atendimento, vendas e rotinas internas
      - automações e integrações para reduzir retrabalho e acelerar processos
      - sites institucionais e landing pages com visual premium e foco em conversão
      - suporte técnico remoto para estabilização, manutenção e evolução
      - soluções comerciais e administrativas para caixa, relatórios, equipe, catálogo e operação
      - estrutura digital complementar com domínios, e-mail profissional, publicação e continuidade
    styles:
      self:
        width: wide
        padding:
          - pt-10
          - pb-10
          - pl-4
          - pr-4

  - elementId: processo
    type: TextSection
    variant: variant-b
    colors: colors-f
    kicker: 'Processo'
    title: 'Como estruturamos cada entrega'
    subtitle: 'Nosso processo reduz ruído, organiza prioridades e ajuda a empresa a tomar decisões com mais segurança.'
    text: >+
      **01. Diagnóstico**  
      Levantamos objetivos, gargalos, impacto operacional e restrições do projeto.

      **02. Planejamento da solução**  
      Definimos arquitetura, fluxo, escopo inicial e uma abordagem compatível com o momento do negócio.

      **03. Desenvolvimento e validação**  
      Executamos com foco em qualidade, usabilidade, comunicação clara e alinhamento ao contexto real de uso.

      **04. Implantação e evolução**  
      Apoiamos a adoção e organizamos o próximo passo para a solução continuar gerando valor.
    styles:
      self:
        width: wide
        padding:
          - pt-10
          - pb-10
          - pl-4
          - pr-4

  - elementId: servicos-cases
    type: RecentProjectsSection
    kicker: 'Aplicação real'
    colors: colors-f
    variant: variant-d
    title: 'Exemplos de como esses serviços se transformam em solução'
    subtitle: 'Selecionamos alguns cases para mostrar a aplicação prática da nossa abordagem.'
    actions:
      - type: Button
        label: 'Ver todos os cases'
        url: '/projects'
        style: secondary
      - type: Button
        label: 'Solicitar orçamento'
        url: 'https://wa.me/5541987940764'
        style: primary
        showIcon: true
        icon: arrowRight
    recentCount: 2
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    styles:
      self:
        width: wide
        padding:
          - pt-10
          - pb-10
          - pl-4
          - pr-4
        textAlign: left

  - elementId: contato
    type: ContactSection
    kicker: 'Contato'
    colors: colors-f
    title: 'Se existe uma demanda operacional ou comercial mal resolvida, a MS-Software pode estruturar a solução'
    text: >-
      Atendemos projetos sob medida e também evolução de estruturas já existentes.

      **WhatsApp:** [+55 41 98794-0764](https://wa.me/5541987940764)  
      **E-mail:** [matheuzfsouza@gmail.com](mailto:matheuzfsouza@gmail.com)
    actions:
      - type: Button
        label: 'Solicitar orçamento'
        url: 'https://wa.me/5541987940764'
        style: primary
        showIcon: true
        icon: whatsapp
      - type: Button
        label: 'Ir para contato'
        url: '/contato'
        style: secondary
        showIcon: true
        icon: arrowRight
    formHeading: 'Abra um contato comercial'
    formText: 'Preencha os dados e abriremos o seu e-mail com a mensagem pronta.'
    form:
      type: FormBlock
      elementId: services-contact-form
      submissionMode: mailto
      submissionEmail: 'matheuzfsouza@gmail.com'
      submissionSubject: 'Contato via página Serviços | MS-Software'
      fields:
        - name: name
          label: Nome
          hideLabel: true
          placeholder: Nome
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: company
          label: Empresa
          hideLabel: true
          placeholder: Empresa
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: email
          label: E-mail
          hideLabel: true
          placeholder: E-mail
          isRequired: true
          width: full
          type: EmailFormControl
        - name: message
          label: Mensagem
          hideLabel: true
          placeholder: Descreva rapidamente o cenário ou objetivo
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: 'Abrir e-mail comercial'
      styles:
        self:
          textAlign: left
    styles:
      self:
        width: wide
        padding:
          - pt-20
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
---
