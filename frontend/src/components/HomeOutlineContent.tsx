import React, { useState } from "react";
import {
  Typography,
  Row,
  Col,
  Input,
  Button,
  Dropdown,
  message,
  Space,
  Select,
  Card,
} from "antd";

import Userlist from "./Userlist";

const HomeOutlineContent: React.FC = () => {
  const [filterSelected, setFilterSelected] = useState<number | string>(0);
  const [input, setInput] = useState<string >("");
  const filters: string[] = [
    "personal information",
    "education",
    "work exp",
    "activity",
    "advance filter",
  ];

  return (
    <div
      style={{
        margin: 30,
        display: "grid",
        gridTemplateColumns: "1fr 2fr ",
        gap: "10px",
        height: "100vh",
        width: "100%",
      }}
    >
      <div style={{ display: "block" }}>
        <div style={{ marginBottom: "30px" }}>
          <Input.Search
            placeholder="Search by name"
            style={{ width: 450 }}
            onChange={(e) => {
              setInput(e.target.value.toLowerCase());
            }}
          />
        </div>
        <Card
          title={"Filters: " + `${filterSelected}  selected `}
          bordered={false}
          hoverable={true}
        >
          <Space
            direction="vertical"
            style={{
              marginLeft: -24,
            }}
          >
            <Select
              defaultValue="Personal Information"
              onClick={() => setFilterSelected(filters[0])}
              bordered={false}
              style={{
                width: 450,
                borderBottom: "1px solid #ECECEC",
              }}
            >
              
            </Select>

            <Select
              defaultValue="Education"
              onClick={() => setFilterSelected(filters[1])}
              bordered={false}
              style={{
                width: 450,
                borderBottom: "1px solid #ECECEC",
              }}
            >
             
            </Select>

            <Select
              defaultValue="Work Experience"
              onClick={() => setFilterSelected(filters[2])}
              bordered={false}
              style={{
                width: 450,
                borderBottom: "1px solid #ECECEC",
              }}
            >
             
            </Select>

            <Select
              defaultValue="Activity Filter"
              onClick={() => setFilterSelected(filters[3])}
              bordered={false}
              style={{
                width: 450,
                borderBottom: "1px solid #ECECEC",
              }}
            >
             
            </Select>

            <Select
              defaultValue="Advance Filter"
              onClick={() => setFilterSelected(filters[4])}
              bordered={false}
              style={{
                width: 450,
                borderBottom: "1px solid #ECECEC",
              }}
            >
              
            </Select>
          </Space>
        </Card>
      </div>

      {/* second section */}
      <div style={{ display: "block", width: "100%" }}>
        <Userlist input={input} />
      </div>
    </div>
  );
};

export default HomeOutlineContent;
