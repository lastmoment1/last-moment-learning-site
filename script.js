/**
 * Last Moment - BPUT Exam Resources
 * SEO-Optimized JavaScript
 * Features: Lazy loading, Service Worker ready, Structured data injection
 * @version 2.0.0
 */

'use strict';

// ============================================
// CONFIGURATION
// ============================================
const CONFIG = {
    siteName: 'Last Moment',
    siteUrl: 'https://lastmoment.edu',
    organization: 'Last Moment Educational Resources',
    locale: 'en-IN',
    cacheVersion: 'v2.0.0',
    analyticsId: 'GA_MEASUREMENT_ID', // Replace with actual GA4 ID
    searchConsoleUrl: 'https://search.google.com/search-console'
};

// ============================================
// SUBJECT DATA: Complete B.Tech 1st Year
// ============================================
const subjectsData = {
    'physics': {
        name: 'Physics',
        code: '23BS1002',
        icon: 'fa-atom',
        description: 'Engineering Physics previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT Physics paper', 'Engineering Physics BPUT', '23BS1002 paper'],
        papers: {
            2025: { 
                url: 'https://www.bputonline.com/papers/btech-1-sem-physics-23bs1002-2025.pdf', 
                available: true,
                fileSize: 'Unknown',
                pages: '03'
            },
            2024: { 
                url: 'https://www.bputonline.com/papers/btech-mtech-2-sem-physics-23bs1002-2024.pdf', 
                available: true,
                fileSize: 'Unknown',
                pages: 'Unknown'
            },
            2023: { 
                url: 'https://www.bputonline.com/papers/btech-1-sem-physics-rph1a001-2023.pdf', 
                available: true,
                fileSize: 'Unknown',
                pages: 'Unknown'
            }
        }
    },
    'chemistry': {
        name: 'Chemistry',
        code: '23BS1003',
        icon: 'fa-flask',
        description: 'Engineering Chemistry previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT Chemistry paper', 'Engineering Chemistry BPUT', '23BS1003 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-chemistry-23bs1003-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-mtech-1-sem-chemistry-23bs1003-2024.pdf', available: true },
            2023: { url: 'https://www.bputonline.com/papers/btech-1-sem-chemistry-rch1a002-2023.pdf', available: true }
        }
    },
    'math1': {
        name: 'Mathematics - I',
        code: '23BS1001',
        icon: 'fa-square-root-variable',
        description: 'Mathematics I previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT Maths 1 paper', 'Mathematics 1 BPUT', '23BS1001 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-mathematics-1-23bs1001-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-mtech-1-sem-mathematics-1-23bs1001-2024.pdf', available: true },
            2023: { url: 'https://www.bputonline.com/papers/btech-1-sem-mathematics-1-rma1a001-2023.pdf', available: true }
        }
    },
    'math2': {
        name: 'Mathematics - II',
        code: '23BS1004',
        icon: 'fa-calculator',
        description: 'Mathematics II previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT Maths 2 paper', 'Mathematics 2 BPUT', '23BS1004 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-mtech-2-sem-mathematics-2-23bs1004-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-mtech-2-sem-mathematics-2-23bs1004-2024.pdf', available: true },
            2023: { url: 'https://www.bputonline.com/papers/btech-2-sem-mathematics-2-rma2a001-2023.pdf', available: true }
        }
    },
    'bme': {
        name: 'Basic Mechanical Engineering',
        code: '23ES1006',
        icon: 'fa-cogs',
        description: 'Basic Mechanical Engineering previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT BME paper', 'Basic Mechanical Engineering BPUT', '23ES1006 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-basic-mechanical-engineering-23es1006-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-mtech-1-sem-basic-mechanical-engineering-23es1006-2024.pdf', available: true },
            2023: { url: '', available: false }
        }
    },
    'bee': {
        name: 'Basic Electrical Engineering',
        code: '23ES1001',
        icon: 'fa-bolt',
        description: 'Basic Electrical Engineering previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT BEE paper', 'Basic Electrical Engineering BPUT', '23ES1001 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-basic-electrical-engineering-23es1001-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-mtech-2-sem-basic-electrical-engineering-23es1001-2024.pdf', available: true },
            2023: { url: 'https://www.bputonline.com/papers/btech-1-sem-basic-electrical-engineering-rbe1b001-2023.pdf', available: true }
        }
    },
    'c-ds': {
        name: 'C & Data Structure',
        code: '23ES1003',
        icon: 'fa-code',
        description: 'C Programming and Data Structures previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT C paper', 'C Programming BPUT', 'Data Structures BPUT', '23ES1003 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-programming-in-c-and-data-structure-23es1003-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-mtech-2-sem-programming-in-c-and-data-structure-23es1003-2024.pdf', available: true },
            2023: { url: '', available: false }
        }
    },
    'be': {
        name: 'Basic Electronics',
        code: '23ES1002',
        icon: 'fa-microchip',
        description: 'Basic Electronics Engineering previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT BE paper', 'Basic Electronics BPUT', '23ES1002 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-basic-electronics-23es1002-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-1-sem-basic-electronics-engineering-rbl1b002-2024.pdf', available: true },
            2023: { url: 'https://www.bputonline.com/papers/btech-1-sem-basic-electronics-engineering-rbl1b002-2023.pdf', available: true }
        }
    },
    'uhv': {
        name: 'Universal Human Values',
        code: '23HS1001',
        icon: 'fa-hands-holding-circle',
        description: 'Universal Human Values previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT UHV paper', 'Universal Human Values BPUT', '23HS1001 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-universal-human-values-23hs1001-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-1-sem-universal-human-values-23hs1001-2024.pdf', available: true },
            2023: { url: '', available: false }
        }
    },
    'civil': {
        name: 'Basic Civil Engineering',
        code: '23ES1005',
        icon: 'fa-building',
        description: 'Basic Civil Engineering previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT Civil paper', 'Basic Civil Engineering BPUT', '23ES1005 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-basic-civil-engineering-23es1005-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-mtech-1-sem-basic-civil-engineering-23es1005-2024.pdf', available: true },
            2023: { url: 'https://www.bputonline.com/papers/btech-1-sem-basic-civil-engineering-rbc1b002-2023.pdf', available: true }
        }
    },
    'mechanics': {
        name: 'Engineering Mechanics',
        code: '23ES1004',
        icon: 'fa-wrench',
        description: 'Engineering Mechanics previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT Mechanics paper', 'Engineering Mechanics BPUT', '23ES1004 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-engineering-mechanics-23es1004-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-mtech-1-sem-engineering-mechanics-23es1004-2024.pdf', available: true },
            2023: { url: 'https://www.bputonline.com/papers/btech-2-sem-engineering-mechanics-rem2b001-2023.pdf', available: true }
        }
    },
    'english': {
        name: 'English for Technical Writing',
        code: '23HS1002',
        icon: 'fa-book-open',
        description: 'English for Technical Writing previous year question papers for BPUT B.Tech 1st Year',
        keywords: ['BPUT English paper', 'Technical English BPUT', '23HS1002 paper'],
        papers: {
            2025: { url: 'https://www.bputonline.com/papers/btech-1-sem-english-for-technical-writing-23hs1002-2025.pdf', available: true },
            2024: { url: 'https://www.bputonline.com/papers/btech-mtech-1-sem-english-for-technical-writing-23hs1002-2024.pdf', available: true },
            2023: { url: 'https://www.bputonline.com/papers/btech-1-sem-communicative-english-rce1e001-2023.pdf', available: true }
        }
    }
};

