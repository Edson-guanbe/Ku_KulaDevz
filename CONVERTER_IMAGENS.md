# Conversão de Imagens para WebP

## Opção 1: Ferramenta Online (Mais Fácil)
1. Acesse: https://convertio.co/jpg-webp/
2. Faça upload das imagens JPG da pasta `public/images/team/`
3. Baixe as versões WebP
4. Substitua os arquivos JPG pelos WebP na pasta

## Opção 2: Usando ImageMagick (Se instalado)
```bash
# Instalar ImageMagick primeiro
# Depois executar na pasta public/images/team/:
magick andre-augusto.jpg andre-augusto.webp
magick anselma-tiburcio.jpg anselma-tiburcio.webp
magick anselmoDora.jpg anselmoDora.webp
magick aquiliviomaria.jpg aquiliviomaria.webp
magick edsonGuambe.jpg edsonGuambe.webp
magick edilson-ricardo.jpg edilson-ricardo.webp
magick isidro-guimba.jpg isidro-guimba.webp
magick shelton-crimildo.jpg shelton-crimildo.webp
```

## Opção 3: Usando cwebp (Google WebP Tools)
```bash
# Instalar Google WebP tools primeiro
# Depois executar na pasta public/images/team/:
cwebp -q 80 andre-augusto.jpg -o andre-augusto.webp
cwebp -q 80 anselma-tiburcio.jpg -o anselma-tiburcio.webp
cwebp -q 80 anselmoDora.jpg -o anselmoDora.webp
cwebp -q 80 aquiliviomaria.jpg -o aquiliviomaria.webp
cwebp -q 80 edsonGuambe.jpg -o edsonGuambe.webp
cwebp -q 80 edilson-ricardo.jpg -o edilson-ricardo.webp
cwebp -q 80 isidro-guimba.jpg -o isidro-guimba.webp
cwebp -q 80 shelton-crimildo.jpg -o shelton-crimildo.webp
```

## Arquivos que precisam ser convertidos:
- andre-augusto.jpg → andre-augusto.webp
- anselma-tiburcio.jpg → anselma-tiburcio.webp
- anselmoDora.jpg → anselmoDora.webp
- aquiliviomaria.jpg → aquiliviomaria.webp
- edsonGuambe.jpg → edsonGuambe.webp
- edilson-ricardo.jpg → edilson-ricardo.webp
- isidro-guimba.jpg → isidro-guimba.webp
- shelton-crimildo.jpg → shelton-crimildo.webp

## Benefícios do WebP:
- Arquivos 25-35% menores que JPG
- Melhor qualidade com menor tamanho
- Carregamento mais rápido do site
- Melhor SEO e performance