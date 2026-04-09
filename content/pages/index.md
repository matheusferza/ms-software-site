---
type: PageLayout
title: 'Início'
metaTitle: 'MS-Software | Sistemas, automações e soluções digitais para empresas'
metaDescription: 'A MS-Software desenvolve sistemas sob medida, automações, sites profissionais, suporte técnico e soluções comerciais para empresas.'
colors: colors-a
backgroundVideo:
  type: VideoBlock
  url: /movie/black-bghome.mp4#t=0.4
  autoplay: true
  loop: true
  muted: true
  controls: false
  playbackRate: 0.9
  className: page-background-video-home
  videoClassName: page-background-video-home-video
sections:
  - elementId: hero
    type: HeroSection
    colors: colors-f
    backgroundSize: full
    title: 'Soluções digitais sob medida para empresas que precisam vender melhor e operar com mais controle.'
    subtitle: 'MS-Software | Tecnologia empresarial com posicionamento premium'
    text: >+
      Desenvolvemos **sistemas, automações, sites profissionais e soluções administrativas** para transformar demandas soltas em estrutura real de negócio.

      Atuamos com foco em clareza comercial, execução técnica e entregas que realmente entram em operação.

      - Sistemas sob medida para gestão, atendimento, vendas e rotinas internas
      - Automações que reduzem retrabalho e aceleram processos
      - Sites e landing pages com visual premium e foco em conversão
    actions:
      - type: Button
        label: 'Solicitar orçamento'
        url: 'https://wa.me/5541987940764'
        style: primary
        showIcon: true
        icon: arrowRight
      - type: Button
        label: 'Falar por e-mail'
        url: 'mailto:matheuzfsouza@gmail.com?subject=Contato%20comercial%20-%20MS-Software'
        style: secondary
        showIcon: true
        icon: mail
    media:
      type: VideoBlock
      url: /movie/blue-smoke.mp4#t=0.2
      aspectRatio: '16:9'
      autoplay: true
      loop: true
      muted: true
      controls: false
      playbackRate: 0.95
    styles:
      self:
        class: hero-copy-bare
        shellClass: hero-shell-home
        height: auto
        width: wide
        padding:
          - pt-12
          - pb-8
          - pl-4
          - pr-4
        titleAlign: left
        textAlign: left
        justifyContent: flex-start

  - elementId: value
    type: TextSection
    variant: variant-b
    colors: colors-f
    kicker: 'O que fazemos'
    title: 'A MS-Software atua onde a empresa precisa de mais estrutura, agilidade e apresentação profissional'
    subtitle: 'Nosso trabalho une visão operacional, tecnologia e posicionamento comercial para criar soluções que façam sentido no dia a dia.'
    text: >+
      Desenvolvemos tecnologia para necessidades reais de operação, sempre com leitura do contexto da empresa, da equipe e do objetivo comercial.

      **Atuamos com foco em:**

      - desenvolvimento de sistemas sob medida
      - automações e integrações
      - sites institucionais e landing pages
      - suporte técnico e continuidade
      - soluções comerciais e administrativas

      Em vez de entregar algo genérico, estruturamos a solução para ser útil, confiável e pronta para evoluir.
    media:
      type: VideoBlock
      url: /movie/black-bghome.mp4#t=1.4
      aspectRatio: '16:9'
      autoplay: true
      loop: true
      muted: true
      controls: false
      playbackRate: 0.82
      className: text-media-home-video
    styles:
      self:
        height: auto
        width: wide
        mediaClass: text-media-shell-home
        padding:
          - pt-10
          - pb-10
          - pl-4
          - pr-4
        titleAlign: left
        textAlign: left

  - elementId: projects
    type: RecentProjectsSection
    kicker: 'Cases'
    colors: colors-f
    variant: variant-d
    title: 'Soluções que mostram nossa capacidade de transformar processos em produto digital'
    subtitle: 'Selecionamos alguns cases para apresentar como a MS-Software trabalha operação, usabilidade, clareza visual e valor comercial.'
    actions:
      - type: Button
        label: 'Ver todos os cases'
        url: '/projects'
        style: secondary
      - type: Button
        label: 'Quero uma solução parecida'
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

  - elementId: differentials
    type: TextSection
    variant: variant-b
    colors: colors-f
    kicker: 'Diferenciais'
    title: 'Menos improviso, mais clareza, mais aderência ao negócio'
    subtitle: 'Empresas escolhem a MS-Software quando precisam de tecnologia com apresentação séria e aplicação prática.'
    text: >+
      Trabalhamos com uma abordagem que equilibra **capacidade técnica, leitura de processo e comunicação comercial**.

      **Isso significa:**

      - soluções desenhadas a partir da realidade da empresa
      - visual premium para transmitir confiança e profissionalismo
      - estrutura pronta para manutenção, expansão e continuidade
      - acompanhamento para que a entrega continue fazendo sentido depois da implantação
    styles:
      self:
        height: auto
        width: wide
        padding:
          - pt-10
          - pb-10
          - pl-4
          - pr-4
        titleAlign: left
        textAlign: left

  - elementId: contact
    type: ContactSection
    kicker: 'Contato'
    colors: colors-f
    title: 'Vamos entender o que a sua empresa precisa resolver'
    text: >-
      Atendemos projetos de desenvolvimento, automação, sites profissionais, suporte técnico e estruturação de soluções comerciais.

      **WhatsApp:** [+55 41 98794-0764](https://wa.me/5541987940764)  
      **E-mail:** [matheuzfsouza@gmail.com](mailto:matheuzfsouza@gmail.com)  
      **Atendimento:** Curitiba - PR, com suporte remoto para todo o Brasil.
    actions:
      - type: Button
        label: 'Chamar no WhatsApp'
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
    formHeading: 'Solicite um diagnóstico inicial'
    formText: 'Descreva a demanda e abriremos o e-mail comercial com a mensagem pronta para agilizar o atendimento.'
    form:
      type: FormBlock
      elementId: contact-form
      submissionMode: mailto
      submissionEmail: 'matheuzfsouza@gmail.com'
      submissionSubject: 'Novo contato comercial via site | MS-Software'
      fields:
        - name: name
          label: 'Nome'
          hideLabel: true
          placeholder: 'Nome'
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: company
          label: 'Empresa'
          hideLabel: true
          placeholder: 'Empresa'
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: phone
          label: 'Telefone'
          hideLabel: true
          placeholder: 'Telefone ou WhatsApp'
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: 'Email'
          hideLabel: true
          placeholder: 'E-mail corporativo'
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: message
          label: 'Mensagem'
          hideLabel: true
          placeholder: 'Conte sobre o processo, necessidade ou solução que sua empresa precisa.'
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
          - pl-4
          - pr-4
        textAlign: left
---
