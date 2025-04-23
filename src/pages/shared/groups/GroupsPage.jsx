import React, { useState, useEffect } from "react";
import { Layout } from "../../../layout/layout";
import { Modal, Card, Form, Input, Button, notification, Menu } from "antd";
import { createGroup, getGroupDetail, getGroups } from "../../../redux/slice/groups-slice";

export const GroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [groupDetails, setGroupDetails] = useState(null);

  useEffect(() => {
    loadGroups();
  }, []);

  const loadGroups = async () => {
    const response = await getGroups();
    if (response.success) setGroups(response.data);
  };

  const handleGroupClick = async (id) => {
    setSelectedGroup(id);
    const response = await getGroupDetail(id);
    if (response.success) {
      setGroupDetails(response.data);
    }
  };

  const handleCreateGroup = async () => {
    if (!groupName.trim()) return;

    const res = await createGroup({ title: groupName });
    if (res.success) {
      notification.success({ message: "Группа создана!" });
      setGroupName("");
      setIsModalOpen(false);
      loadGroups(); 
    } else {
      notification.error({
        message: "Ошибка при создании группы",
        description: res.error?.message,
      });
    }
  };

  return (
    <Layout>
      <div className="left">
        <div className="home-cards">
          <Menu className="aside-classes" mode="vertical">
            {groups.map((group) => (
              <Menu.Item
                className="aside-class"
                key={group.id}
                onClick={() => handleGroupClick(group.id)}
              >
                {group.title}
              </Menu.Item>
            ))}
          </Menu>
          <Button className="group-createBtn" onClick={() => setIsModalOpen(true)} type="primary">
            Добавить группу
          </Button>
        </div>
      </div>

      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        title={null}
        centered
      >
        <Card
          title="Новая группа"
          style={{ borderRadius: 10 }}
          className="group-modalCard"
        >
          <Form layout="vertical">
            <Form.Item label="Название группы">
              <Input
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Введите название..."
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" onClick={handleCreateGroup} block>
                Создать
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Modal>
    </Layout>
  );
};
