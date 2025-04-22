import { Table, Tag, Card } from 'antd';

const scheduleData = [
  {
    key: '1',
    day: 'Понедельник',
    time: '09:00 - 10:30',
    subject: 'Математика',
    teacher: 'Иванов И.И.',
    room: '101',
  },
  {
    key: '2',
    day: 'Понедельник',
    time: '10:40 - 12:10',
    subject: 'Физика',
    teacher: 'Петров П.П.',
    room: '102',
  },
  {
    key: '3',
    day: 'Вторник',
    time: '09:00 - 10:30',
    subject: 'Информатика',
    teacher: 'Сидоров А.А.',
    room: '105',
  },
  // добавь больше строк по желанию
];

const columns = [
  {
    title: 'День',
    dataIndex: 'day',
    key: 'day',
    render: (text) => <Tag color="blue">{text}</Tag>,
  },
  {
    title: 'Время',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Предмет',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: 'Преподаватель',
    dataIndex: 'teacher',
    key: 'teacher',
  },
  {
    title: 'Кабинет',
    dataIndex: 'room',
    key: 'room',
  },
];

export default function SchedulePage() {
  return (
    <div className="p-6">
      <Card title="Расписание занятий" bordered={false}>
        <Table
          columns={columns}
          dataSource={scheduleData}
          pagination={false}
        />
      </Card>
    </div>
  );
}
