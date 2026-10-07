
import React, {useState, useEffect} from "react";
import axios from "axios";
import VerticalBarChart from "./VerticalBarChart";
// import { holdings } from "../data/data";


const Holdings = () => {

    const [allHoldings, setAllHoldings] = useState([]);

    useEffect(() => {
    axios
        .get("http://localhost:3002/allHoldings", {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            setAllHoldings(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
}, []);

    const labels = allHoldings.map((stock)=>stock.name);

    const data = {
    labels: ["INFY", "TCS", "WIPRO", "ONGC", "M&M"],
    datasets: [
        {
            label: "Stock Price",
            data: [1555, 3194, 577, 1168, 779],
            backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
    ],
};

    return (
        <>
            <h3 className="title">
                Holdings ({allHoldings.length})
            </h3>

            <div className="order-table">
                <table>
                    <thead>
                        <tr>
                            <th>Instrument</th>
                            <th>Qty.</th>
                            <th>Avg. cost</th>
                            <th>LTP</th>
                            <th>Cur. val</th>
                            <th>P&L</th>
                            <th>Net chg.</th>
                            <th>Day chg.</th>
                        </tr>
                    </thead>

                    <tbody>
                        {allHoldings.map((stock, index) => {
                            const currValue =
                                stock.price * stock.qty;

                            const profit =
                                currValue - stock.avg * stock.qty;

                            const isProfit = profit >= 0;

                            const profClass = isProfit
                                ? "profit"
                                : "loss";

                            const dayClass = stock.isLoss
                                ? "loss"
                                : "profit";

                            return (
                                <tr
                                    key={index}
                                    
                                >
                                    <td>{stock.name}</td>
                                    <td>{stock.qty}</td>
                                    <td>
                                        {stock.avg.toFixed(2)}
                                    </td>
                                    <td>
                                        {stock.price.toFixed(2)}
                                    </td>
                                    <td>
                                        {currValue.toFixed(2)}
                                    </td>
                                    <td className={profClass}>
                                        {profit.toFixed(2)}
                                    </td>
                                    <td className={profClass}>
                                        {stock.net}
                                    </td>
                                    <td className={dayClass}>
                                        {stock.day}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div className="row">
                <div className="col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                </div>

                <div className="col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                </div>

                <div className="col">
                    <h5>
                        1,553.40{" "}
                        <small>(+5.20%)</small>
                    </h5>
                    <p>P&L</p>
                </div>
            </div>

            <VerticalBarChart data = {data}/>
        </>
    );
};

export default Holdings;