# Sankalp Chakravorty - Personal Portfolio Website

This repository contains the complete source code for a dynamic, multi-page, and fully responsive personal portfolio website. Built with a "high mindset" aesthetic, it features a dark, luxurious, and glassy (glassmorphism) design, projecting a professional and modern aura.

The entire website is built using only vanilla **HTML5**, **CSS3**, and **JavaScript (ES6+)**, with no external frameworks or libraries beyond icons and fonts.

---

---

## ✨ Core Features

This is not just a static site. It incorporates modern web features to create an engaging user experience:

-   **Stunning Design Aesthetic:**
    -   **Glassmorphism:** Key elements like the navigation bar, cards, and buttons have a translucent, blurred glass effect.
    -   **Fluid Animated Background:** A multi-layered, animated gradient of "blobs" moves smoothly across the page, creating a dynamic and visually appealing backdrop.
    -   **Luxurious Dark/Light Mode:** A fully functional theme toggler that respects user's system preference and saves their choice in `localStorage`.

-   **Dynamic & Interactive Elements:**
    -   **On-Scroll Animations:** Content sections smoothly fade and slide into view as the user scrolls down the page.
    -   **Engaging Hover Effects:** Every interactive element, from project cards to skill icons and timeline entries, provides satisfying visual feedback on hover.
    -   **Typewriter Effect:** The homepage hero section features an animated typewriter that cycles through professional titles.

-   **Functional & Well-Structured:**
    -   **Multi-Page Architecture:** A clean separation of content into five distinct pages: Home, About, Projects, Experience, and Contact.
    -   **Fully Responsive:** The layout seamlessly adapts to all screen sizes, from large desktops to mobile devices, with a functional hamburger menu for mobile navigation.
    -   **Working Contact Form:** Integrated with **Formspree** to handle form submissions directly to your email without requiring a backend.
    -   **Optimized for Readability:** Uses modern fonts (Poppins) from Google Fonts for crisp, clean typography.

-   **Rich Content Sections:**
    -   An interactive hero section with a unique decorative circle layout.
    -   A visually rich "About" page with separate, styled sections for Technical Skills (with logos and tooltips), Professional Skills (with icons), and a distinct design for Coursework.
    -   Enhanced timelines for both Education and Professional Experience.
    -   Stylish project cards featuring image overlays, highlighted tech stacks, and links.

---

## 🛠️ Tech Stack

This project is intentionally built with a focus on core web technologies.

-   **Frontend:**
    -   HTML5
    -   CSS3 (utilizing Flexbox, Grid, Custom Properties/Variables, and Keyframe Animations)
    -   Vanilla JavaScript (ES6+) (handling DOM manipulation, Intersection Observer API, and `fetch` for the contact form)

-   **Services & Libraries:**
    -   **Formspree:** For the backend processing of the contact form.
    -   **Google Fonts:** For the 'Poppins' font family.
    -   **Font Awesome:** For a wide range of high-quality icons.
    -   **Devicon:** For programming language and tool logos in the skills section.

---
## 🚀 Setup and Installation

This is a static website and requires no complex setup or build process.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repository-name
    ```

3.  **Open in Browser:**
    -   Simply open the `index.html` file in your web browser of choice (like Chrome, Firefox, or Edge).


---

## 🎨 Customization

This portfolio is designed to be easily customized:

1.  **Content:** All personal information (name, bio, project descriptions, experience, education) is located directly in the `.html` files. Edit the text in these files to reflect your own data.

2.  **Color Palette:** The entire color scheme can be changed in minutes.
    -   Open `style.css`.
    -   At the very top, locate the `body[data-theme="dark"]` and `body[data-theme="light"]` sections.
    -   Change the values of the CSS variables (e.g., `--accent-color`, `--blob-color-1`) to your desired colors.

3.  **Images:**
    -   To change the profile picture, replace `profilr.jpg` (or the placeholder URL) in `style.css` within the `.profile-picture` rule.
    -   To change project images, update the `background-image` URL in the `.project-image` styles within `projects.html`.

---


