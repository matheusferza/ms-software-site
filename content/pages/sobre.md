---
type: PageLayout
title: Sobre
metaTitle: 'Sobre a MS-Software | Tecnologia sob medida para empresas'
metaDescription: 'Conheça a MS-Software, empresa de desenvolvimento, automação, sites profissionais, suporte técnico e soluções administrativas.'
colors: colors-a
backgroundVideo:
  type: VideoBlock
  url: /movie/black-bghome.mp4#t=1.2
  autoplay: true
  loop: true
  muted: true
  controls: false
  playbackRate: 0.82
  className: page-background-video-about
  videoClassName: page-background-video-about-video
sections:
  - elementId: sobre
    type: HeroSection
    colors: colors-f
    backgroundSize: full
    subtitle: 'Sobre a MS-Software'
    title: 'Tecnologia para empresas que precisam sair do improviso e ganhar estrutura real de operação.'
    text: >+
      A **MS-Software** nasceu para atender empresas que precisam de tecnologia bem resolvida, com clareza comercial, organização técnica e foco em uso real.

      Atuamos com **sistemas sob medida, automações, sites profissionais, suporte técnico e soluções administrativas**, sempre conectando o software à rotina do negócio e à experiência de quem vai operar a solução.
    actions:
      - type: Button
        label: 'Conhecer serviços'
        url: '/servicos'
        style: primary
        showIcon: true
        icon: arrowRight
      - type: Button
        label: 'Falar com a equipe'
        url: '/contato'
        style: secondary
    media:
      type: VideoBlock
      url: /movie/blue-smoke.mp4#t=0.8
      aspectRatio: '16:9'
      autoplay: true
      loop: true
      muted: true
      controls: false
      playbackRate: 0.8
    styles:
      self:
        class: hero-copy-bare
        shellClass: hero-shell-about
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-8
          - pl-4
          - pr-4
        textAlign: left

  - elementId: posicionamento
    type: TextSection
    variant: variant-b
    colors: colors-f
    kicker: 'Posicionamento'
    title: 'Mais do que entregar software, estruturamos uma base digital que faça sentido para o negócio'
    subtitle: 'Nossa atuação combina leitura de cenário, estrutura técnica e comunicação institucional.'
    text: >+
      Trabalhamos com empresas que precisam ganhar consistência na operação, melhorar a apresentação comercial e evoluir seus processos sem depender de soluções improvisadas.

      Em muitos casos, o desafio não é apenas "ter um sistema", mas ter uma estrutura que una **usabilidade, estabilidade, visibilidade e potencial comercial**.

      Por isso, nossos projetos partem de perguntas práticas: **o que precisa funcionar melhor**, **quem vai usar**, **qual etapa gera mais gargalo** e **como a solução pode evoluir sem virar bloqueio no futuro**.
    media:
      type: VideoBlock
      url: /movie/black-bghome.mp4#t=2.4
      aspectRatio: '16:9'
      autoplay: true
      loop: true
      muted: true
      controls: false
      playbackRate: 0.88
      className: text-media-about-video
    mediaPlacement: left
    styles:
      self:
        width: wide
        mediaClass: text-media-shell-about
        padding:
          - pt-10
          - pb-10
          - pl-4
          - pr-4

  - elementId: metodo
    type: TextSection
    variant: variant-b
    colors: colors-f
    kicker: 'Como atuamos'
    title: 'Nossa forma de trabalhar une diagnóstico, produto e execução'
    subtitle: 'Cada projeto é conduzido com foco em aderência, clareza e continuidade.'
    text: >+
      **Nosso processo costuma seguir quatro frentes principais:**

      - leitura do cenário, da equipe e do processo atual
      - definição da solução sem excesso de complexidade
      - desenvolvimento com comunicação clara e validação prática
      - continuidade para evolução, ajustes e próximos passos

      Isso nos permite construir soluções mais úteis, com menos ruído e mais chance de adoção real.
    styles:
      self:
        width: wide
        padding:
          - pt-10
          - pb-10
          - pl-4
          - pr-4

  - type: LabelsSection
    colors: colors-f
    subtitle: 'Capacidades da MS-Software'
    items:
      - type: Label
        label: Desenvolvimento de sistemas
      - type: Label
        label: Automações e integrações
      - type: Label
        label: Sites institucionais e landing pages
      - type: Label
        label: Suporte técnico remoto
      - type: Label
        label: Estruturação de ambientes e domínios
      - type: Label
        label: Soluções comerciais e administrativas
      - type: Label
        label: Flutter, Python, Web e WordPress
      - type: Label
        label: Organização de produto e experiência
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
    title: 'Se a sua empresa precisa de uma estrutura digital mais confiável, podemos conversar'
    text: >-
      A **MS-Software** atende projetos novos, reestruturações, evoluções de sistemas existentes e necessidades de suporte.

      **WhatsApp:** [+55 41 98794-0764](https://wa.me/5541987940764)  
      **E-mail:** [matheuzfsouza@gmail.com](mailto:matheuzfsouza@gmail.com)
    actions:
      - type: Button
        label: 'Chamar no WhatsApp'
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
    formHeading: 'Solicite um contato comercial'
    formText: 'Abriremos o seu e-mail com a mensagem pronta para agilizar o primeiro atendimento.'
    form:
      type: FormBlock
      elementId: about-contact-form
      submissionMode: mailto
      submissionEmail: 'matheuzfsouza@gmail.com'
      submissionSubject: 'Contato via página Sobre | MS-Software'
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
          placeholder: Conte o contexto da sua empresa
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
