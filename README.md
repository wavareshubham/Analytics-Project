# College Club Social Media Analytics Dashboard

> A complete, polished frontend prototype built specifically for college clubs and student chapters to monitor multi-platform engagement, sentiment, and social telemetry across **Instagram, LinkedIn, GitHub, and Facebook**.

Built strictly with **Pure HTML5, CSS3, and Vanilla JavaScript** — Zero React, Vite, Tailwind, Bootstrap, Node.js, databases, or external backend dependencies.

---

## 🚀 Live Prototype Demo

Simply open `index.html` in any web browser (Chrome, Firefox, Safari, Edge):
```bash
# Double-click index.html or launch via command line:
start index.html
```

---

## 🌟 Key Features

### 1. Multi-Platform College Club Telemetry
Track analytics across student social and developer platforms:
- **Instagram**: Campus stories, event reels, visual reach, student follower growth.
- **LinkedIn**: Alumni networking, technical speaker sessions, department spotlights.
- **GitHub**: Student chapter open source repositories, starter kits, commits, stargazers, forks, and PR discussions.
- **Facebook**: College community groups and parent/alumni updates.

### 2. Standardized Engagement Formula
$$\text{Engagement Score} = \text{Likes} + (2 \times \text{Comments}) + (3 \times \text{Shares}) + \left(\frac{\text{Views}}{100}\right)$$

### 3. College & Club Selector
Dynamically toggle between colleges and benchmark student chapters:
- **College**: *Rajarshi Shahu College of Engineering (RSCOE)*, *COEP*, *PCCOE*.
- **Chapters**:
  - **Coding Club**: 2,450 Followers &bull; 48 Posts &bull; 6,840 Engagement &bull; 8.4% Rate
  - **AI & ML Club**: 3,200 Followers &bull; 56 Posts &bull; 8,120 Engagement &bull; 9.1% Rate
  - **Robotics Club**: 2,100 Followers &bull; 39 Posts &bull; 5,210 Engagement &bull; 7.8% Rate
  - **IEEE Student Chapter**: 4,100 Followers &bull; 67 Posts &bull; 9,650 Engagement &bull; 10.2% Rate
  - **Entrepreneurship Cell**: 2,850 Followers &bull; 44 Posts &bull; 7,340 Engagement &bull; 8.7% Rate

### 4. Interactive Native Canvas Charts
High-DPI responsive charts drawn with pure Vanilla JS math:
1. **Weekly Engagement Trend**: 7-day Bézier curved area chart with interaction gradients.
2. **Followers Growth (Last 6 Months)**: Trajectory from May through October.
3. **Sentiment Distribution Donut**: Multi-segment arc chart with central percentage.
4. **Platform Performance Comparison**: Clustered multi-bar comparison (Instagram, LinkedIn, GitHub, Facebook).

### 5. Posts Analytics
- Search by keyword, topic, or hashtag.
- Filter by platform (Instagram, LinkedIn, GitHub, Facebook).
- Sort by Engagement Score, Date, Likes, or Views.
- Modal inspection showing detailed score breakdown.

### 6. Sentiment Feedback Intelligence
- Simulated student feedback classification: Positive, Neutral, Negative.
- Topic tag cloud highlighting praise and venue/logistical feedback.
- Real-time comment stream filterable by sentiment category.

### 7. Executive Reporting & Export
- Formatted executive summary for faculty advisors and student councils.
- **Generate Report**: Recalculates metrics with unique timestamp and Report ID.
- **Print Report**: Formatted using `@media print` for clean single/two-page PDF printouts.
- **Download Report (CSV)**: Generates and downloads an analytics `.csv` file.

### 8. Customization & Dark Theme
- Persistent Light/Dark theme toggle.
- Settings stored in `localStorage`.
- Configurable club GitHub repository links.

---

## 📁 File Structure

```text
├── index.html        # Semantic HTML5 architecture & UI layout
├── style.css         # Modern SaaS styles, CSS variables, dark/light theme, print CSS
├── script.js         # Vanilla JS data store, canvas charts, reactivity & storage
└── README.md         # Project documentation & GitHub push guide
```

---

## 🛠️ Pushing to Your GitHub Repository

To host this project on your personal or college GitHub account:

```bash
# 1. Initialize local repository
git init

# 2. Stage all files
git add .

# 3. Commit files
git commit -m "feat: College Club Social Media Analytics Dashboard with GitHub integration"

# 4. Set main branch
git branch -M main

# 5. Link your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push to GitHub
git push -u origin main
```

---

*College Club Social Media Analytics — Prototype*
