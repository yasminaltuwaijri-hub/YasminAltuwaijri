import { personal } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line px-6 py-8 sm:px-10">
      <div className="mx-auto flex max-w-content flex-col gap-3 font-mono text-xs text-soft sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Yasmin Altuwaijri</p>
        <p dir="rtl" lang="ar" className="font-body text-sm text-blue">
          الحمدلله دايماً وأبداً
        </p>
        <p>{personal.locations.join(" · ")}</p>
      </div>
    </footer>
  );
}
