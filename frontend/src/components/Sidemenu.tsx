import "../App.css";
import { Menu } from "antd";
import {
  CaretLeftOutlined,
  SettingOutlined,
  HomeOutlined,
  UserOutlined,
  HeartOutlined,
  CheckSquareOutlined,
  ShareAltOutlined,
  FileTextOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Sidemenu: React.FC  = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Menu
        mode="vertical"
        className="custom-menu"
        onClick={({ key }) => {
          if (key === "/home") {
            navigate("/home");
          } else if (key === "/") {
            navigate("/");
          }
          // else { navigate(key) }
        }}
        items={[
          { key: "/home", icon: <HomeOutlined /> },
          { key: "/user", icon: <UserOutlined /> },
          { key: "/square", icon: <CheckSquareOutlined /> },
          { key:"/share" ,icon: <ShareAltOutlined /> },

          { key:"/file" ,icon: <FileTextOutlined /> },

          { key:"/layout" ,icon: <LayoutOutlined /> },

          { key:"/like" ,icon: <HeartOutlined /> },

          { key: "/", icon: <CaretLeftOutlined /> },

       

          { key: "/setting", icon: <SettingOutlined /> },
          { key: "/image", icon: <UserOutlined /> },
        ]}
      ></Menu>
    </div>
  );
};

export default Sidemenu;
