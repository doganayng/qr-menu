// 1. KATEGORİLER
const kategoriler = [
  { 
    ad: "Atıştırmalıklar",
    resim: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&auto=format&fit=crop&q=80"
  },
  { 
    ad: "Tatlılar", 
    resim: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=600&auto=format&fit=crop&q=80" 
  },
  {
    ad: "Soğuk Kahveler",
    resim: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&auto=format&fit=crop&q=80"
  },
  { 
    ad: "Sıcak Kahveler", 
    resim: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&auto=format&fit=crop&q=80" 
  },
  {
    ad: "Sıcak Çaylar",
    resim: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=600&auto=format&fit=crop&q=80"
  },
  {
    ad: "Soğuk İçecekler",
    resim: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid%3D"
  }
];

// 2. ÜRÜNLER
const urunler = [
  //  ATIŞTIRMALIKLAR
  { ad: "Klasik Sandviç", aciklama: "Krem peynir, zeytin ezmesi, acuka, domates, salatalık, beyaz peynir, marul.", fiyat: 140, kategori: "Atıştırmalıklar" },
  { ad: "Meze Sandviç", aciklama: "Amerikan salatası, soslu sosis, havuç tarator, mısırlı zeytin salatası, acuka, julyen.", fiyat: 190, kategori: "Atıştırmalıklar" },
  { ad: "Vegan Sandviç", aciklama: "Salatalık, domates, roka, maydanoz, yeşil soğan, dereotu.", fiyat: 120, kategori: "Atıştırmalıklar" },
  { ad: "Etobur Sandviç", aciklama: "Sosis, sucuk, salam, kaşar.", fiyat: 220, kategori: "Atıştırmalıklar" },
  { ad: "Patates Tava", aciklama: "Baharatlı çıtır patates kızartması.", fiyat: 140, kategori: "Atıştırmalıklar" },
  { ad: "Sosis Tabağı", aciklama: "Patates kızartması ile birlikte servis edilir.", fiyat: 200, kategori: "Atıştırmalıklar" },

  //  TATLILAR 
  { ad: "Belçika Çikolatalı Brownie", aciklama: "Yoğun lezzetli ılık brownie.", fiyat: 240, kategori: "Tatlılar" },
  { ad: "Sufle", aciklama: "Akışkan çikolatalı sıcak sufle.", fiyat: 220, kategori: "Tatlılar" },
  { ad: "San Sebastian", aciklama: "Karamelize yanık taze cheesecake.", fiyat: 200, kategori: "Tatlılar" },
  { ad: "Çikolatalı Cheesecake", aciklama: "Özel çikolata soslu.", fiyat: 210, kategori: "Tatlılar" },
  { ad: "Limonlu Cheesecake", aciklama: "Ferahlatıcı limon soslu.", fiyat: 210, kategori: "Tatlılar" },
  { ad: "Frambuazlı Cheesecake", aciklama: "Taze frambuaz soslu.", fiyat: 210, kategori: "Tatlılar" },
  { ad: "Magnolya", aciklama: "Taze meyveli krema ve bisküvi taneleri.", fiyat: 200, kategori: "Tatlılar" },

  // SOĞUK KAHVELER 
  { ad: "Iced Americano", aciklama: "Buzlu espresso ve su.", fiyat: 130, kategori: "Soğuk Kahveler" },
  { ad: "Iced Latte", aciklama: "Buzlu taze süt ve espresso.", fiyat: 150, kategori: "Soğuk Kahveler" },
  { ad: "Iced Vanilya Latte", aciklama: "Vanilya aromalı buzlu latte.", fiyat: 160, kategori: "Soğuk Kahveler" },
  { ad: "Iced Karamel Latte", aciklama: "Karamel şuruplu buzlu latte.", fiyat: 160, kategori: "Soğuk Kahveler" },
  { ad: "Iced Mocha", aciklama: "Çikolata soslu buzlu kahve.", fiyat: 180, kategori: "Soğuk Kahveler" },
  { ad: "Iced Karamel Mocha", aciklama: "Karamel ve çikolata aromalı buzlu kahve.", fiyat: 180, kategori: "Soğuk Kahveler" },
  { ad: "Iced White Chocolate Mocha", aciklama: "Beyaz çikolata soslu buzlu kahve.", fiyat: 190, kategori: "Soğuk Kahveler" },

  //  SICAK KAHVELER 
  { ad: "Türk Kahvesi", aciklama: "Geleneksel közde pişirilmiş lezzet.", fiyat: 110, kategori: "Sıcak Kahveler" },
  { ad: "Filtre Kahve", aciklama: "Taze çekilmiş harman kahve.", fiyat: 120, kategori: "Sıcak Kahveler" },
  { ad: "Menengiç Kahvesi", aciklama: "Geleneksel süte pişirilmiş menengiç.", fiyat: 130, kategori: "Sıcak Kahveler" },
  { ad: "Americano", aciklama: "Sıcak su ile inceltilmiş double espresso.", fiyat: 130, kategori: "Sıcak Kahveler" },
  { ad: "Latte", aciklama: "Köpürtülmüş sıcak süt ve espresso.", fiyat: 150, kategori: "Sıcak Kahveler" },
  { ad: "Vanilya Latte", aciklama: "Vanilya aromalı sıcak latte.", fiyat: 160, kategori: "Sıcak Kahveler" },
  { ad: "Karamel Latte", aciklama: "Karamel şuruplu sıcak latte.", fiyat: 160, kategori: "Sıcak Kahveler" },
  { ad: "Mocha", aciklama: "Çikolata ve sütlü sıcak kahve.", fiyat: 180, kategori: "Sıcak Kahveler" },
  { ad: "Karamel Mocha", aciklama: "Karamel ve çikolata soslu sıcak kahve.", fiyat: 180, kategori: "Sıcak Kahveler" },
  { ad: "White Chocolate Mocha", aciklama: "Beyaz çikolata soslu sıcak kahve.", fiyat: 190, kategori: "Sıcak Kahveler" },
  { ad: "Sıcak Çikolata", aciklama: "Yoğun ve kremsi sıcak çikolata.", fiyat: 160, kategori: "Sıcak Kahveler" },
  { ad: "Salep", aciklama: "Tarçın ikramlı geleneksel sıcak salep.", fiyat: 170, kategori: "Sıcak Kahveler" },

  //  SICAK ÇAYLAR 
  { ad: "Bardak Çay", aciklama: "Taze demlenmiş demlik çayı.", fiyat: 30, kategori: "Sıcak Çaylar" },
  { ad: "Fincan Çay", aciklama: "Büyük fincanda demlik çay.", fiyat: 50, kategori: "Sıcak Çaylar" },
  { ad: "Yeşil Çay", aciklama: "Dinlendirici aromatik yeşil çay.", fiyat: 60, kategori: "Sıcak Çaylar" },
  { ad: "Bitki Çayları", aciklama: "Mevsimlik harman bitki çayı seçenekleri.", fiyat: 60, kategori: "Sıcak Çaylar" },
  { ad: "Ihlamur", aciklama: "Bal ve limon ikramlı sıcak ıhlamur.", fiyat: 75, kategori: "Sıcak Çaylar" },

  //  SOĞUK İÇECEKLER
  { ad: "Su", aciklama: "", fiyat: 10, kategori: "Soğuk İçecekler" },
  { ad: "Maden Suyu", aciklama: "", fiyat: 15, kategori: "Soğuk İçecekler" },
  { ad: "Soda Çeşitleri", aciklama: "Limon, elma, karpuz, çilek.", fiyat: 25, kategori: "Soğuk İçecekler" },
  { ad: "Kola", aciklama: "", fiyat: 50, kategori: "Soğuk İçecekler" },
  { ad: "Fanta", aciklama: "", fiyat: 50, kategori: "Soğuk İçecekler" },
  { ad: "Limonata", aciklama: "", fiyat: 60, kategori: "Soğuk İçecekler" },
  { ad: "Portakal Suyu", aciklama: "", fiyat: 60, kategori: "Soğuk İçecekler" },
  { ad: "Milkshake Çeşitleri", aciklama: "Çikolata, vanilya, muz, oreo, çilek, karamel.", fiyat: 100, kategori: "Soğuk İçecekler" }
];

// 3. BASMA
const kategoriAlani = document.getElementById("kategoriler");
const menuAlani = document.getElementById("menu");

function kategorileriGoster() {
  kategoriAlani.innerHTML = "";
  kategoriler.forEach(k => {
    kategoriAlani.innerHTML += `
      <div class="kategori-kart" onclick="urunleriGoster('${k.ad}')">
        <img src="${k.resim}" alt="${k.ad}">
        <div class="overlay">
          <h3>${k.ad}</h3>
        </div>
      </div>
    `;
  });
}

function urunleriGoster(secilenKategori) {
  menuAlani.innerHTML = `<h2 style="font-size:1.1rem; color:#ea580c; margin-bottom:12px; text-align:center;">${secilenKategori}</h2>`;
  
  const filtreliUrunler = urunler.filter(u => u.kategori === secilenKategori);

  filtreliUrunler.forEach(u => {
    menuAlani.innerHTML += `
      <div class="urun">
        <div>
          <h3>${u.ad}</h3>
          <p>${u.aciklama || ''}</p>
        </div>
        <span class="fiyat">${u.fiyat} ₺</span>
      </div>`;
  });

  setTimeout(() => {
    menuAlani.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

kategorileriGoster();