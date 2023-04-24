import { useState, useEffect } from "react";
export default function Reister() {
  const options = [
    { value: "", text: "Đại lý" },
    { value: "AZGLOBAL", text: "AZGLOBAL" },
    { value: "EURO HOLDINGS", text: "EURO HOLDINGS" },
    { value: "NHÀ ĐẤT THỦ ĐÔ", text: "NHÀ ĐẤT THỦ ĐÔ" },
    { value: "FOUR HOMES", text: "FOUR HOMES" },
    { value: "ĐẤT GỐC", text: "ĐẤT GỐC" },
    { value: "NEW CITY", text: "NEW CITY" },
    { value: "SAIGON CENTER REAL", text: "SAIGON CENTER REAL" },
    { value: "KHÁC", text: "KHÁC" },
  ];
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(options[0].value);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const handleChangeOptions = (e) => {
    setSelected(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeArea = (e) => {
    if (
      selected === "AZGLOBAL" ||
      selected === "EURO HOLDINGS" ||
      selected === "NHÀ ĐẤT THỦ ĐÔ"
    ) {
      setArea("Ha Noi");
    } else if (selected === "FOUR HOMES") {
      setArea("QUẢNG NINH, HẢI PHÒNG");
    } else if (selected === "ĐẤT GỐC" || selected === "NEW CITY") {
      setArea("NHA TRANG");
    } else if (selected === "SAIGON CENTER REAL") {
      setArea("Thành Phố Hồ CHí Minh");
    } else {
      setArea(e.target.value);
    }
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selected === "" ||
      name === "" ||
      email === "" ||
      phone === "" ||
      area === "" ||
      password === ""
    ) {
      alert("Bạn cần nhập đầy đủ thông tin khi đăng kí");
    } else {
      const data = {
        full_name: name,
        email: email,
        phone: phone,
        area: area,
        password: password,
        agent_name: selected,
      };

      async function postJSON(data) {
        try {
          const response = await fetch(
            "https://global-living-backend.vercel.app/api/v1/users",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );

          const result = await response.json();
          alert(result.message);
          if (result.message === "Đăng ký thành công") {
            window.location.href = "/";
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
      postJSON(data);
    }
  };
  return (
    <div className='sign-up__container'>
      <div className='sign-up__logo'>
        <img src='/img/Mockup LOGO1 4.png' alt='logo' />
      </div>
      <div className='sign-up__header'>
        <div>
          <p>BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ</p>
          <p>GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI</p>
        </div>
      </div>
      <div className='sign-up__title'>
        <p
          style={{
            color: "rgba(239, 205, 127, 1)",
            cursor: "pointer",
            fontSize: "120%",
          }}
        >
          Đăng ký CTV/Sale
        </p>
      </div>
      <div className='sign-up__form-container'>
        <form
          action=''
          style={{
            width: "50%",
            margin: "auto",
            border: "2px solid rgba(246, 181, 49, 1)",
            padding: "1%",
          }}
          onSubmit={handleSubmit}
        >
          <p>
            <input
              type='text'
              placeholder='Họ và tên'
              className='sign-up__form-container-input'
              onChange={handleChangeName}
              value={name}
            />
          </p>
          <p>
            <input
              type='email'
              placeholder='Email'
              onChange={handleChangeEmail}
              value={email}
            />
          </p>
          <p>
            <input
              type='text'
              placeholder='Số điện thoại'
              onChange={handleChangePhone}
              value={phone}
            />
          </p>

          <p>
            <select
              value={selected}
              onChange={handleChangeOptions}
              className='form-option'
            >
              {options.map((e) => {
                return (
                  <option key={e.value} value={e.value}>
                    {e.text}
                  </option>
                );
              })}
            </select>
          </p>
          <p>
            <input
              type='text'
              placeholder='Khu vực'
              onChange={handleChangeArea}
              value={area}
            />
          </p>
          <p>
            <input
              type='password'
              placeholder='Mật khẩu'
              onChange={handleChangePassword}
              value={password}
            />
          </p>
          <button className='form-button'>Đăng ký</button>
        </form>
      </div>
      <div className='sign-up__footer'>
        <span
          style={{
            color: "white",
            fontSize: "120%",
            marginRight: "20px",
            fontFamily: "IM FELL Double Pica",
          }}
        >
          Đã có tài khoản?
        </span>
        <div
          style={{
            color: "rgba(239, 205, 127, 1)",
            cursor: "pointer",
            fontSize: "120%",
            fontFamily: "IM FELL Double Pica",
          }}
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          Đăng nhập ngay
        </div>
      </div>
    </div>
  );
}
