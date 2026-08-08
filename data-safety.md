# Google Play — respostas propostas

Estas respostas refletem o código local auditado em 8 de agosto de 2026. Devem
ser reconfirmadas se forem adicionados backend, analytics, anúncios, crash
reporting, login, sincronização ou novos SDKs.

## Segurança dos dados

- O app coleta ou compartilha algum tipo de dado exigido pelo formulário? **Não**.
- Justificativa: o app não transmite os registros para o desenvolvedor nem para
  terceiros. Banco SQLite, preferências, snapshot privado do widget Android e
  vídeos copiados são processados somente no dispositivo. O backup Android está
  desativado.
- Ao escolher **Compartilhar PNG**, o usuário envia um resumo filtrado para a
  folha de compartilhamento do sistema e escolhe o destino. Essa exportação
  iniciada pelo usuário não envia dados ao desenvolvedor; o arquivo temporário
  é removido pelo app quando possível.
- Ao escolher um backup CSV de **Peso corporal**, **Cardio** ou **Treino** em
  Configurações, o usuário envia os registros daquela área para a folha de
  compartilhamento do sistema e escolhe o destino. O CSV pode conter dados de
  saúde e condicionamento, comentários e endereços locais de anexos, mas não
  incorpora as fotos ou os vídeos. Essa exportação também é iniciada pelo
  usuário, não envia dados ao desenvolvedor e remove o arquivo temporário quando
  possível.
- Compartilhamento de dados: **nenhum**.
- Conta de usuário: **não existe**.
- Solicitação de exclusão de conta: **não se aplica**.
- Dados em trânsito: **não se aplica**, pois o app não transmite os dados do
  diário.

Dados locais manipulados pelo app:

- Saúde e condicionamento: peso corporal, metas/fases, histórico de musculação e sessões/metas de cardio.
- Fotos: referência local opcional em registros de peso corporal.
- Vídeos: arquivo local opcional associado a uma série.
- Conteúdo do usuário: comentários de séries.
- Preferências: tema, unidade de peso, unidade de distância e incremento de
  carga do treino.
- Widget Android: cópia privada da média e dos valores de peso corporal da
  semana atual, com a unidade selecionada. O widget não abre o SQLite nem envia
  esse snapshot para fora do dispositivo.

Processamento somente no dispositivo não é declarado como coleta quando os
dados nunca saem do dispositivo. Essa conclusão depende de manter
`android.allowBackup: false` e de não introduzir transmissão por SDKs futuros.

## Declaração de apps de saúde

Marcar que o app oferece recursos de saúde e selecionar:

- **Activity and fitness / Atividade e condicionamento físico** — registro de
  musculação, séries, cargas, repetições, RIR e atividades de cardio.
- **Nutrition and weight management / Nutrição e controle de peso** — registro
  de peso corporal e metas de perda, manutenção ou ganho.

O app não é dispositivo médico. A descrição da loja e a tela
`Settings > Privacy & health` contêm o aviso exigido e recomendam consultar um
profissional de saúde.

## Outras declarações

- Anúncios: **não contém anúncios**.
- Acesso ao app: **todas as funções estão disponíveis sem login**.
- Público-alvo: confirmar no Console. A recomendação conservadora para o
  lançamento é selecionar apenas **18 anos ou mais**.
- Conteúdo de notícias, governo, finanças, apostas ou encontros: **não**.
- Permissões sensíveis utilizadas: câmera e seleção de mídia, iniciadas somente
  por uma ação do usuário e precedidas por uma explicação no app.

Referências oficiais:

- https://support.google.com/googleplay/android-developer/answer/10787469
- https://support.google.com/googleplay/android-developer/answer/14738291
- https://support.google.com/googleplay/android-developer/answer/10144311
