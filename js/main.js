// FaceFortify Website Premium Command Console Logic

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Navbar Active states
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

// Mobile Hamburg Menu Toggle
const hamburger = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Light & Dark theme storage toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light-mode');
        themeToggle.textContent = isLight ? '☀️' : '🌙';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        document.body.classList.remove('light-mode');
        themeToggle.textContent = '🌙';
    }
}

// Interactive Scientific Diagnostic Tabs
const diagButtons = document.querySelectorAll('.diag-tab-btn');
const diagPanels = document.querySelectorAll('.diag-panel-content');
diagButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        diagButtons.forEach(b => b.classList.remove('active'));
        diagPanels.forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        const activePanel = document.getElementById(tabId);
        if (activePanel) {
            activePanel.classList.add('active');
        }
    });
});

// Simulated Folder list explorer items
let mockFiles = [
    { id: 0, name: 'Documents', size: '1.2 GB', type: 'Directory', originalName: 'Documents', locked: false, selected: false },
    { id: 1, name: 'Private_Images', size: '840 MB', type: 'Directory', originalName: 'Private_Images', locked: false, selected: false },
    { id: 2, name: 'Secret_Vault', size: '3.4 GB', type: 'Directory', originalName: 'Secret_Vault', locked: false, selected: false },
    { id: 3, name: 'crypto_keys.key', size: '2 KB', type: 'Key File', originalName: 'crypto_keys.key', locked: false, selected: false },
];

const listBody = document.getElementById('directory-list-body');
const lockCountLabel = document.getElementById('lock-count-label');
const btnLock = document.getElementById('btn-lock-files');
const btnUnlock = document.getElementById('btn-unlock-files');
const consoleLogs = document.getElementById('explorer-console-logs');
const scanLaser = document.getElementById('row-scan-laser');

function logConsole(msg) {
    if (consoleLogs) {
        const line = document.createElement('div');
        line.className = 'console-line';
        line.textContent = `> ${msg}`;
        consoleLogs.appendChild(line);
        consoleLogs.scrollTop = consoleLogs.scrollHeight;
    }
}

function updateLabels() {
    if (lockCountLabel) {
        const selectedCount = mockFiles.filter(f => f.selected).length;
        const lockedCount = mockFiles.filter(f => f.locked).length;
        lockCountLabel.textContent = `LOCKED: ${lockedCount} // SELECT: ${selectedCount}`;
    }
}

function renderExplorer() {
    if (!listBody) return;
    listBody.innerHTML = '';

    mockFiles.forEach(file => {
        const tr = document.createElement('tr');
        tr.className = `explorer-tr ${file.selected ? 'selected' : ''} ${file.locked ? 'locked-row' : ''}`;

        const lockIcon = file.locked ? '🔒' : '📁';
        const fileIcon = file.type === 'Key File' ? '🔑' : lockIcon;
        const currentName = file.name;
        const currentPermission = file.locked ? 'SECURELY ENCRYPTED (AES-256)' : 'Read/Write (Unlocked)';

        tr.innerHTML = `
            <td class="explorer-td"><span class="file-select-checkbox"></span></td>
            <td class="explorer-td"><span class="file-name-cell">${fileIcon} ${currentName}</span></td>
            <td class="explorer-td">${file.size}</td>
            <td class="explorer-td">${file.type}</td>
            <td class="explorer-td monospace">${currentPermission}</td>
        `;

        // Select row click listener (except when locked)
        tr.addEventListener('click', (e) => {
            if (file.locked) {
                logConsole(`Cannot select: ${file.originalName} is locked under active encryption.`);
                return;
            }
            file.selected = !file.selected;
            renderExplorer();
            updateLabels();
        });

        listBody.appendChild(tr);
    });
}

// Initial render
renderExplorer();

