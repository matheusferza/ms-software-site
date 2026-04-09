---
type: ProjectLayout
title: Lista Inteligente de Compras (Flutter)
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75
date: '2025-10-27'
client: Produto mobile e experiência do usuário
description: >-
  Aplicativo mobile cross-platform desenvolvido com Flutter para organizar compras de forma simples, com persistência local, cálculo em tempo real e uma experiência objetiva para uso cotidiano.
featuredImage:
  type: ImageBlock
  url: /images/Listy_thumb.png
  altText: Captura de tela do app Lista de Compras
media:
  type: ImageBlock
  url: /images/shopping_list_feature.png
  altText: Interface principal do aplicativo de lista de compras
---

## Visão Geral do Projeto

Este projeto foi desenvolvido integralmente em **Dart com o framework Flutter**, garantindo uma experiência consistente tanto em dispositivos Android quanto iOS. Dentro do portfólio da **MS-Software**, ele funciona como um case de **produto mobile enxuto**, orientado à usabilidade, à organização de dados e à evolução incremental.

**Funcionalidades Principais Implementadas:**

- **Persistência de Dados:** Uso do `shared_preferences` para salvar e carregar a lista automaticamente, mantendo os dados mesmo após fechar o aplicativo.
- **Cálculo Dinâmico de Total:** Acompanhamento em tempo real do valor total dos itens na lista, incluindo a lógica de multiplicação de `preço x quantidade`.
- **Gestão de Itens:** Adição, edição (nome, preço, quantidade) e remoção (usando o gesto de _swipe_) de itens.
- **Marcação de Compra:** Checkbox para marcar itens como comprados, aplicando um efeito de "riscar" (`lineThrough`) no texto.
- **Customização da Interface:** Definição de temas de cores e organização visual pensada para leitura rápida.
- **Configuração de Build:** Geração de ícone de launcher personalizado (`flutter_launcher_icons`) e configuração de nome de aplicativo para ambas as plataformas (Android/iOS).

## Desafios e Soluções Técnicas

O desenvolvimento do `ShoppingListApp` apresentou desafios específicos, especialmente relacionados à usabilidade e à persistência de dados:

1.  **Layout do Total e Botão Flutuante:** Inicialmente, o botão flutuante de adicionar sobrepunha o container do valor total. A solução foi incorporar um `Padding` extra no `Container` do total e estruturar o _body_ do `Scaffold` com um `Column` contendo `Expanded` para a lista e o `Container` para o total, garantindo a separação visual.

2.  **Inclusão da Quantidade:** A adição do campo de quantidade exigiu a refatoração da classe `ShoppingItem` para incluir a propriedade `quantity` e a atualização do _getter_ `total` para o cálculo `preço * quantidade`. A validação de _parsing_ (`int.tryParse`) foi implementada para garantir que apenas números inteiros fossem aceitos no campo de quantidade.

3.  **Cross-Platform (iOS Build):** Para gerar o build do iOS sem acesso a um Mac, foi configurado um fluxo de trabalho de **Cloud Build (CI/CD)**, utilizando serviços como o Codemagic, que automatiza a compilação e a assinatura do arquivo `.ipa`.

> “O Flutter se destacou como a escolha ideal, oferecendo um único código-base para um lançamento rápido e eficiente em ambas as plataformas.”

## Tecnologias Utilizadas

- **Framework:** Flutter
- **Linguagem:** Dart
- **Persistência:** `shared_preferences`
- **Versionamento:** Git & GitHub
- **Ferramentas de Build:** `flutter_launcher_icons`

## Conclusão

O projeto resultou em um aplicativo funcional e intuitivo, demonstrando a capacidade da **MS-Software** em transformar uma necessidade cotidiana em um produto digital consistente, com boa experiência de uso, estrutura pronta para evolução e base técnica adequada para futuras funcionalidades, como múltiplas listas ou sincronização em nuvem.
