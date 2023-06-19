import React, { useEffect } from "react";
import { FaCcVisa } from "react-icons/fa";
import { useStateManage } from "../../store/store";
const CreditCard = () => {
  const cardNumber1 = useStateManage((state) => state.cardNumber1);
  const cardNumber2 = useStateManage((state) => state.cardNumber2);
  const cardNumber3 = useStateManage((state) => state.cardNumber3);
  const cardNumber4 = useStateManage((state) => state.cardNumber4);
  const cardHolder = useStateManage((state) => state.cardHolder);
  const expairDate1 = useStateManage((state) => state.expairDate1);
  const expairDate2 = useStateManage((state) => state.expairDate2);
  const ccv = useStateManage((state) => state.ccv);
  return (
    <div class="credit-card-box">
      <div class="flip">
        <div class="front">
          <div class="chip"></div>
          <div class="logo">
            <FaCcVisa />
          </div>
          <div class="number">
            {cardNumber1 +
              " " +
              cardNumber2 +
              " " +
              cardNumber3 +
              " " +
              cardNumber4}
          </div>
          <div class="card-holder">
            <label>Card holder</label>
            <div>{cardHolder}</div>
          </div>
          <div class="card-expiration-date">
            <label>Expires</label>
            <div>{expairDate1  + "/" + expairDate2}</div>
          </div>
        </div>
        <div class="back">
          <div class="strip"></div>
          <div class="logo">
            <FaCcVisa />
          </div>
          <div class="ccv">
            <label>CCV</label>
            <div>{ccv}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
