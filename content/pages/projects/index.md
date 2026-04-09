---
type: ProjectFeedLayout
title: Soluções
metaTitle: 'Soluções e Projetos | MS-Software'
metaDescription: 'Conheça os cases e soluções desenvolvidos pela MS-Software para gestão, operação, vendas e experiência digital.'
colors: colors-a
backgroundVideo:
  type: VideoBlock
  url: /movie/blue-smoke.mp4#t=1.8
  autoplay: true
  loop: true
  muted: true
  controls: false
  playbackRate: 0.8
  className: page-background-video-projects
  videoClassName: page-background-video-projects-video
projectFeed:
  type: ProjectFeedSection
  colors: colors-f
  kicker: 'Cases'
  title: 'Cases e soluções desenvolvidos'
  subtitle: 'Projetos organizados como soluções empresariais para gestão, operação, vendas e experiência digital.'
  showDate: false
  showDescription: true
  showReadMoreLink: true
  showFeaturedImage: true
  variant: variant-d
  styles:
    self:
      width: wide
      padding:
        - pt-0
        - pl-4
        - pr-4
        - pb-12
      textAlign: left

topSections:
  - type: HeroSection
    title: 'Soluções digitais desenvolvidas pela MS-Software'
    subtitle: 'Cases com foco em usabilidade, clareza operacional e estrutura técnica pronta para o mundo real.'
    text: >-
      Reunimos aqui alguns projetos que mostram como a **MS-Software** estrutura interfaces, sistemas, operações comerciais e produtos digitais com mais clareza, consistência e potencial de evolução.

      Os cases combinam **Flutter, Python, Web e WordPress**, sempre com atenção à experiência de uso, ao contexto operacional e à apresentação comercial da solução.
    actions:
      - type: Button
        label: 'Falar sobre uma demanda'
        url: 'https://wa.me/5541987940764'
        style: primary
        showIcon: true
        icon: whatsapp
      - type: Button
        label: 'Conhecer serviços'
        url: '/servicos'
        style: secondary
        showIcon: true
        icon: arrowRight
    media:
      type: VideoBlock
      url: /movie/black-bghome.mp4#t=2.5
      aspectRatio: '16:9'
      autoplay: true
      loop: true
      muted: true
      controls: false
      playbackRate: 0.9
    colors: colors-f
    backgroundSize: full
    elementId: ''
    styles:
      self:
        class: hero-copy-bare
        shellClass: hero-shell-projects
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-8
          - pl-4
          - pr-4
        textAlign: left

  - type: TextSection
    variant: variant-b
    colors: colors-f
    kicker: 'Estrutura'
    title: 'Cada projeto parte de um processo real e se transforma em uma solução com leitura comercial'
    subtitle: 'Os cases da MS-Software não são experimentos visuais. Eles nascem de necessidade operacional, fluxo de uso e posicionamento claro.'
    text: >-
      Antes de desenvolver, organizamos cenário, prioridade e uso real da solução. Isso permite que cada entrega tenha mais consistência visual, mais aderência ao negócio e mais espaço para evoluir.

      Ao reunir sistemas, interfaces, automações e páginas comerciais, os projetos ganham uma base que funciona melhor tanto para a equipe quanto para a apresentação da empresa ao cliente final.
    media:
      type: VideoBlock
      url: /movie/blue-smoke.mp4#t=0.9
      aspectRatio: '16:9'
      autoplay: true
      loop: true
      muted: true
      controls: false
      playbackRate: 0.84
      className: text-media-projects-video
    mediaPlacement: left
    styles:
      self:
        width: wide
        mediaClass: text-media-shell-projects
        padding:
          - pt-6
          - pb-12
          - pl-4
          - pr-4
        textAlign: left

bottomSections:
  - type: ContactSection
    backgroundSize: full
    kicker: 'Contato'
    title: 'Tem uma necessidade parecida ou quer estruturar uma solução do zero?'
    text: >-
      A **MS-Software** pode transformar processos soltos em uma solução mais clara, moderna e utilizável para sua equipe.
    actions:
      - type: Button
        label: 'Solicitar orçamento'
        url: 'https://wa.me/5541987940764'
        style: primary
        showIcon: true
        icon: whatsapp
      - type: Button
        label: 'Enviar e-mail'
        url: 'mailto:matheuzfsouza@gmail.com?subject=Contato%20comercial%20-%20MS-Software'
        style: secondary
        showIcon: true
        icon: mail
    formHeading: 'Abra um contato comercial'
    formText: 'Preencha os dados e abriremos o seu e-mail com a mensagem pronta para envio.'
    colors: colors-f
    form:
      type: FormBlock
      elementId: sign-up-form
      submissionMode: mailto
      submissionEmail: 'matheuzfsouza@gmail.com'
      submissionSubject: 'Contato via página Soluções | MS-Software'
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
          placeholder: Conte sobre o projeto, processo ou objetivo
          isRequired: true
          width: full
          type: TextareaFormControl
      submitLabel: 'Abrir e-mail comercial'
      styles:
        self:
          textAlign: left
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-20
          - pb-24
          - pr-4
          - pl-4
        flexDirection: row
        textAlign: left
---
