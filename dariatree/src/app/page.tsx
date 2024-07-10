import Image from 'next/image';
import TreeLink from '../app/components/tree';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center space-y-4 md:space-y-6">
        <Image
          className="aspect-square rounded-full"
          src="/profil.PNG" // Remplacez par votre photo de profil
          alt="Profile Picture"
          width={100}
          height={100}
          priority
        />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">_deathless.3</h1>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">Welcome to my link tree. Follow me on my socials and check out my latest content!</p>
      </div>

      <div className="w-full max-w-5xl flex flex-col items-center justify-center space-y-3 md:space-y-4 mt-8 md:mt-10">
        <TreeLink href="https://www.instagram.com/_deathless.3?igsh=MWJ6eXRtZng0a2NwbA%3D%3D&utm_source=qr" title="Instagram" description="Follow me on Instagram" />
        <TreeLink href="https://youtube.com/@deathless.3?si=rzb7tuHZvngasPYZ" title="YouTube" description="Subscribe to my YouTube channel" />
        <TreeLink href="https://bead-beginner-30b.notion.site/1-a73a720c17494ad5af8e3c55be5c003d?pvs=4" title="Lesson #1" description="1st free lesson Ukr" />
        <TreeLink href="https://t.me/koreanfrogs" title="Telegram" description="Join my telegram channel to get all updates on my lesson" />
        <TreeLink href="https://www.tiktok.com/@deathless_.3?_t=8ntshtbkNex&_r=1" title="TikTok" description="Check out my TikTok videos" />
      </div>

      <footer className="w-full max-w-5xl flex items-center justify-center py-4">
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">© 2024 _deathless.3. All rights reserved.</p>
      </footer>
    </main>
  );
}