// ============================================
// NAVIGATION HISTORY
// ============================================
let navHistory = ['home'];
let currentSubject = null;

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize subjects
    renderSubjects();
    
    // Initialize SEO enhancements
    initSEO();
    
    // Initialize analytics
    initAnalytics();
    
    // Initialize service worker (if supported)
    initServiceWorker();
    
    // Update meta tags dynamically
    updateMetaTags('home');
    
    // Console branding
    console.log('%c Last Moment ', 'background: linear-gradient(135deg, #2563eb, #0ea5e9); color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
    console.log('%c BPUT Exam Resources | SEO Optimized v2.0 ', 'color: #2563eb; font-size: 14px;');
});

// ============================================
// SEO ENHANCEMENTS
// ============================================
function initSEO() {
    // Add structured data for current page
    injectPageSchema();
    
    // Update document title based on URL hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Intersection Observer for lazy loading
    initLazyLoading();
}

function injectPageSchema() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'BPUT First Year Question Papers Collection',
        description: 'Complete collection of BPUT B.Tech 1st Year previous year examination papers',
        url: window.location.href,
        isPartOf: {
            '@type': 'WebSite',
            name: CONFIG.siteName,
            url: CONFIG.siteUrl
        },
        about: {
            '@type': 'EducationalOrganization',
            name: 'Biju Patnaik University of Technology',
            alternateName: 'BPUT'
        }
    });
    document.head.appendChild(script);
}

