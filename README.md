# MP Services — Website institucional

Site estático, responsivo e em francês para MP Services, empresa de renovação atuante em Bruxelas e arredores.

**Site de demonstração:** https://sergiopacheco.github.io/mp-services/  
**Domínio oficial planejado:** https://www.mp-services.be/  
**Contato oficial:** +32 475 50 17 29 · info@mp-services.be

## Características da versão 2.0

- Design preto/grafite, dourado e branco, com logotipo SVG.
- Fotografias profissionais de inspiração, com autoria e licença documentadas em [IMAGE_CREDITS.md](IMAGE_CREDITS.md).
- Página inicial com seis serviços e oito exemplos de referência em uma galeria filtrável e ampliável.
- Comparador visual com aviso explícito de que **as imagens não são do mesmo trabalho**; pronto para substituir pelas fotografias autênticas de antes/depois.
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
  logo-dark.svg
  logo-light.svg
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
3. **Substituir o comparador ilustrativo** por duas imagens autênticas do mesmo local, antes e depois, quando disponíveis.
4. **Revisar as informações legais e de proteção de dados**, incluindo carregamento de fontes e fotos de serviços externos.
5. **Validar o website em navegadores móveis e desktop** e testar acessibilidade, desempenho e o fluxo de orçamento.

O código não inventa depoimentos, avaliações, prêmios, anos de experiência ou quantidade de obras. O formulário não salva dados: abre uma mensagem que o visitante pode revisar e enviar via WhatsApp.

## Licença das imagens

Fotografias de Unsplash sob a [licença Unsplash](https://unsplash.com/license), utilizadas apenas como referências visuais. Elas não são trabalhos executados pela MP Services. Os desenhos e elementos vetoriais do site foram produzidos especificamente para este projeto.
