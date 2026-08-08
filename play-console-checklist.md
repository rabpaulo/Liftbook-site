# Checklist de publicação no Google Play

## Preparado no repositório

- [x] Nome, slug, versão `1.0.0` e `versionCode` `3`.
- [x] Identificador Android `com.rabpaulo.liftbook`.
- [x] Projeto vinculado ao Expo/EAS com owner e project ID em `app.json`.
- [x] Ícone do app, ícone adaptativo, ícone da loja e imagem de destaque
  sincronizados com a identidade visual atual.
- [x] Backup Android desativado para manter os dados locais fora do Google Drive.
- [x] Microfone bloqueado e permissão de sobreposição bloqueada.
- [x] Explicação e consentimento antes de câmera ou seleção de mídia.
- [x] Tela de privacidade e aviso de saúde dentro do app.
- [x] Backups CSV separados para Peso corporal, Cardio e Treino, iniciados pelo usuário.
- [x] Perfil EAS de produção configurado para AAB com incremento automático.
- [x] Descrições e notas da versão em inglês e português do Brasil,
  atualizadas para gráficos de progresso, controles de série, widget, backups e
  privacidade local.
- [x] Ícone da loja e imagem de destaque nas dimensões exigidas.
- [x] Rascunho das declarações de Segurança dos dados e Apps de saúde
  reauditado em 8 de agosto de 2026.
- [x] Descoberta e layouts responsivos 4×2, 2×2 e 2×1 do widget de peso
  corporal validados em um aparelho Samsung Android.
- [x] Quatro capturas reais de telefone preparadas em 1080 × 1920, sem barras
  do sistema, dados fictícios ou textos promocionais sobrepostos.

## Depende do titular da publicação

- [ ] Criar ou verificar uma conta de desenvolvedor do Google Play como
  **organização** e concluir a verificação. O Google orienta contas que oferecem
  apps de saúde a escolher esse tipo; a verificação exige D-U-N-S e documentos
  da organização.
- [ ] Confirmar no Play Console que o package name está disponível e criar o app.
- [ ] Decidir se mantém o nome. Já existe uma listagem pública recente chamada
  **LiftBook** (`com.liftbook.app`):
  https://play.google.com/store/apps/details?id=com.liftbook.app. Títulos não
  são exclusivos, mas isso cria risco de confusão, descoberta ruim e eventual
  conflito de marca.
- [ ] Adicionar `liftbook.support@gmail.com` como contato público da listagem.
  A política de privacidade já usa esse endereço.
- [ ] Hospedar a landing `store-listing/index.html` e a rota
  `store-listing/privacy-policy/index.html` em HTTPS, numa URL pública, ativa,
  sem login, sem geobloqueio e que não seja PDF; cadastrar a URL direta da
  política no Console e testá-la em uma janela anônima.
- [ ] Confirmar que o nome público do desenvolvedor no Console corresponde a
  `rabpaulodev` ou atualizar essa identificação na política antes da publicação.
- [ ] Identificar o provedor de hospedagem na política se ele tratar logs
  técnicos além do necessário para entregar e proteger o site.
- [ ] Confirmar o acesso do titular ao projeto `@rabpaulodev/liftbook` e
  configurar ou recuperar com segurança as credenciais de produção.
- [ ] Gerar o AAB final assinado com credenciais de produção e habilitar o
  Play App Signing no primeiro envio.
- [ ] Confirmar a autorização para divulgar os valores reais visíveis nas
  capturas e enviar as quatro imagens ao Console na ordem numérica.
- [ ] Preencher Segurança dos dados, Declaração de apps de saúde, conteúdo,
  público-alvo, anúncios e acesso ao app conforme `data-safety.md`.
- [ ] Escolher países, preço gratuito/pago e aceitar os termos aplicáveis.
- [ ] Enviar a um canal de teste, executar o relatório de pré-lançamento e
  corrigir eventuais falhas antes da produção.
- [ ] Validar gravação, reprodução, permissões e limpeza de vídeos em um aparelho
  Android físico.
- [ ] Validar o cronômetro de cardio, a captura do preview em PNG e o compartilhamento
  nativo em um aparelho Android físico.
- [ ] Validar seleção, exportação e restauração dos três tipos de backup CSV em
  um aparelho Android físico.
- [ ] Validar o deep link e a atualização horária do widget, além da descoberta
  e dos tamanhos responsivos em launchers diferentes do Samsung.

Referências oficiais:

- https://support.google.com/googleplay/android-developer/answer/17190352
- https://support.google.com/googleplay/android-developer/answer/13634885
- https://support.google.com/googleplay/android-developer/answer/14151465
- https://support.google.com/googleplay/android-developer/answer/14738291
- https://support.google.com/googleplay/android-developer/answer/9866151
- https://support.google.com/googleplay/android-developer/answer/6112435
