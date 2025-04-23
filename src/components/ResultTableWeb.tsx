import { Spin, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { Filter } from "./Result";
import { getFlag, mainDatas } from "../constants/datas";

interface DataType {
  name: string;
  level: string;
  type: string;
  step: string;
  gender: string;
  branch: string;
  status: string;
  inquiry: boolean;
  bib: number;
  rank: number;
  d: number;
  e: number;
  pen: number;
  total: number;
  team: {
    name: string;
    svg: React.ReactNode;
    point: number;
    rank: number;
  };
  p: number;
  app: number;
  aa: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Rank",
    dataIndex:"rank",
    render:(data:any)=>{
      return <span className="rank-box">{data}</span>
    },
    key: "rank",
    width:50
  },
  {
    title: "Team",
    dataIndex:"team",
    render:(data:any)=>{
      return <div className="d-flex gap-2 align-items-center">{getFlag(data?.name)}{data?.name}</div>
    },
    key: "rank",
  },
];

const ResultTableWeb = ({ filter }: { filter: Filter }) => {
  const [datas, setDatas] = useState<any>([]);

  useEffect(() => {
    getDatas();
  }, [filter]);

  const getDatas = async () => {
    setDatas(null);
    setTimeout(() => {
      setDatas(
        mainDatas.filter(
          (d: any) =>
            d.type == filter.type &&
            filter.step == d.step &&
            filter.level == d.level &&
            filter.branch == d.branch &&
            filter.gender == d.gender
        ).sort((a: any, b: any) => a.rank - b.rank)
      );
    }, 1000);
  };
  return (
    <div className="table-container pt-5 mt-5">
      {datas != null ? (
        <Table columns={columns} dataSource={datas} pagination={false} />
      ) : (
        <div className="w-100 d-flex justify-content-center pt-5" style={{minHeight:500}}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default ResultTableWeb;
