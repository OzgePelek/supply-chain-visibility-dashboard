(function () {
    // Grafiklerin referanslarını oluştur
    let previousCurrentCustomersBarChart, sustainabilityProjectsBarChart, investmentReturnsChart, rdEmployeesBudgetChart, rdBudgetProjectsScatter, ordersComparisonBarChart;

    // Grafiklerin başlangıç yapılandırması
    function initializeCompanyAttributeCharts() {
// Bar + Line Chart - Previous Year vs Current Year Customers with Retention Rate
const previousCurrentCustomersCtx = document.getElementById('previousCurrentCustomersBarChart').getContext('2d');
previousCurrentCustomersBarChart = new Chart(previousCurrentCustomersCtx, {
    type: 'bar',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'], // Yıllar PHP'den gelecek
        datasets: [
            {
                label: 'Previous Year Customers',
                data: [1148, 1070, 906, 988, 871, 820, 902, 921, 1000], // PHP'den veri gelecek
                backgroundColor: 'rgba(78, 64, 204, 0.8)' // Mor ton
            },
            {
                label: 'Current Year Customers',
                data: [1185, 1136, 955, 1068, 924, 1000, 904, 872, 1100], // PHP'den veri gelecek
                backgroundColor: 'rgba(223, 181, 252, 0.8)' // Lila ton
            },
            {
                label: 'Retention Rate (%)',
                data: [103.22, 106.17, 105.41, 108.10, 106.08, 121.95, 100.22, 94.68, 110.00], // Retention Rate verileri
                type: 'line', // Line chart
                borderColor: 'rgb(211, 168, 178)', // Kırmızı ton
                backgroundColor: 'rgba(255, 99, 132, 0.2)', // Hafif kırmızı ton
                yAxisID: 'y1', // İkinci Y ekseni
                tension: 0.4 // Çizgi yumuşatma
            }
        ]
    },
    options: {
        responsive: false,
        plugins: {
            title: {
                display: true,
                text: 'Customer Growth: Previous vs Current Year with Retention Rate',
                font: {
                    size: 14,
                    weight: 'bold'
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Customers'
                }
            },
            y1: {
                beginAtZero: true,
                position: 'right', // Sağ tarafta ikinci Y ekseni
                title: {
                    display: true,
                    text: 'Retention Rate (%)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Years'
                }
            }
        }
    }
});

    
        // Bar Chart - Sustainability Projects
        const sustainabilityProjectsCtx = document.getElementById('sustainabilityProjectsBarChart').getContext('2d');
        sustainabilityProjectsBarChart = new Chart(sustainabilityProjectsCtx, {
            type: 'bar',
            data: {
                labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'], // Yıllar PHP'den gelecek
                datasets: [
                    {
                        label: 'Integrated Projects',
                        data: [13, 20, 15, 19, 19, 23, 15, 13, 20], // PHP'den veri gelecek
                        backgroundColor: 'rgba(12, 125, 253, 0.8)' // Açık yeşil ton
                    },
                    {
                        label: 'Total Sustainability Projects',
                        data: [15, 24, 19, 20, 20, 23, 16, 24, 30], // PHP'den veri gelecek
                        backgroundColor: 'rgba(112, 113, 121, 0.8)' // Mavi-lila karışımı
                    },
                    {
                        label: 'Sustainability Integration Rate (%)',
                        data: [ 86.7, 83.3, 100.0, 90.0, 100.0, 82.6, 81.3, 95.8,], // Integration rate verileri
                        type: 'line', // Line chart
                        borderColor: 'rgba(255, 99, 132, 1)', // Kırmızı ton
                        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Hafif kırmızı ton
                        yAxisID: 'y1', // İkinci Y ekseni
                        tension: 0.4 // Çizgi yumuşatma
                    }
                ]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Sustainability Projects Overview with Integration Rate',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Projects'
                        }
                    },
                    y1: {
                        beginAtZero: true,
                        position: 'right', // Sağ tarafta ikinci Y ekseni
                        title: {
                            display: true,
                            text: 'Sustainability Integration Rate (%)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Years'
                        }
                    }
                }
            }
        });
        
    
        // Bar and Line Chart - Investment Returns
        const investmentReturnsCtx = document.getElementById('investmentReturnsChart').getContext('2d');
        investmentReturnsChart = new Chart(investmentReturnsCtx, {
            type: 'bar',
            data: {
                labels: [], // Yıllar PHP'den gelecek
                datasets: [
                    {
                        label: 'Investment in Sustainability',
                        data: [],
                        backgroundColor: 'rgba(139, 195, 74, 0.8)', // Açık yeşil ton
                        yAxisID: 'y', // Birincil eksen
                    },
                    {
                        label: 'Returns from Investment',
                        data: [],
                        backgroundColor: 'rgba(63, 81, 181, 0.8)', // Mavi ton
                        yAxisID: 'y', // Birincil eksen
                    },
                    {
                        label: 'Investment Recovery',
                        type: 'line',
                        data: [],
                        borderColor: 'rgba(244, 114, 182, 1)', // Canlı pembe-lila ton
                        fill: false,
                        yAxisID: 'y1', // İkincil eksen
                    }
                ]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Sustainability Investment: Costs, Returns, and Recovery',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Investment and Returns'
                        }
                    },
                    y1: {
                        position: 'right',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Recovery Rate'
                        },
                        grid: {
                            drawOnChartArea: false // Birincil eksenle karışmasın
                        }
                    }
                }
            }
        });
    
        // Combined Bar and Line Chart - R&D Employees and Budget
        const rdEmployeesBudgetCtx = document.getElementById('rdEmployeesBudgetChart').getContext('2d');
        rdEmployeesBudgetChart = new Chart(rdEmployeesBudgetCtx, {
            type: 'bar',
            data: {
                labels: [], // Yıllar PHP'den gelecek
                datasets: [
                    {
                        label: 'R&D Employees',
                        data: [],
                        backgroundColor: 'rgba(255, 152, 0, 0.8)', // Turuncu ton
                        yAxisID: 'y1', // İkincil eksen
                    },
                    {
                        label: 'R&D Budget',
                        data: [],
                        backgroundColor: 'rgba(63, 81, 181, 0.8)', // Mavi ton
                        yAxisID: 'y', // Birincil eksen
                    }
                ]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'R&D: Employees and Budget Allocation',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Budget'
                        }
                    },
                    y1: {
                        position: 'right',
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Employees'
                        },
                        grid: {
                            drawOnChartArea: false // Birincil eksenle çakışmayı engeller
                        }
                    }
                }
            }
        });
    
        // Scatter Plot - R&D Budget vs Accepted Projects
        const rdBudgetProjectsScatterCtx = document.getElementById('rdBudgetProjectsScatter').getContext('2d');
        rdBudgetProjectsScatter = new Chart(rdBudgetProjectsScatterCtx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'R&D Budget vs Accepted Projects',
                        data: [], // Veri noktalarını buraya eklemeniz gerekiyor
                        backgroundColor: 'rgba(103, 89, 226, 0.8)', // Mor ton
                        radius: 6 // Noktaların boyutunu buradan ayarlayın
                    }
                ]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'R&D Budget Impact on Accepted Projects',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'R&D Budget'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Accepted Projects'
                        }
                    }
                }
            }
        });
    
        // Bar Chart - On-Time vs Total Orders
        const ordersComparisonCtx = document.getElementById('ordersComparisonBarChart').getContext('2d');
        ordersComparisonBarChart = new Chart(ordersComparisonCtx, {
            type: 'bar',
            data: {
                labels: [], // Yıllar PHP'den gelecek
                datasets: [
                    {
                        label: 'On-Time Orders',
                        data: [],
                        backgroundColor: 'rgba(76, 175, 80, 0.8)' // Yeşil ton
                    },
                    {
                        label: 'Total Orders',
                        data: [],
                        backgroundColor: 'rgba(244, 67, 54, 0.8)' // Canlı kırmızı ton
                    }
                ]
            },
            options: {
                responsive: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Order Performance: On-Time vs Total',
                        font: {
                            size: 14,
                            weight: 'bold'
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
    }
    
    // PHP'den veri çekmek ve grafikleri güncellemek
    async function fetchCompanyAttributeDataAndUpdateCharts() {
        try {
            const response = await fetch('http://localhost/company_attribute.php');
            if (!response.ok) throw new Error('Veri alınamadı');
            const result = await response.json();

            const data = result.data;

            // Bar Chart - Previous Year vs Current Year Customers
            previousCurrentCustomersBarChart.data.labels = data.map(item => item.Year);
            previousCurrentCustomersBarChart.data.datasets[0].data = data.map(item => item.previous_year_customers);
            previousCurrentCustomersBarChart.data.datasets[1].data = data.map(item => item.current_year_customers);
            previousCurrentCustomersBarChart.data.datasets[2].data = data.map(item => item.retention_rate);
            previousCurrentCustomersBarChart.update();

            // Bar Chart - Sustainability Projects
            sustainabilityProjectsBarChart.data.labels = data.map(item => item.Year);
            sustainabilityProjectsBarChart.data.datasets[0].data = data.map(item => item.integrated_projects);
            sustainabilityProjectsBarChart.data.datasets[1].data = data.map(item => item.total_sustainability_projects);
            sustainabilityProjectsBarChart.data.datasets[2].data = data.map(item => item.sustainability_integration_rate);
            sustainabilityProjectsBarChart.update();

            // Line and Bar Chart - Investment, Returns, and Recovery
            investmentReturnsChart.data.labels = data.map(item => item.Year);
            investmentReturnsChart.data.datasets[0].data = data.map(item => item.investment_in_sustainability);
            investmentReturnsChart.data.datasets[1].data = data.map(item => item.returns_from_investment);
            investmentReturnsChart.data.datasets[2].data = data.map(item => item.investment_recovery);
            investmentReturnsChart.update();

            // Combined Bar and Line Chart - R&D Employees and Budget
            rdEmployeesBudgetChart.data.labels = data.map(item => item.Year);
            rdEmployeesBudgetChart.data.datasets[0].data = data.map(item => item.rd_employees);
            rdEmployeesBudgetChart.data.datasets[1].data = data.map(item => item.rd_budget);
            rdEmployeesBudgetChart.update();

            // Scatter Plot - R&D Budget vs Accepted Projects
            rdBudgetProjectsScatter.data.datasets[0].data = data.map(item => ({
                x: item.rd_budget,
                y: item.rd_accepted_projects
            }));
            rdBudgetProjectsScatter.update();

            // Bar Chart - On-Time vs Total Orders
            ordersComparisonBarChart.data.labels = data.map(item => item.Year);
            ordersComparisonBarChart.data.datasets[0].data = data.map(item => item.on_time_and_successful_orders);
            ordersComparisonBarChart.data.datasets[1].data = data.map(item => item.total_orders);
            ordersComparisonBarChart.update();

        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
    }

    // Sayfa yüklendiğinde başlat
    document.addEventListener('DOMContentLoaded', () => {
        initializeCompanyAttributeCharts(); // Grafik yapılandırmasını başlat
        fetchCompanyAttributeDataAndUpdateCharts(); // PHP'den veri çek
    });
})();

