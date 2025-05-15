(function () {
    // Grafiklerin referanslarını oluştur
    let deliveryPieChart, onTimeBarChart, flowLineChart, distributionBarChart, priorityStackedBarChart;

    // Grafiklerin başlangıç yapılandırması
    function initializeDeliveryCharts() {
        // Pie Chart - Delivery
        const deliveryPieChartCtx = document.getElementById('deliveryPieChart').getContext('2d');
        deliveryPieChart = new Chart(deliveryPieChartCtx, {
            type: 'pie',
            data: {
                labels: ['Unknown', 'On-Time', 'Late'],
                datasets: [{
                    data: [], // Başlangıçta boş, PHP'den veri gelecek
                    backgroundColor: ['#9575cd', '#81c784', '#7986cb'] // Lila, yeşil, mavi tonları
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Delivery Timeliness',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                }
            }
        });
    
        // Polar Area Chart - City Deliveries
        const onTimeBarChartCtx = document.getElementById('onTimeBarChart').getContext('2d');
        onTimeBarChart = new Chart(onTimeBarChartCtx, {
            type: 'polarArea',
            data: {
                labels: ['Samsun', 'Istanbul', 'Ankara', 'Adana', 'Erzurum', 'Izmir', 'Gaziantep'],
                datasets: [{
                    label: 'Deliveries by City',
                    data: [25, 30, 20, 15, 35, 40, 10],
                    backgroundColor: [
                        '#7986cb', // Mavi ton
                        '#81c784', // Yeşil ton
                        '#ce93d8', // Açık mor ton
                        '#ffcc80', // Turuncu ton
                        '#b39ddb', // Lila ton
                        '#64b5f6', // Açık mavi
                        '#e0e0e0'  // Gri ton
                    ]
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            font: {
                                size: 10
                            }
                        }
                    },
                    tooltip: {
                        enabled: true
                    },
                    title: {
                        display: true,
                        text: 'On-Time Deliveries by City',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                },
                scales: {
                    r: {
                        ticks: {
                            display: false
                        }
                    }
                }
            }
        });
    
        // Line Chart - Flow Days
        const flowLineChartCtx = document.getElementById('flowLineChart').getContext('2d');
        flowLineChart = new Chart(flowLineChartCtx, {
            type: 'line',
            data: {
                labels: [], // Tarihler PHP'den gelecek
                datasets: [{
                    label: 'Flow Days',
                    data: [],
                    borderColor: '#7986cb', // Mavi ton
                    fill: false
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Flow Days Duration',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                }
            }
        });
    
        // Bar Chart - Distribution Network
        const distributionBarChartCtx = document.getElementById('distributionBarChart').getContext('2d');
        distributionBarChart = new Chart(distributionBarChartCtx, {
            type: 'bar',
            data: {
                labels: ['Samsun', 'Istanbul', 'Ankara', 'Adana', 'Erzurum', 'Izmir', 'Gaziantep'],
                datasets: [{
                    label: '',
                    data: [25, 20, 35, 15, 40, 30, 30],
                    backgroundColor: ['#7986cb', '#81c784', '#b39ddb', '#ce93d8', '#64b5f6', '#e0e0e0', '#9575cd']
                }]
            },
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Distribution Networks',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    
        // Stacked Bar Chart - Priority
        const priorityStackedBarChartCtx = document.getElementById('priorityStackedBarChart').getContext('2d');
        priorityStackedBarChart = new Chart(priorityStackedBarChartCtx, {
            type: 'bar',
            data: {
                labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
                datasets: [
                    {
                        label: 'High Priority',
                        data: [20, 30, 40, 10],
                        backgroundColor: '#b39ddb' // Lila ton
                    },
                    {
                        label: 'Low Priority',
                        data: [10, 20, 15, 25],
                        backgroundColor: 'rgba(5, 7, 105, 0.8)' // Mavi ton
                    }
                ]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Urgency Status',
                        font: {
                            size: 14,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    },
                    legend: {
                        display: true,
                        position: 'top'
                    }
                },
                scales: {
                    x: {
                        stacked: true
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        });
    }
    

// Bar Chart - Sipariş Durumu (TrackingStatus)
const trackingStatusBarChartCtx = document.getElementById('trackingStatusBarChart').getContext('2d');
const trackingStatusBarChart = new Chart(trackingStatusBarChartCtx, {
    type: 'bar',
    data: {
        labels: ['Delivered', 'In Progress', 'Cancelled'], // Sipariş durumları
        datasets: [{
            label: '', // Legend metnini kaldırmak için boş bırak
            data: [140, 50, 20], // PHP'den veri gelecek (örnek veri eklendi)
            backgroundColor: ['#4caf50', '#42a5f5', '#9e9e9e'] // Renkler
        }]
    },
    options: {
        responsive: false,
        plugins: {
            legend: {
                display: false // Legend'i gizle
            },
            title: {
                display: true, // Başlığı göster
                text: 'Tracking Status', // Başlık metni
                font: {
                    size: 14,
                    weight: 'bold'
                    
                },
                padding: {
                    top: 10,
                    bottom: 20
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true // Y eksenini sıfırdan başlat
            }
        }
    }
});


    // PHP'den veri çekmek ve grafikleri güncellemek
    async function fetchDeliveryDataAndUpdateCharts() {
        try {
            const response = await fetch('http://localhost/delivery.php');
            if (!response.ok) throw new Error('Veri alınamadı');
            const result = await response.json();

            const data = result.data;

            // Pie Chart - Delivery Status
            deliveryPieChart.data.datasets[0].data = [
                data.filter(item => item.On_Time === 'Unknown').length,
                data.filter(item => item.On_Time === 'Yes').length,
                data.filter(item => item.On_Time === 'No').length
            ];
            deliveryPieChart.update();

            // Bar Chart - On-Time Deliveries
            onTimeBarChart.data.labels = [...new Set(data.map(item => item.Distribution_Network))]; // Network isimleri
            onTimeBarChart.data.datasets[0].data = onTimeBarChart.data.labels.map(network => {
                return data.filter(item => item.Distribution_Network === network && item.On_Time === 'Yes').length;
            });
            onTimeBarChart.update();

            // Line Chart - Flow Days
            flowLineChart.data.labels = data.map(item => item.Order_Date);
            flowLineChart.data.datasets[0].data = data.map(item => item.Flow_Days || 0); // Null değerleri sıfırla
            flowLineChart.update();

            // Distribution Network Bar Chart
            distributionBarChart.data.labels = [...new Set(data.map(item => item.Distribution_Network))];
            distributionBarChart.data.datasets[0].data = distributionBarChart.data.labels.map(network => {
                return data.filter(item => item.Distribution_Network === network).length;
            });
            distributionBarChart.update();

            // Stacked Bar Chart - Priority
            priorityStackedBarChart.data.labels = [...new Set(data.map(item => item.Distribution_Network))];
            priorityStackedBarChart.data.datasets[0].data = priorityStackedBarChart.data.labels.map(network => {
                return data.filter(item => item.Distribution_Network === network && item.Priority === 'Yes').length;
            });
            priorityStackedBarChart.data.datasets[1].data = priorityStackedBarChart.data.labels.map(network => {
                return data.filter(item => item.Distribution_Network === network && item.Priority === 'No').length;
            });
            priorityStackedBarChart.update();

            // Bar Chart - TrackingStatus: Siparişlerin durumunu görselleştirme
        trackingStatusBarChart.data.datasets[0].data = [
            data.filter(item => item.Tracking_Status === 'Delivered').length, // Delivered
            data.filter(item => item.Tracking_Status === 'In Progress').length, // In Progress
            data.filter(item => item.Tracking_Status === 'Cancelled').length // Cancelled
        ];

        trackingStatusBarChart.update();

        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
    }

    // Sayfa yüklendiğinde başlat
    document.addEventListener('DOMContentLoaded', () => {
        initializeDeliveryCharts(); // Grafik yapılandırmasını başlat
        fetchDeliveryDataAndUpdateCharts(); // PHP'den veri çek
    });
})();
