# 🔐 FaceFortify

> Your Face is Your Password

Lock sensitive folders with facial recognition. Military-grade AES-256 encryption meets cutting-edge AI. No cloud, no compromises.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20macOS-blue.svg)](https://github.com/SonuKumar-dev/FaceFortify)
[![GitHub release](https://img.shields.io/github/release/SonuKumar-dev/FaceFortify.svg)](https://github.com/SonuKumar-dev/FaceFortify/releases)

## 🌟 Features

### 👤 **Advanced Facial Recognition**
- **ArcFace AI Model** with 99%+ accuracy
- Multi-frame validation for enhanced security
- Live eye detection to prevent photo-based spoofing
- Quick 30-second face registration process

### 🔐 **Military-Grade Encryption**

- **AES-256-CBC** encryption standard
- PBKDF2 key derivation (100,000 iterations)
- Hardware-bound encryption keys tied to your specific machine
- Zero-knowledge architecture - your data never leaves your device

### 💻 **Cross-Platform Support**
- Native performance on **Windows**, **Linux**, and **macOS**
- Seamless experience across all operating systems
- Universal AppImage format for Linux distributions

### 🔒 **Multi-Layer Security**
- Hardware-bound keys (stolen drives remain encrypted)
- OS-level access control (ACL/chmod)
- Optional backup password for recovery
- Defense-in-depth security architecture

### 💾 **100% Offline & Private**
- All data stays on your device
- No cloud, no servers, no internet required
- Complete privacy - nobody can access your data but you

## 📥 Download

### Windows
**Requirements:** Windows 10 or later (64-bit)
- [Download Installer](https://github.com/SonuKumar-dev/FaceFortify/releases/latest/download/FaceFortify-Setup-1.0.0.exe) (~200 MB)
- Includes uninstaller and Start Menu integration

### Linux
**Requirements:** Linux kernel 4.0+ (x86_64)
- [Download AppImage](https://github.com/SonuKumar-dev/FaceFortify/releases/latest/download/FaceFortify-Linux-x86_64.AppImage) (~200 MB)
- Universal format for all distributions

### macOS
**Requirements:** macOS 10.15 (Catalina) or later
- [Intel Macs](https://github.com/SonuKumar-dev/FaceFortify/releases/latest/download/FaceFortify-macOS-x64.dmg) (~190 MB)
- [Apple Silicon](https://github.com/SonuKumar-dev/FaceFortify/releases/latest/download/FaceFortify-macOS-arm64.dmg) (~190 MB)

> **Note:** On macOS, right-click and select "Open" on first run

[View all releases](https://github.com/SonuKumar-dev/FaceFortify/releases) • [Installation Guide](https://facefortify.netlify.app/docs/installation)

## 🚀 Quick Start

### 1. Register Your Face
Quick 30-second face registration. The app captures 30 frames for maximum accuracy and creates your unique face profile.

### 2. Add Folders to Lock
Select any folders you want to protect - documents, photos, videos, anything you want to keep private.

### 3. Unlock with Your Face
Look at your camera to instantly unlock folders. No passwords to remember, no keys to lose.

## 🛠️ System Requirements

### Minimum Requirements
- **Webcam:** Required for facial recognition
- **Python:** 3.8 or later (installed automatically with app)
- **RAM:** 4GB minimum, 8GB recommended
- **Storage:** ~250MB for installation
- **Administrator rights** (for first-time setup)

### Windows
- Windows 10/11 (64-bit)
- .NET Framework 4.7.2+ (usually pre-installed)

### Linux
- Kernel 4.0+
- FUSE support (for AppImage)
- GTK3 libraries (usually pre-installed)

### macOS
- macOS 10.15 (Catalina) or later
- Camera permissions (granted during setup)

## 🔧 Installation

### Windows
1. Download `FaceFortify-Setup-1.0.0.exe`
2. Run the installer (your browser may warn about new software - click "Keep")
3. Follow the installation wizard
4. Launch FaceFortify from Start Menu

### Linux
1. Download `FaceFortify-Linux-x86_64.AppImage`
2. Make it executable:
   ```bash
   chmod +x FaceFortify-Linux-x86_64.AppImage
   ```
3. Run the AppImage:
   ```bash
   ./FaceFortify-Linux-x86_64.AppImage
   ```

### macOS
1. Download the appropriate DMG for your Mac
2. Open the DMG file
3. Drag FaceFortify to Applications
4. Right-click → Open (first time only)
5. Grant camera permissions when prompted

For detailed installation instructions, see the [Installation Guide](https://facefortify.netlify.app/docs/installation).

## 📖 Documentation

- **[User Guide](https://facefortify.netlify.app/docs/user-guide)** - Complete usage documentation
- **[Security Details](https://facefortify.netlify.app/docs/security)** - In-depth security architecture
- **[Installation Guide](https://facefortify.netlify.app/docs/installation)** - Platform-specific installation help
- **[Contributing Guidelines](https://github.com/SonuKumar-dev/FaceFortify/blob/main/docs/CONTRIBUTING.md)** - How to contribute
- **[Security Policy](https://github.com/SonuKumar-dev/FaceFortify/blob/main/docs/SECURITY.md)** - Reporting vulnerabilities

## 🔐 Security Architecture

FaceFortify implements defense-in-depth security with multiple layers of protection:

```
🛡️ Multi-Layer Security Stack
├── 🔐 AES-256-CBC Encryption
│   └── Military-grade encryption standard
├── 👤 Facial Recognition
│   ├── ArcFace AI model (99%+ accuracy)
│   ├── Multi-frame validation
│   └── Live eye detection
├── 💻 Hardware Binding
│   └── Keys tied to specific machine
├── 🔒 Access Control
│   └── OS-level ACL/chmod protection
└── 🔑 Key Derivation
    └── PBKDF2 (100,000 iterations)
```

### Security Features
- ✅ Zero-knowledge architecture
- ✅ Hardware-bound encryption keys
- ✅ PBKDF2 key derivation (100,000 iterations)
- ✅ OS-level access control (ACL/chmod)
- ✅ Multi-frame face validation
- ✅ Optional backup password for recovery

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Star the repository** ⭐
2. **Report bugs** by [creating an issue](https://github.com/SonuKumar-dev/FaceFortify/issues)
3. **Submit pull requests** to fix bugs or add features
4. **Improve documentation** and help others
5. **Share FaceFortify** with friends and colleagues

Please read our [Contributing Guidelines](https://github.com/SonuKumar-dev/FaceFortify/blob/main/docs/CONTRIBUTING.md) before submitting PRs.

## 🐛 Bug Reports & Feature Requests

- [Report a bug](https://github.com/SonuKumar-dev/FaceFortify/issues/new?template=bug_report.md)
- [Request a feature](https://github.com/SonuKumar-dev/FaceFortify/issues/new?template=feature_request.md)
- [View existing issues](https://github.com/SonuKumar-dev/FaceFortify/issues)

## 📊 Project Stats

- **AES-256** Encryption
- **99%+** Face Recognition Accuracy
- **100%** Private (No Cloud)
- **Cross-Platform** Support

## 🌐 Links

- **Website:** [facefortify.netlify.app](https://facefortify.netlify.app)
- **GitHub:** [github.com/SonuKumar-dev/FaceFortify](https://github.com/SonuKumar-dev/FaceFortify)
- **Releases:** [github.com/SonuKumar-dev/FaceFortify/releases](https://github.com/SonuKumar-dev/FaceFortify/releases)
- **Documentation:** [facefortify.netlify.app/docs](https://facefortify.netlify.app/docs)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 FaceFortify

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🙏 Acknowledgments

- **ArcFace** - Advanced facial recognition model
- **OpenCV** - Computer vision library
- **Cryptography.io** - Encryption implementation
- All contributors and users who help improve FaceFortify

## 💬 Support

Need help? Here are some resources:

- 📖 [User Guide](https://facefortify.netlify.app/docs/user-guide)
- 🔧 [Installation Guide](https://facefortify.netlify.app/docs/installation)
- 🐛 [Report an Issue](https://github.com/SonuKumar-dev/FaceFortify/issues)

---

<div align="center">

**Made with ❤️ by the FaceFortify Team**

[⭐ Star on GitHub](https://github.com/SonuKumar-dev/FaceFortify) • [🐛 Report Bug](https://github.com/SonuKumar-dev/FaceFortify/issues) • [🔀 Fork & Contribute](https://github.com/SonuKumar-dev/FaceFortify/fork)

</div>
