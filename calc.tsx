import React, { useState } from "react";

type CalcProps = {
  setIsCalc: React.Dispatch<React.SetStateAction<boolean>>;
};

function Calc({ setIsCalc }: CalcProps) {
  const [amount, setAmount] = useState<number | "">(""); // 사용자가 입력한 금액
  const [result, setResult] = useState({
    amount: 0,
    fee: 0,
    amountWithoutFee: 0,
  }); // 계산된 결과

  // 수수료 계산 함수
  const calculateTransfer = (amount: number) => {
    const fee = 4.13 + amount * 0.005; // 기본 4.13유로 + 금액의 0.50%
    const amountWithoutFee = amount - fee; // 수수료 제외 금액

    return {
      amount: amount,
      fee: fee,
      amountWithoutFee: amountWithoutFee,
    };
  };

  // 금액 입력 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const inputAmount = parseFloat(inputValue); // Convert input to number

    // Only update state if the input is a valid number
    if (!isNaN(inputAmount)) {
      setAmount(inputAmount); // Update amount as a number
      const calculatedResult = calculateTransfer(inputAmount);
      setResult(calculatedResult);
    } else {
      setAmount(""); // Clear the amount if input is not a valid number
      setResult({ amount: 0, fee: 0, amountWithoutFee: 0 });
    }
  };

  const formatNumber = (num: any) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div style={{ height: "100%" }}>
      <h1 style={{ fontSize: "20px" }}>Калкулятор</h1>
      <div>
        <label>Сумма(€): </label>
        <input
          type="number"
          value={amount === "" ? "" : amount} // Handle empty string case
          onChange={handleChange}
          placeholder="введите сумму"
          style={{
            padding: "10px",
            fontSize: "16px",
            margin: "10px 0",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* 결과를 화면에 표시 */}
      <div style={{ fontSize: "15px" }}>
        <p>Сумма: €{formatNumber(result.amount.toFixed(2))}</p>
        <p>Коммисия: €{formatNumber(result.fee.toFixed(2))}</p>
        <p>
          на руки блять: €{formatNumber(result.amountWithoutFee.toFixed(2))}
        </p>
      </div>
      <button onClick={() => setIsCalc(false)}>Close</button>
    </div>
  );
}

export default Calc;
