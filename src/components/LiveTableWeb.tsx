import { getFlag } from "../constants/datas";
import Table, { ColumnsType } from "antd/es/table";
import { DataType } from "./ResultTableWeb";
import { Spin } from "antd";
import { filters } from "../constants/filter";

const LiveTableWeb = ({datas}:{datas:DataType[]}) => {


  const columns: ColumnsType<DataType> = [
    {
      title: "",
      dataIndex: "branch",
      render: (b: any) => {
        return (
          <div style={{ zoom: 0.6 }}>
            {filters.branches.find((bra: any) => bra.name == b)?.svg}
          </div>
        );
      },
      key: "rank",
      width: "6%",
    },
    {
      title: "",
      dataIndex: "team",
      render: (data: any) => {
        return (
          <div
            style={{ height: "32px" }}
            className="d-flex gap-2 align-items-center"
          >
            {getFlag(data?.name)}
            {data?.name}
          </div>
        );
      },
      key: "rank",
      width: "8%",
    },
    {
      title: "",
      dataIndex: "bib",
      key: "bib",
      width: "6%",
      render: (data: any) => (
        <div
          style={{ height: "32px" }}
          className="d-flex gap-2 align-items-center"
        >
          {data}
        </div>
      ),
    },
    {
      title: "",
      dataIndex: "name",
      key: "name",
      width: "15%",
      render: (data: any) => (
        <div
          style={{ height: "32px" }}
          className="d-flex gap-2 align-items-center"
        >
          {data}
        </div>
      ),
    },
    {
      title: "",
      width: "30%",
      render: (data: any) => {
        if (data.status == "Go") {
          return (
            <div>
              <span className="go">Go</span>
            </div>
          );
        } else if (data.status == "Wait") {
          return (
            <div>
              <span className="wait">Wait</span>
            </div>
          );
        } else {
          return (
            <div className="d-flex gap-4 align-items-center">
              <div>
                <span>D: </span>
                <span>{Number(data.d).toFixed(3)}</span>
              </div>
              <div>
                <span>E: </span>
                <span>{Number(data.e).toFixed(3)}</span>
              </div>
              <div>
                <span>P: </span>
                <span>{Number(data.p).toFixed(1)}</span>
              </div>
            </div>
          );
        }
      },
    },
    {
      title: <div style={{ textAlign: "end", paddingRight: 20 }}>App</div>,
      render: (data: any) => {
        if (data.status != "Wait" && data.status != "Go") {
          return (
            <div className="d-flex align-items-center gap-3 justify-content-end">
              {Number(data.app).toFixed(3)}
              <span className="rank-box">{data.rank}</span>
            </div>
          );
        }
      },
      width: "12%",
    },
    {
      title: <div style={{ textAlign: "end", paddingRight: 20 }}>AA</div>,
      render: (data: any) => {
        if (data.status != "Wait" && data.status != "Go") {
          return (
            <div className="d-flex align-items-center gap-3 justify-content-end">
              {Number(data.aa).toFixed(3)}
              <span className="rank-box">{data.rank}</span>
            </div>
          );
        }
      },
      width: "12%",
    },
    {
      title: <div style={{ textAlign: "end", paddingRight: 20 }}>Team</div>,
      render: (data: any) => {
        if (data.status != "Wait" && data.status != "Go") {
          return (
            <div className="d-flex align-items-center gap-3 justify-content-end">
              {Number(data.team?.point).toFixed(3)}
              <span className="rank-box">{data.team?.rank}</span>
            </div>
          );
        }
      },
      width: "12%",
    },
  ];
  return (
    <div className="table-container pt-5 mt-5 live-table">
      {datas != null ? (
        <Table columns={columns} dataSource={datas} pagination={false} />
      ) : (
        <div
          className="w-100 d-flex justify-content-center pt-5"
          style={{ minHeight: 500 }}
        >
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default LiveTableWeb;
