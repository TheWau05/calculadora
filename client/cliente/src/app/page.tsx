"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Select } from "./components/select";
import { SelectItem } from "./components/selectitem";

export default function Home() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState<string | null>(null);

  const calculate = async () => {
    try {
      const response = await fetch("http://localhost:3000/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ num1, num2, operation })
      });
      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      setResult("denegado");
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center p-4 space-y-4">
          <div className="flex space-x-2">
            <Input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Número 1" />
            <Select value={operation} onValueChange={setOperation}>
              <SelectItem value="+">+</SelectItem>
              <SelectItem value="-">-</SelectItem>
              <SelectItem value="*">*</SelectItem>
              <SelectItem value="/">/</SelectItem>
            </Select>
            <Input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Número 2" />
          </div>
          <Button onClick={calculate}>Calcular</Button>
          <p className="text-lg font-bold">Resultado: {result !== null ? result : "—"}</p>
        </div>
      </main>
    </div>
  );
}
