// Dados dos Componentes
const casesSucesso = [
    {
        cliente: "Fazenda Santa Maria",
        texto: "Reduzimos em 40% o uso de fertilizantes nitrogenados mantendo o mesmo nível de produtividade.",
        local: "MT - Brasil"
    },
    {
        cliente: "AgroExport Sul",
        texto: "O monitoramento via satélite nos salvou de uma infestação que custaria milhões em perdas.",
        local: "PR - Brasil"
    }
];

const faqs = [
    {
        pergunta: "A sustentabilidade realmente aumenta o lucro?",
        resposta: "Sim. Práticas sustentáveis reduzem o desperdício de insumos, melhoram a resiliência do solo contra secas e abrem portas para mercados internacionais premium."
    },
    {
        pergunta: "É necessário trocar todo o maquinário?",
        resposta: "Não. Nossa tecnologia é integrável. Focamos em software de gestão e ajustes precisos no manejo atual."
    },
    {
        pergunta: "Como funciona o monitoramento de carbono?",
        resposta: "Utilizamos sensores de solo e dados geoespaciais para calcular o sequestro de carbono, gerando relatórios prontos para certificações."
    }
];

// Renderização de Componentes
function renderCarousel() {
    const container = document.getElementById('carousel-container');
    container.innerHTML = casesSucesso.map(item => `
        <div class="carousel-item">
            <p>"${item.texto}"</p>
            <strong>- ${item.cliente} (${item.local})</strong>
        </div>
    `).join('');
}

function renderAccordion() {
    const container = document.getElementById('accordion-container');
    container.innerHTML = faqs.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(${index})">
                ${item.pergunta}
            </button>
            <div class="accordion-body" id="faq-${index}">
                ${item.resposta}
            </div>
        </div>
    `).join('');
}

function toggleAccordion(index) {
    const content = document.getElementById(`faq-${index}`);
    const isActive = content.classList.contains('active');
    
    // Fecha todos
    document.querySelectorAll('.accordion-body').forEach(el => el.classList.remove('active'));
    
    // Abre o clicado se não estava ativo
    if (!isActive) content.classList.add('active');
}

// Lógica de Acessibilidade
let currentFontSize = 16;
const htmlRoot = document.documentElement;

document.getElementById('increase-font').addEventListener('click', () => {
    if (currentFontSize < 24) {
        currentFontSize += 2;
        htmlRoot.style.setProperty('--font-base', currentFontSize + 'px');
    }
});

document.getElementById('decrease-font').addEventListener('click', () => {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        htmlRoot.style.setProperty('--font-base', currentFontSize + 'px');
    }
});

document.getElementById('toggle-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderCarousel();
    renderAccordion();
});