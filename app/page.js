// import { useRouter } from "next/router";
// import { useEffect } from "react";
import LeftSide from "../components/user/left/leftSide";
import CenterSide from "../components/user/center/centerSide/index";
import RightSide from "../components/user/right/navbar/index";
import MobileHeader from "../components/user/mobileHeader/index";
import centerSideStyle from "../components/user/center/centerSide/centerSide.module.css";
// import { IntlProvider } from "react-intl";
// import azMessage from "../translations/az.json";
// import enMessage from "../translations/en.json";

export default function Home() {
  // const router = useRouter();
  // const { locale } = router;
  // const messages = { az: azMessage, en: enMessage };

  // useEffect(() => {
  //   document.documentElement.lang = locale;
  // }, [locale]);
  return (
    <div>
      <div className="hidden max-lg:block ">
        <MobileHeader />
      </div>
      <div className="bg-mainBgColor p-3 flex justify-between h-dvh overflow-hidden">
        <div className="w-[250px] max-lg:hidden">
          <LeftSide />
        </div>
        <div
          className={`w-[76%] max-lg:w-[100%] ${centerSideStyle.progScroll}`}
        >
          <CenterSide />
        </div>
        <div className="max-lg:hidden w-[5%] bg-navbarBgOne rounded-leftMainBorder">
          <RightSide />
        </div>
      </div>
    </div>
    //    <IntlProvider locale={locale} messages={messages[locale]}>
    // </IntlProvider>
  );
}
