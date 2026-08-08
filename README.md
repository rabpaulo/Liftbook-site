# Kit de publicação no Google Play

Materiais atualizados em 8 de agosto de 2026 para a primeira publicação do
Liftbook:

- `index.html`: entrada Vite da landing page responsiva do Liftbook.
- `src/`: aplicação React + TypeScript, com componentes, páginas e o sistema
  visual compartilhado pela landing page e pela política de privacidade.
- `privacy-policy/index.html`: entrada Vite independente que preserva a URL
  pública `/privacy-policy/` em hospedagens estáticas.
- `en-US/` e `pt-BR/`: título, descrições e notas da versão.
- `store-icon.png`: ícone 512 × 512 em PNG de 32 bits, sincronizado com a
  identidade atual do app.
- `feature-graphic.svg`: fonte editável da imagem de destaque.
- `feature-graphic.png`: imagem de destaque 1024 × 500 em PNG de 24 bits, sem
  transparência.
- Arquivos `feature-graphic-alt.txt`: texto alternativo da imagem de destaque.
- `screenshots/`: quatro capturas reais de telefone em 1080 × 1920, prontas
  para envio na ordem numérica.
- Arquivos `screenshots-alt.txt`: textos alternativos das capturas em cada
  idioma.
- `src/pages/PrivacyPolicyPage.tsx`: detailed English privacy policy for the
  Android app, covering the app/developer identity, contact details, personal
  and sensitive data, permissions, user-directed transfers, security,
  retention, deletion, website hosting, and the health disclaimer.
- `data-safety.md`: respostas propostas para Segurança dos dados e declaração de saúde.
- `play-console-checklist.md`: estado dos itens que dependem do Google Play Console.

O e-mail público de suporte usado na política de privacidade é
`liftbook.support@gmail.com`, o mesmo valor de `SUPPORT_EMAIL` usado pelo app.
Como esta política é um HTML estático, mantenha as duas cópias sincronizadas ao
alterar o endereço.

O desenvolvedor aparece na política como `rabpaulodev`, em linha com o owner do
projeto no `app.json`. Antes de publicar, substitua esse texto pelo nome público
exato da conta verificada no Google Play Console caso ele seja diferente.

## Desenvolvimento e publicação do site

Requisitos: Node.js 20.19+ ou 22.12+ e npm.

```bash
npm install
npm run dev
```

Antes de publicar, gere e valide a versão de produção:

```bash
npm run build
npm run preview
```

O projeto está configurado para publicação automática no GitHub Pages. A cada
push na branch `main`, o workflow `.github/workflows/deploy-pages.yml` instala as
dependências, verifica o TypeScript, gera o build e publica a pasta `dist/`.

Antes do primeiro deploy, abra **Settings → Pages** no repositório e selecione
**GitHub Actions** em **Build and deployment → Source**. Também é possível
iniciar uma publicação manualmente pela aba **Actions**.

O build usa o caminho-base `/Liftbook-app/`, correspondente ao nome
atual do repositório. Se o repositório for renomeado ou passar a usar um domínio
personalizado, atualize a opção `base` em `vite.config.ts`.

O build é multipágina e inclui tanto a landing quanto
`privacy-policy/index.html`, sem exigir regras de fallback de SPA.

Após a publicação, a landing e a política estarão em:

- `https://rabpaulo.github.io/Liftbook-app/`
- `https://rabpaulo.github.io/Liftbook-app/privacy-policy/`

Cadastre a segunda URL no campo **Política de privacidade** do Play Console.

O host final deve usar HTTPS e manter a política em uma URL pública, ativa, sem
login, sem geobloqueio, não editável pelo visitante e em HTML — não PDF. Depois
da publicação, abra a URL em uma janela anônima e confirme que todos os textos,
ícones, fontes e links carregam sem autenticação.

A landing não contém formulário, analytics, cookies ou pixels. O JavaScript
gerado pelo Vite renderiza apenas a interface React no navegador. O provedor de
hospedagem ainda pode manter logs técnicos próprios; revise e identifique esse
provedor na política quando a hospedagem for escolhida.

Os textos respeitam os limites atuais do Google Play: 30 caracteres no nome,
80 na descrição curta, 4.000 na descrição completa e 500 nas notas da versão.

As capturas vieram do app real em um Samsung SM-G780F, sem dados fictícios ou
texto promocional sobreposto. As barras do sistema foram removidas e a interface
foi enquadrada sobre fundo preto em 1080 × 1920. A ordem preparada é:

1. gráfico de progresso de 1RM estimado;
2. biblioteca de exercícios com busca e categorias;
3. estatísticas de cardio por período;
4. peso corporal com média, tendência e histórico semanal.

As capturas exibem valores reais armazenados no aparelho. Confirme que o titular
autoriza a divulgação desses valores antes do envio público ao Google Play.

Referências oficiais:

- https://support.google.com/googleplay/android-developer/answer/9859152
- https://support.google.com/googleplay/android-developer/answer/9866151
- https://support.google.com/googleplay/android-developer/answer/9859348
