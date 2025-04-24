import { useEffect, useState } from "react";
import { mainDatas } from "../constants/datas";
import LiveTableMobile from "./LiveTableMobile";
import LiveTableWeb from "./LiveTableWeb";

const Live = () => {
    const [datas, setDatas] = useState<any>([]);

    useEffect(() => {
      getDatas();
    }, []);
  
    const getDatas = async () => {
      setDatas(null);
      setTimeout(() => {
        setDatas(
          mainDatas
            .slice(20, 30)
            .sort((a: any, b: any) => a.rank - b.rank)
        );
      }, 1000);
    };

  return (
    <div>
      <LiveTableWeb datas={datas}/>
      <LiveTableMobile datas={datas}/>
    </div>
  );
};

export default Live;
