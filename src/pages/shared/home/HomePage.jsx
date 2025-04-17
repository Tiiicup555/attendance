import React from "react";
import { Button, Input, Modal, Form } from "antd";
import { Notification, Settings } from "../../../icons/icons";

export const HomePage = () => {
//   const [classrooms, setClassrooms] = useState([]);
//   const [classroomDetails, setClassroomDetails] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [newClassName, setNewClassName] = useState("");

//   useEffect(() => {
//     loadClassrooms(); 
//   }, []);

//   const loadClassrooms = async () => {
//     try {
//       const response = await getClassrooms();
//       if (response.success) {
//         setClassrooms(response.data);
//       } else {
//         console.error('Ошибка при загрузке классов:', response);
//       }
//     } catch (error) {
//       console.error('Ошибка при запросе классов:', error);
//     }
//   };

//   const handleClassClick = async (id) => {
//     setSelectedClassroom(id);
//     try {
//       const response = await getClassroomDetail(id); 
//       if (response.success) {
//         setClassroomDetails(response.data);
//       } else {
//         console.error('Ошибка при получении данных о классе:', response);
//       }
//     } catch (error) {
//       console.error('Ошибка при запросе деталей класса:', error);
//     }
//   };

//   const handleCreateClass = async () => {
//     if (!newClassName.trim()) return;

//     const newClassData = {
//       name: newClassName,
//     };

//     try {
//       const response = await createClassroom(newClassData); 
//       if (response.success) {
//         setIsModalOpen(false);
//         setNewClassName("");
//         loadClassrooms();
//       } else {
//         console.error('Ошибка при создании класса:', response);
//       }
//     } catch (error) {
//       console.error('Ошибка при создании класса:', error);
//     }
//   };
//   console.log(classrooms.data);
  
  return (
    <div className="home-body">
      <aside className="home-aside">
        <h1 className="aside-title">Ваши классы</h1>
        <hr />
        {/* <Menu className="aside-classes" mode="vertical">
          {classrooms.map((classroom) => (
            <Menu.Item
              className="aside-class"
              key={classroom.id}
              onClick={() => handleClassClick(classroom.id)}
            >
              {classroom.name}
            </Menu.Item>
          ))}
        </Menu> */}
      </aside>
      <div className="home-right">
        <header className="home-header">
          <Button className="header-btn" type="primary">
            Добавить класс
          </Button>
          <div className="header-right">
            <Input placeholder="Поиск..." style={{ width: 200 }} />
            <div className="home-function">
              <Button className="home-icon">
                <Notification />
              </Button>
              <Button className="home-icon"></Button>
              <Button className="home-icon">
                <Settings />
              </Button>
              <img src="" alt="" />
            </div>
          </div>
        </header>
        <main className="home-main">
          {/* {classroomDetails ? (
            <>
              <h1>{classroomDetails.name}</h1>
              <div className="home-cards">
                {classroomDetails.columns?.map((column) => (
                  <Card key={column.id} title={column.title} style={{ width: 300 }}>
                    <p>Тема урока</p>
                    <Button type="dashed" block>
                      + Добавить блок
                    </Button>
                  </Card>
                ))}
              </div>
              <Button type="primary" style={{ marginTop: "20px" }}>
                Новый урок
              </Button>
            </>
          ) : (
            <h1>Выберите класс</h1>
          )} */}
        </main>
      </div>

      <Modal
        title="Создать новый класс"
        // open={isModalOpen}
        // onOk={handleCreateClass}
        // onCancel={() => setIsModalOpen(false)}
        okText="Создать"
        cancelText="Отмена"
      >
        <Form layout="vertical">
          <Form.Item label="Название класса">
            {/* <Input
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
              placeholder="Введите название..."
            /> */}
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
