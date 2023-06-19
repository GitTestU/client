import React, { useEffect ,useRef } from "react";
import { useStateManage } from "../../store/store";

const Form = () => {
  const cardNumber1 = useStateManage((state) => state.cardNumber1);
  const cardNumber2 = useStateManage((state) => state.cardNumber2);
  const cardNumber3 = useStateManage((state) => state.cardNumber3);
  const cardNumber4 = useStateManage((state) => state.cardNumber4);
  const cardHolder = useStateManage((state) => state.cardHolder);
  const expairDate1 = useStateManage((state) => state.expairDate1);
  const expairDate2 = useStateManage((state) => state.expairDate2);
  const ccv = useStateManage((state) => state.ccv);
  const setCardNumber1 = useStateManage((state) => state.setCardNumber1);
  const setCardNumber2 = useStateManage((state) => state.setCardNumber2);
  const setCardNumber3 = useStateManage((state) => state.setCardNumber3);
  const setCardNumber4 = useStateManage((state) => state.setCardNumber4);
  const setCardHolder = useStateManage((state) => state.setCardHolder);
  const setExpairDate1 = useStateManage((state) => state.setExpairDate1);
  const setExpairDate2 = useStateManage((state) => state.setExpairDate2);
  const setCcv = useStateManage((state) => state.setCcv);

  const cardNumberRef1 = useRef(null);
  const cardNumberRef2 = useRef(null);
  const cardNumberRef3 = useRef(null);
  const cardNumberRef4 = useRef(null);

  const handleKeyPress = (event,nextInputRef) => {
    const input = event.target;
    const maxLength = input.getAttribute("maxLength");
    const inputValue = input.value;

    if (inputValue.length >= maxLength) {
      nextInputRef.current.focus();
    }

    if (!/\d/.test(event.key)) {
      event.preventDefault();
    }
  };
  useEffect(() => {
    console.log(cardNumber1);
    console.log(cardNumber2);
    console.log(cardNumber3);
    console.log(cardNumber4);
    console.log(expairDate1)
    console.log(expairDate2)
  }, [cardNumber1, cardNumber2, cardNumber3, cardNumber4 ,expairDate1, expairDate2]);

  return (
    <div className="checkout">
      <form className="form" autoComplete="off" noValidate>
        <fieldset>
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number-1"
            className="input-cart-number"
            maxLength="4"
            onKeyPress={(e) => handleKeyPress(e,cardNumberRef1)}
            ref={cardNumberRef1}
            onChange={(e) => setCardNumber1(e.target.value)}
          />
          <input
            type="num"
            id="card-number-2"
            className="input-cart-number"
            maxLength="4"
            onKeyPress={(e) => handleKeyPress(e,cardNumberRef2)}
            ref={cardNumberRef2}
            onChange={(e) => setCardNumber2(e.target.value)}
          />
          <input
            type="num"
            id="card-number-3"
            className="input-cart-number"
            maxLength="4"
            onKeyPress={(e) => handleKeyPress(e,cardNumberRef3)}
            ref={cardNumberRef3}
            onChange={(e) => setCardNumber3(e.target.value)}
          />
          <input
            type="num"
            id="card-number-4"
            className="input-cart-number"
            maxLength="4"
            onKeyPress={(e) => handleKeyPress(e,cardNumberRef4)}
            ref={cardNumberRef4}
            onChange={(e) => setCardNumber4(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="card-holder">Card holder</label>
          <input
            type="text"
            id="card-holder"
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </fieldset>
        <fieldset className="card-expire">
          <label htmlFor="expire-month">Expire date</label>
          <div className="select">
            <select
              id="expire-month"
              onChange={(e) => setExpairDate1(e.target.value)}
            >
              <option></option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="select">
            <select
              id="expire-year"
              onChange={(e) => setExpairDate2(e.target.value)}
            >
              <option></option>
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
              <option>2026</option>
              <option>2027</option>
              <option>2028</option>
              <option>2029</option>
              <option>2030</option>
              <option>2031</option>
              <option>2032</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="fieldset-ccv">
          <label htmlFor="card-ccv">CCV</label>
          <input type="text" id="card-ccv" maxLength="3" onChange={(e) => setCcv(e.target.value)} />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
