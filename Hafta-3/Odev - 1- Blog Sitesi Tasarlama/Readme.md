# Blog Sitesi Projesi

Bu proje, HTML ve CSS kullanarak basit bir blog sitesi oluşturmayı amaçlamaktadır. Blog sitesi, bir ana sayfa ve en az bir blog gönderisi sayfası içermektedir.

## Proje Dosya Yapısı

- `index.html`: Ana sayfa
- `post.html`: Blog gönderisi sayfası
- `styles.css`: Stil dosyası

## Teknik Gereksinimler

- **HTML**: Yapısal belge işaretleme dili olarak HTML kullanılmıştır.
- **CSS**: Stil vermek için CSS kullanılmıştır.

## Fonksiyonel Gereksinimler

### Ana Sayfa (`index.html`)

- **Başlık**: Sayfanın başında büyük bir başlık (`<h1>`) bulunmaktadır.
- **Menü**: Ana sayfada, ana sayfaya ve blog gönderisi sayfasına yönlendiren bağlantılar (`<nav>` ve `<ul>` kullanarak) bulunmaktadır.
- **Son Gönderiler**: En az iki blog gönderisinin özeti (`<article>` kullanarak) listelenmektedir. Her özet, tam blog gönderisine bağlantı içermektedir.
- **Footer**: Sayfanın altında bir footer (`<footer>`) bulunmaktadır. İçinde telif hakkı bilgisi yer almaktadır.

### Blog Gönderisi Sayfası (`post.html`)

- **Başlık**: Sayfanın başında büyük bir başlık (`<h1>`) bulunmaktadır.
- **Menü**: Ana sayfaya ve blog gönderisi sayfasına yönlendiren bağlantılar (`<nav>` ve `<ul>` kullanarak) bulunmaktadır.
- **Blog İçeriği**: Tam blog gönderisi içeriği (`<article>` ve `<p>` kullanarak) görüntülenmektedir.
- **Footer**: Sayfanın altında bir footer (`<footer>`) bulunmaktadır. İçinde telif hakkı bilgisi yer almaktadır.

## Görsel Gereksinimler

- **Renk Paleti**:
  - Arka Plan: #f4f4f4
  - Başlık ve Footer: #333 (koyu gri)
  - Metin: #333 (başlıklar) ve #666 (paragraflar)
- **Yazı Tipi**: Arial, sans-serif
- **Diğer**:
  - Blog gönderisi özetleri ve içerikleri, beyaz arka plana sahip kartlar şeklinde (`<article>`) görüntülenmektedir.
  - Kartlar, gölge efekti (box-shadow) ve yuvarlatılmış köşeler (border-radius) içermektedir.
  - Menü bağlantıları ve başlık bağlantıları belirgin olup, ziyaret edildiğinde renk değiştirmemektedir.

## Kurulum ve Kullanım

1. Proje dosyalarını indirin veya klonlayın.
2. `index.html` dosyasını bir web tarayıcısında açarak ana sayfayı görüntüleyin.
3. Ana sayfadaki bağlantılarla blog gönderisi sayfasına (`post.html`) ulaşabilirsiniz.
4. `styles.css` dosyası ile projeye stil eklenmiştir.
