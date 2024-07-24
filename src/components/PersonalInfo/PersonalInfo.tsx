import React, { ChangeEvent, useState } from "react";
import { Card } from "../Card/Card";
import { DatePicker, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { RcFile } from "antd/lib/upload";
import dayjs, { Dayjs } from "dayjs";

const PersonalInfo: React.FC = () => {
  const [info, setInfo] = useState({
    name: "",
    birthDate: "",
    address: "",
    phone: "",
    avatar: null as string | null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    console.log({ name, value });
  };

  const handleDateChange = (date: Dayjs | null, dateString: string) => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      birthDate: dateString,
    }));
  };

  const handlePhotoUpload = (file: RcFile) => {
    const reader = new FileReader();
    reader.onload = () => {
      setInfo((prevInfo) => ({
        ...prevInfo,
        avatar: reader.result as string,
      }));
    };
    reader.readAsDataURL(file);
    return false; // Prevent upload
  };

  return (
    <Card>
      <label>
        ФИО
        <Input
          placeholder="ФИО"
          name="name"
          value={info.name}
          onChange={handleChange}
        />
      </label>
      <label>
        Место жительства
        <Input
          placeholder="Место жительства"
          name="address"
          value={info.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Номер Телефона
        <Input
          placeholder="Номер телефона"
          name="phone"
          value={info.phone}
          onChange={handleChange}
        />
      </label>
      <label>
        Дата рождения
        <DatePicker
          value={info.birthDate ? dayjs(info.birthDate) : null}
          onChange={(date, dateString) =>
            handleDateChange(date, dateString as string)
          }
        />
      </label>
      <label>
        Загрузите фото
        <Upload beforeUpload={handlePhotoUpload} showUploadList={false}>
          <button>
            <UploadOutlined /> Click to Upload
          </button>
        </Upload>
        {info.avatar && (
          <img
            src={info.avatar}
            alt="Personal"
            style={{ maxWidth: "100%", height: "auto", marginTop: "10px" }}
          />
        )}
      </label>
    </Card>
  );
};

export { PersonalInfo };