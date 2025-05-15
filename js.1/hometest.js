document.addEventListener("DOMContentLoaded", function () {
    // Sidebar ve toggle elemanlarını seçiyoruz
    const sidebar = document.getElementById("sidebar");
    const sidebarToggle = document.getElementById("sidebarToggle");
    const mainContent = document.querySelector("main");

    // Sidebar toggle event listener
    sidebarToggle.addEventListener("click", () => {
        sidebar.classList.toggle("hidden"); // Sidebar'a "hidden" sınıfını ekle veya kaldır
        mainContent.classList.toggle("collapsed"); // İçeriği sola kaydır veya eski haline getir
    });

    // Sidebar Menüler ve İçerikler
    const menuItems = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".content-section");

    // Menü tıklama olayları
    menuItems.forEach(menu => {
        menu.addEventListener("click", (e) => {
            e.preventDefault();

            // Eğer Sign Out'a tıklandıysa, ana sayfaya yönlendir
            if (menu.textContent.trim() === "Sign Out") {
                window.location.href = "index.html"; // Ana sayfanızın dosya yolu
                return;
            }

            // Aktif menü sınıfını ayarla
            menuItems.forEach(item => item.classList.remove("active"));
            menu.classList.add("active");

            // Tüm içerikleri gizle
            contentSections.forEach(section => {
                section.style.display = "none";
            });

            // Tıklanan menüye ait içeriği göster
            const sectionId = menu.getAttribute("data-section");
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });

    // Varsayılan olarak ilk içerik gösterilsin
    const defaultSection = document.querySelector('[data-section="customerOrientedSection"]');
    if (defaultSection) {
        defaultSection.classList.add("active");
        document.getElementById("customerOrientedSection").style.display = "block";
    }
});

// Grafiklerin başlangıç yapılandırması
let customerSatisfactionChart, customerRequestAccuracyChart, requestFulfillmentChart, responseTimeChart;

function initializeCharts() {
    const ctx1 = document.getElementById('customerSatisfactionChart').getContext('2d');
    customerSatisfactionChart = new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['4', '5', '6', '7', '8', '9', '10'],
            datasets: [{
                label: 'Müşteri Memnuniyeti',
                data: [0, 0, 0, 0, 0, 0, 0], // Başlangıç değerleri
                backgroundColor: [
                    'rgba(64, 81, 181, 0.8)',   // Koyu mavi
                    'rgba(112, 128, 144, 0.8)', // Soğuk gri
                    'rgba(72, 201, 176, 0.8)',  // Pastel yeşil
                    'rgba(173, 216, 230, 0.8)', // Bebek mavisi
                    'rgba(255, 182, 193, 0.8)', // Hafif pembe
                    'rgba(218, 112, 214, 0.8)', // Parlak lila
                    'rgba(240, 230, 140, 0.8)'  // Açık sarı
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribution of Customer Satisfaction Scores',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            const value = context.raw;
                            return `Puan ${context.label}: ${value} müşteri`;
                        }
                    }
                }
            }
        }
    });

    const ctx2 = document.getElementById('customerRequestAccuracyChart').getContext('2d');

    customerRequestAccuracyChart = new Chart(ctx2, {
        type: 'bar', // Bar chart
        data: {
            labels: ['Correctly Understood', 'Misunderstood'], // X ekseni etiketleri
            datasets: [{
                label: 'Customer Requests (Count)', // Verilerin etiketi
                data: [111, 89], // Müşteri sayıları
                backgroundColor: ['rgba(43, 50, 119, 0.8)', 'rgba(135, 224, 240, 0.8)'], // Bar renkleri
                borderRadius: 5 // Bar köşelerinin yuvarlaklığı
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false, // Grafiğin oranını serbest bırak
            plugins: {
                title: {
                    display: true,
                    text: 'Correctly and Incorrectly Understood Customer Requests',
                    font: {
                         size: 14,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false // Grafiğin üstündeki açıklamaları gizle
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0, // Y ekseninin başlangıç noktası
                    max: 150, // Y ekseninin maksimum değeri
                    ticks: {
                        stepSize: 10 // Y ekseninde 10'ar artışlarla gösterim
                    },
                    title: {
                        display: true,
                        text: 'Number of Customers'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Categories'
                    },
                    ticks: {
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        drawOnChartArea: false // X ekseni ızgara çizgilerini kaldır
                    }
                }
            }
        }
    });
    
    
    const totalRequests = 200; // Toplam istek sayısı
    const fulfilledRequests = 150; // Karşılanan istek sayısı
    const unfulfilledRequests = totalRequests - fulfilledRequests; // Karşılanmayan istek sayısı
    
    // Chart.js Doughnut grafiği
    const ctx3 = document.getElementById('requestFulfillmentChart').getContext('2d');
    requestFulfillmentChart = new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: ['Fulfilled Requests', 'Unfulfilled Requests'], // Dilim etiketleri
            datasets: [{
                data: [fulfilledRequests, unfulfilledRequests], // Veriler
                backgroundColor: ['rgba(51, 170, 190, 0.8)', 'rgba(117, 158, 185, 0.8'], // Dilim renkleri
                hoverOffset: 10 // Hover sırasında genişleme
            }]
        },
        options: {
            responsive: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Status of Customer Requests', // Başlık
                    font: {
                         size: 14,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom', // Legend alt kısma yerleştirildi
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                }
            },
            cutout: '60%' // İç çember büyüklüğü
        }
    });
    
    const ctx4 = document.getElementById('responseTimeChart').getContext('2d');
    responseTimeChart = new Chart(ctx4, {
        type: 'line',
        data: {
            labels: ["Customer1", "Customer 2", "Customer 3", "Customer 4", "Customer 5"], // X ekseni: Müşteriler
            datasets: [{
                label: 'Response Time (min)', // Grafiğin etiketi
                data: [35, 50, 40, 60, 45], // Y ekseni: Yanıt süreleri
                borderColor: '#4caf50', // Çizgi rengi
                borderWidth: 2, // Çizgi kalınlığı
                fill: true, // Altını doldurma
                backgroundColor: 'rgba(218, 231, 219, 0.99)' // Alt dolgu rengi
            }]
        },
        options: {
            responsive: false,
            plugins: {

                title: {
                    display: true,
                    text: 'Response Time to Customers', // Başlık
                    font: {
                         size: 14,
                        weight: 'bold'

                    }
                },
                legend: {
                    display: true, // Etiket gösterimi
                    position: 'top' // Etiket konumu
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Customers' // X ekseni başlığı
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Response Time (min)' // Y ekseni başlığı
                    },
                    beginAtZero: true // Sıfırdan başlama
                }
            }
        }
    });
    
    
}


