# Ödev 3 - Rehber Web Sitesi Oluşturma

Bu proje, HTML5 ve temel CSS kullanarak bir rehber web sitesi oluşturmayı amaçlamaktadır. Aşağıda, sitenin genel yapısı ve içerik gereksinimleri detaylandırılmıştır.

## İçindekiler

1. [Genel Yapı](#genel-yapı)
2. [Navigasyon Menüsü](#navigasyon-menüsü)
3. [Ana Sayfa (index.html)](#ana-sayfa-indexhtml)
4. [Hakkında Sayfası (hakkinda.html)](#hakkında-sayfası-hakkindahtml)
5. [Servisler Sayfası (servisler.html)](#servisler-sayfası-servislerhtml)
6. [İletişim Sayfası (iletisim.html)](#iletişim-sayfası-iletisimhtml)

## Genel Yapı

Web sitesinin temel yapısını oluşturmak için HTML5 doküman yapısını kullanın. Her sayfa şu öğeleri içermelidir:

- Sayfanın başlığı (`<title>`)
- Karakter seti (`<meta charset="UTF-8">`)

Ana sayfa (index.html) ve en az üç alt sayfa (örneğin, hakkinda.html, iletisim.html, servisler.html) oluşturulmalıdır.

## Navigasyon Menüsü

Her sayfanın en üstünde, diğer sayfalara bağlantılar içeren bir navigasyon menüsü oluşturun. Menüde en az dört bağlantı (`<a>`) olmalıdır:

- Ana Sayfa
- Hakkında
- Servisler
- İletişim

## Ana Sayfa (index.html)

Ana sayfada web sitenizin amacını belirten bir ana başlık (`<h1>`) olmalıdır. Ayrıca şu içerikleri ekleyin:

- Birkaç paragraf (`<p>`) içeren bir tanıtım metni
- En az bir görsel (`<img>`) ve alt özniteliği
- Önemli noktaları veya hizmetleri listelemek için en az bir sıralı liste (`<ol>`) veya sırasız liste (`<ul>`)

## Hakkında Sayfası (hakkinda.html)

Bu sayfa şirketiniz veya kendiniz hakkında bilgi vermelidir. İçeriği:

- Bir başlık (`<h2>`)
- Birkaç paragraf (`<p>`)
- Kuruluş tarihleri veya önemli olaylar için sıralı liste (`<ol>`)

## Servisler Sayfası (servisler.html)

Bu sayfa sunulan hizmetleri listelemelidir. İçeriği:

- Her hizmet için bir başlık (`<h2>`) ve açıklayıcı bir paragraf (`<p>`)
- Hizmetleri tanımlamak için sırasız liste (`<ul>`)

## İletişim Sayfası (iletisim.html)

Bu sayfa iletişim bilgilerini içermelidir. İçeriği:

- Bir başlık (`<h2>`)
- Bir paragraf (`<p>`) içeren iletişim bilgileri
- İletişim bilgileri (adres, telefon, e-posta) için bir sırasız liste (`<ul>`)
- Bir iletişim formu (`<form>`), formda ad, e-posta ve mesaj alanları olmalıdır. (Formu işlemek için herhangi bir arka uç dili gerekmiyor, sadece HTML kullanın)
