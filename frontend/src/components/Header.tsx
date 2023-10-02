import React from "react";
import "../App.css";
import { TagOutlined, UserAddOutlined, UserDeleteOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Typography, Select } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;

const Header: React.FC = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const customSelectStyle: React.CSSProperties = {
    color: "blue",
    width: "300px",
    height: "40px",
    marginBottom: 30,
  };

  return (
    <div style={{ margin: 30 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* first column */}
        <div>
          <Title level={3} style={{ color: "#1D4ED8" }}>
            London Internship Program
          </Title>
          <Text>London</Text>
        </div>

        {/* second column */}
        <div style={{ marginTop: "30px" }}>
          <Select
            defaultValue="Opportunity Browsing"
            style={{ width: 300, height: 40, marginBottom: 30 }}
            onChange={handleChange}
          >
            <Option value="Applied">Applied</Option>
            <Option value="Shortlisted">Shortlisted</Option>
            <Option value="Technical Interview">Technical Interview</Option>
            <Option value="Opportunity Browsing">Opportunity Browsing</Option>
            <Option value="Video Interview I">Video Interview I</Option>
            <Option value="Video Interview II">Video Interview II</Option>
            <Option value="Video Interview III">Video Interview III</Option>
            <Option value="Offer">Offer</Option>
            <Option value="Withdrawn">Withdrawn</Option>
          </Select>
        </div>

        {/* third column of header */}
        <div style={{ marginTop: 30 }}>
          <span style={{ marginRight: 10, borderRadius: 10, padding: 10, display: "inline-block", backgroundColor: "white" }}><TagOutlined /></span>
          <span style={{ marginRight: 10, borderRadius: 10, padding: 10, display: "inline-block", backgroundColor: "white" }}><UserAddOutlined /></span>
          <span style={{ marginRight: 10, borderRadius: 10, padding: 10, display: "inline-block", backgroundColor: "white" }}><UserDeleteOutlined /></span>
          <span style={{ marginRight: 10, borderRadius: 10, padding: 10, display: "inline-block", backgroundColor: "white" }}><UserOutlined /></span>
          <span style={{ marginRight: 10, borderRadius: 10, padding: 10, display: "inline-block", backgroundColor: "white" }}><MailOutlined /></span>
          <span>
            <Select
              className="custom-select"
              style={customSelectStyle}
              defaultValue="Move To Video Interviews"
            ></Select>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
