import React, { Component } from "react";

class Content extends Component {
  generateColor = () => {
    const hexArray = "0123456789ABCDEF";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += hexArray[Math.floor(Math.random() * 16)];
    }
    return `#${code}`;
  };

  changeStyle = (event) => {
    const randomBgColor = this.generateColor();
    const randomTextColor = this.generateColor();
    event.target.style.backgroundColor = randomBgColor;
    event.target.style.color = randomTextColor;
  };

  render() {
    return (
      <div>
        <h4>Дата народження</h4>
        <p>8 серпня 2005 року</p>
        <h4 onClick={this.changeStyle}>Місце народження</h4>
        <p onClick={this.changeStyle}>місто Луцьк, Україна</p>
        <h4>Освіта</h4>
        <p>Будківський ліцей Маневицької селищної ради Волинської області;</p>
        <p>НТУУ "Київський політехнічний інститут імені Ігоря Сікорського".</p>

        <h4>Хобі</h4>
        <ul>
          <li>Читання книжок</li>
          <li>Комп'ютерні ігри</li>
          <li>Перегляд фільмів</li>
        </ul>

        <h4>Улюблені фільми</h4>
        <ol>
          <li>Оппенгеймер</li>
          <li>Зелена миля</li>
          <li>Форрест Ґамп</li>
        </ol>

        <h4>Улюблене місто</h4>
        <p>
          Барселона — це столиця Каталонії, розташована на узбережжі Середземного моря в Іспанії.
          <br />
          Вона відома своїми унікальними архітектурними пам'ятками, зокрема творіннями Антоніо Ґауді,
          <br />
          такими як Саграда Фамілія та Парк Ґуель. Місто поєднує в собі багату культурну спадщину з
          <br />
          сучасним мистецтвом, приваблює туристів пляжами, гастрономією та динамічним нічним життям.
        </p>
      </div>
    );
  }
}

export default Content;
