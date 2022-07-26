import { useParams } from "react-router-dom"
import { getInvoice } from "../data/data";
import { IInvoice } from "../types";

const Invoice = () => {
    let params = useParams(); 
  
    let invoice:IInvoice = getInvoice(parseInt(params.invoiceId!,10))!
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}

export default Invoice