import React, { useState } from 'react'
import * as C from './styles'

const Form = () => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState(0);
    const [isExpense, setExpense] = useState(false);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Informe a descrição e o valor");
            return;
        } else if (amount < 1) {
            alert("O valor tem que ser positivo!");
            return;
        }
    };

    return (
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descrição</C.Label>
                    <C.Input type="text" value={desc} onChange={e => setDesc(e.target.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input 
                        value={amount} 
                        type="number"
                        onChange={e => setAmount(e.target.value)} />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input 
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={e => setExpense(!isExpense)} 
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input 
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={e => setExpense(!isExpense)} 
                    />
                    <C.Label htmlFor="rExpenses">Saída</C.Label>
                </C.RadioGroup>
                <C.Button onClick={handleSave}>ADICIONAR</C.Button>
            </C.Container>
        </>
    )
}

export default Form