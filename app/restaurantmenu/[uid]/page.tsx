"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import styles from "./menu.module.css";

export default function MenuPage() {
  const params = useParams();
  const uid = Array.isArray(params.uid) ? params.uid[0] : params.uid;

  const [groupedItems, setGroupedItems] = useState<Record<string, any[]>>({});
  const [country, setCountry] = useState<string | null>(null);

  const categoryTranslations: Record<string, string> = {
    "Appetizers & Light Bites": "Aperatifler",
    "Signature Mains": "Ana Yemekler",
    "Elegant Desserts": "Tatlılar",
    "Beverages & Refreshments": "İçecekler",
    "Artisan Bites": "El Yapımı Atıştırmalıklar",
    "Breakfast & Brunch": "Kahvaltı & Brunch",
    "Light Plates & Salads": "Hafif Tabaklar & Salatalar",
    "Signature Plates": "Özel Tabağı",
    "Specialty Drinks": "Özel İçecekler",
    "Homemade Sweets": "Ev Yapımı Tatlılar",
    Other: "Diğer",
  };

  const translateCategory = (key: string): string =>
    categoryTranslations[key] || key;

  const getCategoryIcon = (category: string): string => {
    switch (category) {
      case "Appetizers & Light Bites":
        return "🫒";
      case "Signature Mains":
        return "🍽️";
      case "Elegant Desserts":
        return "🍰";
      case "Beverages & Refreshments":
        return "🍷";
      case "Artisan Bites":
        return "🧀";
      case "Breakfast & Brunch":
        return "🍳";
      case "Light Plates & Salads":
        return "🥗";
      case "Signature Plates":
        return "🍽️";
      case "Specialty Drinks":
        return "☕";
      case "Homemade Sweets":
        return "🍰";
      default:
        return "📦";
    }
  };

  const getCategoryDescription = (category: string): string => {
    switch (category) {
      case "Appetizers & Light Bites":
        return "Yemeğe zarif bir başlangıç için hafif ve iştah açıcı tatlar.";
      case "Signature Mains":
        return "Ustalıkla hazırlanmış doyurucu ve özenli ana yemek seçenekleri.";
      case "Elegant Desserts":
        return "Yemeğinizi şık bir şekilde tamamlayan tatlı dokunuşlar.";
      case "Beverages & Refreshments":
        return "Yemeklerinizi tamamlayacak ferahlatıcı içecek alternatifleri.";
      case "Artisan Bites":
        return "El yapımı atıştırmalık lezzetler.";
      case "Breakfast & Brunch":
        return "Güne lezzetli bir başlangıç için kahvaltı ve brunch seçenekleri.";
      case "Light Plates & Salads":
        return "Hafif tabaklar ve taze salatalar.";
      case "Signature Plates":
        return "Restoranın özel tariflerinden oluşan ana yemekler.";
      case "Specialty Drinks":
        return "Özel tariflerle hazırlanmış içecekler.";
      case "Homemade Sweets":
        return "Ev yapımı tatlılar ile günü tatlandırın.";
      default:
        return "Kategori açıklaması bulunamadı.";
    }
  };

  useEffect(() => {
    const fetchItems = async () => {
      if (!uid) return;

      try {
        const userDocRef = doc(db, "RestaurantMenu", uid);
        const userDocSnap = await getDoc(userDocRef);

        if (!userDocSnap.exists()) {
          setGroupedItems({});
          return;
        }

        const defaultCountry = userDocSnap.data().defaultCountry ?? "Turkey";
        setCountry(defaultCountry);

        const colRef = collection(db, "RestaurantMenu", uid, defaultCountry);
        const snap = await getDocs(colRef);

        const docs = snap.docs.map((doc) => {
          const data = doc.data() as {
            name: string;
            price: number;
            photo: string;
            category?: string;
            dateOfCreation?: any;
          };

          return {
            ...data,
            dateOfCreation: data.dateOfCreation?.toDate?.() ?? new Date(0),
          };
        });

        const grouped = docs.reduce((acc: Record<string, any[]>, item) => {
          const category = item.category || "Other";
          if (!acc[category]) acc[category] = [];
          acc[category].push(item);
          return acc;
        }, {});

        Object.keys(grouped).forEach((category) => {
          grouped[category].sort(
            (a, b) => b.dateOfCreation - a.dateOfCreation
          );
        });

        setGroupedItems(grouped);
      } catch (err) {
        console.error("Veri alınırken hata:", err);
        setGroupedItems({});
      }
    };

    fetchItems();
  }, [uid]);

  const categoryNames = Object.keys(groupedItems);

  if (categoryNames.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Menü bulunamadı</h1>
          <p>Bu kullanıcıya ait ürün kaydı yok.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{country} Menüsü</h1>
        <p>Kategorilere ayrılmış en güncel ürünler</p>
      </div>

      {categoryNames.map((category, index) => (
        <div key={index} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            <span className={styles.categoryIcon}>
              {getCategoryIcon(category)}
            </span>
            {translateCategory(category)}
          </h2>
          <p className={styles.categoryDescription}>
            {getCategoryDescription(category)}
          </p>

          <div className={styles.menuGrid}>
            {Array.isArray(groupedItems[category]) &&
              groupedItems[category].map((item, i) => (
                <div key={i} className={styles.menuCard}>
                  <div className={styles.menuImageContainer}>
                    <img
                      src={item.photo}
                      alt={item.name}
                      className={styles.menuImage}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{item.name}</h3>
                    <p className={styles.price}>{item.price} ₺</p>
                    <p className={styles.description}>
                      Eklenme:{" "}
                      {item.dateOfCreation.toLocaleDateString("tr-TR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
