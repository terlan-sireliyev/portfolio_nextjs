"use client";
import { useEffect, useState } from "react";

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl bg-white/10 backdrop-blur-lg rounded-xl  text-white shadow-lg">
        {isClient && (
          <div className="min-h-screen  flex items-center justify-center">
            <div className="max-w-3xl bg-white/10 backdrop-blur-lg rounded-xl text-white shadow-lg">
              <h1 className="text-3xl px-4 py-4 rounded-border5 font-bold text-center mb-4 bg-leftBgOne text-leftTextColorWhite">
                Salam! Mən dinamik və həssas veb proqramlar yaratmaqda
                ixtisaslaşmış Veb Tərtibatçıyam
              </h1>
              <p className="text-lg leading-8 px-4 py-4 rounded-border5  bg-leftBgOne text-leftTextColorWhite">
                Mənim həvəsim performans, funksionallıq və müasir dizaynı
                birləşdirən qüsursuz rəqəmsal təcrübələr yaratmaqdır. Təcrübəli
                <b className="text-leftTextColorRed"> MERN</b> Stack Developer
                kimi mən
                <b className="text-leftTextColorGreen px-2">
                  MongoDB, Express.js, React.js və Node.js
                </b>
                ilə stack həlləri yaratmaqda ixtisaslaşıram. Mən miqyaslana
                bilən arxitekturaların layihələndirilməsi,
                <b className="text-leftTextColorGreen">
                  RESTful API-lərin
                </b>{" "}
                tətbiqi və biznes məqsədlərinə cavab verən möhkəm, real
                proqramlar təqdim etməkdə uğur qazanıram.
              </p>
              <p className="text-lg leading-8 mt-4 bg-leftBgOne px-4 py-4 rounded-border5 text-leftTextColorWhite">
                React Developer kimi təcrübəmlə mən state management üçün
                <b className="text-leftTextColorGreen px-[2px]">
                  Redux Toolkit və Zustand
                </b>
                kimi alətlərdən istifadə edərək intuitiv və interaktiv
                istifadəçi interfeysləri inkişaf etdirirəm. Mən tətbiqlərin
                bütün cihazlarda uyğunlaşa bilən və təkrar istifadə edilə bilən
                komponentlərə,əlçatanlığa və həssas dizayna üstünlük verirəm.
              </p>
              <p className="text-lg leading-8 mt-4 px-4 py-4 rounded-border5 bg-leftBgOne text-leftTextColorWhite">
                <b className="text-leftTextColorGreen pr-2">
                  HTML, CSS, SCSS, LESS, Bootstrap, Tailwind, Material-UI və
                  Git/GitHub
                </b>
                ilə versiyaya nəzarət kimi müasir texnologiyalar və alətlərdə
                bacarıqlıyam. Texniki bacarıqlarımı dizayna diqqət yetirməklə
                birləşdirərək, hər bir layihənin həm estetik, həm də texniki
                cəhətdən sağlam olmasını təmin edirəm.
              </p>
              <p className="text-lg leading-8 mt-4 px-4 py-4 rounded-border5 bg-leftBgOne text-leftTextColorWhite">
                <div className="text-center ">
                  <b className="text-leftTextColorGreen ">Əsas Bacarıqlarım:</b>
                </div>
                <b className="text-leftTextColorRed pr-2">
                  Frontend Development:
                </b>
                React.js, Next.js, JavaScript (ES6+) <br />
                <b className="text-leftTextColorRed pr-2">
                  Backend Development:
                </b>
                Node.js, Express.js <br />
                <b className="text-leftTextColorRed pr-2">
                  Database Management:
                </b>
                MongoDB ,
                <br />
                <b className="text-leftTextColorRed pr-2"> UI/UX Design:</b>
                MongoDB , Tailwind, Material-UI, SCSS, LESS, Bootstrap <br />
                <b className="text-leftTextColorRed pr-2">State Management:</b>
                Redux Toolkit, Zustand Modern JavaScript: ES6+, asynchronous
                programming, functional programming concepts Performance &
                Optimization: SEO-friendly, fast-loading applications
              </p>
              <div className="mt-4 px-6 py-4 bg-gradient-teal-purple  text-leftTextColorWhite rounded-lg shadow-lg">
                <p className="text-lg">
                  <b className="text-red-300">Hal-hazırda öyrənirəm:</b>
                  Angular və React Native proqramlaşdırma, həm veb, həm də mobil
                  platformalar üçün çox yönlü və yüksək performanslı proqramlar
                  yaratmaq üçün bacarıqlar dəstimi genişləndirirəm.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
