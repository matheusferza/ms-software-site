---
type: PageLayout
title: 'Contato'
metaTitle: 'Contato | MS-Software'
metaDescription: 'Entre em contato com a MS-Software para solicitar orçamento, apresentar sua demanda ou iniciar um diagnóstico comercial.'
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
    subtitle: 'Contato MS-Software'
    title: 'Fale com a MS-Software e apresente a necessidade da sua empresa'
    text: >+
      Atendemos demandas de **desenvolvimento de sistemas, automações, sites profissionais, suporte técnico e soluções administrativas**.

      Se a sua empresa precisa organizar um processo, evoluir uma ferramenta ou apresentar melhor os serviços, vamos conversar.
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

  - elementId: canais
    type: TextSection
    variant: variant-b
    colors: colors-f
    kicker: 'Canais'
    title: 'Canais de contato e atendimento'
    subtitle: 'Use o canal que fizer mais sentido para o momento do seu projeto.'
    text: >+
      **WhatsApp**  
      [+55 41 98794-0764](https://wa.me/5541987940764)

      **E-mail comercial**  
      [matheuzfsouza@gmail.com](mailto:matheuzfsouza@gmail.com)

      **Localização**  
      Curitiba - PR, com atendimento remoto para todo o Brasil.

      **Perfil profissional**  
      [LinkedIn](https://www.linkedin.com/in/matheus-souza-benini-997326268)
    styles:
      self:
        width: wide
        padding:
          - pt-10
          - pb-10
          - pl-4
          - pr-4

  - elementId: contato-form
    type: ContactSection
    kicker: 'Contato'
    colors: colors-f
    title: 'Solicite um diagnóstico inicial'
    text: >-
      Conte o contexto, o objetivo e o que precisa melhorar. Abriremos o seu e-mail com a mensagem pronta para agilizar o primeiro atendimento.
    actions:
      - type: Button
        label: 'Orçamento por WhatsApp'
        url: 'https://wa.me/5541987940764'
        style: primary
        showIcon: true
        icon: whatsapp
      - type: Button
        label: 'Ver serviços'
        url: '/servicos'
        style: secondary
        showIcon: true
        icon: arrowRight
    formHeading: 'Abra um contato comercial'
    formText: 'Preencha os campos abaixo e envie pelo seu aplicativo de e-mail.'
    form:
      type: FormBlock
      elementId: company-contact-form
      submissionMode: mailto
      submissionEmail: 'matheuzfsouza@gmail.com'
      submissionSubject: 'Novo contato comercial via página Contato | MS-Software'
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
        - name: phone
          label: Telefone
          hideLabel: true
          placeholder: Telefone ou WhatsApp
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: E-mail
          hideLabel: true
          placeholder: E-mail
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: message
          label: Mensagem
          hideLabel: true
          placeholder: Descreva a necessidade da sua empresa
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
          - pt-10
          - pb-24
          - pl-4
          - pr-4
        textAlign: left
---
