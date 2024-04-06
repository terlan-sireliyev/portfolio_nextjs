import LeftSide from "../components/user/leftSide";
import RightSide from '../components/user/rightSide/index'
export default function Home() {
  return (
    <div className="bg-mainBgColor p-3 flex ">
      <div className="w-1/5"><LeftSide /></div>
      <div className="w-4/5 p-2"><RightSide /></div>
    </div>
  );
}