function updateCharts(data) {
    const understoodCorrectly = data.filter(item => item.dogru_anlasilmis_musteri_istekleri === "1").length;
    const misunderstood = data.filter(item => item.dogru_anlasilmis_musteri_istekleri === "0").length;
    customerRequestAccuracyChart.data.datasets[0].data = [understoodCorrectly, misunderstood];
    customerRequestAccuracyChart.update();

    const satisfactionScores = data.map(item => parseInt(item.musteri_memnuniyeti));
    const scoreCounts = [4, 5, 6, 7, 8, 9, 10].map(score =>
        satisfactionScores.filter(s => s === score).length
    );

    customerSatisfactionChart.data.datasets[0].data = scoreCounts;
    customerSatisfactionChart.update();

    const fulfilled = data.filter(item => item.musteri_isteklerinin_yerine_getirilmesi === "1").length;
    const unfulfilled = data.filter(item => item.musteri_isteklerinin_yerine_getirilmesi === "0").length;
    requestFulfillmentChart.data.datasets[0].data = [fulfilled, unfulfilled];
    requestFulfillmentChart.update();

    const responseTimes = data.map(item => parseFloat(item.musteri_sorgu_cevap_suresi));

    // Etiketleri dinamik olarak güncelle
    const labels = data.map((item, index) => `Customer ${item.id || index + 1}`);
    responseTimeChart.data.labels = labels;
    responseTimeChart.data.datasets[0].data = responseTimes;
    responseTimeChart.update();
}


function updateDashboardData() {
    fetch('http://localhost/hometest.php')
        .then(response => response.json())
        .then(data => {
            if (data.data) {
                updateCharts(data.data);
            }
        })
        .catch(error => console.error('Veri çekme hatası:', error));
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener("DOMContentLoaded", () => {
    initializeCharts();
    updateDashboardData();
    setInterval(updateDashboardData, 5000);
});
