import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { Avatar, List, Checkbox } from "antd";
import axios from "axios";

interface User {
  id: number;
  name: string;
  address: {
    city: string;
  };
}

interface UserlistProps {
  input: string;
}

const Userlist: React.FC<UserlistProps> = ({ input }) => {
  const [searchData, setSearchData] = useState<string>("");
  const [allUsers, setAllUsers] = useState<User[]>([]); // Store all users separately
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // Store filtered users

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setSearchData(input);
  }, [input]);

  useEffect(() => {
    if (searchData === "") {
    
      setFilteredUsers(allUsers);
    } else {
      
      const filtered = allUsers.filter((item) =>
        item.name.toLowerCase().includes(searchData.toLowerCase())
      );
      setFilteredUsers(filtered);
    }
  }, [searchData, allUsers]);

  const fetchUsers = async () => {
    try {
      axios.get<User[]>("https://jsonplaceholder.typicode.com/users").then((response) => {
        setAllUsers(response.data);
        setFilteredUsers(response.data); 
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Card>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <span style={{ marginRight: 15 }}>Qualified</span>{" "}
          <span style={{ marginRight: 15 }}>Task</span>{" "}
          <span style={{ marginRight: 15 }}>Disqualified</span>
        </div>
        <div style={{ fontWeight: 600 }}>
          {filteredUsers.length} <span>Candidates</span>
        </div>
        <hr></hr>
        <List
          itemLayout="vertical"
          dataSource={filteredUsers} 
          renderItem={(item, index) => (
            <List.Item style={{}}>
              <Checkbox style={{ display: "flex", justifyContent: "flex-end" }} />
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fplaceholder&psig=AOvVaw3tYbG_wUBNsS69DtDKDWOY&ust=1696099957460000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKiM0e2-0IEDFQAAAAAdAAAAABAE`}
                  />
                }
                title={<a href="https://ant.design">{item.name}</a>}
                description={`UK ${item.address.city} `}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default Userlist;
