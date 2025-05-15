(function () {
    // Grafiklerin referanslarını oluştur
    let renewableEnergyChart, waterConsumptionChart, ghgEmissionsChart, wasteReductionChart;
    let capacityUtilizationChart, ecoMaterialsChart, rareProductsChart, wasteReuseChart, recyclablePackagingChart;
    let emsExistenceChart, ecoInnovationsChart;

    // Grafiklerin başlangıç yapılandırması
    function initializeCharts() {
        // Firma odaklı grafikler
        const renewableEnergyCtx = document.getElementById('renewableEnergyChart').getContext('2d');

        renewableEnergyChart = new Chart(renewableEnergyCtx, {
            type: 'line',
            data: {
                labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'], // Kendi zaman etiketlerinizi yazın
                datasets: [{
                    label: 'Renewable Energy Use (%)',
                    data: [20, 40, 35, 50, 45, 60], // Kendi verilerinizi buraya ekleyin
                    borderColor: 'rgba(255, 99, 132, 1)', // Çizgi rengi
                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Çizgi altı dolgu rengi
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)', // Nokta rengi
                    pointBorderColor: 'rgba(255, 99, 132, 1)', // Nokta çerçeve rengi
                    pointRadius: 5, // Nokta boyutu
                    pointHoverRadius: 10, // Hover olduğunda nokta boyutu
                    pointStyle: 'circle', // Nokta stili
                    borderWidth: 2, // Çizgi kalınlığı
                    fill: true // Çizgi altını doldur
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Renewable Energy Use Over Time',
                        font: {
                            size: 14,
                            weight: 'bold'
                            
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                size: 14
                            },
                            color: '#333'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.raw}%`; // Tooltip formatı
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            display: true
                        }
                    },
                    y: {
                        beginAtZero: true,
                        ticks: {
                            callback: function(value) {
                                return value + '%'; // Y ekseninde yüzde formatı
                            },
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            display: true
                        }
                    }
                }
            }
        });
        

        const waterConsumptionCtx = document.getElementById('waterConsumptionChart').getContext('2d');
        waterConsumptionChart = new Chart(waterConsumptionCtx, {
            type: 'line',  // Bar yerine Line Chart
            data: {
                labels: [],
                datasets: [{
                    label: 'Water Consumption (m³)',
                    data: [],
                    borderColor: 'rgb(96, 149, 228)', // Çizgi rengi
                    backgroundColor: 'rgba(52, 121, 199, 0.2)', // Çizgi altı dolgu rengi
                    pointBackgroundColor: 'rgb(24, 77, 121)', // Nokta rengi
                    pointBorderColor: 'rgb(37, 97, 153)', // Nokta çerçeve rengi
                    pointRadius: 5, // Nokta boyutu
                    pointHoverRadius: 10, // Hover olduğunda nokta boyutu
                    pointStyle: 'circle', // Nokta stili
                    borderWidth: 2, // Çizgi kalınlığı
                    fill: true // Çizgi altını doldur
                    
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: { display: true,
                         text: 'Water Consumption Over Time',
                         font: {
                            size: 14,
                            weight: 'bold'
                            
                        } },
                    legend: { position: 'top' }
                },
                scales: { y: { beginAtZero: true } }
            }
        });

        const ghgEmissionsCtx = document.getElementById('ghgEmissionsChart').getContext('2d');
        ghgEmissionsChart = new Chart(ghgEmissionsCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'GHG Emissions Reduction (ton CO₂)',
                    data: [],
                    borderColor: '#ff5722',
                    backgroundColor: 'rgba(255, 87, 34, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: { display: true, text: 'GHG Emissions Reduction Over Time',font: {
                        size: 14,
                       weight: 'bold'

                   } },
                    legend: { position: 'top' }
                },
                scales: { y: { beginAtZero: true } }
            }
        });

        const wasteReductionCtx = document.getElementById('wasteReductionChart').getContext('2d');

        wasteReductionChart = new Chart(wasteReductionCtx, {
            type: 'bar', // Yatay çubuk grafiği
            data: {
                labels: ['PRD0001', 'PRD0002', 'PRD0003', 'PRD0004', 'PRD0005', 'PRD0006', 'PRD0007', 'PRD0008', 'PRD0009', 'PRD0010'], // Ürünler
                datasets: [{
                    label: 'Waste Reduction (Count)',
                    data: [15, 20, 30, 28, 18, 22, 25, 20, 30, 18], // Örnek veriler
                    backgroundColor: [
                        'rgba(128, 0, 128, 0.8)', // Mor tonları
                        'rgba(106, 90, 205, 0.8)',
                        'rgba(186, 85, 211, 0.8)',
                        'rgba(221, 160, 221, 0.8)',
                        'rgba(147, 112, 219, 0.8)',
                        'rgba(153, 50, 204, 0.8)',
                        'rgba(199, 21, 133, 0.8)',
                        'rgba(138, 43, 226, 0.8)',
                        'rgba(148, 0, 211, 0.8)',
                        'rgba(75, 0, 130, 0.8)'
                    ],
                    borderRadius: 5, // Bar köşeleri yuvarlama
                    barThickness: 10 // Bar kalınlığı
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                indexAxis: 'y', // Yatay çubuk grafiği
                plugins: {
                    title: {
                        display: true,
                        text: 'Waste Reduction Efforts Over Products',
                        font: {
                            size: 14,
                            weight: 'bold'
                            
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                size: 12
                            },
                            color: '#333'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.raw}`; // Tooltip formatı
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true, // X ekseni 0'dan başlar
                        max: 20, // Maksimum değer 30
                        ticks: {
                            stepSize: 1, // 10'ar 10'ar artış
                            callback: function (value, index) {
                                return index; // X ekseninde 0, 1, 2 olarak gösterim
                            }
                        },
                        grid: {
                            drawOnChartArea: true // X ekseni ızgarası görünür
                        }
                    },
                    y: {
                        ticks: {
                            font: {
                                size: 14
                            },
                            autoSkip: false, // Tüm ürünlerin görünmesini sağlar
                            padding: 10 // Ürün isimleri arasındaki boşluğu artırır
                        },
                        grid: {
                            drawOnChartArea: false // Y ekseni ızgarasını kaldır
                        },
                        offset: true // Çubuklar ve eksen arasında boşluk bırakır
                    }
                },
                barPercentage: 0.5, // Bar genişliğini belirleme
                categoryPercentage: 0.5 // Barlar arasındaki boşluğu artırma
            }
        });
        


        const capacityUtilizationCtx = document.getElementById('capacityUtilizationChart').getContext('2d');
capacityUtilizationChart = new Chart(capacityUtilizationCtx, {
    type: 'bar',
    data: {
        labels: [], // PHP'den gelecek ürün isimleri
        datasets: [{
            label: 'Capacity Utilization (%)',
            data: [], // PHP'den gelecek kapasite değerleri
            backgroundColor: [
                '#7986cb', // Mavi ton
                '#81c784', // Yeşil ton
                '#ce93d8', // Açık mor ton
                '#ffcc80', // Turuncu ton
                '#b39ddb', // Lila ton
                '#64b5f6', // Açık mavi
                '#4db6ac', // Turkuaz ton
                '#f48fb1', // Pembe 
                '#ffd54f', // Sarı ton
                '#90caf9'
            ],
            borderRadius: 5, // Bar köşelerini yuvarlatma
            barThickness: 20 // Bar kalınlığı
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        indexAxis: 'y', // Barları yatay yapmak için
        plugins: {
            title: {
                display: true,
                text: 'Capacity Utilization Over Products',
                font: {
                    size: 14,
                    weight: 'bold'
                    
                }
            },
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.raw}% Utilization`; // Tooltip formatı
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100, // Maksimum değer %100
                ticks: {
                    callback: function (value) {
                        return value + '%'; // X ekseninde yüzde formatı
                    }
                },
                grid: {
                    drawOnChartArea: false // X ekseni ızgarasını kaldır
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 12
                    }
                },
                grid: {
                    drawOnChartArea: false // Y ekseni ızgarasını kaldır
                }
            }
        }
    }
});



const ecoMaterialsCtx = document.getElementById('ecoMaterialsChart').getContext('2d');
ecoMaterialsChart = new Chart(ecoMaterialsCtx, {
    type: 'doughnut', // Yarım donut için doughnut tipi
    data: {
        labels: [], // PHP'den gelecek ürün isimleri
        datasets: [{
            label: 'Eco Materials Use (%)',
            data: [], // PHP'den gelecek veri
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)', // Mavi
                'rgba(75, 192, 192, 0.8)', // Açık Yeşil
                'rgba(153, 102, 255, 0.8)', // Mor
                'rgba(255, 159, 64, 0.8)',  // Turuncu
                'rgba(255, 99, 132, 0.8)'   // Kırmızı
            ],
            borderWidth: 0 // Çizgi sınırını kaldır
        }]
    },
    options: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'Eco Materials Use Over Products',
                font: {
                    size: 14,
                    weight: 'bold'
                    
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return `${context.label}: ${context.raw}%`; // Tooltip formatı
                    }
                }
            },
            legend: {
                position: 'top'
            }
        },
        rotation: -90, // Başlangıç açısını belirler (yatay yarım daire için)
        circumference: 180, // Yarım daire çizimi
        cutout: '50%', // Ortadaki boşluk (daha kalın bir yarım donut için ayarlanabilir)
    }
});


const rareProductsCtx = document.getElementById('rareProductsChart').getContext('2d');
rareProductsChart = new Chart(rareProductsCtx, {
    type: 'doughnut', // Donut (Halka) grafiği türü
    data: {
        labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'], // Kendi kategorilerinizi buraya yazın
        datasets: [{
            data: [40, 30, 20, 10], // Kendi verilerinizi buraya ekleyin
            backgroundColor: [
                'rgba(75, 192, 192, 0.8)', // Yeşil
                'rgba(54, 162, 235, 0.8)', // Mavi
                'rgba(255, 99, 132, 0.8)', // Kırmızı
                'rgba(153, 102, 255, 0.8)'  // Mor
            ],
            borderWidth: 2, // Çizgi kalınlığı
            hoverOffset: 10 // Hover efekti için genişleme
        }]
    },
    options: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'Rare Products Reduction Over Products',
                font: {
                    size: 14,
                    weight: 'bold'
                    
                }
            },
            legend: {
                display: true,
                position: 'bottom', // Alt kısma yerleştirilir
                labels: {
                    font: {
                        size: 12
                    },
                    color: '#333'
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const value = context.raw;
                        const total = context.dataset.data.reduce((a, b) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(1);
                        return `${context.label}: ${value} (${percentage}%)`;
                    }
                }
            }
        },
        cutout: '50%', // Donut grafiğinin iç çapını belirler
        maintainAspectRatio: false
    },
    plugins: [
        {
            id: 'percentageLabels',
            afterDraw(chart) {
                const { ctx, data } = chart;
                const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                ctx.font = '10px Arial'; // Yüzdelerin boyutu
                ctx.fillStyle = '#616161'; // Yüzde yazılarının rengi
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                data.datasets[0].data.forEach((value, i) => {
                    const percentage = ((value / total) * 100).toFixed(1) + '%';
                    const meta = chart.getDatasetMeta(0).data[i];
                    const position = meta.tooltipPosition();
                    ctx.fillText(percentage, position.x, position.y); // Yüzdeleri grafiğin üstüne yerleştir
                });
            }
        }
    ]
});


        const wasteReuseCtx = document.getElementById('wasteReuseChart').getContext('2d');

        wasteReuseChart = new Chart(wasteReuseCtx, {
            type: 'bar',
            data: {
                labels: ['PRD0001', 'PRD0002', 'PRD0003', 'PRD0004', 'PRD0005', 'PRD0006', 'PRD0007', 'PRD0008', 'PRD0009', 'PRD0010'], // Örnek ürünler
                datasets: [{
                    label: 'Waste Reuse (%)',
                    data: [64.5, 30.6, 71.1, 66, 88, 55.9, 58.4, 41.9, 58.2, 55.9], // Örnek veriler
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',  // Kırmızı
                        'rgba(54, 162, 235, 0.8)',  // Mavi
                        'rgba(255, 206, 86, 0.8)',  // Sarı
                        'rgba(75, 192, 192, 0.8)',  // Yeşil
                        'rgba(153, 102, 255, 0.8)', // Mor
                        'rgba(255, 159, 64, 0.8)',  // Turuncu
                        'rgba(101, 143, 255, 0.8)', // Açık mavi
                        'rgba(255, 99, 132, 0.8)',  // Kırmızı
                        'rgba(54, 162, 235, 0.8)',  // Mavi
                        'rgba(255, 206, 86, 0.8)'   // Sarı
                    ],
                    borderRadius: 5, // Köşe yuvarlama
                    barThickness: 30 // Bar kalınlığı (ince yapmak için düşük değer)
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Waste Reuse Over Products',
                        font: {
                            size: 14,
                            weight: 'bold'
                            
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.raw}% Waste Reuse`; // Tooltip formatı
                            }
                        }
                    },
                    legend: {
                        display: false // Efsaneyi gizler
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 10 // X ekseni yazı boyutu küçültüldü
                            },
                            color: '#333'
                        },
                        grid: {
                            display: false // X ekseni ızgarasını kaldır
                        }
                    },
                    y: {
                        ticks: {
                            display: false // Y ekseni oranlarını gizler
                        },
                        grid: {
                            display: false // Y ekseni ızgarasını kaldır
                        }
                    }
                }
            },
            plugins: [{
                id: 'dataLabels',
                afterDatasetsDraw: (chart) => {
                    const { ctx, data, scales: { x, y } } = chart;
                    ctx.save();
                    data.datasets[0].data.forEach((value, index) => {
                        const barX = x.getPixelForValue(index); // Barın X pozisyonu
                        const barY = y.getPixelForValue(value); // Barın Y pozisyonu
                        ctx.fillStyle = '#000'; // Yazı rengi
                        ctx.font = '12px Arial'; // Yazı tipi
                        ctx.textAlign = 'center';
                        ctx.fillText(`${value}%`, barX, barY - 5); // Yüzdeyi çizer (bar üstü)
                    });
                }
            }]
        });
        
        
        

        const recyclablePackagingCtx = document.getElementById('recyclablePackagingChart').getContext('2d');
