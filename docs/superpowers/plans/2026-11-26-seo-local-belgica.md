# SEO Local Bélgica Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Tornar o site MP Services tecnicamente consistente para indexação e preparado para descoberta local em Bruxelas e arredores.

**Architecture:** Site estático sem build, publicado no Cloudflare Pages. As correções serão feitas diretamente nos HTML, sitemap, robots e headers existentes, preservando o idioma francês (`fr-BE`) e a versão canônica `www`.

**Tech Stack:** HTML estático, JSON-LD Schema.org, XML Sitemap, Cloudflare Pages headers.

**Spec:** Plano derivado da auditoria do site publicado e da solicitação de preparação SEO para a Bélgica.

## Global Constraints

- Não inventar endereço, horários, avaliações, certificações ou obras reais.
- Manter `https://www.mp-services.be/` como origem canônica.
- Não criar páginas locais artificiais sem conteúdo específico e verificável.
- Não alterar DNS, Google Business Profile ou ferramentas externas sem acesso/autorização.

## Review Focus

- URLs com e sem `.html` não podem competir entre si; sitemap e canonical devem apontar para a mesma URL.
- Dados estruturados não podem conter endereço ou horário desconhecidos.
- Links relativos devem continuar funcionando em páginas profundas.
- `robots.txt` e sitemap devem permanecer acessíveis publicamente.
- O conteúdo precisa continuar coerente com a transparência sobre imagens ilustrativas.

### Task 1: Canonical URLs and sitemap

**Files:**
- Modify: `sitemap.xml`
- Modify: `services/*.html`

- [ ] Atualizar sitemap e URLs canônicas para a forma publicada sem `.html`, preservando os redirects existentes.
- [ ] Verificar que cada URL listada responde com status 200 e canonical idêntica.

### Task 2: Local SEO metadata and structured data

**Files:**
- Modify: `index.html`
- Modify: `services/*.html`

- [ ] Enriquecer o JSON-LD existente com `image`, `sameAs`, `areaServed` e catálogo de serviços somente com informações já presentes no site.
- [ ] Revisar títulos, descrições e Open Graph das páginas para intenção de busca em francês em Bruxelas.
- [ ] Verificar que cada página indexável tem `lang="fr-BE"`, title, description e canonical.

### Task 3: Crawl and deployment validation

**Files:**
- Verify: `robots.txt`, `sitemap.xml`, `_headers`

- [ ] Validar sintaxe XML, presença de todas as rotas públicas e ausência de bloqueios indevidos.
- [ ] Consultar as versões publicadas com HTTP e navegador, incluindo recursos e console.
- [ ] Registrar pendências externas: Search Console, Bing Webmaster Tools, Google Business Profile, DNS/DMARC e correção do apex sem `www`.