if (btnLock && btnUnlock) {
    btnLock.addEventListener('click', () => {
        const selectedToLock = mockFiles.filter(f => f.selected && !f.locked);
        if (selectedToLock.length === 0) {
            logConsole("No directories selected for locking.");
            return;
        }

        btnLock.disabled = true;
        btnUnlock.disabled = true;
        if (scanLaser) scanLaser.classList.add('active');

        logConsole("Requesting Face scan verification...");
        logConsole("Initializing local ArcFace neural network weights...");

        setTimeout(() => {
            logConsole("Face match verified: Authorized User (Accuracy: 99.85%)");
            logConsole("Verifying eye movement coordinates: CONFIRMED");

            setTimeout(() => {
                logConsole("Deriving hardware ID bind key hashes...");
                logConsole("Processing PBKDF2 stretching iterations (100,000 passes)...");

                setTimeout(() => {
                    logConsole("Locking directories sequentially...");
                    selectedToLock.forEach(file => {
                        file.locked = true;
                        file.selected = false;
                        // Transform name into mock MD5/AES hash string
                        file.name = `${file.originalName.toLowerCase().replace(/[^a-z]/g, '')}_${Math.random().toString(36).substring(2, 10)}.enc`;
                        logConsole(`Protected: ${file.originalName} -> Encrypted to cipher hash.`);
                    });

                    setTimeout(() => {
                        if (scanLaser) scanLaser.classList.remove('active');
                        btnLock.disabled = false;
                        btnUnlock.disabled = false;
                        renderExplorer();
                        updateLabels();
                        logConsole("All selected directories successfully secured!");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1200);
    });

    btnUnlock.addEventListener('click', () => {
        const lockedList = mockFiles.filter(f => f.locked);
        if (lockedList.length === 0) {
            logConsole("No directories are locked currently.");
            return;
        }

        btnLock.disabled = true;
        btnUnlock.disabled = true;
        if (scanLaser) scanLaser.classList.add('active');

        logConsole("Decrypt request initiated. Scanning face signature...");

        setTimeout(() => {
            logConsole("Biometric match confirmed. Applying key matrix...");
            logConsole("Releasing OS-level ACL block permissions...");

            setTimeout(() => {
                lockedList.forEach(file => {
                    file.locked = false;
                    file.selected = false;
                    file.name = file.originalName;
                });

                setTimeout(() => {
                    if (scanLaser) scanLaser.classList.remove('active');
                    btnLock.disabled = false;
                    btnUnlock.disabled = true; // disable decrypt button as all unlocked
                    renderExplorer();
                    updateLabels();
                    logConsole("All directories decrypted successfully!");
                }, 1000);
            }, 1000);
        }, 1200);
    });
}

// Immersive Cockpit Console Telemetry coordinates logger
const cockpitReadout = document.getElementById('cockpit-readout');
if (cockpitReadout) {
    setInterval(() => {
        const lines = [
            `> face_matrix_coords: X:${(Math.random() * 100).toFixed(2)} Y:${(Math.random() * 100).toFixed(2)} Z:${(Math.random() * 50).toFixed(2)}`,
            `> eye_tracking_confidence: ${(85 + Math.random() * 14).toFixed(1)}%`,
            `> landmarks_captured: ${Math.floor(25 + Math.random() * 6)}/30`,
            `> system_load_status: nominal`,
            `> pbkdf2_hash_speed: ${(110 + Math.random() * 20).toFixed(0)}ms`
        ];
        const randomLine = lines[Math.floor(Math.random() * lines.length)];

        const lineElement = document.createElement('div');
        lineElement.className = 'readout-line';
        lineElement.textContent = randomLine;
        cockpitReadout.appendChild(lineElement);

        if (cockpitReadout.children.length > 5) {
            cockpitReadout.removeChild(cockpitReadout.firstElementChild);
        }
    }, 2500);
}

// Terminal-Style Download script logic
const platformShells = {
    windows: [
        {
            text: 'powershell -Command "iwr -useb https://facefortify.netlify.app/install.ps1 | iex"',
            isCmd: true,
            downloadLink: 'https://github.com/SonuKumar-dev/FaceFortify/releases/download/v1.2.0/FaceFortify-Setup-1.2.0.exe',
            portableLink: 'https://github.com/SonuKumar-dev/FaceFortify/releases/download/v1.2.0/FaceFortify-Portable-1.2.0.zip'
        },
        { text: 'Checking system compatibility... Windows 10/11 x64 detected.', isCmd: false },
        { text: 'Downloading FaceFortify Installer (~200MB)...', isCmd: false },
        { text: 'Installation directory set: C:\\Program Files\\FaceFortify', isCmd: false }
    ],
    linux: [
        {
            text: 'curl -fsSL https://facefortify.netlify.app/install.sh | sh',
            isCmd: true,
            downloadLink: 'https://github.com/SonuKumar-dev/FaceFortify/releases/download/v1.0.0/FaceFortify-1.0.0.AppImage',
            portableLink: 'https://github.com/SonuKumar-dev/FaceFortify/releases/download/v1.0.0/FaceFortify-1.0.0.tar.gz'
        },
        { text: 'Checking CPU architecture... x86_64 FUSE supported.', isCmd: false },
        { text: 'Downloading FaceFortify Universal AppImage...', isCmd: false },
        { text: 'Symlinking application to /usr/local/bin/facefortify...', isCmd: false }
    ],
    macos: [
        {
            text: 'curl -fsSL https://facefortify.netlify.app/mac-install.sh | bash',
            isCmd: true,
            downloadLink: 'https://github.com/SonuKumar-dev/FaceFortify/releases/download/v1.0.0/FaceFortify-1.0.0.dmg',
            portableLink: 'https://github.com/SonuKumar-dev/FaceFortify/releases/download/v1.0.0/FaceFortify-Portable-1.0.0-mac.zip'
        },
        { text: 'System detected: Apple Silicon CPU.', isCmd: false },
        { text: 'Downloading FaceFortify-macOS-arm64.dmg...', isCmd: false },
        { text: 'Running bypass quarantine command: xattr -cr /Applications/FaceFortify.app', isCmd: false }
    ]
};

const shellOutput = document.getElementById('shell-cmd-output');
const downloadBtn = document.getElementById('btn-direct-download');
const portableBtn = document.getElementById('btn-portable-download');
const copyBtn = document.getElementById('btn-copy-shell');
const platformTabBtns = document.querySelectorAll('.console-tab-btn');
let activePlatform = 'windows';

function renderShell(platform) {
    if (!shellOutput) return;
    shellOutput.innerHTML = '';

    const lines = platformShells[platform];
    lines.forEach(line => {
        const div = document.createElement('div');
        div.className = `shell-line ${line.isCmd ? 'cmd' : 'output'}`;
        div.textContent = line.text;
        shellOutput.appendChild(div);
    });

    // Update Direct & Portable Download Links
    const activeLine = lines.find(l => l.downloadLink);
    if (downloadBtn) {
        downloadBtn.href = activeLine ? activeLine.downloadLink : '#';
    }
    if (portableBtn) {
        portableBtn.href = activeLine ? activeLine.portableLink : '#';
    }
}

// Initial Shell Render
renderShell(activePlatform);

platformTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        platformTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        activePlatform = btn.getAttribute('data-platform');
        renderShell(activePlatform);
    });
});

if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        const activeCmd = platformShells[activePlatform].find(l => l.isCmd);
        if (activeCmd) {
            navigator.clipboard.writeText(activeCmd.text).then(() => {
                copyBtn.textContent = 'COPIED!';
                setTimeout(() => {
                    copyBtn.textContent = 'COPY COMMAND';
                }, 2000);
            });
        }
    });
}

// Konami Code sequence easter egg
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);

    if (konamiCode.join(',') === konamiSequence.join(',')) {
        console.log('🎮 Konami Code activated! You found the secret!');
        document.body.style.animation = 'rainbow 3s linear infinite';
        logConsole("EASTER EGG ACTIVATED: Konami Rainbow Mode!");
    }
});
