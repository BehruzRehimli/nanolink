import { Spin, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useEffect, useState } from "react";
import { Filter } from "./Result";
import { getFlag, mainDatas } from "../constants/datas";

export interface DataType {
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
    dataIndex: "rank",
    render: (data: any) => {
      return <span className="rank-box">{data}</span>
    },
    key: "rank",
    width: "5%"
  },
  {
    title: "Team",
    dataIndex: "team",
    render: (data: any) => {
      return <div style={{height:"32px"}} className="d-flex gap-2 align-items-center">{getFlag(data?.name)}{data?.name}</div>
    },
    key: "rank",
    width: "8%"
  },
  {
    title: "Bib",
    dataIndex: "bib",
    key: "bib",
    width: "5%",
    render:(data:any)=><div style={{height:"32px"}} className="d-flex gap-2 align-items-center">{data}</div>
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    width: "50%",
    render:(data:any)=><div style={{height:"32px"}} className="d-flex gap-2 align-items-center">{data}</div>
  },
  {
    title: "D",
    dataIndex: "d",
    render: (d: any) => <div>
      <p className="number">{Number(d).toFixed(3)}</p>
      <p className="mt-2 number">{Number(d).toFixed(3)}</p>
    </div>,
    width:"8%"
  },
  {
    title: "E",
    dataIndex: "e",
    render: (e: any) => <div>
      <p className="number">{Number(e).toFixed(3)}</p>
      <p className="mt-2 number">{Number(e).toFixed(3)}</p>
    </div>,
    width:"8%"
  },
  {
    title: "Pen",
    dataIndex: "pen",
    render: (pen: any) => <div>
      <p className="number">{Number(pen).toFixed(3)}</p>
      <p className="mt-2 number">{Number(pen).toFixed(3)}</p>
    </div>,
    width:"8%"
  },
  {
    title: "Total",
    dataIndex: "total",
    render: (total: any) => <div>
      <p className="number">{Number(total).toFixed(3)}</p>
      <p className="mt-2 number">{Number(total).toFixed(3)}</p>
      <p className="mt-2 number orange">{Number(total).toFixed(3)}</p>
    </div>,
    width:"8%"
  }
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
        <div className="w-100 d-flex justify-content-center pt-5" style={{ minHeight: 500 }}>
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default ResultTableWeb;
