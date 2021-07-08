import React from "react";
import "./App.scss";

const RegisterPc = () => {
  return (
    <div className='registerPc'>
      <div className= 'Registracii'>
        <p className= 'konstruktorBotov'>
          Конструктор ботов
        </p>
        <p
          className= 'sub_title'
        >
          Для работы с нашим проектом Вам необходимо
          авторизоваться. Зарегистрируйтесь или войдите в
          свой аккаунт
        </p>
        <div className= 'polePochty'>
          <p className= 'loginIliEmail'>
            Логин или email
          </p>
          <div className= 'rectangle4'/>
        </div>
        <div className= 'flexWrapperOne'>
          <div className= 'poleParol'>
            <p className= 'parol'>Пароль</p>
            <div className= 'rectangle4Two' />
          </div>
          <div className= 'poleParol'>
            <p className= 'povtorParol'>
              Повтор пароля
            </p>
            <div className= 'rectangle5' />
          </div>
        </div>
        <button className= 'group1'>
          <p className= 'zareg'>
            Зарегистрироваться
          </p>
        </button>
        <div className= 'group2'>
          <div className= 'rectangle7'/>
          <p className= 'ili'>или</p>
          <div className= 'rectangle7' />
        </div>
        <a href = "./log.js"className= 'akk'>
          Войдите в свой аккаунт
        </a>
      </div>
    </div>
  );
};

export default RegisterPc;