recyclablePackagingChart = new Chart(recyclablePackagingCtx, {
    type: 'bar',
    data: {
        labels: ['PRD0001', 'PRD0002', 'PRD0003', 'PRD0004', 'PRD0005', 'PRD0006', 'PRD0007', 'PRD0008', 'PRD0009', 'PRD0010'], // Örnek etiketler
        datasets: [{
            label: 'Recyclable Packaging Use (%)',
            data: [45, 30, 50, 70, 60, 90, 40, 55, 80, 65], // Örnek veriler
            backgroundColor: '#9c27b0',
            borderRadius: 6// Bar köşelerini yuvarlak yapar
        }]
    },
    options: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'Recyclable Packaging Use Over Products',
                font: {
                    size: 14,
                    weight: 'bold'
                    
                }
            },
            legend: {
                position: 'top'
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value + '%'; // Y ekseninde sayılara yüzde işareti ekler
                    }
                }
            }
        }
    }
});

        // EMS Existence (Line Chart)
        const emsExistenceCtx = document.getElementById('emsExistenceChart').getContext('2d');
        emsExistenceChart = new Chart(emsExistenceCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'EMS Existence (1: Yes, 0: No)',
                    data: [],
                    borderColor: '#4caf50',
                    backgroundColor: 'rgba(76, 175, 80, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: { display: true, 
                        text: 'EMS Existence Over Time',
                        font: {
                            size: 14,
                            weight: 'bold'
                            
                        } },
                    legend: { position: 'top' }
                },
                scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
            }
        });

        // Eco Innovations Count (Line Chart)
        const ecoInnovationsCtx = document.getElementById('ecoInnovationsChart').getContext('2d');
        ecoInnovationsChart = new Chart(ecoInnovationsCtx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Eco Innovations Count',
                    data: [],
                    borderColor: '#ff9800',
                    backgroundColor: 'rgba(255, 152, 0, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: { display: true, 
                        text: 'Eco Innovations Count Over Time',
                        font: {
                            size: 14,
                            weight: 'bold'
                            
                        } },
                    legend: { position: 'top' }
                },
                scales: { y: { beginAtZero: true } }
            }
        });
    }

    // Firma odaklı veri çekme fonksiyonu
    async function fetchFirmResourceData() {
        try {
            const response = await fetch('http://localhost/firm_resource.php'); // Firma odaklı kaynak verisi
            if (!response.ok) throw new Error('Veri alınamadı');
            const result = await response.json();
            const data = result.data;

            // Firma odaklı grafikler güncelleme
            renewableEnergyChart.data.labels = data.map(item => item.Year);
            renewableEnergyChart.data.datasets[0].data = data.map(item => parseFloat(item['Renewable_Energy_Use']));
            renewableEnergyChart.update();

            waterConsumptionChart.data.labels = data.map(item => item.Year);
            waterConsumptionChart.data.datasets[0].data = data.map(item => parseFloat(item['Water_Consumption']));
            waterConsumptionChart.update();

            ghgEmissionsChart.data.labels = data.map(item => item.Year);
            ghgEmissionsChart.data.datasets[0].data = data.map(item => parseFloat(item['GHG_Emissions_Reduction']));
            ghgEmissionsChart.update();

            wasteReductionChart.data.labels = data.map(item => item.Year);
            wasteReductionChart.data.datasets[0].data = data.map(item => parseInt(item['Waste_Reduction_Efforts'], 10));
            wasteReductionChart.update();

            // EMS Existence & Eco Innovations Count güncelleme
            emsExistenceChart.data.labels = data.map(item => item.Year);
            emsExistenceChart.data.datasets[0].data = data.map(item => (item['EMS_Existence'] === 'Yes' ? 1 : 0));
            emsExistenceChart.update();

            ecoInnovationsChart.data.labels = data.map(item => item.Year);
            ecoInnovationsChart.data.datasets[0].data = data.map(item => parseInt(item['Eco_Innovations_Count'], 10));
            ecoInnovationsChart.update();

        } catch (error) {
            console.error('Firma verisi çekme hatası:', error);
        }
    }

    // Ürün odaklı veri çekme fonksiyonu
    async function fetchProductResourceData() {
        try {
            const response = await fetch('http://localhost/product_resource.php'); // Ürün odaklı kaynak verisi
            if (!response.ok) throw new Error('Veri alınamadı');
            const result = await response.json();
            const data = result.data;

            // Ürün odaklı grafikler güncelleme
            capacityUtilizationChart.data.labels = data.map(item => item['Product ID']);
            capacityUtilizationChart.data.datasets[0].data = data.map(item => parseFloat(item['Capacity Utilization']));
            capacityUtilizationChart.update();

            ecoMaterialsChart.data.labels = data.map(item => item['Product ID']);
            ecoMaterialsChart.data.datasets[0].data = data.map(item => parseFloat(item['Eco Materials Use']));
            ecoMaterialsChart.update();

            rareProductsChart.data.labels = data.map(item => item['Product ID']);
            rareProductsChart.data.datasets[0].data = data.map(item => parseFloat(item['Rare Products Reduction']));
            rareProductsChart.update();

            wasteReuseChart.data.labels = data.map(item => item['Product ID']);
            wasteReuseChart.data.datasets[0].data = data.map(item => parseFloat(item['Waste Reuse']));
            wasteReuseChart.update();

            recyclablePackagingChart.data.labels = data.map(item => item['Product ID']);
            recyclablePackagingChart.data.datasets[0].data = data.map(item => parseFloat(item['Recyclable Packaging Use']));
            recyclablePackagingChart.update();

        } catch (error) {
            console.error('Ürün verisi çekme hatası:', error);
        }
    }

    // Sayfa yüklendiğinde başlat
    document.addEventListener('DOMContentLoaded', () => {
        initializeCharts(); // Grafik yapılandırmasını başlat
        fetchFirmResourceData(); // Firma odaklı veri çek
        fetchProductResourceData(); // Ürün odaklı veri çek
    });

})();
