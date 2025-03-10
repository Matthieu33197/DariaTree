import Image from 'next/image';
import TreeLink from '../app/components/tree';

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#AB89D7]">
      <main className="relative flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
        <div className="absolute -top-36 left-30 w-72 h-72 bg-[#362A66] rounded-full shadow-lg z-0"></div>
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#362A66] rounded-full shadow-lg drop-shadow-2xl z-10"></div>
        <div className="absolute top-52 -right-4 w-32 h-32 bg-[#362A66] rounded-full shadow-lg drop-shadow-2xl z-10"></div>
        <div className="absolute -bottom-10 -right-4 w-40 h-40 bg-[#362A66] rounded-full shadow-lg drop-shadow-2xl z-0"></div>
        <div className="absolute bottom-14 -right-6 w-32 h-32 bg-[#362A66] rounded-full shadow-lg drop-shadow-2xl z-10"></div>
        <div className="absolute bottom-52 -left-10 w-32 h-32 bg-[#362A66] rounded-full shadow-lg drop-shadow-2xl z-0"></div>
        <div className="absolute bottom-32 -left-14 w-40 h-40 bg-[#362A66] rounded-full shadow-lg drop-shadow-2xl z-10"></div>
        <div className="absolute bottom-20 left-40 w-full h-full z-10 flex justify-center -rotate-45">
          <div className="relative w-28 h-28 md:w-48 md:h-48">
            <Image
              className="object-cover w-full h-full absolute"
              src="/kuromi1.png"
              alt="Kuromi Image"
              layout="fill"
              priority
            />
          </div>
        </div>
        <div className="absolute -bottom-9 -right-10 w-28 h-28 md:w-48 md:h-48 z-10 flex justify-center -rotate-12">
          <div className="relative w-full h-full">
            <Image
              className="object-cover w-full h-full absolute"
              src="/kuromi2.png"
              alt="Kuromi Image"
              layout="fill"
              priority
            />
          </div>
        </div>
        <div className="absolute top-64 right-0 transform -translate-y-1/2 w-28 h-28 md:w-48 md:h-48 z-10 flex justify-center -rotate-12">
          <div className="relative w-full h-full">
            <Image
              className="object-cover w-full h-full absolute"
              src="/kuromi3.png"
              alt="Kuromi Image"
              layout="fill"
              priority
            />
          </div>
        </div>
        <div className="absolute top-60 -left-7 transform -translate-y-1/2 w-28 h-28 md:w-48 md:h-48 z-10 flex justify-center rotate-45">
          <div className="relative w-full h-full">
            <Image
              className="object-cover w-full h-full absolute"
              src="/kuromi4.png"
              alt="Kuromi Image"
              layout="fill"
              priority
            />
          </div>
        </div>
        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center text-center space-y-4 md:space-y-6 z-20 top-6">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden relative z-30">
            <Image
              className="object-cover w-full h-full"
              src="/profil.PNG"
              alt="Profile Picture"
              width={128}
              height={128}
              priority
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-black">Deathless.3</h1>
          <p className="text-sm md:text-base text-black">Welcome to my link tree. Follow me on my socials and check out my latest content!</p>
        </div>

        <div className="relative w-full max-w-5xl flex flex-col items-center justify-center space-y-3 md:space-y-4 mt-8 md:mt-10 z-20 top-6">
          <TreeLink href="https://www.instagram.com/_deathless.3?igsh=MWJ6eXRtZng0a2NwbA%3D%3D&utm_source=qr" title="Instagram" description="Lifestyle + Korean studying" />
          <TreeLink href="https://youtube.com/@deathless.3?si=rzb7tuHZvngasPYZ" title="YouTube" description="Vlogs - About my life - Makeup" />
          <TreeLink href="https://bead-beginner-30b.notion.site/1-a73a720c17494ad5af8e3c55be5c003d?pvs=4" title="My first FREE lesson (ukr)" description="1st free lesson Ukr" />
          <TreeLink href="https://t.me/koreanfrogs" title="Telegram" description="Join my telegram channel to get all updates on my lessons" />
          <TreeLink href="https://www.tiktok.com/@deathless_.3?_t=8ntshtbkNex&_r=1" title="TikTok" description="Check out my TikTok videos" />
        </div>

        <footer className="relative w-full max-w-5xl flex items-center justify-center py-4 z-20 top-6">
          <p className="text-sm md:text-base text-black">© 2024 _deathless.3. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
