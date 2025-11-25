# MacFolio

A React-based portfolio application designed to mimic the macOS desktop environment, providing a unique and interactive user experience.

## 🚀 Features

- **macOS Desktop Interface**: A fully functional desktop environment with a Dock, Navbar, and draggable windows.
- **Interactive Windows**:
  - **Finder**: Browse files and folders.
  - **Safari**: A simulated web browser.
  - **Terminal**: A functional terminal emulator.
  - **Contact**: Contact information card.
  - **Resume**: View professional resume.
  - **Text/Image Viewers**: Open and view text and image files.
- **Draggable Interface**: Smooth window dragging and interaction using GSAP Draggable.
- **State Management**: robust state management for window focus, opening/closing, and z-index handling using Zustand.
- **Responsive Design**: Built with TailwindCSS for styling.

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations & Interactions**: [GSAP](https://gsap.com/) (GreenSock Animation Platform)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **PDF Rendering**: [React-PDF](https://react-pdf.org/)

## 📦 Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Navigate to the project directory:
    ```bash
    cd macfolio
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

## 💻 Usage

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 📂 Project Structure

- `src/components`: Reusable UI components (Dock, Navbar, etc.).
- `src/windows`: Window components for different "apps" (Finder, Safari, Terminal, etc.).
- `src/store`: Zustand store definitions.
- `src/constants`: Static data and configuration.
- `src/hoc`: Higher-order components (e.g., WindowWrapper).

## 📄 License

[MIT](LICENSE)
