'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  useEffect(() => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      heroContent.style.opacity = '1';
    }
  }, []);

  const faqs = [
    { q: 'Kapırtı’yı kullanmak ücretli mi?', a: 'Hayır, tüm temel özellikler tamamen ücretsizdir.' },
    { q: 'Menüleri kim çeviriyor?', a: 'Uygulama çevirileri otomatik yapar, dil algılamasıyla turistlere doğru dilde gösterir.' },
    { q: 'QR kod nasıl alınır?', a: 'Kapırtı\'ya kaydolup işletme bilgilerinizi ve menünüzü oluşturduktan sonra, işletmenize özel bir QR kod otomatik olarak oluşturulur. Bu QR kodu kolayca indirip yazdırabilir ve masalarınıza, kapınıza veya dilediğiniz yere yapıştırarak müşterilerinizin erişimine sunabilirsiniz.' },
  ];

  return (
    <div>
      
      {/* Hero Section */}
      <section className="hero-section" id="hero">
        <div className="hero-content">
          <h1>Restoranınızın Menüsü, Dünyanın Her Dilinde!</h1>
          <p>Kapırtı ile menünüzü dijitalleştirin, görsellerle ve 170 dilde herkese ulaştırın. Üstelik tamamen ücretsiz!</p>
          <div className="hero-buttons">
            <Link href="https://play.google.com/store/apps/details?id=com.kapirti.video_food_delivery_shopping&hl=tr&pli=1" className="btn primary-btn">Uygulamayı İndir</Link>
            <Link href="#how-it-works" className="btn secondary-btn">Nasıl Çalışır?</Link>
          </div>
          <p className="hero-subtext">Kapırtı ile menünüzü dijitalleştirin, görsellerle ve 170 dilde herkese ulaştırın. Üstelik tamamen ücretsiz!</p>
        </div>

        <div className="hero-ad-card">
          <div className="hero-image-wrapper">
            <Image
              src="/giris.png"
              alt="Giriş Sayfası Görseli"
              fill
              className="hero-main-image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>


      {/* Kapırtı Nedir Section - Bu bölümde görsel yoktu, eklenmedi. */}
      <section className="kapirti-nedir-section" id="kapirti-nedir">
        <div className="container">
          <h2>İşletmenizin Yeni Dijital Vitrini</h2>
          <div className="content-wrapper">
            <div className="text-content">
              <p>Kapırtı, restoran ve kafe işletmeleri için modern bir menü çözümüdür. Menülerinizi dakikalar içinde oluşturun, QR kodu ile müşterilerinize sunun. Menülerinizi zengin görseller, alerjen/vegan bilgilerle ve çok dilli destekle herkesin anlayabileceği hale getirin.</p>
            </div>
            <div className="ad-card">
              <div className="ad-card-content">
                <h3>Dijital Vitrini: Restoranınızın her zaman göz önünde.</h3>
                <ul className="ad-features">
                  <li><span className="globe-icon">🌐</span> 170 Dilde Online Menü</li>
                  <li><span className="location-icon">📍</span> Lokasyon ve İletişim Bilgileri</li>
                  <li><span className="clock-icon">⏰</span> Hızlı ve Kolay Kullanılabilirlik</li>
                  <li><span className="star-icon">⭐</span> Bilinirlik Artışı</li>
                  <li><span className="ticket-icon">🎟️</span> Elite Keyfini Ömür Boyu Yaşat</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Kapırtı Section */}
      <section className="features-section" id="features">
        <div className="container">
          <h2>Neden Kapırtı?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🌐</span>
              <h3>170 Dilde Otomatik Çeviri</h3>
              <p>Her turist kendi dilinde menünüzü okur, dil bariyerleri ortadan kalkar.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📸</span>
              <h3>Zengin Görseller</h3>
              <p>Menülerinize iştah açıcı, yüksek çözünürlüklü fotoğraflar ekleyerek müşterilerinizi cezbedin.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🍽️</span>
              <h3>Alerjen ve Diyet Filtreleri</h3>
              <p>Vegan, vejetaryen, glütensiz gibi alerjen ve diyet bilgilerini şeffaf bir şekilde sunun.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⭐</span>
              <h3>Gerçek Ziyaretçi Yorumları</h3>
              <p>Kapırtı kullanıcıları deneyimlerini paylaşır, işletmenizin prestiji artar.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📍</span>
              <h3>Adres, Konum ve İletişim</h3>
              <p>İşletmenizin tüm iletişim bilgilerini, konumunu ve çalışma saatlerini bir arada sunun.</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💸</span>
              <h3>Tamamen Ücretsiz</h3>
              <p>Kapırtı'ya ücretsiz kayıt olun, tüm temel özelliklerden faydalanmaya hemen başlayın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section" id="how-it-works">
        <div className="container">
          <h2>3 Kolay Adımda Dijital Menü</h2>
          <div className="steps-container">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Kayıt Olun</h3>
              <p>İşletme bilgilerinizi saniyeler içinde girerek Kapırtı dünyasına adım atın.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Menünüzü Oluşturun</h3>
              <p>Ürünlerinizi kolayca ekleyin, iştah açıcı fotoğraf ve detaylı bilgilerle zenginleştirin.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>QR Kodunuzu Paylaşın</h3>
              <p>Oluşturulan QR kodu masalarınıza yapıştırın, menünüz müşterileriniz için erişime hazır!</p>
            </div>
          </div>
          <div className="how-it-works-image">
            {/* INLINE STİLİ KALDIRIP SADECE SINIF KULLANIYORUZ */}
            <div className="how-it-works-image-wrapper"> {/* Yeni bir sınıf eklendi */}
              <Image src="/photo2.png" alt="Nasıl Çalışır Görseli" fill className="how-it-works-main-image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <h2>Kapırtı’ya Güvenen İşletmeler</h2>
          <p className="section-description">Türkiye’den Tayland’a, Kapırtı’yı kullanan işletmelerin yorumları ve başarı hikayeleri.</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              {/* INLINE STİLİ KALDIRIP SADECE SINIF KULLANIYORUZ */}
              <div className="restaurant-logo-wrapper"> {/* Yeni bir sınıf eklendi */}
                <Image src="/restoran1.webp" alt="Lezzetli Durak Logosu" className="restaurant-logo" fill sizes="90px" />
              </div>
              <blockquote>"Kapırtı sayesinde menümüzü güncel tutmak çok kolaylaştı ve yabancı müşterilerimizden harika geri dönüşler alıyoruz. Gerçekten işimizi büyüttü!"</blockquote>
              <span className="author">- Ayşe Yılmaz, Lezzetli Durak Restoranı Sahibi</span>
            </div>
            <div className="testimonial-card">
              {/* INLINE STİLİ KALDIRIP SADECE SINIF KULLANIYORUZ */}
              <div className="restaurant-logo-wrapper"> {/* Yeni bir sınıf eklendi */}
                <Image src="/restoran2.webp" alt="Şehrin Tadı Logosu" className="restaurant-logo" fill sizes="90px" />
              </div>
              <blockquote>"Dijital menüye geçmek istediğimizde Kapırtı en hızlı ve ücretsiz çözüm oldu. Menüye fotoğraf ekleme özelliği sayesinde satışlarımız arttı."</blockquote>
              <span className="author">- Mehmet Demir, Şehrin Tadı Cafe Yöneticisi</span>
            </div>
            <div className="testimonial-card">
              {/* INLINE STİLİ KALDIRIP SADECE SINIF KULLANIYORUZ */}
              <div className="restaurant-logo-wrapper"> {/* Yeni bir sınıf eklendi */}
                <Image src="/restoran3.jpeg" alt="Deniz Manzarası Logosu" className="restaurant-logo" fill sizes="90px" />
              </div>
              <blockquote>"Özellikle turistik bölgemiz için çok dilli menü olmazsa olmazdı. Kapırtı bu ihtiyacımızı mükemmel bir şekilde karşıladı."</blockquote>
              <span className="author">- Zeynep Can, Deniz Manzarası Balık Restaurantı</span>
            </div>
          </div>
          <div className="testimonial-main-image">
            {/* INLINE STİLİ KALDIRIP SADECE SINIF KULLANIYORUZ */}
            <div className="testimonial-main-image-wrapper"> {/* Yeni bir sınıf eklendi */}
              <Image src="/photo1.png" alt="Testimonials Görseli" fill className="testimonial-full-image" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq">
        <div className="container">
          <h2>Merak Ettikleriniz</h2>
          <div className="faq-accordion">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${activeFaq === index ? 'active' : ''}`}>
                <div
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  role="button"
                  tabIndex={0}
                  aria-controls={`faq-answer-${index}`}
                  aria-expanded={activeFaq === index}
                >
                  {faq.q}
                </div>
                <div
                  id={`faq-answer-${index}`}
                  className={`faq-answer ${activeFaq === index ? 'open' : ''}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={activeFaq !== index}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2>Uygulamamızı Hemen İndirin, Hemen Kullanın!</h2>
          <p>Dakikalar içinde dijital menünüz hazır. Müşterilerinizle daha etkili iletişim kurun, satışlarınızı artırın ve Kapırtı'nın sunduğu tüm avantajlardan yararlanın.</p>
          <div className="cta-buttons">
            <a href="https://play.google.com/store/apps/details?id=com.kapirti.video_food_delivery_shopping&hl=tr&pli=1" className="app-download-btn google-play-btn">
              <i className="fab fa-google-play"></i> Google Play
            </a>
            <a href="mailto:kapirtisprt@gmail.com" className="app-download-btn secondary-btn">Bize Ulaşın</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <h3>Kapırtı</h3>
            <p>Dijital menülerde lider çözümünüz.</p>
          </div>
          <div className="footer-links">
            <h4>Hızlı Linkler</h4>
            <ul>
              <li><a href="#kapirti-nedir">Kapırtı Nedir?</a></li>
              <li><a href="#features">Özellikler</a></li>
              <li><a href="#how-it-works">Nasıl Çalışır?</a></li>
              <li><a href="#testimonials">Deneyimler</a></li>
              <li><a href="#faq">SSS</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Bizi Takip Edin</h4>
            <div className="social-icons">
              <a href="https://www.youtube.com/@Kapirti" target='_blank' rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
              <a href="https://www.instagram.com/farklidillerdeonlinemenu/#" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="footer-contact">
            <h4>İletişim</h4>
            <p>Email: kapirtisprt@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Kapırtı. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}