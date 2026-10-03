# Asim's Lab 🧪

ফোন ঘাঁটাঘাঁটির নোটবুক — বাংলায় Android টিংকারিং ব্লগ। Astro দিয়ে বানানো স্ট্যাটিক সাইট।

## চালানো

```bash
npm install
npm run dev      # লোকাল প্রিভিউ
npm run build    # dist/ তৈরি
```

## ডিপ্লয় (Vercel)

1. এই ফোল্ডারটা GitHub রিপোতে পুশ করো।
2. [vercel.com](https://vercel.com) → Add New Project → রিপো সিলেক্ট করো।
3. Framework: **Astro** (অটো-ডিটেক্ট হবে), বাকি সব ডিফল্ট → Deploy।

কাস্টম ডোমেইন থাকলে Vercel-এর Settings → Domains থেকে যোগ করো।

## ফোন থেকে পোস্ট লেখা (Decap CMS)

`/admin` পেজে Decap CMS এডিটর আছে — `public/admin/config.yml`-এর
`repo:` লাইনে নিজের GitHub `ইউজারনেম/asim-lab` বসাতে হবে, আর GitHub
backend-এর জন্য OAuth (Netlify Identity বা নিজের OAuth সার্ভার) লাগবে।

## স্ট্রাকচার

- `src/pages/` — হোম, ব্লগ ইনডেক্স, পোস্ট পেজ, পরিচিতি
- `src/content/blog/*.md` — পোস্ট (Decap এখানেই লেখে)
- `src/layouts/`, `src/styles/` — লেআউট ও থিম
- `public/admin/` — Decap CMS
