# Blog Sitesi Projesi

Bu proje, HTML, CSS ve Bootstrap 4.6 kullanarak basit bir blog sitesi oluşturmayı amaçlamaktadır. Blog sitesi, bir ana sayfa ve bir blog gönderisi sayfasından oluşmaktadır. Ayrıca, Bootstrap ile jumbotron, grid sistemi ve kart yapıları kullanılmıştır.

## Proje Dosya Yapısı

- `index.html`: Ana sayfa
- `post.html`: Blog gönderisi sayfası
- `styles.css`: Stil dosyası

## Teknik Gereksinimler

- **HTML**: Yapısal belge işaretleme dili olarak HTML kullanılmıştır.
- **CSS**: Stil vermek için CSS kullanılmıştır.
- **Bootstrap 4.6**: Tasarım ve yapılandırma için Bootstrap 4.6 kullanılmıştır.

## Yenilikler ve Özellikler

### Ana Sayfa (`index.html`)

- **Başlık**: Sayfanın başında büyük bir başlık (`<h1>`) bulunmaktadır.
- **Menü**: Ana sayfada, ana sayfaya ve blog gönderisi sayfasına yönlendiren bağlantılar (`<nav>` ve `<ul>` kullanarak) bulunmaktadır. Menü, koyu renkli ve arka plan rengiyle tasarlandı.
- **Jumbotron**: Ana sayfada büyük bir jumbotron bölümü eklendi. Jumbotron, blog sitesinin tanıtımını yapmak için kullanılıyor.
- **Son Gönderiler**: Grid sistemi içinde Bootstrap kart yapısını kullanarak en az iki blog gönderisinin özeti (`<article>` kullanarak) listelenmektedir. Her özet, tam blog gönderisine bağlantı içermektedir.
- **Footer**: Sayfanın altında bir footer (`<footer>`) bulunmaktadır. İçinde telif hakkı bilgisi yer almaktadır.

### Blog Gönderisi Sayfası (`post.html`)

- **Başlık**: Sayfanın başında büyük bir başlık (`<h1>`) bulunmaktadır.
- **Menü**: Ana sayfaya ve blog gönderisi sayfasına yönlendiren bağlantılar (`<nav>` ve `<ul>` kullanarak) bulunmaktadır.
- **Blog İçeriği**: Tam blog gönderisi içeriği (`<article>` ve `<p>` kullanarak) görüntülenmektedir.
- **Footer**: Sayfanın altında bir footer (`<footer>`) bulunmaktadır. İçinde telif hakkı bilgisi yer almaktadır.

## Görsel Gereksinimler

- **Renk Paleti**:
  - Arka Plan: `#f4f4f4`
  - Başlık ve Footer: `#333` (koyu gri)
  - Metin: `#333` (başlıklar) ve `#666` (paragraflar)
- **Yazı Tipi**: Arial, sans-serif
- **Diğer**:
  - Blog gönderisi özetleri ve içerikleri, beyaz arka plana sahip kartlar şeklinde (`<article>`) görüntülenmektedir.
  - Kartlar, gölge efekti (box-shadow) ve yuvarlatılmış köşeler (border-radius) içermektedir.
  - Menü bağlantıları ve başlık bağlantıları belirgin olup, ziyaret edildiğinde renk değiştirmemektedir.
  - Jumbotron, tanıtım metni ve başlık için büyük yazı tipleri ve dikkat çekici bir arka plan rengi içerir.

## Kurulum ve Kullanım

1. Proje dosyalarını indirin veya klonlayın:

   ```bash
   git clone https://github.com/barismutluu/Patika_Front_End_Bootcamp.git
   ```

2. Proje klasörüne gidin:

   ```bash
   cd blog-sitesi
   ```

3. `index.html` veya `post.html` dosyasını bir web tarayıcısında açarak sayfaları görüntüleyin.

4. **Bootstrap 4.6**: Bootstrap CSS ve JavaScript dosyalarını projeye dahil etmek için internet bağlantınızın olması gerekmektedir.

## Kullanılan Kaynaklar

- [Bootstrap 4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Font Awesome](https://fontawesome.com/) (Opsiyonel, ekstra ikonlar için kullanılabilir.)
