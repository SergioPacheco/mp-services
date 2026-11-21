# MP Services — Website institucional

Site estático, responsivo e em francês para MP Services, empresa de renovação atuante em Bruxelas e arredores.

**Site de demonstração:** https://sergiopacheco.github.io/mp-services/  
**Domínio oficial planejado:** https://www.mp-services.be/  
**Contato oficial:** +32 475 50 17 29 · info@mp-services.be

## Correção de qualidade das imagens (HD)

O antigo atlas `assets/portfolio-ia.webp` de aproximadamente 13 KB foi desativado porque sua compressão tornava as dez imagens muito pixeladas. A galeria padrão Unsplash fica visível enquanto as versões HD não estiverem publicadas.

**Publicação do arquivo HD:** na pasta `assets/` do GitHub, faça upload do arquivo `mp-portfolio-hd.zip` (disponibilizado nesta conversa). O workflow `.github/workflows/import-portfolio-hd.yml` extrai as dez imagens originais WebP, com **1448 × 1086 pixels cada**, cria os arquivos `assets/<serviço>-avant.webp` e `assets/<serviço>-apres.webp`, e efetua commit. O JavaScript `assets/portfolio.js` verifica carregamento e largura mínima de 700 px antes de exibir cada comparador.

O ZIP contém **simulações geradas por IA**, não obras reais executadas pela empresa.

## Versão atual — serviços e comparações por IA

A página inicial prioriza os seis serviços, mantém **Tim apenas no hero e na seção de contato**, e oferece acesso direto ao WhatsApp. O conteúdo redundante foi reduzido para uma leitura mais rápida, inclusive em celulares.

- **Cinco comparadores antes/depois deslizantes**: Gyproc, pintura, parquet, carrelage e renovação.
- Imagens são **simulações geradas por inteligência artificial**, nunca obras atribuídas à MP Services.
- As imagens de alta resolução são carregadas individualmente em `assets/<serviço>-avant.webp` e `assets/<serviço>-apres.webp`. O código está em `assets/portfolio.css` e `assets/portfolio.js`.
- Os comparadores também aparecem nas páginas individuais dos cinco serviços.
- O componente espera a imagem carregar antes de aparecer; se ela falhar, a galeria fotográfica anterior é exibida.
- Em todos os comparadores, usuários podem mover a divisão usando mouse, toque ou teclado.
- O formulário continua opcional: o contato direto com WhatsApp está disponível separadamente.

## Características da versão 2.0

- Design preto/grafite, dourado e branco, com logotipo oficial extraído do material do cliente.
- Fotografias profissionais de inspiração, com autoria e licença documentadas em [IMAGE_CREDITS.md](IMAGE_CREDITS.md).
- Página inicial com seis serviços e cinco comparações IA antes/depois; fotos Unsplash disponíveis como fallback.
- Comparadores de simulação por IA são exibidos como inspiração, sem qualquer atribuição a obras reais.
- Seis páginas de SEO local: Gyproc, pintura, parquet, carrelage, renovação e limpeza.
- Menu mobile, imagens responsivas, formulário de orçamento via WhatsApp, FAQ e sitemap.
- Página de informações legais provisória com aviso de dados empresariais pendentes de validação.

## Teste local

Não é necessário instalar Node.js nem usar `npm`.

```bash
git clone https://github.com/SergioPacheco/mp-services.git
cd mp-services
python3 -m http.server 8080
```

Abra **http://localhost:8080/** no navegador. Se já clonou:

```bash
git pull origin main
python3 -m http.server 8080
```

**Importante:** o servidor deve ser executado no diretório que contém `index.html`. As fotos são carregadas de `images.unsplash.com` e precisam de conexão à internet. Os SVGs ilustrativos locais servem de fallback quando as imagens externas falham.

## Hospedagem — GitHub Pages

Configuração do repositório:

- Settings → Pages → Deploy from a branch
- Branch: `main` · Folder: `/(root)`
- Endereço esperado: https://sergiopacheco.github.io/mp-services/

Qualquer commit em `main` aciona um novo deploy, desde que Pages permaneça ativo.

## Hospedagem — Cloudflare Pages (opcional)

Pode ser publicada a mesma base sem ferramenta de build:

- Conectar o repositório `SergioPacheco/mp-services`
- Framework preset: `None`
- Build command: vazio
- Output directory: `.`

Após a publicação, configure `www.mp-services.be` e o DNS conforme o provedor.

## Estrutura

```text
index.html
mentions-legales.html
services/
  gyproc.html
  peinture.html
  parquet.html
  carrelage.html
  renovation.html
  nettoyage.html
assets/
  site.css
  site.js
  logo-oficial.webp  # recorte otimizado da arte oficial fornecida pela empresa
  favicon.svg
  ... SVGs de fallback
robots.txt
sitemap.xml
.nojekyll
IMAGE_CREDITS.md
```

## Pendências antes de divulgar comercialmente

1. **Validar identidade legal**: nome empresarial exato, forma jurídica, endereço do estabelecimento/sede, número BCE/TVA e demais informações obrigatórias para a Bélgica. Não publicar valores copiados de artes antigas sem confirmação.
2. **Substituir exemplos ilustrativos por obras reais** fotografadas e autorizadas, com localização e descrição verificadas.
3. **Criar uma segunda galeria de obras verificadas** quando forem disponibilizadas fotos autênticas do mesmo local, antes e depois.
4. **Revisar as informações legais e de proteção de dados**, incluindo carregamento de fontes e fotos de serviços externos.
5. **Validar o website em navegadores móveis e desktop** e testar acessibilidade, desempenho e o fluxo de orçamento.

O código não inventa depoimentos, avaliações, prêmios, anos de experiência ou quantidade de obras. O formulário não salva dados: abre uma mensagem que o visitante pode revisar e enviar via WhatsApp.

## Licença das imagens

Fotografias de Unsplash sob a [licença Unsplash](https://unsplash.com/license), utilizadas apenas como referências visuais. Elas não são trabalhos executados pela MP Services. Os desenhos e elementos vetoriais do site foram produzidos especificamente para este projeto.

## Identidade visual oficial

O logotipo do cabeçalho, do rodapé e o ícone da página usam `assets/logo-oficial.webp`, obtido por recorte e compressão WebP da arte original fornecida pelo cliente (`post(1).jpg`). O símbolo, as letras e as cores não foram redesenhados. No rodapé, o logo mantém seu fundo branco dentro de um cartão claro. Para peças impressas, usar preferencialmente o arquivo original em resolução maior.