function updateMetaTags(section) {
    const titles = {
        'home': 'BPUT Previous Year Question Papers 2025 | Free PDF Download',
        'bput': 'BPUT Resources - First to Fourth Year Papers | Last Moment',
        'first-year': 'BPUT First Year Subjects - 12 Papers Collection | Last Moment',
        'papers': currentSubject ? `${subjectsData[currentSubject].name} Papers - BPUT Previous Year | Last Moment` : 'BPUT Question Papers | Last Moment'
    };
    
    const descriptions = {
        'home': 'Download FREE BPUT previous year question papers 2025, 2024, 2023. B.Tech 1st Year Physics, Chemistry, Maths, BME, BEE, C Programming PDFs.',
        'bput': 'Access BPUT B.Tech examination papers for all years. First Year available with 12 subjects. Second, Third, Fourth Year coming soon.',
        'first-year': 'BPUT B.Tech 1st Year all subjects previous year papers. Physics, Chemistry, Mathematics, BME, BEE, C & DS, Electronics, Civil, Mechanics, English.',
        'papers': currentSubject ? `Download ${subjectsData[currentSubject].name} previous year question papers. BPUT ${subjectsData[currentSubject].code} 2025, 2024, 2023 PDFs.` : 'BPUT subject-wise previous year examination papers.'
    };
    
    document.title = titles[section] || titles['home'];
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = descriptions[section] || descriptions['home'];
    
    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.content = document.title;
    if (ogDesc) ogDesc.content = descriptions[section] || descriptions['home'];
    
    // Update canonical
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.href = window.location.href;
}

function handleHashChange() {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
}

function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
    }
}

// ============================================
// ANALYTICS (Privacy-friendly)
// ============================================
function initAnalytics() {
    // Track page views
    trackEvent('page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.hash
    });
    
    // Track clicks on paper links
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href*=".pdf"]');
        if (link) {
            trackEvent('paper_download', {
                subject: currentSubject || 'unknown',
                year: link.closest('.year-paper-card')?.querySelector('.year-label')?.textContent?.trim() || 'unknown',
                url: link.href
            });
        }
    });
}

function trackEvent(eventName, params = {}) {
    // Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, params);
    }
    
    // Console log for debugging
    console.log('Analytics:', eventName, params);
}

// ============================================
// SERVICE WORKER (PWA)
// ============================================
function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered:', registration.scope);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    }
}

// ============================================
// RENDER SUBJECTS
// ============================================
function renderSubjects() {
    const grid = document.getElementById('subjects-grid');
    if (!grid) return;
    
    let html = '';
    
    Object.entries(subjectsData).forEach(([key, subject]) => {
        // Generate SEO-friendly data attributes
        const seoData = JSON.stringify({
            name: subject.name,
            code: subject.code,
            keywords: subject.keywords
        }).replace(/"/g, '&quot;');
        
        html += `
            <article class="card subject-card" 
                     onclick="showPapers('${key}')" 
                     role="listitem" 
                     tabindex="0"
                     aria-label="${subject.name} - ${subject.code} - Click to view papers"
                     data-seo="${seoData}"
                     onkeydown="if(event.key==='Enter'||event.key===' ')showPapers('${key}')">
                <div class="card-icon"><i class="fas ${subject.icon}" aria-hidden="true"></i></div>
                <h3>${subject.name}</h3>
                <span class="subject-code">${subject.code}</span>
                <span class="status-badge available" style="margin-top: 0.8rem;">
                    <i class="fas fa-file-pdf" aria-hidden="true"></i> 3 Years Papers
                </span>
                <meta itemprop="name" content="${subject.name}">
                <meta itemprop="courseCode" content="${subject.code}">
            </article>
        `;
    });
    
    grid.innerHTML = html;
}

// ============================================
// SHOW SECTION
// ============================================
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(s => {
        s.classList.remove('active');
        s.setAttribute('aria-hidden', 'true');
    });
    
    // Show target section
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active');
        target.setAttribute('aria-hidden', 'false');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Update URL hash for SEO
    window.history.pushState(null, null, `#${sectionId}`);
    
    // Update meta tags
    updateMetaTags(sectionId);
    
    // Update breadcrumb
    updateBreadcrumb(sectionId);
    
    // Update history
    if (!navHistory.includes(sectionId)) {
        navHistory.push(sectionId);
    }
    
    // Track section view
    trackEvent('section_view', { section: sectionId });
}

// ============================================
// SHOW PAPERS
// ============================================
function showPapers(subjectKey) {
    const subject = subjectsData[subjectKey];
    if (!subject) return;
    
    currentSubject = subjectKey;
    
    // Update title immediately for SEO
    updateMetaTags('papers');
    
    const titleEl = document.getElementById('paper-subject-title');
    if (titleEl) titleEl.textContent = `${subject.name} - BPUT Previous Year Papers`;
    
    const yearsRow = document.getElementById('years-row');
    if (!yearsRow) return;
    
    let html = '';
    
    [2025, 2024, 2023].forEach(year => {
        const paper = subject.papers[year];
        const isAvailable = paper && paper.available;
        
        // Generate download tracking attributes
        const trackAttrs = isAvailable ? 
            `data-subject="${subjectKey}" data-year="${year}" data-code="${subject.code}"` : '';
        
        html += `
            <article class="year-paper-card" role="listitem" aria-label="${year} ${subject.name} paper ${isAvailable ? 'available' : 'unavailable'}">
                <div class="year-label">
                    <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                    ${year} Examination
                </div>
                <div class="pap
