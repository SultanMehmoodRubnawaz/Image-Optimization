```markdown
# 🖼️ Next.js Image Compressor

A modern image compression tool built with **Next.js 13 (App Router)**, **React**, **TailwindCSS**, and **Sharp**.  
Easily upload images, adjust quality (0–100%), and download optimized files without changing dimensions.  

---

## 🚀 Features
- 📂 Upload and preview images instantly  
- 🎚️ Adjust compression quality with a slider  
- ⚡ Compress images on the server using Sharp  
- 💾 Download optimized images  
- 🎨 Responsive UI with TailwindCSS  
- 🔒 Secure & efficient API routes (Next.js App Router)  

---

## 🛠️ Tech Stack
- **Next.js 13 (App Router)**
- **React**
- **TailwindCSS**
- **Sharp** (image compression)

---

## 📸 Demo
Upload an image → Select quality (0–100%) → Click **Apply** → Download optimized image 🚀

---

## 📂 Project Structure
```

src/
├── app/
│   ├── api/
│   │   └── compress/route.js   # Compression API (Sharp)
│   ├── page.js                 # Home Page
│   └── components/
│       └── FileSetting.jsx      # Image preview & settings
└── styles/

````

---

## ⚙️ Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/nextjs-image-compressor.git
   cd nextjs-image-compressor
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 🔧 Usage

1. Upload an image
2. Adjust the quality slider
3. Hit **Apply**
4. Download the optimized image

---

## 📜 License

MIT License © 2025 \[Your Name]

---