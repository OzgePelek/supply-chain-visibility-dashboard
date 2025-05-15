(async function () {
    // Grafik referanslarını oluştur
    let productWasteChart, salesAccuracyChart, meterCompatibilityChart;

    function initializeCharts() {
        // Chart 1 - Total Product and Total Waste (Stacked Bar)
        const productWasteChartCtx = document.getElementById('productWasteChart').getContext('2d');
        productWasteChart = new Chart(productWasteChartCtx, {
            type: 'bar',
            data: {
                labels: [], // Gruplar PHP'den gelecek
                datasets: [
                    {
                        label: 'Total Product',
                        data: [],
                        backgroundColor: 'rgba(137, 183, 243, 0.8)', // Mor ton
                    },
                    {
                        label: 'Total Waste',
                        data: [],
                        backgroundColor: 'rgba(23, 56, 163, 0.8)', // Canlı pembe-lila ton
                    },
                ],
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Total Product and Waste Overview',
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return `${context.dataset.label}: ${context.raw}`;
                            },
                        },
                    },
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        stacked: true,
                        title: {
                            display: true,
                            text: 'Total Product and Waste',
                        },
                    },
                    x: {
                        stacked: true,
                    },
                },
            },
        });
    
        // Chart 2 - Sales Estimation, Actual Sales, and Estimation Accuracy
        const salesAccuracyChartCtx = document.getElementById('salesAccuracyChart').getContext('2d');
        salesAccuracyChart = new Chart(salesAccuracyChartCtx, {
            type: 'bar',
            data: {
                labels: [], // Gruplar PHP'den gelecek
                datasets: [
                    {
                        label: 'Sales Estimation',
                        data: [],
                        backgroundColor: 'rgba(121, 134, 203, 0.8)', // Mavi-lila karışımı
                    },
                    {
                        label: 'Actual Sales',
                        data: [],
                        backgroundColor: 'rgba(156, 204, 101, 0.8)', // Açık yeşil ton
                    },
                    {
                        label: 'Estimation Accuracy (%)',
                        data: [],
                        type: 'line',
                        borderColor: 'rgba(255, 193, 7, 1)', // Canlı sarı ton
                        borderWidth: 2,
                        yAxisID: 'y1',
                    },
                ],
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Sales Performance and Estimation Accuracy',
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                    },
                },
                scales: {
                    y: { beginAtZero: true },
                    y1: {
                        position: 'right',
                        beginAtZero: true,
                        grid: { drawOnChartArea: false },
                    },
                },
            },
        });
    
        // Chart 3 - Produced Meter, Planned Meter, and Meter Compatibility
        const meterCompatibilityChartCtx = document.getElementById('meterCompatibilityChart').getContext('2d');
        meterCompatibilityChart = new Chart(meterCompatibilityChartCtx, {
            type: 'bar',
            data: {
                labels: [], // Gruplar PHP'den gelecek
                datasets: [
                    {
                        label: 'Produced Meter',
                        data: [],
                        backgroundColor: 'rgba(54, 162, 235, 0.8)', // Canlı mavi ton
                    },
                    {
                        label: 'Planned Meter',
                        data: [],
                        backgroundColor: 'rgba(220, 231, 117, 0.8)', // Açık sarı-yeşil ton
                    },
                    {
                        label: 'Meter Compatibility (%)',
                        data: [],
                        type: 'line',
                        borderColor: 'rgba(76, 175, 80, 1)', // Yeşil ton
                        borderWidth: 2,
                        yAxisID: 'y1',
                    },
                ],
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Production vs Plan and Compatibility Rate',
                        font: {
                            size: 14,
                            weight: 'bold',
                        },
                    },
                },
                scales: {
                    y: { beginAtZero: true },
                    y1: {
                        position: 'right',
                        beginAtZero: true,
                        grid: { drawOnChartArea: false },
                    },
                },
            },
        });
    }
    
    
    

    // PHP'den toplam ürün miktarını çek ve DOM'da göster
    async function fetchTotalProductSum() {
        try {
            const response = await fetch('http://localhost/product_focus_approach.php');
            const result = await response.json();

            // Toplam ürün miktarını hesapla ve göster
            const totalProductSum = result.total_product_sum || result.reduce((sum, item) => sum + parseInt(item.Total_Product || 0, 10), 0);
            document.getElementById('totalProductSum').textContent = totalProductSum;
        } catch (error) {
            console.error('Toplam ürün verisi alınamadı:', error);
        }
    }

    // PHP'den veri çekmek ve grafikleri güncellemek
    async function fetchDataAndUpdateCharts() {
        try {
            const response = await fetch('http://localhost/product_focus_approach.php');
            const result = await response.json();

            const data = Array.isArray(result) ? result : result.data;

            if (!Array.isArray(data)) {
                throw new Error('Beklenen formatta veri alınamadı');
            }

            // Verileri ayrıştır
            const groups = data.map(item => item.Product_Group);
            const totalProducts = data.map(item => parseInt(item.Total_Product, 10));
            const totalWastes = data.map(item => parseInt(item.Total_Waste, 10));
            const salesEstimations = data.map(item => parseInt(item.Sales_Estimation, 10));
            const actualSales = data.map(item => parseInt(item.Actual_Sales, 10));
            const producedMeters = data.map(item => parseInt(item.Produced_Meter, 10));
            const plannedMeters = data.map(item => parseInt(item.Planned_Meter, 10));
            const estimationAccuracy = actualSales.map((actual, i) =>
                salesEstimations[i] > 0 ? ((actual / salesEstimations[i]) * 100).toFixed(2) : 0
            );
            const meterCompatibility = producedMeters.map((produced, i) =>
                plannedMeters[i] > 0 ? ((produced / plannedMeters[i]) * 100).toFixed(2) : 0
            );

            // Chart 1 - Product and Waste Data
            productWasteChart.data.labels = groups;
            productWasteChart.data.datasets[0].data = totalProducts;
            productWasteChart.data.datasets[1].data = totalWastes;
            productWasteChart.update();

            // Chart 2 - Sales Data
            salesAccuracyChart.data.labels = groups;
            salesAccuracyChart.data.datasets[0].data = salesEstimations;
            salesAccuracyChart.data.datasets[1].data = actualSales;
            salesAccuracyChart.data.datasets[2].data = estimationAccuracy;
            salesAccuracyChart.update();

            // Chart 3 - Meter Data
            meterCompatibilityChart.data.labels = groups;
            meterCompatibilityChart.data.datasets[0].data = producedMeters;
            meterCompatibilityChart.data.datasets[1].data = plannedMeters;
            meterCompatibilityChart.data.datasets[2].data = meterCompatibility;
            meterCompatibilityChart.update();
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
    }

    // Sayfa yüklendiğinde başlat
    document.addEventListener('DOMContentLoaded', () => {
        initializeCharts();
        fetchDataAndUpdateCharts();
        fetchTotalProductSum(); // Toplam ürün verisini ayrı olarak yükle
    });
})();


