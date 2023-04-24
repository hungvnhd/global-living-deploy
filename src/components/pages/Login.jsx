import { useState } from "react";
export default function login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputEmail === "" || inputPassword === "") {
      alert("Bạn cần nhập đầy đủ thông tin khi đăng nhập");
    } else {
      const data = {
        email: inputEmail,
        password: inputPassword,
      };
      async function postJSON(data) {
        try {
          const response = await fetch(
            "https://global-living-backend.vercel.app/api/v1/users/login",
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
          if (result.message === "Đăng nhập thành công") {
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
    <div>
      <div className='modalLogin'>
        <img className='logoLogin' src='Mockup LOGO1 4.png' alt='logo' />
        <p className='textTitle'>
          BẤT ĐỘNG SẢN ĐỊNH CƯ QUỐC TẾ GIẢI PHÁP ĐẦU TƯ KHÔNG BIÊN GIỚI
        </p>
      </div>
      <div className='form'>
        <form className='formLogin' onSubmit={handleSubmit}>
          <div className='divLogin'>
            <p className='textLogin'>Đăng nhập tài khoản</p>
          </div>

          <img className='iconEmail' src='Mail Account.png' />
          <input
            onChange={handleInputEmail}
            className='inputLoginEmail'
            type='text'
            placeholder='Email'
            value={inputEmail}
          />
          <img className='iconBlock' src='Secure.png' />
          <input
            onChange={handleInputPassword}
            className='inputLoginPassword'
            type='text'
            placeholder='Mật khẩu'
            value={inputPassword}
          />
          <button className='btnLogin'>Đăng nhập</button>
        </form>
        <button className='btnBackIndex' onClick={() => {}}>
          Trở về trang chủ
        </button>
        <button
          className='btnGoRegister'
          onClick={() => {
            window.location.href = "/register";
          }}
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
}
