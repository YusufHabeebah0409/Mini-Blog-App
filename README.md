# 📝 Mini Blog Web App

A simple blog application built with **Angular** where users can:

* Create, read, edit, and delete blog posts
* Sign up and sign in with local storage authentication
* View all blogs from different users
* Manage their own blogs separately

This project is built for learning purposes and uses **localStorage** as a database substitute.

---

## 🚀 Features

✅ User authentication (Sign Up / Sign In)
✅ Create new blog posts with a title and content
✅ View all blogs and individual blog details
✅ Edit existing blog posts
✅ Delete blogs from the "My Blog" page
✅ Responsive design with mobile navigation (hamburger menu)
✅ Author information displayed on each blog post

---

## 🛠️ Tech Stack

* **Frontend Framework:** Angular
* **Language:** TypeScript
* **UI/Styling:** HTML, CSS
* **Storage:** Browser LocalStorage
* **Extras:** Angular Material (SnackBar for notifications)

---

## 📂 Project Structure

```plaintext
src/
 ├── app/
 │   ├── auth/
 │   │   ├── sign-in/
 │   │   ├── sign-up/
 │   ├── blog/
 │   │   ├── create-blog/
 │   │   ├── blog-list/
 │   │   ├── my-blog/
 │   │   ├── post-detail/
 │   │   ├── edit-blog/
 │   ├── app-routing.module.ts
 │   ├── app.component.ts
 │   └── app.module.ts
 ├── assets/
 └── styles.css
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/mini-blog.git
cd mini-blog
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
ng serve
```

4. Open your browser and visit:

```
http://localhost:4200/
```

---
**Usage**

1. **Sign Up** as a new user (your data will be stored in localStorage).
2. **Sign In** using your credentials.
3. Create blogs from the **Create Blog** page.
4. View all blogs under **All Blogs**.
5. Manage your own blogs under **My Blog** (Edit/Delete available).
6. Log out anytime from the navigation bar.

---

**Future Improvements**

* Replace localStorage with a real backend (Node.js + MongoDB / Firebase).
* Add a rich text editor for blog content.
* Implement user profile pages.
* Enable image uploads in blogs.
* Add likes & comments feature.


---

**Author: Habeebah Ojuolape**

* [GitHub](https://github.com/YusufHabeebah0409)
* [LinkedIn](www.linkedin.com/in/habeebahojuolape)
* [Twitter](https://x.com/Habeebahpe)

